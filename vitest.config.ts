export default {
  test: {
    // Default is `['**/*.{test,spec}.?(c|m)[jt]s?(x)']`
    include: ['**/*.{test}.?(c|m)[jt]s?(x)', 'src/**/tests/*.[jt]s', 'src/**/tests/**/*.[jt]s'],
    exclude: ['**/tests/playwright-*.spec.ts'],
    // Default is `!process.env.CI`
    watch: false,

    globalSetup: './src/tests/vitest.setup.ts',
  },
}
