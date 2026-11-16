import { fileURLToPath } from 'node:url'

export default {
  test: {
    // Default is `['**/*.{test,spec}.?(c|m)[jt]s?(x)']`
    include: ['**/*.{test}.?(c|m)[jt]s?(x)', 'src/**/tests/*.[jt]s', 'src/**/tests/**/*.[jt]s'],
    exclude: ['**/tests/playwright-*.spec.ts'],
    // Default is `!process.env.CI`
    watch: false,
    // vitest doesn't account for tsconfig.json `paths` settings so we have to
    // manually set this alias to resolve our TS @-imports
    // No trailing slashes because Windows paths end in `\`, which stops Vite from stripping `/` off the key.
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },

    globalSetup: './src/tests/vitest.setup.ts',
    teardownTimeout: 500,
  },
  server: {
    deps: {
      // Externalize @horizon-rs/language-guesser to avoid import assertion issues with vitest 4
      external: ['@horizon-rs/language-guesser'],
    },
  },
}
