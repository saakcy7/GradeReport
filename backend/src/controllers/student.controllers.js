const Student = require('../Models/Student.model');
const User = require('../Models/User.model');

exports.addStudent = async (req, res) => {
  try {
    const { studentName, rollNumber, className, section } = req.body;

    // Ensure user is attached from authentication middleware
    const userId = req.user?._id;
    console.log(userId);
    if (!userId) {  
      return res.status(401).json({ error: 'User not authenticated.' });
    }

    if (!rollNumber || !className) {
      return res.status(400).json({ error: 'Required fields are missing.' });
    }

    // Fetch the user from DB
    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // Role check
    if (existingUser.role !== 'teacher') {
      return res.status(403).json({ error: 'Access denied. Only teachers can add students.' });
    }

    // Save student
    const student = new Student({
      studentName,
      rollNumber,
      className,
      section
    });

    await student.save();

    res.status(201).json({ message: 'Student added successfully.', student });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error. Could not add student.' });
  }
};



exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find(); // No populate needed
    res.status(200).json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error. Could not fetch students.' });
  }
};

