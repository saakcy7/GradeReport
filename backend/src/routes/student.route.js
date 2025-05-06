const express = require('express');
const router = express.Router();
const { addStudent, getAllStudents } = require('../controllers/student.controllers');

router.post('/', addStudent);
router.get('/', getAllStudents);

module.exports = router;
