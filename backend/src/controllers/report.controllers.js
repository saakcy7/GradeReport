const puppeteer = require('puppeteer');
const Result = require('../Models/Result.model');
const Student = require('../Models/Student.model');
const User = require('../Models/User.model');

exports.generateReport = async (req, res) => {
  const student = await Student.findById(req.params.studentId).populate('user');
  const results = await Result.find({ student: student._id });

  const htmlContent = `
    <html>
      <head><style>body { font-family: Arial; }</style></head>
      <body>
        <h1>Report Card</h1>
        <p>Name: ${student.user.name}</p>
        <p>Roll Number: ${student.rollNumber}</p>
        <p>Class: ${student.class} - ${student.section}</p>
        <table border="1" cellspacing="0" cellpadding="5">
          <tr><th>Subject</th><th>Marks Obtained</th><th>Max Marks</th></tr>
          ${results.map(r => `<tr><td>${r.subject}</td><td>${r.marksObtained}</td><td>${r.maxMarks}</td></tr>`).join('')}
        </table>
      </body>
    </html>
  `;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent);
  const pdf = await page.pdf({ format: 'A4' });
  await browser.close();

  res.set({ 'Content-Type': 'application/pdf' });
  res.send(pdf);
};
