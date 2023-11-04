// https://jestjs.io/docs/en/configuration.html

const isActions = Boolean(process.env.GITHUB_ACTIONS)

const reporters = ['default', 'github-actions']

export default {
  preset: 'ts-jest',
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: -5,
    },
  },
  moduleNameMapper: {
    // fix for "Unexpected token 'export'" error when running jest
    '@primer/behaviors': '<rootDir>/node_modules/@primer/behaviors/dist/cjs/index.js',
  },
  reporters,
  //  modulePathIgnorePatterns: ['assets/'],
  setupFilesAfterEnv: ['./jest.setup.js', 'jest-expect-message'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['node_modules/', 'vendor/', 'tests/fixtures/', 'tests/helpers/'],
  testMatch: ['**/tests/**/*.js'],
  testLocationInResults: isActions,
  globalSetup: './src/tests/scripts/start-server-for-jest.js',
  globalTeardown: './src/tests/scripts/kill-server-for-jest.js',
}
