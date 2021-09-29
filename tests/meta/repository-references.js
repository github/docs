import walkSync from 'walk-sync'
import readFileAsync from '../../lib/readfile-async.js'
import minimatch from 'minimatch'

/*
This test exists to make sure we don't reference private GitHub owned repositories
in our open-source repository.

If this test is failing...
(1) edit the file to remove the reference; or
(2) the repository is public,
    add the repository name to PUBLIC_REPOS; or
(3) the feature references a docs repository,
    add the file name to ALLOW_DOCS_PATHS.
*/

// These are a list of known public repositories in the GitHub organization
const PUBLIC_REPOS = new Set([
  'site-policy',
  'roadmap',
  'linguist',
  'super-linter',
  'backup-utils',
  'codeql-action-sync-tool',
  'codeql-action',
  'codeql-cli-binaries',
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
  'hello-world',
  'hello-world.git',
  'insights-releases',
  'help-docs-archived-enterprise-versions',
])

const ALLOW_DOCS_PATHS = [
  '.github/actions-scripts/enterprise-server-issue-templates/*.md',
  '.github/review-template.md',
  '.github/workflows/sync-search-indices.yml',
  'contributing/search.md',
  'lib/rest/**/*.json',
  'lib/webhooks/**/*.json',
  'ownership.yaml',
  'docs/index.yaml',
  'lib/excluded-links.js',
  'script/deploy.js',
  'script/README.md',
  '.github/workflows/hubber-contribution-help.yml',
]

const REPO_REGEXP = /\/\/github\.com\/github\/(?!docs[/'"\n])([\w-.]+)/gi

const IGNORE_PATHS = [
  '.git',
  '.next',
  'node_modules',
  'translations',
  '**/*.png', // Do not check images or font files.
  '**/*.jpg', // We could just put all of assets/* here, but that would prevent any
  '**/*.gif', // READMEs or other text-based files from being checked.
  '**/*.pdf',
  '**/*.ico',
  '**/*.woff',

  'content/early-access', // Not committed to public repository.
  'data/early-access', // Not committed to public repository.
  'data/release-notes', // These include links to many internal issues in Liquid comments.
]

describe('check if a GitHub-owned private repository is referenced', () => {
  const filenames = walkSync(process.cwd(), {
    directories: false,
    ignore: IGNORE_PATHS,
  })

  test.each(filenames)('in file %s', async (filename) => {
    const file = await readFileAsync(filename, 'utf8')
    const allowDocs = ALLOW_DOCS_PATHS.some((path) => minimatch(filename, path))
    const matches = Array.from(file.matchAll(REPO_REGEXP))
      .map(([, repoName]) => repoName)
      .filter((repoName) => !PUBLIC_REPOS.has(repoName))
      .filter((repoName) => !(allowDocs && repoName.startsWith('docs')))
    expect(
      matches,
      `Please edit ${filename} to remove references to ${matches.join(', ')}`
    ).toHaveLength(0)
  })
})
