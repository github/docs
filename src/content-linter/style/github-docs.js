const githubDocsConfig = {
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
    severity: 'error',
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
  'link-punctuation': {
    // GHD008
    severity: 'error',
    'partial-markdown-files': true,
  },
  'yaml-scheduled-jobs': {
    // GHD009
    severity: 'error',
    'partial-markdown-files': true,
  },
  'internal-links-old-version': {
    // GHD010
    severity: 'error',
    'partial-markdown-files': true,
  },
  'list-first-word-capitalization': {
    // GH011
    severity: 'warning',
    'partial-markdown-files': true,
  },
  'early-access-references': {
    // GH035
    severity: 'error',
    'partial-markdown-files': true,
  },
  'liquid-quoted-conditional-arg': {
    // LQ111
    severity: 'error',
    'partial-markdown-files': true,
  },
  'liquid-data-references-defined': {
    // LQ112
    severity: 'error',
    'partial-markdown-files': true,
  },
  'liquid-data-tag-format': {
    severity: 'error',
    'partial-markdown-files': true,
  },
  'hardcoded-data-variable': {
    severity: 'error',
    'partial-markdown-files': true,
  },
  'github-owned-action-references': {
    severity: 'error',
    'partial-markdown-files': true,
  },
  'annotate-frontmatter': {
    // GH040
    severity: 'error',
    'partial-markdown-files': false,
  },
  'liquid-if-tags': {
    // LQ114
    severity: 'error',
    'partial-markdown-files': true,
  },
  'liquid-ifversion-tags': {
    // LQ113
    severity: 'error',
    'partial-markdown-files': true,
  },
}

export const githubDocsFrontmatterConfig = {
  'frontmatter-hidden-docs': {
    // GHD034
    severity: 'error',
    'partial-markdown-files': false,
  },
  'frontmatter-video-transcripts': {
    // GH036
    severity: 'error',
    'partial-markdown-files': false,
  },
  'frontmatter-early-access-references': {
    // GH060
    severity: 'error',
    'partial-markdown-files': false,
  },
  'frontmatter-format': {
    severity: 'error',
    'partial-markdown-files': false,
  },
}

// Configures rules from the `github/markdownlint-github` repo
// created by the accessibility team.
const githubMarkdownlintConfig = {
  'no-default-alt-text': {
    severity: 'error',
    'partial-markdown-files': true,
  },
  'no-generic-link-text': {
    severity: 'error',
    'partial-markdown-files': true,
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
      },
      {
        name: 'docs-domain',
        message: 'Catch occurrences of docs.gitub.com domain.',
        search: 'docs.github.com',
        searchScope: 'all',
        severity: 'warning',
        'partial-markdown-files': true,
      },
      {
        name: 'help-domain',
        message: 'Catch occurrences of help.github.com domain.',
        search: 'help.github.com',
        searchScope: 'all',
        severity: 'error',
        'partial-markdown-files': true,
      },
      {
        name: 'preview-domain',
        message: 'Catch occurrences of preview.ghdocs.com domain.',
        search: 'preview.ghdocs.com',
        searchScope: 'all',
        severity: 'error',
        'partial-markdown-files': true,
      },
      {
        name: 'developer-domain',
        message: 'Catch occurrences of developer.github.com domain.',
        // Do not match developer.github.com/changes or
        // developer.github.com/enterprise/[0-9] or
        // developer.github.com/enterprise/{{something}} (e.g. liquid).
        // There are occurences that will likely always remain in the content.
        searchPattern: '/developer\\.github\\.com(?!\\/(changes|enterprise\\/([0-9]|{))).*/g',
        searchScope: 'all',
        severity: 'error',
        'partial-markdown-files': true,
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
      },
      {
        // Catches usage of old octicon variable syntax. For example:
        // - {{ octicon-plus }}
        // - {{ octicon-plus An example label }}
        name: 'deprecated liquid syntax: octicon-<icon-name>',
        message:
          'The octicon liquid syntax used is deprecated. Use this format instead {% octicon "<octicon-name>" aria-label="<Octicon aria label>" %}',
        searchPattern: '/{{\\s*?octicon-([a-z-]+)(\\s[\\w\\s\\d-]+)?\\s*?}}/g',
        severity: 'error',
        'partial-markdown-files': true,
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
