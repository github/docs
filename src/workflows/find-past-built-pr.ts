import type { Octokit } from '@octokit/rest'

import github from './github'
import { getActionContext } from './action-context'
import { octoSecondaryRatelimitRetry } from './secondary-ratelimit-retry'

// Marker used to dedupe the "gone to production" comment across reruns and
// across the previous workflow that posted it as github-actions[bot].
export const GONE_TO_PRODUCTION_MARKER = '<!-- GONE_TO_PRODUCTION -->'

// The merge queue can batch multiple PRs into a single deploy. We walk back
// from the deployed HEAD commit through `main`'s (linear, squash-merged)
// ancestry to find every PR in the batch. This is bounded by the deployed SHA,
// so it can only ever include already-deployed PRs, never a later batch.
//
// Default to the merge queue's max batch size. Over-reaching into a previous,
// already-notified batch is harmless: those PRs are genuinely in production and
// the marker dedupe skips any that already have the comment.
const BATCH_MAX_COMMITS = parseInt(process.env.DEPLOY_BATCH_MAX_COMMITS || '5', 10)

export const COMMENT_BODY = `${GONE_TO_PRODUCTION_MARKER}
🚀 **This pull request has gone into production!**

This pull request's merge commit is included in the latest production deployment of https://docs.github.com/_build.

If you don't see updates when expected, try adding a random query string to the URL like \`?bla=1234\` and see if that helps.
If that shows the expected content, it would indicate that the CDN is "overly caching" the page still. It will eventually update, but it can take a while.
`

// GitHub appends "(#1234)" to the title of a squash-merge commit. Grab the last
// such reference on the title line, which is the merged PR number.
export function extractPrNumber(commitMessage: string): number | null {
  const title = commitMessage.split('\n')[0]
  const matches = [...title.matchAll(/\(#(\d+)\)/g)]
  if (matches.length === 0) {
    return null
  }
  const last = matches[matches.length - 1]
  return parseInt(last[1], 10)
}

// Returns the PR numbers in the deploy batch, newest first, deduplicated.
export async function findBatchPrNumbers(
  octokit: Octokit,
  owner: string,
  repo: string,
  sha: string,
  maxCommits: number = BATCH_MAX_COMMITS,
): Promise<number[]> {
  const { data: commits } = await octoSecondaryRatelimitRetry(() =>
    octokit.rest.repos.listCommits({ owner, repo, sha, per_page: maxCommits }),
  )

  const numbers: number[] = []
  for (const commit of commits) {
    const number = extractPrNumber(commit.commit.message)
    if (number !== null && !numbers.includes(number)) {
      numbers.push(number)
    }
  }
  return numbers
}

export type CommentResult = 'created' | 'exists' | 'locked'

// Posts the production comment on a single PR, unless it is locked or already
// has the comment (detected by the marker, regardless of which account authored
// it). Idempotent: safe to call on every rerun.
export async function ensureProductionComment(
  octokit: Octokit,
  owner: string,
  repo: string,
  prNumber: number,
): Promise<CommentResult> {
  const { data: issue } = await octoSecondaryRatelimitRetry(() =>
    octokit.rest.issues.get({ owner, repo, issue_number: prNumber }),
  )
  if (issue.locked) {
    console.log(`Skipping locked PR #${prNumber}`)
    return 'locked'
  }

  const comments = await octoSecondaryRatelimitRetry(() =>
    octokit.paginate(octokit.rest.issues.listComments, {
      owner,
      repo,
      issue_number: prNumber,
      per_page: 100,
    }),
  )
  if (comments.some((comment) => comment.body?.includes(GONE_TO_PRODUCTION_MARKER))) {
    console.log(`PR #${prNumber} already has the production comment; skipping`)
    return 'exists'
  }

  const { data: created } = await octoSecondaryRatelimitRetry(() =>
    octokit.rest.issues.createComment({
      owner,
      repo,
      issue_number: prNumber,
      body: COMMENT_BODY,
    }),
  )
  console.log(`Commented on PR #${prNumber}: ${created.html_url}`)
  return 'created'
}

// Comments on each PR independently so one failure doesn't drop the rest of the
// batch. Collects failures and throws at the end so the workflow's failure
// alerting still fires.
export async function commentOnDeployBatch(
  octokit: Octokit,
  owner: string,
  repo: string,
  prNumbers: number[],
): Promise<void> {
  const errors: Error[] = []
  for (const prNumber of prNumbers) {
    try {
      await ensureProductionComment(octokit, owner, repo, prNumber)
    } catch (error) {
      console.error(`Failed to comment on PR #${prNumber}:`, error)
      errors.push(error instanceof Error ? error : new Error(String(error)))
    }
  }

  if (errors.length > 0) {
    throw new Error(`Failed to comment on ${errors.length} PR(s) in the deploy batch`)
  }
}

async function main() {
  const sha = await getBuiltSHA()
  console.log({ sha })

  const { owner, repo } = getActionContext()
  const octokit = github()

  const prNumbers = await findBatchPrNumbers(octokit, owner, repo, sha)
  console.log(`Found ${prNumbers.length} PR(s) in the deploy batch:`, prNumbers)

  await commentOnDeployBatch(octokit, owner, repo, prNumbers)
}

async function getBuiltSHA() {
  const r = await fetch('https://docs.github.com/_build')
  if (!r.ok) {
    throw new Error(`HTTP ${r.status}: ${r.statusText}`)
  }
  const body = await r.text()
  const sha = body.trim()
  if (!/[a-f0-9]{40}/.test(sha)) {
    throw new Error(`Response body does not look like a SHA ('${body.slice(0, 100)}'...)`)
  }
  return sha
}

const isEntryPoint =
  import.meta.url === `file://${process.argv[1]}` ||
  process.argv[1]?.endsWith('find-past-built-pr.ts')

if (isEntryPoint) {
  main()
}
