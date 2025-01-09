import { chromium } from 'playwright';

(async () => {
  // URL for Docker Hub webpage
  const url = 'https://www.docker.com/products/docker-hub/';

  // Launch Chromium browser in headless mode for CI (headless: true for GitHub Actions environment)
  const browser = await chromium.launch({ headless: true });  // Set headless to true for CI
  const page = await browser.newPage();
  
  // Navigate to the Docker Hub webpage
  await page.goto(url);

  // Log the page title (for verification)
  const pageTitle = await page.title();
  console.log('Page loaded:', url);
  console.log('Page Title:', pageTitle);

  // Optionally, you can perform additional interactions or check the page content
  // For example, check if some text is present on the page
  const pageContent = await page.content();
  if (pageContent.includes('Docker Hub')) {
    console.log('Docker Hub is present on the page.');
  } else {
    console.log('Docker Hub not found on the page.');
  }

  // Take a screenshot of the page (saved as docker-hub-screenshot.png)
  await page.screenshot({ path: 'docker-hub-screenshot.png' });

  // Close the browser
  await browser.close();
})();
