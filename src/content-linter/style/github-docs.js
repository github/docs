// Configuration for which rules should be included in automated weekly reports
export const reportingConfig = {
  // Always include all rules with these severities
  includeSeverities: ['error'],

  // Specific rules to include regardless of severity
  // Add rule names (short or long form) that should always be reported
  includeRules: [
    'GHD038', // expired-content - Content that has passed its expiration date
    'expired-content',
  ],

  // Specific rules to exclude from reports (overrides severity-based inclusion)
  // Add rule names here if you want to suppress them from reports
  excludeRules: [
    // Example: 'GHD030' // Uncomment to exclude code-fence-line-length warnings
    'british-english-quotes', // Exclude from reports but keep for pre-commit
  ],
}

const githubDocsConfig = {
  'link-punctuation': {
    // GHD001
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'internal-links-no-lang': {
    // GHD002
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'internal-links-slash': {
    // GHD003
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'image-file-kebab-case': {
    // GHD004
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'hardcoded-data-variable': {
    // GHD005
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'internal-links-old-version': {
    // GHD006
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'code-annotations': {
    // GHD007
    severity: 'error',
    'partial-markdown-files': false,
    'yml-files': false,
  },
  'early-access-references': {
    // GHD008
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'github-owned-action-references': {
    // GHD013
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'liquid-data-references-defined': {
    // GHD014
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'liquid-data-tag-format': {
    // GHD015
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'liquid-quoted-conditional-arg': {
    // GHD016
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'liquid-syntax': {
    // GHD018
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'liquid-if-tags': {
    // GHD019
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'liquid-ifversion-tags': {
    // GHD020
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'liquid-ifversion-versions': {
    // GHD022
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'yaml-scheduled-jobs': {
    // GHD021
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'code-fence-line-length': {
    // GHD030
    severity: 'warning',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'image-alt-text-exclude-words': {
    // GHD031
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'image-alt-text-end-punctuation': {
    // GHD032
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'incorrect-alt-text-length': {
    // GHD033
    severity: 'warning',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'list-first-word-capitalization': {
    // GHD034
    severity: 'warning',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'rai-reusable-usage': {
    // GHD035
    severity: 'error',
    'partial-markdown-files': true,
  },
  'image-no-gif': {
    // GHD036
    severity: 'error',
    'partial-markdown-files': true,
  },
  'expired-content': {
    // GHD038
    severity: 'warning',
    'partial-markdown-files': true,
  },
  'expiring-soon': {
    // GHD039
    severity: 'warning',
    'partial-markdown-files': true,
  },
  'table-liquid-versioning': {
    // GH040
    severity: 'error',
    'partial-markdown-files': true,
  },
  'third-party-action-pinning': {
    // GH041
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'liquid-tag-whitespace': {
    // GHD042
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'link-quotation': {
    // GHD043
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'octicon-aria-labels': {
    // GHD044
    severity: 'warning',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'code-annotation-comment-spacing': {
    // GHD045
    severity: 'warning',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'outdated-release-phase-terminology': {
    // GHD046
    severity: 'warning',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'table-column-integrity': {
    // GHD047
    severity: 'warning',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'british-english-quotes': {
    // GHD048
    severity: 'warning',
    precommitSeverity: 'warning', // Show warnings locally for writer awareness
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'note-warning-formatting': {
    // GHD049
    severity: 'warning',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'multiple-emphasis-patterns': {
    // GHD050
    severity: 'warning',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'header-content-requirement': {
    // GHD053
    severity: 'warning',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'third-party-actions-reusable': {
    // GHD054
    severity: 'warning',
    'partial-markdown-files': true,
    'yml-files': true,
  },
}

export const githubDocsFrontmatterConfig = {
  'frontmatter-early-access-references': {
    // GHD009
    severity: 'error',
    'partial-markdown-files': false,
    'yml-files': false,
  },
  'frontmatter-hidden-docs': {
    // GHD010
    severity: 'error',
    'partial-markdown-files': false,
    'yml-files': false,
  },
  'frontmatter-video-transcripts': {
    // GHD011
    severity: 'error',
    'partial-markdown-files': false,
    'yml-files': false,
  },
  'frontmatter-schema': {
    // GHD012
    severity: 'error',
    'partial-markdown-files': false,
    'yml-files': false,
  },
  'frontmatter-liquid-syntax': {
    // GHD017
    severity: 'error',
    'partial-markdown-files': false,
    'yml-files': false,
  },
  'liquid-ifversion-tags': {
    // GHD020
    severity: 'error',
    'partial-markdown-files': false,
  },
  'liquid-ifversion-versions': {
    // GHD022
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'link-quotation': {
    // GHD043
    severity: 'error',
    'partial-markdown-files': false,
  },
  'frontmatter-versions-whitespace': {
    // GHD051
    severity: 'warning',
    'partial-markdown-files': false,
    'yml-files': false,
  },
  'frontmatter-validation': {
    // GHD055
    severity: 'warning',
    'partial-markdown-files': false,
    'yml-files': false,
  },
}

// Configures rules from the `github/markdownlint-github` repo
// created by the accessibility team.
const githubMarkdownlintConfig = {
  'no-default-alt-text': {
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'no-generic-link-text': {
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
}

// Configures rules from the open-source Markdownlint extension
// search-replace:
// https://www.npmjs.com/package/markdownlint-rule-search-replace
export const searchReplaceConfig = {
  'search-replace': {
    rules: [
      {
        name: 'todocs-placeholder',
        message: 'Catch occurrences of TODOCS placeholder.',
        searchPattern: '/todocs/gi',
        searchScope: 'all',
        severity: 'error',
        precommitSeverity: 'warning',
        'partial-markdown-files': true,
        'yml-files': true,
        applyToFrontmatter: true, // Critical for content quality - prevents placeholders in titles, intros, etc.
      },
      {
        name: 'docs-domain',
        message: 'Catch occurrences of docs.github.com domain.',
        search: 'docs.github.com',
        searchScope: 'all',
        severity: 'error',
        'partial-markdown-files': true,
        'yml-files': true,
        applyToFrontmatter: true, // Should not appear in frontmatter
      },
      {
        name: 'help-domain',
        message: 'Catch occurrences of help.github.com domain.',
        search: 'help.github.com',
        searchScope: 'all',
        severity: 'error',
        'partial-markdown-files': true,
        'yml-files': true,
        applyToFrontmatter: true, // Should not appear in frontmatter
      },
      {
        name: 'developer-domain',
        message: 'Catch occurrences of developer.github.com domain.',
        // Do not match developer.github.com/changes or
        // developer.github.com/enterprise/[0-9] or
        // developer.github.com/enterprise/{{something}} (e.g. liquid).
        // There are occurrences that will likely always remain in the content.
        searchPattern: '/developer\\.github\\.com(?!\\/(changes|enterprise\\/([0-9]|{))).*/g',
        searchScope: 'all',
        severity: 'error',
        'partial-markdown-files': true,
        'yml-files': true,
        applyToFrontmatter: true, // Should not appear in frontmatter
      },
      {
        // Catches usage of old liquid data reusable syntax. For example:
        // {{ site.data.variables.product_releases }}
        name: 'deprecated liquid syntax: site.data',
        message: 'Catch occurrences of deprecated liquid data syntax.',
        searchPattern: '/{{\\s*?site\\.data\\.([a-zA-Z0-9-_]+(?:\\.[a-zA-Z0-9-_]+)+)\\s*?}}/g',
        replace: '{% data $1 %}',
        severity: 'error',
        'partial-markdown-files': true,
        'yml-files': true,
        applyToFrontmatter: true, // Can appear in frontmatter strings
      },
      {
        // Catches usage of old octicon variable syntax. For example:
        // - {{ octicon-plus }}
        // - {{ octicon-plus An example label }}
        name: 'deprecated liquid syntax: octicon-<icon-name>',
        message:
          'The octicon liquid syntax used is deprecated. Use this format instead `octicon "<octicon-name>" aria-label="<Octicon aria label>"`',
        searchPattern: '/{{\\s*?octicon-([a-z-]+)(\\s[\\w\\s\\d-]+)?\\s*?}}/g',
        severity: 'error',
        'partial-markdown-files': true,
        'yml-files': true,
        applyToFrontmatter: true, // Can appear in frontmatter strings
      },
    ],
  },
}

export const customConfig = {
  ...searchReplaceConfig,
  ...githubDocsConfig,
  ...githubMarkdownlintConfig,
  ...githubDocsFrontmatterConfig,
}
