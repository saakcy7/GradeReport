const puppeteer = require('puppeteer');
const Result = require('../Models/Result.model');
const Student = require('../Models/Student.model');

// Grade Calculation Function
const calculateGrade = (percentage) => {
  if (percentage >= 90) return 'A+';
  if (percentage >= 80) return 'A';
  if (percentage >= 70) return 'B+';
  if (percentage >= 60) return 'B';
  if (percentage >= 50) return 'C+';
  if (percentage >= 40) return 'C';
  return 'F'; // Fail
};

exports.generateReport = async (req, res) => {
  try {
    const student = await Student.findById(req.params.studentId).populate('user');
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const results = await Result.find({ student: student._id });

    let totalMarksObtained = 0;
    let totalMaxMarks = 0;

    const htmlContent = `
      <html>
        <head>
          <style>
            body { font-family: Arial; padding: 20px; }
            h1 { text-align: center; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #000; padding: 8px; text-align: center; }
          </style>
        </head>
        <body>
          <h1>Report Card</h1>
          <p><strong>Name:</strong> ${student.user.name}</p>
          <p><strong>Roll Number:</strong> ${student.rollNumber}</p>
          <p><strong>Class:</strong> ${student.class} - ${student.section}</p>
          
          ${results.map(result => {
            let resultTotalMarks = 0;
            let resultMarksObtained = 0;
            
            return `
              <h2>${result.term} (${result.year})</h2>
              <table>
                <tr><th>Subject</th><th>Marks Obtained</th><th>Max Marks</th></tr>
                ${result.subjects.map(sub => {
                  resultMarksObtained += sub.marksObtained;
                  resultTotalMarks += sub.maxMarks;
                  return `
                    <tr>
                      <td>${sub.name}</td>
                      <td>${sub.marksObtained}</td>
                      <td>${sub.maxMarks}</td>
                    </tr>
                  `;
                }).join('')}
                <tr>
                  <td colspan="2"><strong>Total Marks</strong></td>
                  <td><strong>${resultMarksObtained} / ${resultTotalMarks}</strong></td>
                </tr>
                <tr>
                  <td colspan="2"><strong>Percentage</strong></td>
                  <td><strong>${((resultMarksObtained / resultTotalMarks) * 100).toFixed(2)}%</strong></td>
                </tr>
                <tr>
                  <td colspan="2"><strong>Grade</strong></td>
                  <td><strong>${calculateGrade((resultMarksObtained / resultTotalMarks) * 100)}</strong></td>
                </tr>
              </table>
            `;
          }).join('')}
          
        </body>
      </html>
    `;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    const pdf = await page.pdf({ format: 'A4' });
    await browser.close();

    res.set({ 'Content-Type': 'application/pdf' });
    res.send(pdf);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to generate report card' });
  }
};
