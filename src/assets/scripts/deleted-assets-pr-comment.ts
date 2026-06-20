import { context as github_context, getOctokit } from '@actions/github'
import { setOutput } from '@actions/core'

const { GITHUB_TOKEN } = process.env
const context = github_context

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
  setOutput('markdown', markdown)
}

type MainArgs = {
  owner: string
  repo: string
  baseSHA: string
  headSHA: string
}
async function main({ owner, repo, baseSHA, headSHA }: MainArgs) {
  const octokit = getOctokit(GITHUB_TOKEN as string)
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

  // Auto-generated asset directories managed by sync pipelines.
  // These are deleted and recreated on each sync, so deletions are expected.
  const AUTO_GENERATED_ASSET_DIRS = ['assets/images/help/copilot/copilot-sdk/']

  const oldFilenames = []
  for (const file of files) {
    const { filename, status } = file
    if (!filename.startsWith('assets')) continue
    if (AUTO_GENERATED_ASSET_DIRS.some((dir) => filename.startsWith(dir))) continue
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
