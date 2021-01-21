// https://jestjs.io/docs/en/configuration.html

const isBrowser = process.env.BROWSER
const isLinkCheck = process.env.LINKCHECK
const isActions = Boolean(process.env.GITHUB_ACTIONS)

module.exports = {
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: -5
    }
  },
  preset: isBrowser
    ? 'jest-puppeteer'
    : undefined,
  reporters: isActions
    ? ['default', 'jest-github-actions-reporter']
    : ['default'],
  modulePathIgnorePatterns: [
    'assets/'
  ],
  setupFilesAfterEnv: ['jest-expect-message'],
  ...isBrowser ? {} : { testEnvironment: 'node' },
  testPathIgnorePatterns: [
    'node_modules/',
    'vendor/',
    'tests/helpers/',
    ...isBrowser ? [] : ['tests/browser/browser.js'],
    ...isLinkCheck ? [] : ['tests/links-and-images/links-and-images.js']
  ],
  testMatch: [
    '**/tests/**/*.js'
  ],
  testLocationInResults: isActions
}
