const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  subjects: [
    {
      name: { type: String, required: true },
      marksObtained: { type: Number, required: true },
      maxMarks: { type: Number, required: true }
    }
  ],
  term: { type: String }, // e.g., "Midterm", "Final"
});


module.exports = mongoose.model('Result', resultSchema);
