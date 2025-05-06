const express = require('express');
const router = express.Router();
const { generateReport } = require('../controllers/report.controllers');

router.get('/:studentId', generateReport);

module.exports = router;
