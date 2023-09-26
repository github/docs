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
}

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

export const searchReplaceConfig = {
  'search-replace': {
    rules: [
      {
        name: 'todocs-placeholder',
        message: 'Catch occurrences of TODOCS placeholder.',
        searchPattern: '/todocs/gi',
        searchScope: 'all',
        severity: 'error',
        'severity-local': 'warning',
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
      {
        // Catches usage of string personal access token, which should
        // be replaced with a reusable data variable.
        name: 'personal access token reusable',
        message:
          'The string "personal access token" can be replaced with a variable. You should use one of the variables from data/variables/product.yml instead of the literal phrase(s):',
        searchPattern: '/personal access tokens?/gi',
        severity: 'warning',
        'partial-markdown-files': true,
      },
      {
        // Catches usage of GitHub-owned actions that don't use a
        // resuable.
        // GitHub-owned actions (e.g. actions/checkout@v2) should use a
        // reusable in examples.
        //
        // - actions/checkout@v2
        // - actions/delete-package-versions@v2
        // - actions/download-artifact@v2
        // - actions/upload-artifact@v2
        // - actions/github-script@v2
        // - actions/setup-dotnet@v2
        // - actions/setup-go@v2
        // - actions/setup-java@v2
        // - actions/setup-node@v2
        // - actions/setup-python@v2
        // - actions/stale@v2
        // - actions/cache@v2
        // - github/codeql-action/init@v2
        // - github/codeql-action/analyze@v2
        // - github/codeql-action/autobuild@v2
        // - github/codeql-action/upload-sarif@v2
        //
        name: 'GitHub-owned action references should use a reusable',
        message:
          'A GitHub-owned action is referenced, but should be replaced with a reusable from data/reusables/actions.',
        searchPattern:
          '/(actions\\/(checkout|delete-package-versions|download-artifact|upload-artifact|github-script|setup-dotnet|setup-go|setup-java|setup-node|setup-python|stale|cache)|github\\/codeql-action[/a-zA-Z-]*)/g',
        severity: 'warning',
        'partial-markdown-files': true,
      },
    ],
  },
}

export const customConfig = {
  ...searchReplaceConfig,
  ...githubDocsConfig,
  ...githubMarkdownlintConfig,
}
