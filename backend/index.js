const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./src/routes/auth.route');
const studentRoutes = require('./src/routes/student.route');
const resultRoutes = require('./src/routes/result.route');
const reportRoutes = require('./src/routes/report.route');


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/users', authRoutes);
app.use('/students', studentRoutes);
app.use('/results', resultRoutes);
app.use('/reports', reportRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
