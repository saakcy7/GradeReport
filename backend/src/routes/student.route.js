const express = require('express');
const router = express.Router();
const { addStudent, getStudents } = require('../controllers/student.controllers');
const {isUser} = require('../middleware/authMiddleware');

router.post('/', isUser, addStudent);
router.get('/', isUser, getStudents);

module.exports = router;
