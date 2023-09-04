const express = require('express');
const puppeteer = require('puppeteer');

const app = express();

app.get('/check', async (req, res) => {
  const browser = await puppeteer.connect({ browserWSEndpoint: 'ws://browserless:3000' });
  // const browser = await puppeteer.connect({ browserWSEndpoint: 'wss://chrome.browserless.io?token=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' });
  const page = await browser.newPage();

  await page.goto('http://www.google.de');

  res.json({
    status: 'success',
    statusCode: 200,
  });
});

app.listen(80, () => {
  console.info('Server is running on port 80');
});
