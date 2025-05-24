const express = require('express');
const router = express.Router();
const { generateReport } = require('../controllers/report.controllers');
const { isUser } = require('../middleware/authMiddleware');

router.get('/:rollNumber',isUser, generateReport);

module.exports = router;
