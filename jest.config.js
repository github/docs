// https://jestjs.io/docs/en/configuration.html

const isBrowser = process.env.BROWSER
const isActions = Boolean(process.env.GITHUB_ACTIONS)
const testTranslation = Boolean(process.env.TEST_TRANSLATION)

let reporters = ['default']

if (testTranslation) {
  // only use custom reporter if we are linting translations
  reporters = ['<rootDir>/tests/helpers/lint-translation-reporter.js']
} else if (isActions) {
  reporters.push('jest-github-actions-reporter')
}

module.exports = {
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: -5,
    },
  },
  preset: isBrowser ? 'jest-puppeteer' : undefined,
  moduleNameMapper: {
    // fix for "Unexpected token 'export'" error when running jest
    '@primer/behaviors': '<rootDir>/node_modules/@primer/behaviors/dist/cjs/index.js',
  },
  reporters,
  modulePathIgnorePatterns: ['assets/'],
  setupFilesAfterEnv: ['./jest.setup.js', '@alex_neo/jest-expect-message'],
  ...(isBrowser ? {} : { testEnvironment: 'node' }),
  testPathIgnorePatterns: [
    'node_modules/',
    'vendor/',
    'tests/fixtures/',
    'tests/helpers/',
    'tests/javascripts/',
    ...(isBrowser ? [] : ['tests/browser/browser.js']),
  ],
  testMatch: ['**/tests/**/*.js'],
  testLocationInResults: isActions,
  globalSetup: './script/start-server-for-jest.mjs',
  globalTeardown: './script/kill-server-for-jest.mjs',
}
