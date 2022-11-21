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
(3) the file references a docs repository,
    add the file name to ALLOW_DOCS_PATHS.
*/

// These are a list of known public repositories in the GitHub organization.
// The names below on their own, plus the same names ending with '.git', will be accepted.
// Do not include '.git' in the names below.
const PUBLIC_REPOS = new Set([
  'actions-oidc-gateway-example',
  'advisory-database',
  'backup-utils',
  'browser-support',
  'choosealicense.com',
  'codeql-action-sync-tool',
  'codeql-action',
  'codeql-cli-binaries',
  'codeql',
  'codespaces-precache',
  'codespaces-jupyter',
  'copilot.vim',
  'dependency-submission-toolkit',
  'dmca',
  'docs',
  'enterprise-releases',
  'explore',
  'feedback',
  'gh-net',
  'gh-actions-importer',
  'git-lfs',
  'git-sizer',
  'github-services',
  'gitignore',
  'gov-takedowns',
  'haikus-for-codespaces',
  'hello-world',
  'help-docs-archived-enterprise-versions',
  'hubot',
  'insights-releases',
  'janky',
  'linguist',
  'localization-support',
  'markup',
  'platform-samples',
  'renaming',
  'rest-api-description',
  'roadmap',
  'securitylab',
  'semantic',
  'ssh_data',
  'site-policy',
  'smimesign',
  'stack-graphs',
  'super-linter',
  'tweetsodium',
  'VisualStudio',
  'codespaces-getting-started-ml',
])

const ALLOW_DOCS_PATHS = [
  '.github/actions-scripts/enterprise-server-issue-templates/*.md',
  '.github/review-template.md',
  '.github/workflows/hubber-contribution-help.yml',
  '.github/workflows/sync-search-indices.yml',
  '.github/workflows/site-policy-reminder.yml',
  'contributing/search.md',
  'docs/index.yaml',
  'lib/excluded-links.js',
  'lib/rest/**/*.json',
  'lib/webhooks/**/*.json',
  'ownership.yaml',
  'script/README.md',
  'script/toggle-ghae-feature-flags.js',
]

// This regexp will capture the last segment of a GitHub repo name.
// E.g., it will capture `backup-utils.git` from `https://github.com/github/backup-utils.git`.
const REPO_REGEXP = /\/\/github\.com\/github\/([\w\-.]+)/gi

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
      // The referenced repo may or may not end with '.git', so ignore that extension.
      .map(([, repoName]) => repoName.replace(/\.git$/, ''))
      .filter((repoName) => !PUBLIC_REPOS.has(repoName))
      .filter((repoName) => {
        return !(
          repoName.startsWith('docs') && ALLOW_DOCS_PATHS.some((path) => minimatch(filename, path))
        )
      })
    expect(
      matches,
      `This test exists to make sure we don't reference private GitHub owned repositories in our open-source repository.

      In '${filename}' we found references to these private repositories: ${matches.join(', ')}

      You can:

      (1) edit the file to remove the repository reference; or
      (2) if the repository is public, add the repository name to the 'PUBLIC_REPOS' variable in this test file; or
      (3) if the file references a docs repository, add the file name to the 'ALLOW_DOCS_PATHS' variable in this test file.`
    ).toHaveLength(0)
  })
})
