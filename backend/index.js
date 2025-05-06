const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth.route');
const studentRoutes = require('./routes/student.route');
const resultRoutes = require('./routes/result.route');
const reportRoutes = require('./routes/report.route');


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.use('/users', authRoutes);
app.use('/students', studentRoutes);
app.use('/results', resultRoutes);
app.use('/reports', reportRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
