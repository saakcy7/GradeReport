const Student = require('../Models/Student.model');
const User = require('../Models/User.model');

exports.addStudent = async (req, res) => {
  const existingUser = await User.findOne({ email });

if (existingUser) {
  return res.status(400).json({ error: "Email already registered" });
}
  const { name, email, password, rollNumber, class: cls, section } = req.body;

  const user = new User({ name, email, password, role: 'student' });
  await user.save();

  const student = new Student({ user: user._id, rollNumber, class: cls, section });
  await student.save();

  res.json({ message: 'Student created' });
};

exports.getAllStudents = async (req, res) => {
  const students = await Student.find().populate('user');
  res.json(students);
};
