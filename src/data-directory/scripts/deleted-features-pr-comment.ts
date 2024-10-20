/**
 * This script is supposed to be used in Actions. When it's run in Actions
 * there will be an env var called GITHUB_REPOSITORY. If it's not there,
 * you can use this script as a CLI tool. For example:
 *
 *  export GITHUB_TOKEN=github_pat_blablabla
 *  npm run deleted-features-pr-comment -- github docs-internal main 2ba53b6a
 *
 */

import * as github from '@actions/github'
import core from '@actions/core'
import { program } from 'commander'

const { GITHUB_TOKEN, GITHUB_REPOSITORY } = process.env

if (!GITHUB_TOKEN) {
  throw new Error(`GITHUB_TOKEN environment variable not set`)
}

if (GITHUB_REPOSITORY) {
  const context = github.context

  const owner = context.repo.owner
  const repo = context.payload.repository!.name
  const baseSHA = process.env.BASE_SHA || context.payload.pull_request!.base.sha
  const headSHA = process.env.HEAD_SHA || context.payload.pull_request!.head.sha

  const markdown = await main(owner, repo, baseSHA, headSHA)
  core.setOutput('markdown', markdown)
} else {
  program
    .description('Print a nice Markdown comment if there were features deleted in a PR.')
    .arguments('owner repo bash_sha head_sha')
    .parse(process.argv)

  const args = program.args
  const [owner, repo, baseSHA, headSHA] = args
  console.log(await main(owner, repo, baseSHA, headSHA))
}

async function main(owner: string, repo: string, baseSHA: string, headSHA: string) {
  if (!GITHUB_TOKEN) {
    throw new Error(`GITHUB_TOKEN environment variable not set`)
  }
  const octokit = github.getOctokit(GITHUB_TOKEN)
  // get the list of file changes from the PR
  const response = await octokit.rest.repos.compareCommitsWithBasehead({
    owner,
    repo,
    basehead: `${baseSHA}...${headSHA}`,
  })

  const { files } = response.data

  if (!files) return ''

  const oldFilenames = []
  for (const file of files) {
    const { filename, status } = file
    if (!filename.startsWith('data/features')) continue

    console.warn(`Feature involved in this PR: ${filename}; Status: ${status}`)
    if (status === 'removed') {
      // Bad
      oldFilenames.push(filename)
    } else if (status === 'renamed') {
      // Also bad
      const previousFilename = file.previous_filename
      oldFilenames.push(previousFilename)
    } else {
      console.warn(`${filename} was not removed or renamed. Skipping.`)
    }
  }

  if (!oldFilenames.length) {
    console.warn("No old file names in this PR. And that's perfectly cool.")
    return ''
  }

  let markdown = '⚠️ 🙀 **You deleted some features** 🙀 ⚠️\n\n'
  markdown +=
    "Even if you don't reference these features anymore, as of this branch, you should not delete them.\n"
  markdown += 'They might still be referenced in translated content.\n'
  markdown +=
    'The weekly "Delete orphaned features" workflow will worry about cleaning those up.\n\n'
  markdown += '**To *undo* these removals run this command:**\n\n'
  markdown += `
\`\`\`sh
git checkout origin/main -- ${oldFilenames.join(' ')}
\`\`\`
`

  return markdown
}

export default main
