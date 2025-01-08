const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();  // Launch Chromium browser
  const page = await browser.newPage();  // Open a new browser page
  await page.goto('https://example.com');  // Go to a URL
  await page.screenshot({ path: 'example.png' });  // Take a screenshot
  await browser.close();  // Close the browser
})();
