import walkSync from 'walk-sync'
import readFileAsync from '../../lib/readfile-async.js'

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
  'choosealicense.com',
  'renaming',
  'localization-support',
  'docs',
  'securitylab',
])

describe('check if a GitHub-owned private repository is referenced', () => {
  // This tests exists to make sure we don't reference private GitHub owned repositories
  // in our open-source repository. If this is failing, and the repo is public,
  // feel free to add it to the list above. Or if the feature requires referencing an
  // internal repo, add the feature to the ignore list below.

  const filenames = walkSync(process.cwd(), {
    directories: false,
    ignore: [
      '.git',
      '.github/actions-scripts/enterprise-server-issue-templates/*.md',
      '.github/review-template.md',
      '.github/workflows/sync-search-indices.yml',
      '.next',
      'contributing/search.md',
      'node_modules',
      'translations',
      'lib/rest/**/*.json',
      'lib/webhooks/**/*.json',
      'ownership.yaml',
      'docs/index.yaml',
      'lib/excluded-links.js',
      'content/early-access',
      'data/early-access',
      'data/release-notes', // These include links to internal issues in Liquid comments.
      '**/*.png', // Do not check images or font files.
      '**/*.jpg', // We could just put all of assets/* here, but that would prevent any
      '**/*.gif', // READMEs or other text-based files from being checked.
      '**/*.pdf',
      '**/*.ico',
      '**/*.woff',
      'script/deploy.js',
      'script/README.md',
    ],
  })

  test.each(filenames)('in file %s', async (filename) => {
    const file = await readFileAsync(filename, 'utf8')
    const matches = Array.from(file.matchAll(REPO_REGEXP))
      .map(([, repoName]) => repoName)
      .filter((repoName) => !ALLOW_LIST.has(repoName))
    expect(matches).toHaveLength(0)
  })
})
