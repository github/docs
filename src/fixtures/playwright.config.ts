import { defineConfig } from '@playwright/test'

const CI = Boolean(JSON.parse(process.env.CI || 'false'))

const PLAYWRIGHT_START_SERVER_COMMAND =
  process.env.PLAYWRIGHT_START_SERVER_COMMAND || 'npm run start-for-playwright'

// Environment variables override the retry and timeout defaults. CI gets longer waits
// than local runs, so broken local tests fail quickly instead of waiting on CI-sized timeouts.
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

// See https://playwright.dev/docs/test-configuration.
export default defineConfig({
  testDir: './tests',
  timeout: TIMEOUT,
  expect: {
    // EXPECT_TIMEOUT controls waits such as await expect(locator).toHaveText().
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
  // See https://playwright.dev/docs/api/class-testoptions for shared project options.
  use: {
    actionTimeout: 0,
    baseURL: 'http://localhost:4000',

    // See https://playwright.dev/docs/trace-viewer for trace collection behavior.
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'Google Chrome',
      use: {
        channel: 'chromium',
        // The 1400px width avoids overlap between main content and the mini table of contents.
        viewport: {
          width: 1400,
          height: 720,
        },
      },
    },
  ],

  webServer: {
    command: PLAYWRIGHT_START_SERVER_COMMAND,
    port: 4000,
  },
})
