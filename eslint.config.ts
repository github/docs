import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import github from 'eslint-plugin-github'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import primerReact from 'eslint-plugin-primer-react'
import eslintComments from 'eslint-plugin-eslint-comments'
import i18nText from 'eslint-plugin-i18n-text'
import filenames from 'eslint-plugin-filenames'
import noOnlyTests from 'eslint-plugin-no-only-tests'
import prettierPlugin from 'eslint-plugin-prettier'
import prettier from 'eslint-config-prettier'
import globals from 'globals'
import customRules from 'eslint-plugin-custom-rules'

export default [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.commonjs,
        ...globals.es2020,
        // Fetch API types for TypeScript
        RequestInit: 'readonly',
        RequestInfo: 'readonly',
        HeadersInit: 'readonly',
        JSX: 'readonly',
        // Node.js types for TypeScript
        BufferEncoding: 'readonly',
        NodeJS: 'readonly',
        // cheerio namespace for TypeScript
        cheerio: 'readonly',
      },
      parserOptions: {
        requireConfigFile: false,
      },
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    plugins: {
      github,
      import: importPlugin,
      'eslint-comments': eslintComments,
      'i18n-text': i18nText,
      filenames,
      'no-only-tests': noOnlyTests,
      prettier: prettierPlugin,
      '@typescript-eslint': tseslint,
      'primer-react': primerReact,
      'jsx-a11y': jsxA11y,
      'custom-rules': customRules,
    },
    rules: {
      // ESLint recommended rules
      ...js.configs.recommended.rules,

      // GitHub plugin recommended rules
      ...github.configs.recommended.rules,

      // Import plugin error rules
      ...importPlugin.configs.errors.rules,

      // TypeScript ESLint recommended rules
      ...tseslint.configs.recommended.rules,

      // Primer React recommended rules
      ...primerReact.configs.recommended.rules,

      // JSX A11y recommended rules
      ...jsxA11y.configs.recommended.rules,

      // Overrides
      'import/no-extraneous-dependencies': [
        'error',
        {
          packageDir: '.',
        },
      ],
      'import/extensions': ['error', { json: 'always' }],
      'no-empty': ['error', { allowEmptyCatch: true }],
      '@typescript-eslint/no-unused-vars': 'error',
      'prefer-const': ['error', { destructuring: 'all' }],

      // Rules that must be disabled
      'no-redeclare': 'off', // Allow function overloads in TypeScript
      'i18n-text/no-en': 'off', // This rule causes eslint to not run at all
      'filenames/match-regex': 'off', // This rule causes eslint to not run at all
      camelcase: 'off', // Many gh apis use underscores, 600+ uses

      // Disabled rules to review
      'no-console': 'off', // 800+
      '@typescript-eslint/no-explicit-any': 'off',

      // Custom rules (disabled by default for now)
      'custom-rules/use-custom-logger': 'off',
    },
  },

  // Configuration for eslint-rules directory (CommonJS JavaScript files)
  {
    files: ['src/eslint-rules/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: {
        ...globals.node,
        ...globals.commonjs,
        ...globals.es2020,
      },
    },
    plugins: {
      github,
      import: importPlugin,
      'eslint-comments': eslintComments,
      filenames,
      'no-only-tests': noOnlyTests,
      prettier: prettierPlugin,
    },
    rules: {
      // ESLint recommended rules
      ...js.configs.recommended.rules,

      // GitHub plugin recommended rules
      ...github.configs.recommended.rules,

      // Import plugin error rules
      ...importPlugin.configs.errors.rules,

      // Allow CommonJS in eslint rules
      'import/no-commonjs': 'off',

      // Overrides
      'import/extensions': ['error', { json: 'always' }],
      'no-empty': ['error', { allowEmptyCatch: true }],
      'prefer-const': ['error', { destructuring: 'all' }],

      // Disabled rules
      'i18n-text/no-en': 'off',
      'filenames/match-regex': 'off',
      camelcase: 'off',
      'no-console': 'off',
    },
  },

  // Disable custom logger rule for logger implementation itself
  {
    files: ['src/observability/logger/**/*.{ts,js}'],
    rules: {
      'custom-rules/use-custom-logger': 'off',
    },
  },

  // Override for scripts, tests, workflows, content-linter, and React files (disable custom logger rule)
  {
    files: [
      '**/scripts/**/*.{ts,js}',
      '**/tests/**/*.{ts,js}',
      'src/workflows/**/*.{ts,js}',
      'src/content-linter/**/*.{ts,js}',
      '**/*.{tsx,jsx}',
    ],
    rules: {
      'custom-rules/use-custom-logger': 'off',
    },
  },

  // Ignored patterns
  // CodeQL scripts included because cocofix is install manually by the workflow
  {
    ignores: [
      'tmp/*',
      '.next/',
      'rest-api-description/',
      'docs-internal-data/',
      'src/codeql-queries/scripts/generate-code-scanning-query-list.ts',
      'src/codeql-queries/scripts/generate-code-quality-query-list.ts',
      'next-env.d.ts',
    ],
  },

  // Prettier config (should be last to override formatting rules)
  prettier,
]
