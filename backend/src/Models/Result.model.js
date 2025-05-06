const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  subject: String,
  marksObtained: Number,
  maxMarks: Number,
  term: String,
  year: Number
});

module.exports = mongoose.model('Result', resultSchema);
