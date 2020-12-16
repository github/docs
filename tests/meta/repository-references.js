const walkSync = require('walk-sync')
const fs = require('fs').promises

const REPO_REGEXP = /\/\/github\.com\/github\/(?!docs[/'"\n])([\w-.]+)/gi

// These are a list of known public repositories in the GitHub organization
const ALLOW_LIST = new Set([
  'site-policy',
  'roadmap',
  'linguist',
  'super-linter',
  'backup-utils',
  'codeql-action-sync-tool',
  'codeql-action',
  'platform-samples',
  'github-services',
  'explore',
  'enterprise-releases',
  'markup',
  'hubot',
  'VisualStudio',
  'codeql',
  'gitignore',
  'feedback',
  'semantic',
  'git-lfs',
  'git-sizer',
  'dmca',
  'gov-takedowns',
  'janky',
  'rest-api-description',
  'smimesign',
  'tweetsodium',
  'choosealicense.com'
])

describe('check for repository references', () => {
  const filenames = walkSync(process.cwd(), {
    directories: false,
    ignore: [
      '.algolia-cache',
      '.git',
      'dist',
      'node_modules',
      'translations',
      'lib/rest/**/*.json',
      'lib/webhooks/**/*.json',
      'ownership.yaml',
      'docs/index.yaml',
      'lib/excluded-links.js',
      'content/early-access',
      'data/early-access',
      'data/release-notes' // These include links to internal issues in Liquid comments
    ]
  })

  test.each(filenames)('in file %s', async (filename) => {
    const file = await fs.readFile(filename, 'utf8')
    const matches = Array.from(file.matchAll(REPO_REGEXP))
      .map(([, repoName]) => repoName)
      .filter(repoName => !ALLOW_LIST.has(repoName))
    expect(matches).toHaveLength(0)
  })
})
