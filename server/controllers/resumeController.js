const pdfService = require('../services/pdfService');

const generateResumePdf = async (req, res) => {
  if (!req.body) {
    return res.status(400).send('No resume data provided.');
  }
  try {
    const resumeData = req.body;
    const pdfBuffer = await pdfService.generatePdf(resumeData);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
    res.send(pdfBuffer);
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).send('An error occurred while generating the PDF.');
  }
};

module.exports = {
  generateResumePdf,
};

