const express = require('express');
const router = express.Router();
const { addStudent, getAllStudents } = require('../controllers/student.controllers');
const {isUser} = require('../middleware/authMiddleware');

router.post('/', isUser, addStudent);
router.get('/', getAllStudents);

module.exports = router;
