const Result = require('../Models/Result.model');
const Student = require('../Models/Student.model');
const User = require('../Models/User.model');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;


exports.addOrUpdateResult = async (req, res) => {
  try {
    const { student: studentId, subjects, term } = req.body;

    if (!ObjectId.isValid(studentId)) {
      return res.status(400).json({ error: 'Invalid student ID' });
    }

    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    if (!subjects || !Array.isArray(subjects) || subjects.length === 0 || !term ) {
      return res.status(400).json({ error: 'All fields are required (student, subjects, term, year)' });
    }

    // Check for existing result for that student and term+year
    let existingResult = await Result.findOne({ student: studentId, term });

    if (existingResult) {
      existingResult.subjects = subjects; // Overwrite old subjects
      await existingResult.save();
      return res.status(200).json({ message: 'Result updated successfully' });
    }

    const newResult = new Result({
      student: studentId,
      term,
      subjects
    });

    await newResult.save();
    res.status(201).json({ message: 'Result saved successfully', result: newResult });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error while saving result' });
  }
};


exports.getResults = async (req, res) => {
  const { studentId } = req.params;
  console.log(studentId);
  if (!studentId) {
    return res.status(400).json({ error: 'Student ID is required' });
  }
  const student = await Student.findById(studentId);
  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }

  const results = await Result.find({ student: studentId });
  res.json(results);
};
