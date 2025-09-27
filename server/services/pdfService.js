const puppeteer = require('puppeteer');
const fs = require('fs/promises');
const path = require('path');
const ejs = require('ejs');

const generatePdf = async (data) => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();

  const templatePath = path.join(__dirname, '..', 'templates', 'classic.html');
  const templateHtml = await fs.readFile(templatePath, 'utf-8');
  const finalHtml = ejs.render(templateHtml, { data });

  await page.setContent(finalHtml, { waitUntil: 'networkidle0' });

  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' },
  });

  await browser.close();
  return pdfBuffer;
};

module.exports = {
  generatePdf,
};

