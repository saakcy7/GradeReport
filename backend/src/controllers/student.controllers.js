const Student = require('../Models/Student.model'); // adjust path if needed

exports.addStudent = async (req, res) => {
  try {
    const { user, rollNumber, className, section } = req.body;

    // Check for required fields
    if (!user || !rollNumber || !className) {
      return res.status(400).json({ error: 'Required fields are missing.' });
    }

    // Optional: check if a student with this user or roll number already exists
    const existing = await Student.findOne({
      $or: [{ user }, { rollNumber }]
    });

    if (existing) {
      return res.status(400).json({ error: 'Student already exists.' });
    }

    // Create and save the student
    const student = new Student({
      user,
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
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find().populate('user', 'name email');
    res.status(200).json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error. Could not fetch students.' });
  }
};