import fs from 'fs'

import walkSync from 'walk-sync'
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
  'stack-graphs',
  'codespaces-precache',
  'advisory-database',
  'browser-support',
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
  'script/README.md',
  'script/toggle-ghae-feature-flags.js',
  '.github/workflows/hubber-contribution-help.yml',
]

const REPO_REGEXP = /\/\/github\.com\/github\/(?!docs[/'"\n])([\w-.]+)/gi

const IGNORE_PATHS = [
  '.git',
  '.next',
  '.vscode', // Not part of the repo but could be for a developer locally
  'node_modules',
  'translations',
  '.linkinator',
  '**/*.png', // Do not check images or font files.
  '**/*.jpg', // We could just put all of assets/* here, but that would prevent any
  '**/*.gif', // READMEs or other text-based files from being checked.
  '**/*.pdf',
  '**/*.ico',
  '**/*.woff',
  '**/*.csv',
  '**/*.br', // E.g. the search index .json.br files
  '**/*.graphql', // E.g. data/graphql/ghec/schema.docs.graphql
  'package-lock.json', // At the time of writing it's 1.5MB!
  '.linkinator/full.log', // Only present if you've run linkinator
  'lib/search/popular-pages.json', // used to build search indexes
  'tests/**/*.json',

  'content/early-access', // Not committed to public repository.
  'data/early-access', // Not committed to public repository.
  'data/release-notes', // These include links to many internal issues in Liquid comments.
  'lib/redirects/.redirects-cache*',
]

describe('check if a GitHub-owned private repository is referenced', () => {
  const filenames = walkSync(process.cwd(), {
    directories: false,
    ignore: IGNORE_PATHS,
  }).filter(
    (filename) =>
      // Skip the large static json files because they're not code.
      !(
        filename.includes('static') &&
        (filename.endsWith('.json') || filename.endsWith('.json.br'))
      )
  )

  test.each(filenames)('in file %s', (filename) => {
    // When you're reading many small files, it's faster to do it
    // *synchronously* because the event-loop overhead is less since
    // the disk I/O is sufficiently small.
    const file = fs.readFileSync(filename, 'utf8')
    const matches = Array.from(file.matchAll(REPO_REGEXP))
      .map(([, repoName]) => repoName)
      .filter((repoName) => !PUBLIC_REPOS.has(repoName))
      .filter((repoName) => {
        return !(
          repoName.startsWith('docs') && ALLOW_DOCS_PATHS.some((path) => minimatch(filename, path))
        )
      })
    expect(
      matches,
      `Please edit ${filename} to remove references to ${matches.join(', ')}`
    ).toHaveLength(0)
  })
})
