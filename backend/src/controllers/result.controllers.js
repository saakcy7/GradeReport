const Result = require('../Models/Result.model');

exports.addOrUpdateResult = async (req, res) => {
  const { studentId, subject, marksObtained, maxMarks, term, year } = req.body;

  let result = await Result.findOne({ student: studentId, subject, term, year });
  if (result) {
    result.marksObtained = marksObtained;
    result.maxMarks = maxMarks;
  } else {
    result = new Result({ student: studentId, subject, marksObtained, maxMarks, term, year });
  }
  await result.save();
  res.json({ message: 'Result saved' });
};

exports.getResults = async (req, res) => {
  const { studentId } = req.params;
  const results = await Result.find({ student: studentId });
  res.json(results);
};
