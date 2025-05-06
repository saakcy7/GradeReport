const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rollNumber: String,
  class: String,
  section: String
});

module.exports = mongoose.model('Student', studentSchema);
