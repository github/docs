import { Octokit } from '@octokit/rest'
import { retry } from '@octokit/plugin-retry'

const DEFAULT_MIN_DAYS = 30

type Options = {
  prefix: string
  minDays: number
  repository: string
}

export async function cleanUpOldBranches(options: Options) {
  const minDays = parseInt(`${options.minDays || DEFAULT_MIN_DAYS}`, 10)

  if (!process.env.GITHUB_TOKEN) {
    throw new Error('You must set the GITHUB_TOKEN environment variable.')
  }
  const octokit = retryingOctokit(process.env.GITHUB_TOKEN)

  const [owner, repo] = options.repository.split('/')
  const { data: refs } = await octokit.request(
    'GET /repos/{owner}/{repo}/git/matching-refs/{ref}',
    {
      owner,
      repo,
      ref: `heads/${options.prefix}`,
    },
  )

  for (const ref of refs) {
    const branchName = ref.ref.replace('refs/heads/', '')
    const { data: branch } = await octokit.request('GET /repos/{owner}/{repo}/branches/{branch}', {
      owner,
      repo,
      branch: branchName,
    })
    const { name, commit } = branch
    if (!commit.commit.author || !commit.commit.author.date) continue
    const lastUpdated = new Date(commit.commit.author.date)
    const ageDays = (Date.now() - lastUpdated.getTime()) / (1000 * 60 * 60 * 24)
    console.log(
      `Branch ${name} was last updated ${ageDays.toFixed(1)} days ago (${lastUpdated.toISOString()})`,
    )
    if (ageDays > minDays) {
      console.log(`Deleting branch ${name} !!`)
      await octokit.request('DELETE /repos/{owner}/{repo}/git/refs/{ref}', {
        owner,
        repo,
        ref: `heads/${name}`,
      })
    } else {
      console.log(`Branch ${name} is not old enough (min days: ${minDays})`)
    }
  }
}

function retryingOctokit(token: string) {
  const RetryingOctokit = Octokit.plugin(retry)
  return new RetryingOctokit({
    auth: `token ${token}`,
  })
}
