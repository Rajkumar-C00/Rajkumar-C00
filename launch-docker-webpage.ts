import { chromium } from 'playwright';

(async () => {
  // URL for Docker Hub webpage
  const url = 'https://www.docker.com/products/docker-hub/';

  // Launch Chromium browser (headless: false for UI visibility)
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  // Navigate to the Docker Hub webpage
  await page.goto(url);

  // Optionally, you can perform interactions or take screenshots
  console.log('Page loaded:', url);
  
  // Take a screenshot of the page
  await page.screenshot({ path: 'docker-hub-screenshot.png' });

  // Close the browser
  await browser.close();
})();
