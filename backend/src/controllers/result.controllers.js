const Result = require('../Models/Result.model');
const Student = require('../Models/Student.model');
const User = require('../Models/User.model');

exports.addOrUpdateResult = async (req, res) => {
  try {
    const userId = req.user?._id;

    if (!userId) {
      return res.status(401).json({ error: 'User not authenticated.' });
    }

    // Fetch the user from DB
    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // Role check
    if (existingUser.role !== 'teacher') {
      return res.status(403).json({ error: 'Access denied. Only teachers can add results.' });
    }

const { rollNumber, subjects, term } = req.body;

// Validate input
if (!rollNumber || !subjects || !term || !Array.isArray(subjects) || subjects.length === 0) {
  return res.status(400).json({ error: 'All fields are required (rollNumber, subjects, term)' });
}


// Check for existing result
const existingResult = await Result.findOne({ rollNumber, term });
if (existingResult) {
  return res.status(400).json({ error: 'Result for this term already exists for the student.' });
}


    if (existingResult) {
      // Don't allow duplicate results
      return res.status(409).json({ error: 'Result for this student and term already exists.' });
    }

    // Create new result
    const newResult = new Result({
      rollNumber,  // use student._id reference here
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
  try {
    const userId = req.user?._id; // From auth middleware
    if (!userId) {
      return res.status(401).json({ error: 'User not authenticated.' });
    }
    const rollNumber = req.params.rollNumber; // Assuming rollNumber is passed as a URL parameter
    if (!rollNumber) {
      return res.status(400).json({ error: 'Roll number is required.' });
    }
    const student = await Student.findOne({ rollNumber}); // or match with linked ID
    console.log(student);

    if (!student) {
      return res.status(404).json({ error: 'Student record not found.' });
    }

    const results = await Result.find({ rollNumber: student.rollNumber });
    if (!results || results.length === 0) {
      return res.status(404).json({ error: 'No results found for this student.' });
    }
    res.status(200).json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error while fetching results.' });
  }
};

