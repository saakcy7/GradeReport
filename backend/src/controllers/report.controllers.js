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
    const userId = req.user?._id; // From auth middleware
    if (!userId) {
      return res.status(401).json({ error: 'User not authenticated.' });
    }
   const rollNumber = req.params.rollNumber;
    if (!rollNumber) {
      return res.status(400).json({ error: 'Roll number is required.' });
    }

    const student = await Student.findOne({ rollNumber });

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const results = await Result.find({ rollNumber: student.rollNumber });
    if (!results || results.length === 0) {
      return res.status(404).json({ error: 'No results found for this student' });
    }

    let totalMarksObtained = 0;
    let totalMaxMarks = 0;

   const htmlContent = `
<html>
<head>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    body {
      font-family: 'Roboto', Arial, sans-serif;
      padding: 30px;
      background: #f4f7fa;
      color: #333;
    }
    h1 {
      text-align: center;
      color: #2c3e50;
      margin-bottom: 10px;
      font-weight: 700;
      letter-spacing: 1.5px;
    }
    .student-info {
      max-width: 700px;
      margin: 0 auto 30px;
      padding: 20px;
      background: #ffffff;
      border-radius: 10px;
      box-shadow: 0 3px 15px rgba(0,0,0,0.1);
    }
    .student-info p {
      font-size: 18px;
      margin: 5px 0;
    }
    .report-section {
      max-width: 700px;
      margin: 0 auto 40px;
      background: #ffffff;
      border-radius: 10px;
      box-shadow: 0 3px 15px rgba(0,0,0,0.1);
      padding: 20px;
    }
    .report-section h2 {
      color: #2980b9;
      border-bottom: 2px solid #2980b9;
      padding-bottom: 5px;
      margin-bottom: 20px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 15px;
      font-size: 16px;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 12px 10px;
      text-align: center;
    }
    th {
      background-color: #2980b9;
      color: #fff;
      font-weight: 600;
      letter-spacing: 0.05em;
    }
    tr:nth-child(even) {
      background-color: #f9f9f9;
    }
    tr.total-row td {
      font-weight: 700;
      background-color: #ecf0f1;
    }
    .footer {
      max-width: 700px;
      margin: 50px auto 0;
      text-align: center;
      font-size: 14px;
      color: #999;
    }
  </style>
</head>
<body>

  <h1>Report Card</h1>

  <div class="student-info">
    <p><strong>Name:</strong> ${student.studentName}</p>
    <p><strong>Roll Number:</strong> ${student.rollNumber}</p>
    <p><strong>Class:</strong> ${student.class} - ${student.section}</p>
  </div>

  ${results.map(result => {
    let resultTotalMarks = 0;
    let resultMarksObtained = 0;

    const subjectsRows = result.subjects.map(sub => {
      resultMarksObtained += sub.marksObtained;
      resultTotalMarks += sub.maxMarks;
      return `
        <tr>
          <td>${sub.name}</td>
          <td>${sub.marksObtained}</td>
          <td>${sub.maxMarks}</td>
        </tr>
      `;
    }).join('');

    const percentage = (resultMarksObtained / resultTotalMarks) * 100;
    const grade = calculateGrade(percentage);

    return `
      <div class="report-section">
        <h2>${result.term} (${result.year})</h2>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Marks Obtained</th>
              <th>Max Marks</th>
            </tr>
          </thead>
          <tbody>
            ${subjectsRows}
            <tr class="total-row">
              <td>Total</td>
              <td>${resultMarksObtained}</td>
              <td>${resultTotalMarks}</td>
            </tr>
            <tr class="total-row">
              <td>Percentage</td>
              <td colspan="2">${percentage.toFixed(2)}%</td>
            </tr>
            <tr class="total-row">
              <td>Grade</td>
              <td colspan="2">${grade}</td>
            </tr>
          </tbody>
        </table>
      </div>
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
