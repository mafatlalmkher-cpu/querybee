// Playwright config for end-to-end tests of the actual single-file tool in a real browser.
// These tests load index.html, drive the UI, and (most importantly) fail if the
// page throws any console error or uncaught exception on load or during use, which is the class
// of bug that the Node unit tests cannot see.
//
// One-time setup, then run:
//   npm install --save-dev @playwright/test
//   npx playwright install chromium
//   npm run test:e2e
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './test/e2e',
  timeout: 30000,
  use: {
    headless: true
  },
  reporter: 'list'
});
