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
    ],
  },
}
