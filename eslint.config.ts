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

      // Custom rules
      'custom-rules/use-custom-logger': 'error',

      // Prevent direct res.redirect() usage — use res.safeRedirect() instead
      // to avoid open redirect vulnerabilities via protocol-relative URLs.
      'no-restricted-syntax': [
        'error',
        {
          selector: "CallExpression[callee.object.name='res'][callee.property.name='redirect']",
          message: 'Use res.safeRedirect() instead of res.redirect() to prevent open redirects.',
        },
      ],
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

  // Client-side files that run in the browser where the server-only logger is unavailable
  {
    files: [
      'src/search/components/hooks/useAISearchAutocomplete.ts',
      'src/search/components/hooks/useAISearchLocalStorageCache.ts',
    ],
    rules: {
      'custom-rules/use-custom-logger': 'off',
    },
  },

  // Disable custom logger rule for logger implementation itself
  {
    files: ['src/observability/logger/**/*.{ts,js}'],
    rules: {
      'custom-rules/use-custom-logger': 'off',
    },
  },

  // Directories not yet migrated to structured logger (see github/docs-engineering#5639)
  // Remove directories from this list as they are migrated
  {
    files: [
      'src/ai-tools/**/*.{ts,js}',
      'src/article-api/**/*.{ts,js}',
      'src/audit-logs/**/*.{ts,js}',
      'src/color-schemes/**/*.{ts,js}',
      'src/dev-toc/**/*.{ts,js}',
      'src/events/components/**/*.{ts,js}',
      'src/fixtures/**/*.{ts,js}',
      'src/journeys/**/*.{ts,js}',
      'src/metrics/**/*.{ts,js}',
      'src/observability/lib/handle-package-not-found.ts',
    ],
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
      // Client-side module that cannot use the server-only structured logger
      'src/languages/lib/translation-utils.ts',
      // CLI help script — chalk-colored terminal output, not application logging
      'src/rest/docs.ts',
    ],
    rules: {
      'custom-rules/use-custom-logger': 'off',
    },
  },

  // Allow namespace imports for @actions/core (ESM-only in v3.0.0)
  {
    files: [
      '.github/actions/**/*.ts',
      'src/workflows/**/*.ts',
      'src/links/scripts/**/*.ts',
      'src/content-linter/scripts/**/*.ts',
    ],
    rules: {
      'import/no-namespace': 'off',
    },
  },

  // Allow role="list" on list-style:none <ul> elements in these TOC components.
  // Chromium drops the implicit `list` role from the accessibility tree when
  // list-style:none is set, so NVDA/JAWS lose list semantics; role="list" restores
  // them and is not actually redundant here. See github/accessibility-audits#16815.
  {
    files: [
      'src/frame/components/ui/MiniTocs/MiniTocs.tsx',
      'src/landings/components/TableOfContents.tsx',
    ],
    rules: {
      'jsx-a11y/no-redundant-roles': ['error', { nav: ['navigation'], ul: ['list'] }],
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
