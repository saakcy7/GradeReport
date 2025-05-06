const express = require('express');
const router = express.Router();
const { addOrUpdateResult, getResults } = require('../controllers/result.controllers');

router.post('/', addOrUpdateResult);
router.get('/:studentId', getResults);

module.exports = router;
