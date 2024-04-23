import { program, Option } from 'commander'

import github from './github.js'
import { getActionContext } from './action-context.js'
import { octoSecondaryRatelimitRetry } from './secondary-ratelimit-retry'

const DRY_RUN = process.env.DRY_RUN || 'false'
const DEFAULT_MIN_DAYS = 10

const CLOSING_COMMENT = `Closing this PR because it's been open for too long without any activity.

This is an automated event triggered by \`close-danging-prs\`.
`

// This script is deliberately vague in that we might have multiple
// of what a "dangling PR" is. You can search PRs by title and find
// some that should match and some that shouldn't. Because the title
// search isn't verbatim.
// The `titleSearch` finds a "shortlist" of candidates but then when
// we loop over the more carefully, we look for more specifics (verbatim)
// matchings on the PR title.
type Config = {
  titleSearch: string
  titlePrefix: string
  userLogin?: string
}
const CONFIGS: Config[] = [
  {
    titleSearch: 'FOR PREVIEW ONLY',
    titlePrefix: '[FOR PREVIEW ONLY] Preview of OpenAPI',
    userLogin: 'docs-bot',
  },
]

let owner = 'github'
let repo = 'docs-internal'

if (process.env.GITHUB_EVENT_PATH) {
  const actionContext = getActionContext()
  owner = actionContext.owner
  repo = actionContext.repo
}

program
  .description('Finds PRs with "FOR PREVIEW ONLY" in the title that are too old and closes them.')
  .option('owner', 'Owner of the repository', owner)
  .option('repo', 'Name of the repository', repo)
  .addOption(
    new Option(
      '--dry-run',
      "Don't post any comment or close any PRs. Only print what it would do.",
    ).default(Boolean(JSON.parse(DRY_RUN))),
  )
  .option(
    '--min-days <number>',
    'Minimum number of days since creation to be considered.',
    `${DEFAULT_MIN_DAYS}`,
  )
  .action(main)

program.parse(process.argv)

type Options = {
  owner: string
  repo: string
  dryRun: boolean
  minDays: number | string
}

async function main(options: Options) {
  const { dryRun, owner, repo } = options

  const minDays =
    typeof options.minDays === 'string' ? parseInt(options.minDays, 10) : options.minDays

  if (!process.env.GITHUB_TOKEN) {
    throw new Error(
      `GITHUB_TOKEN is required to run this action and it needs read-write access to ${owner}/${repo}`,
    )
  }

  const octokit = github()

  for (const config of CONFIGS) {
    let q = `repo:${owner}/${repo} is:pr is:open `
    if (config.titleSearch) q += `in:title "${config.titleSearch}" `
    if (config.userLogin) q += `author:${config.userLogin} `
    q = q.trim()

    const { data } = await octoSecondaryRatelimitRetry(() =>
      octokit.rest.search.issuesAndPullRequests({ q }),
    )

    type PRData = {
      updated_at: string
    }
    data.items.sort(
      (pr1: PRData, pr2: PRData) =>
        new Date(pr1.updated_at).getTime() - new Date(pr2.updated_at).getTime(),
    )

    let countTooOld = 0
    for (const pr of data.items) {
      if (config.titlePrefix && !pr.title.startsWith(config.titlePrefix)) {
        console.log("PR doesn't have the right title prefix. Skipping.")
        continue
      }

      const L = (label: string) => `${label}:`.padEnd(20)
      console.log(L('URL'), pr.html_url)
      console.log(L('UPDATED'), pr.updated_at)
      console.log(L('CREATED'), pr.created_at)
      console.log(L('STATE'), pr.state)
      console.log(L('DRAFT'), pr.draft)
      const ageDays = (Date.now() - new Date(pr.updated_at).getTime()) / (1000 * 60 * 60 * 24)
      console.log(L('AGE (days)'), Math.floor(ageDays))
      if (ageDays < minDays) {
        console.log('Not old enough. Leave as is.')
      } else {
        countTooOld++

        if (!dryRun) {
          console.log('Updating PR with a comment...')
          await octokit.rest.issues.createComment({
            owner,
            repo,
            issue_number: pr.number,
            body: CLOSING_COMMENT,
          })

          console.log('Closing PR...')
          await octokit.rest.pulls.update({
            owner,
            repo,
            pull_number: pr.number,
            state: 'closed',
          })

          console.log('** Closed and commented because it was old enough.**')
        } else {
          console.warn("** Would close and comment on PR if it wasn't a dry run. **")
        }
      }
      console.log('\n') // break between each print
    }

    console.log(`${data.items.length} PRs found, ${countTooOld} old enough to close.`)
  }
}
