import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Specify the directory where your test files are located
  testDir: './tests',

  // Global timeout for test execution
  timeout: 30 * 1000,

  // Configuration for expect() statements
  expect: {
    timeout: 5000,
  },

  // Run tests in parallel
  fullyParallel: true,

  // Fail the build on CI if test.only is accidentally left in the code
  forbidOnly: !!process.env.CI,

  // Retry tests on CI only
  retries: process.env.CI ? 2 : 0,

  // Configure the number of workers for parallel test execution
  workers: process.env.PLAYWRIGHT_WORKERS
    ? JSON.parse(process.env.PLAYWRIGHT_WORKERS)
    : process.env.CI
    ? 1
    : undefined,

  // Global settings for all projects
  use: {
    // Maximum time each action can take
    actionTimeout: 0,

    // Base URL for actions like page.goto('/')
    baseURL: 'http://localhost:4000',

    // Collect trace when retrying a failed test
    trace: 'on-first-retry',
  },

  // Configure projects for major browsers
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // Adjust viewport for Chromium
        viewport: {
          width: 1400,
          height: 720,
        },
      },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Google Chrome',
      use: {
        channel: 'chrome',
        // Adjust viewport for Chrome
        viewport: {
          width: 1400,
          height: 720,
        },
      },
    },
  ],

  // Configure local development server for tests
  webServer: {
    command: 'npm run start-for-playwright',
    port: 4000,
  },
});
      
