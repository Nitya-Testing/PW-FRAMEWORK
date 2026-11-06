import { defineConfig, devices } from '@playwright/test';
import * as os from 'node:os';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  ...(process.env.CI ? { workers: 1 } : {}),
  reporter: [
    ["list"],
    ["html" , {outputFolder: "reports/html-report" , open:"never"}],
    ["allure-playwright", {
        resultsDir: 'allure-results',
        environmentInfo: {
          Environment: process.env.RUN_ENV || 'QA',
          Browser: 'Chromium',
          OS: os.platform(),
          OS_Version: os.release(),
          Node_Version: process.version,
          Framework: 'Playwright'
        }
      }],
  ],


  use: {
    baseURL: 'https://naveenautomationlabs.com/',
    screenshot:'only-on-failure',
    video:'retain-on-failure',
    trace: 'on-first-retry',
    headless: true,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

});
