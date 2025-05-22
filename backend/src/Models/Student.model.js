const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  rollNumber: {
    type: String,
    required: true,
    unique: true,
  },
  className: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    default: '',
  }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
