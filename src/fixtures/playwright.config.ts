import { defineConfig } from '@playwright/test'

const CI = Boolean(JSON.parse(process.env.CI || 'false'))

const PLAYWRIGHT_START_SERVER_COMMAND =
  process.env.PLAYWRIGHT_START_SERVER_COMMAND || 'npm run start-for-playwright'

// All of these "patience" related settings follow a simple pattern;
// If the env var are explicitly set, use that value, otherwise, if
// we're in CI, be very patient, otherwise, be much less patient.
// The reasoning is that most engineer laptops are faster than CI
// and most importantly, if a test gets stuck it's probably not because
// of a slow CPU, but because the test is plainly wrong. The engineer
// working on it doesn't want to have to wait half a minute to find out
// they have a bug in a test action or an assertion.
const RETRIES = process.env.PLAYWRIGHT_RETRIES ? Number(process.env.PLAYWRIGHT_RETRIES) : CI ? 2 : 0
const TIMEOUT = process.env.PLAYWRIGHT_TIMEOUT
  ? Number(process.env.PLAYWRIGHT_TIMEOUT)
  : CI
    ? 30 * 1000
    : 5 * 1000
const EXPECT_TIMEOUT = process.env.PLAYWRIGHT_EXPECT_TIMEOUT
  ? Number(process.env.PLAYWRIGHT_EXPECT_TIMEOUT)
  : CI
    ? 5 * 1000
    : 2 * 1000

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  timeout: TIMEOUT,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: EXPECT_TIMEOUT,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: RETRIES,
  workers: process.env.PLAYWRIGHT_WORKERS
    ? JSON.parse(process.env.PLAYWRIGHT_WORKERS)
    : CI
      ? 1
      : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    baseURL: 'http://localhost:4000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  projects: [
    // {
    //   name: 'chromium',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     // need this wider width because of our slightly wider than normal xl
    //     // breakpoint that helps prevent overlapping main content with the minitoc
    //     viewport: {
    //       width: 1400,
    //       height: 720,
    //     },
    //   },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { channel: 'msedge' },
    // },
    {
      name: 'Google Chrome',
      use: {
        channel: 'chromium',
        viewport: {
          width: 1400,
          height: 720,
        },
      },
    },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  webServer: {
    command: PLAYWRIGHT_START_SERVER_COMMAND,
    port: 4000,
  },
})
