const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  rollNumber: { type: String, required: true },
  subjects: [
    {
      name: { type: String, required: true },
      marksObtained: { type: Number, required: true },
      maxMarks: { type: Number, required: true }
    }
  ],
  term: { type: String }, // e.g., "Midterm", "Final"
  year: { type: Number }, // e.g., 2023
});


module.exports = mongoose.model('Result', resultSchema);
