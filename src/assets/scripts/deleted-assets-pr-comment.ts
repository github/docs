#!/usr/bin/env node

import * as github from '@actions/github'
import core from '@actions/core'

const { GITHUB_TOKEN } = process.env
const context = github.context

if (!GITHUB_TOKEN) {
  throw new Error(`GITHUB_TOKEN environment variable not set`)
}

// When this file is invoked directly from action as opposed to being imported
if (import.meta.url.endsWith(process.argv[1])) {
  const owner = context.repo.owner
  const repo = context.payload.repository?.name || ''
  const baseSHA = context.payload.pull_request?.base.sha
  const headSHA = context.payload.pull_request?.head.sha

  const markdown = await main({ owner, repo, baseSHA, headSHA })
  core.setOutput('markdown', markdown)
}

type MainArgs = {
  owner: string
  repo: string
  baseSHA: string
  headSHA: string
}
async function main({ owner, repo, baseSHA, headSHA }: MainArgs) {
  const octokit = github.getOctokit(GITHUB_TOKEN as string)
  // get the list of file changes from the PR
  const response = await octokit.rest.repos.compareCommitsWithBasehead({
    owner,
    repo,
    basehead: `${baseSHA}...${headSHA}`,
  })

  const { files } = response.data

  if (!files) {
    throw new Error('No files found in the PR')
  }

  const oldFilenames = []
  for (const file of files) {
    const { filename, status } = file
    if (!filename.startsWith('assets')) continue
    if (status === 'removed') {
      // Bad
      oldFilenames.push(filename)
    } else if (status === 'renamed') {
      // Also bad
      const previousFilename = file.previous_filename
      oldFilenames.push(previousFilename)
    }
  }

  if (!oldFilenames.length) {
    return ''
  }

  let markdown = '**Please restore deleted assets**\n\n'
  markdown +=
    "Even if you don't reference these assets anymore, as of this branch, please do not delete them.\n"
  markdown += 'They might still be referenced in translated content.\n'
  markdown += 'The weekly "Delete orphaned assets" workflow will clean those up.\n\n'
  markdown += '**To *undo* these removals run this command:**\n\n'
  markdown += `
\`\`\`sh
git checkout origin/main -- ${oldFilenames.join(' ')}
\`\`\`
`

  return markdown
}

export default main
