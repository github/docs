#!/usr/bin/env node

// [start-readme]
//
// This script goes through all content and renders their HTML and from there
// can analyze for various flaws (e.g. broken links)
//
// [end-readme]

import fs from 'fs'
import path from 'path'
import { program, Option, InvalidArgumentError } from 'commander'
import renderedContentLinkChecker from './rendered-content-link-checker'
import { getCoreInject, getUploadArtifactInject } from '@/links/scripts/action-injections.js'
import { allVersions } from '@/versions/lib/all-versions.js'
import github from '@/workflows/github.js'

const STATIC_PREFIXES = {
  assets: path.resolve('assets'),
  public: path.resolve(path.join('src', 'graphql', 'data')),
}
// Sanity check that these are valid paths
Object.entries(STATIC_PREFIXES).forEach(([key, value]) => {
  if (!fs.existsSync(value)) {
    throw new Error(`Can't find static prefix (${key}): ${value}`)
  }
})

program
  .description('Analyze all checked content files, render them, and check for flaws.')
  .addOption(
    new Option(
      '-L, --level <LEVEL>',
      'Level of broken link to be marked as a flaw (default: "warning")',
    ).choices(['all', 'warning', 'critical']),
  )
  .option('-f, --filter <FILTER...>', 'Search filter(s) on the paths')
  .option(
    '-V, --version <VERSION...>',
    "Specific versions to only do (e.g. 'free-pro-team@latest')",
    (version) => {
      if (!(version in allVersions)) {
        for (const [key, data] of Object.entries(allVersions)) {
          if (version === data.miscVersionName) {
            return key
          }
        }
        throw new InvalidArgumentError(
          `'${version}' is not a recognized version. (not one of ${Object.keys(allVersions)})`,
        )
      }
      return version
    },
  )
  .option('-v, --verbose', 'Verbose outputs')
  .option(
    '--create-report',
    'Create a report issue in report-repository if there are flaws. (default: false)',
  )
  .option(
    '--report-repository <REPOSITORY>',
    'Repository to create issue in. (default: "github/docs-content")',
  )
  .option(
    '--link-reports',
    'If comments should be made on previous report and new report "linking" them. (default: false)',
  )
  .option(
    '--report-author <AUTHOR>',
    'Previous author of report PR for linking. (default: "docs-bot")',
  )
  .option(
    '--report-label <LABEL>',
    'Label to assign to report issue. (default: "broken link report")',
  )
  .option(
    '--comment-on-pr <URI>',
    'For debugging. Comment on a PR in form "owner/repo-name:pr_number"',
  )
  .option('--should-comment', 'Comments failed links on PR')
  .option('--check-anchors', "Validate links that start with a '#' too")
  .option('--check-images', 'Validate local images too')
  .option('--check-external-links', 'Check external URLs too')
  .option('--debug', "Loud about everything it's doing")
  .option('--patient', 'Give external link checking longer timeouts and more retries')
  .option('--random', 'Load pages in a random order (useful for debugging)')
  .option('--bail', 'Exit on the first possible flaw')
  .option('--verbose-url <BASE_URL>', 'Print the absolute URL if set')
  .option('--fail-on-flaw', 'Throw error on link flaws (default: false)')
  .option('--external-server-errors-as-warning', 'Treat server errors as warning (default: false)')
  .option('--max <number>', 'integer argument (default: none)', (value) => {
    const parsed = parseInt(value, 10)
    if (isNaN(parsed)) {
      throw new InvalidArgumentError('Not a number.')
    }
    return parsed
  })
  .option(
    '--list <file>.json',
    'JSON file containing an array of specific files to check (default: none)',
    (filePath) => {
      const resolvedPath = path.resolve(filePath)

      let stats
      try {
        stats = fs.statSync(resolvedPath)
      } catch (error) {
        // Ignore
      }

      if (!stats || !stats.isFile()) {
        throw new InvalidArgumentError('Not an existing file.')
      }

      return resolvedPath
    },
  )
  .arguments('[files...]')
  .parse(process.argv)

const opts = program.opts()
const files = program.args || opts.list
const octokit = github()

if (opts.list && Array.isArray(files) && files.length > 0) {
  throw new InvalidArgumentError('Cannot specify both --list and a file list.')
}

// For debugging PR comment. e.g. "github/howie-testing-ebonsignori:140"
if (opts.commentOnPr) {
  const [owner, repoPRNumber] = opts.commentOnPr.split('/')
  const [repo, number] = repoPRNumber.split(':')
  opts.shouldComment = true
  opts.actionContext = {
    owner,
    repo,
    pull_request: {
      number,
    },
  }
}

renderedContentLinkChecker(
  getCoreInject(opts.debug),
  octokit,
  getUploadArtifactInject(opts.debug),
  {
    ...opts,
    files,
  },
)
