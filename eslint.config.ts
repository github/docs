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

  // Legacy files with @typescript-eslint/no-explicit-any violations (see github/docs-engineering#5797)
  {
    files: [
      'src/article-api/liquid-renderers/rest-tags.ts',
      'src/article-api/scripts/generate-api-docs.ts',
      'src/article-api/transformers/audit-logs-transformer.ts',
      'src/article-api/transformers/rest-transformer.ts',
      'src/automated-pipelines/tests/rendering.ts',
      'src/codeql-cli/scripts/convert-markdown-for-docs.ts',
      'src/content-linter/lib/helpers/get-lintable-yml.ts',
      'src/content-linter/lib/helpers/print-annotations.ts',
      'src/content-linter/lib/helpers/utils.ts',
      'src/content-linter/lib/init-test.ts',
      'src/content-linter/lib/linting-rules/code-annotations.ts',
      'src/content-linter/lib/linting-rules/index.ts',
      'src/content-linter/lib/linting-rules/internal-links-no-lang.ts',
      'src/content-linter/lib/linting-rules/journey-tracks-liquid.ts',
      'src/content-linter/lib/linting-rules/liquid-ifversion-versions.ts',
      'src/content-linter/lib/linting-rules/liquid-versioning.ts',
      'src/content-linter/lib/linting-rules/third-party-action-pinning.ts',
      'src/content-linter/scripts/lint-content.ts',
      'src/content-linter/scripts/pretty-print-results.ts',
      'src/content-linter/style/base.ts',
      'src/content-linter/tests/integration/lint-cli.ts',
      'src/content-linter/tests/learning-track-liquid.ts',
      'src/content-linter/tests/lint-files.ts',
      'src/content-linter/tests/lint-frontmatter-links.ts',
      'src/content-linter/tests/unit/table-column-integrity-simple.ts',
      'src/content-render/liquid/engine.ts',
      'src/content-render/liquid/ifversion.ts',
      'src/content-render/liquid/indented-data-reference.ts',
      'src/content-render/liquid/index.ts',
      'src/content-render/liquid/octicon.ts',
      'src/content-render/scripts/add-content-type.ts',
      'src/content-render/scripts/liquid-tags.ts',
      'src/content-render/scripts/move-by-content-type.ts',
      'src/content-render/scripts/move-content.ts',
      'src/content-render/tests/data.ts',
      'src/content-render/tests/link-error-line-numbers.ts',
      'src/content-render/unified/annotate.ts',
      'src/content-render/unified/index.ts',
      'src/content-render/unified/module-types.d.ts',
      'src/content-render/unified/rewrite-local-links.ts',
      'src/data-directory/lib/data-directory.ts',
      'src/data-directory/lib/data-schemas/learning-tracks.ts',
      'src/data-directory/lib/get-data.ts',
      'src/data-directory/scripts/find-orphaned-features/find.ts',
      'src/early-access/scripts/migrate-early-access-product.ts',
      'src/early-access/scripts/what-docs-early-access-branch.ts',
      'src/fixtures/tests/categories-and-subcategory.ts',
      'src/fixtures/tests/guides.ts',
      'src/fixtures/tests/liquid.ts',
      'src/fixtures/tests/markdown.ts',
      'src/fixtures/tests/translations.ts',
      'src/frame/components/context/ArticleContext.tsx',
      'src/frame/components/context/CategoryLandingContext.tsx',
      'src/frame/components/context/MainContext.tsx',
      'src/frame/components/context/TocLandingContext.tsx',
      'src/frame/lib/create-tree.ts',
      'src/frame/lib/frontmatter.ts',
      'src/frame/lib/page-data.ts',
      'src/frame/lib/page.ts',
      'src/frame/lib/read-frontmatter.ts',
      'src/frame/middleware/find-page.ts',
      'src/frame/middleware/resolve-carousels.ts',
      'src/frame/tests/page.ts',
      'src/frame/tests/read-frontmatter.ts',
      'src/frame/tests/server.ts',
      'src/ghes-releases/scripts/deprecate/update-content.ts',
      'src/github-apps/lib/index.ts',
      'src/graphql/lib/index.ts',
      'src/graphql/pages/reference.tsx',
      'src/graphql/scripts/build-changelog.ts',
      'src/graphql/scripts/utils/process-previews.ts',
      'src/graphql/scripts/utils/process-schemas.ts',
      'src/graphql/scripts/utils/schema-helpers.ts',
      'src/graphql/tests/validate-schema.ts',
      'src/journeys/lib/journey-path-resolver.ts',
      'src/journeys/middleware/journey-track.ts',
      'src/landings/components/CookBookFilter.tsx',
      'src/landings/components/ProductGuidesContext.tsx',
      'src/landings/components/ProductLandingContext.tsx',
      'src/landings/components/SidebarProduct.tsx',
      'src/landings/pages/home.tsx',
      'src/landings/pages/product.tsx',
      'src/languages/lib/correct-translation-content.ts',
      'src/languages/lib/render-with-fallback.ts',
      'src/languages/lib/translation-utils.ts',
      'src/learning-track/lib/process-learning-tracks.ts',
      'src/links/lib/update-internal-links.ts',
      'src/links/scripts/check-github-github-links.ts',
      'src/links/scripts/update-internal-links.ts',
      'src/links/tests/extract-links.ts',
      'src/pages/_error.tsx',
      'src/products/tests/get-product-groups.ts',
      'src/redirects/middleware/handle-redirects.ts',
      'src/rest/components/get-rest-code-samples.ts',
      'src/rest/lib/index.ts',
      'src/rest/pages/category.tsx',
      'src/rest/pages/subcategory.tsx',
      'src/rest/scripts/utils/create-rest-examples.ts',
      'src/rest/scripts/utils/get-operations.ts',
      'src/rest/scripts/utils/inject-models-schema.ts',
      'src/rest/scripts/utils/operation.ts',
      'src/rest/scripts/utils/sync.ts',
      'src/rest/scripts/utils/update-markdown.ts',
      'src/rest/tests/get-rest-code-samples-2.ts',
      'src/rest/tests/get-rest-code-samples.ts',
      'src/rest/tests/openapi-schema.ts',
      'src/rest/tests/rendering.ts',
      'src/search/components/hooks/useAISearchAutocomplete.ts',
      'src/search/components/hooks/useAISearchLocalStorageCache.ts',
      'src/search/components/input/AskAIResults.tsx',
      'src/search/components/input/SearchOverlay.tsx',
      'src/search/lib/get-elasticsearch-results/ai-search-autocomplete.ts',
      'src/search/lib/get-elasticsearch-results/general-search.ts',
      'src/search/lib/routes/combined-search-route.ts',
      'src/search/lib/search-request-params/get-search-from-request-params.ts',
      'src/search/lib/search-request-params/search-params-objects.ts',
      'src/search/lib/search-request-params/types.ts',
      'src/search/middleware/search-routes.ts',
      'src/search/scripts/index/index-cli.ts',
      'src/search/scripts/index/utils/indexing-elasticsearch-utils.ts',
      'src/search/scripts/scrape/lib/parse-page-sections-into-records.ts',
      'src/tests/helpers/check-url.ts',
      'src/tests/helpers/e2etest.ts',
      'src/tests/scripts/copy-fixture-data.ts',
      'src/tests/vitest.setup.ts',
      'src/types/github__markdownlint-github.d.ts',
      'src/types/markdownlint-lib-rules.d.ts',
      'src/types/markdownlint-rule-helpers.d.ts',
      'src/types/markdownlint-rule-search-replace.d.ts',
      'src/types/primer__octicons.d.ts',
      'src/versions/scripts/update-versioning-in-files.ts',
      'src/versions/scripts/use-short-versions.ts',
      'src/webhooks/lib/index.ts',
      'src/webhooks/scripts/webhook.ts',
      'src/workflows/content-changes-table-comment.ts',
      'src/workflows/fr-add-docs-reviewers-requests.ts',
      'src/workflows/git-utils.ts',
      'src/workflows/projects.ts',
      'src/workflows/tests/actions-workflows.ts',
    ],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
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
