const express = require('express');
const router = express.Router();
const { addOrUpdateResult, getResults } = require('../controllers/result.controllers');
const { isUser } = require('../middleware/authMiddleware');

router.post('/',isUser, addOrUpdateResult);
router.get('/:rollNumber',isUser, getResults);

module.exports = router;
