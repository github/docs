export default {
  test: {
    // Default is `['**/*.{test,spec}.?(c|m)[jt]s?(x)']`
    include: ['**/*.{test}.?(c|m)[jt]s?(x)', 'src/**/tests/*.[jt]s', 'src/**/tests/**/*.[jt]s'],
    exclude: ['**/tests/playwright-*.spec.ts'],
    // Default is `!process.env.CI`
    watch: false,
    // vitest doesn't account for tsconfig.json `paths` settings so we have to
    // manually set this alias to resolve our TS @-imports
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },

    globalSetup: './src/tests/vitest.setup.ts',
  },
}
