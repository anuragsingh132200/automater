const puppeteer = require('puppeteer');

(async () => {
  // Launch a new browser instance
  const browser = await puppeteer.launch({ headless: false }); // headless: false opens a visible browser window
  const page = await browser.newPage();
  
  // Navigate to a website
  await page.goto('https://example.com');

  // Take a screenshot
  await page.screenshot({ path: 'example.png' });

  // Perform other actions as needed
  // For example, click a button, fill a form, etc.
  // await page.click('selector');
  // await page.type('selector', 'text');

  // Close the browser
  await browser.close();
})();
