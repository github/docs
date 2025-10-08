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

export default [
  // JavaScript and MJS files configuration
  {
    files: ['**/*.{js,mjs}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.commonjs,
        ...globals.es2020,
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
    },
    rules: {
      // ESLint recommended rules
      ...js.configs.recommended.rules,

      // GitHub plugin recommended rules
      ...github.configs.recommended.rules,

      // Import plugin error rules
      ...importPlugin.configs.errors.rules,

      // JavaScript-specific overrides
      'import/no-extraneous-dependencies': [
        'error',
        {
          packageDir: '.',
        },
      ],
      'import/extensions': 'off',
      'no-console': 'off',
      camelcase: 'off',
      'no-shadow': 'off',
      'prefer-template': 'off',
      'no-constant-condition': 'off',
      'no-unused-vars': 'off',
      'import/no-named-as-default-member': 'off',
      'one-var': 'off',
      'import/no-namespace': 'off',
      'import/no-anonymous-default-export': 'off',
      'object-shorthand': 'off',
      'no-empty': 'off',
      'prefer-const': 'off',
      'import/no-named-as-default': 'off',
      'no-useless-concat': 'off',
      'func-style': 'off',

      // Disable GitHub plugin rules that were disabled in original config
      'github/array-foreach': 'off',
      'github/no-then': 'off',

      // Disable rules that might not exist or cause issues initially
      'i18n-text/no-en': 'off',
      'filenames/match-regex': 'off',
      'eslint-comments/no-use': 'off',
      'eslint-comments/no-unused-disable': 'off',
      'eslint-comments/no-unlimited-disable': 'off',

      // Disable new ESLint 9 rules that are causing issues
      'no-constant-binary-expression': 'off',
    },
  },

  // TypeScript and TSX files configuration
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

      // TypeScript-specific overrides
      'import/no-extraneous-dependencies': [
        'error',
        {
          packageDir: '.',
        },
      ],
      'import/extensions': 'off',
      'no-console': 'off',
      camelcase: 'off',
      'no-shadow': 'off',
      'prefer-template': 'off',
      'no-constant-condition': 'off',
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'no-use-before-define': 'off',
      'no-redeclare': 'off', // Allow function overloads in TypeScript
      'import/no-named-as-default-member': 'off',
      'one-var': 'off',
      'import/no-namespace': 'off',
      'import/no-anonymous-default-export': 'off',
      'object-shorthand': 'off',
      'no-empty': 'off',
      'prefer-const': 'off',
      'import/no-named-as-default': 'off',
      'no-useless-concat': 'off',
      'func-style': 'off',

      // TypeScript ESLint specific rules
      '@typescript-eslint/no-unused-vars': 'error',

      // Disable GitHub plugin rules that were disabled in original config
      'github/array-foreach': 'off',
      'github/no-then': 'off',

      // Disable rules that might not exist or cause issues initially
      'i18n-text/no-en': 'off',
      'filenames/match-regex': 'off',
      'eslint-comments/no-use': 'off',
      'eslint-comments/no-unused-disable': 'off',
      'eslint-comments/no-unlimited-disable': 'off',

      // Disable new ESLint 9 rules that are causing issues
      'no-constant-binary-expression': 'off',

      // Disable stricter TypeScript rules initially
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-wrapper-object-types': 'off',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/prefer-as-const': 'off',

      // React/JSX specific rules
      'jsx-a11y/no-onchange': 'off',
    },
  },

  // Ignored patterns
  {
    ignores: [
      'tmp/*',
      '.next/',
      'src/bookmarklets/*',
      'rest-api-description/',
      'docs-internal-data/',
      'src/code-scanning/scripts/generate-code-scanning-query-list.ts',
    ],
  },

  // Prettier config (should be last to override formatting rules)
  prettier,
]
