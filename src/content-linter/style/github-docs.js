export const githubDocsConfig = {
  'code-fence-line-length': {
    // GHD001
    severity: 'warning',
    'partial-markdown-files': true,
  },
  'image-alt-text-end-punctuation': {
    // GHD002
    severity: 'error',
    'partial-markdown-files': true,
  },
  'incorrect-alt-text-length': {
    // GHD003
    severity: 'warning',
    'partial-markdown-files': true,
  },
  'image-file-kebab': {
    // GHD004
    severity: 'warning',
    'partial-markdown-files': true,
  },
  'internal-links-lang': {
    // GHD005
    severity: 'error',
    'partial-markdown-files': true,
  },
  'internal-links-slash': {
    // GHD006
    severity: 'error',
    'partial-markdown-files': true,
  },
  'image-alt-text-exclude-words': {
    // GHD007
    severity: 'error',
    'partial-markdown-files': true,
  },
  'internal-link-punctuation': {
    // GHD008
    severity: 'warning',
    'partial-markdown-files': true,
  },
  'list-first-word-capitalization': {
    // GH011
    severity: 'warning',
    'partial-markdown-files': true,
  },
  'no-github-docs-domains': {
    // GHD020
    severity: 'error',
    'partial-markdown-files': true,
  },
  'search-replace': {
    severity: 'error',
    'severity-local-env': 'warning',
    'partial-markdown-files': true,
    rules: [
      {
        name: 'todocs-placeholder',
        message: 'Catch occurrences of TODOCS placeholder.',
        search: 'TODOCS',
        searchScope: 'all',
      },
      {
        name: 'docs-domain',
        message: 'Catch occurrences of docs.gitub.com domain.',
        search: 'docs.gitub.com',
        searchScope: 'all',
      },
      {
        name: 'help-domain',
        message: 'Catch occurrences of help.github.com domain.',
        search: 'help.github.com',
        searchScope: 'all',
      },
      {
        name: 'preview-domain',
        message: 'Catch occurrences of preview.ghdocs.com domain.',
        search: 'preview.ghdocs.com',
        searchScope: 'all',
      },
      {
        name: 'developer-domain',
        message: 'Catch occurrences of developer.github.com domain.',
        // Do not match developer.github.com/changes or
        // developer.github.com/enterprise/[0-9] or
        // developer.github.com/enterprise/{{something}} (e.g. liquid).
        // There are occurences that will likely always remain in the content.
        searchPattern: '/developer.github.com(?!/(changes|enterprise/([0-9]|{))).*/g',
        searchScope: 'all',
      },
    ],
  },
}
