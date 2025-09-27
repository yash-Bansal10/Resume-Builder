const express = require('express');
const { generateResumePdf } = require('../controllers/resumeController');
const router = express.Router();

// Defines the POST endpoint for generating a resume PDF
// POST http://localhost:5000/api/resumes/generate
router.post('/generate', generateResumePdf);

module.exports = router;

