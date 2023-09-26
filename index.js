const express = require('express');
const puppeteer = require('puppeteer');
const puppeteer15 = require('puppeteer15');

const app = express();

app.get('/check/16', async (req, res) => {
  const browser = await puppeteer.connect({ browserWSEndpoint: 'ws://browserless:3000' });
  // const browser = await puppeteer.connect({ browserWSEndpoint: 'wss://chrome.browserless.io?token=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' });
  const page = await browser.newPage();

  await page.goto('http://www.google.de');

  res.json({
    status: 'success',
    statusCode: 200,
  });
});

app.get('/check/15', async (req, res) => {
  const browser = await puppeteer15.connect({ browserWSEndpoint: 'ws://browserless:3000' });
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
