#!/usr/bin/env node

// [start-readme]
//
// This script adds labels to issues or pull requests.
//
// [end-readme]

import { program } from 'commander'
import label from '../../.github/actions/labeler/labeler.js'
import { getCoreInject } from '@/links/scripts/action-injections'
import github from '@/workflows/github.js'

program
  .description('Add labels to an issue or PR.')
  .option('--id <ID>', 'Id of the issue or PR to label')
  .option('--add-labels <LABELS>', 'Labels to add, comma separated if more than one')
  .option('--remove-labels <LABELS>', 'Labels to remove, comma separated if more than one')
  .option('--repo <REPOSITORY>', 'Which repository to apply labels to in owner/repo format')
  .option('--ignore-if-assigned', "Don't apply labels if there are assignees")
  .option('--ignore-if-labeled', "Don't apply labels if there are already labels applied")
  .parse(process.argv)

const opts = program.opts()
const octokit = github()

let addLabels = []
if (opts.addLabels) {
  addLabels = [...opts.addLabels.split(',')]
  addLabels = addLabels.map((l) => l.trim())
}

let removeLabels = []
if (opts.removeLabels) {
  removeLabels = [...opts.removeLabels.split(',')]
  removeLabels = removeLabels.map((l) => l.trim())
}

if (!process.env.GITHUB_TOKEN) {
  throw new Error('You must set the GITHUB_TOKEN environment variable.')
}

if (!opts.repo) {
  throw new Error('You must provide the repository that contains the issue with the --repo flag.')
}

if (!opts.id) {
  throw new Error(
    'You must provide the number of the issue where the labels will be applied with the --id flag',
  )
}

const [owner, repo] = opts.repo.split('/')
const issueNumber = opts.id

label(getCoreInject(opts.debug), octokit, {
  addLabels,
  removeLabels,
  repo,
  owner,
  issue_number: issueNumber,
  ignoreIfAssigned: opts.ignoreIfAssigned,
  ignoreIfLabeled: opts.ignoreIfLabeled,
})
