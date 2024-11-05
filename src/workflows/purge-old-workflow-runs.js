#!/usr/bin/env node

/**
 *
 * The only mandatory environment variables for this scrips are:
 *
 *   - GITHUB_TOKEN
 *   - GITHUB_REPOSITORY (e.g. "github/docs")
 *
 * To delete old workflows, it first downloads all the workflows.
 * The list of workflows is sorted by: A) does the `workflow.path`
 * exist in the repo any more, B) each workflow's `updated_at` date.
 *
 * Then, one workflow at a time, it searches that workflow for runs.
 * The search for runs uses a `created` filter that depends on the
 * `MIN_AGE_DAYS` environment variable. The default is 90 days.
 *
 * For every run found, it deletes its logs and its run.
 *
 * The total number of deletions is limited by the `MAX_DELETIONS`
 * environment variable. The default is 100.
 *  */

import fs from 'fs'
import assert from 'node:assert/strict'

import { getOctokit } from '@actions/github'

main()
async function main() {
  const DRY_RUN = Boolean(JSON.parse(process.env.DRY_RUN || 'false'))
  const MAX_DELETIONS = parseInt(JSON.parse(process.env.MAX_DELETIONS || '100'))
  const MIN_AGE_DAYS = parseInt(process.env.MIN_AGE_DAYS || '90', 10)

  const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/')
  if (!owner || !repo) {
    throw new Error('GITHUB_REPOSITORY environment variable not set')
  }
  const token = process.env.GITHUB_TOKEN
  if (!token) {
    throw new Error(`GITHUB_TOKEN environment variable not set`)
  }
  const github = getOctokit(token)

  // The sort order is not explicitly listed for this API endpoint.
  // In practice it appears to list those that are oldest first.
  // But to guarantee that it reaches the oldest, we paginate over
  // all of them.
  let allWorkflows = []

  try {
    allWorkflows = await github.paginate('GET /repos/{owner}/{repo}/actions/workflows', {
      owner,
      repo,
    })
  } catch (error) {
    console.log('Error happened when getting workflows')
    console.warn('Status: %O', error.status)
    console.warn('Message: %O', error.message)

    // Generally, if it fails, it's because of a network error or
    // because busy servers. It's not our fault, but considering that
    // this script is supposed to run on frequent schedule, we don't
    // need to fret. We'll just try again next time.
    if (isOperationalError(error.status, error.message)) {
      return
    } else {
      throw error
    }
  }

  const validWorkflows = allWorkflows.filter((w) => !w.path.startsWith('dynamic/'))

  const sortByDate = (a, b) => a.updated_at.localeCompare(b.updated_at)
  const workflows = [
    ...validWorkflows.filter((w) => !fs.existsSync(w.path)).sort(sortByDate),
    ...validWorkflows.filter((w) => fs.existsSync(w.path)).sort(sortByDate),
  ]

  let deletions = 0
  for (const workflow of workflows) {
    console.log('WORKFLOW', workflow)
    console.log(
      fs.existsSync(workflow.path)
        ? `${workflow.path} still exists on disk`
        : `${workflow.path} no longer exists on disk`,
    )
    try {
      deletions += await deleteWorkflowRuns(github, owner, repo, workflow, {
        dryRun: DRY_RUN,
        minAgeDays: MIN_AGE_DAYS,
        maxDeletions: MAX_DELETIONS - deletions,
      })
    } catch (error) {
      console.log("Error happened when calling 'deleteWorkflowRuns'")
      console.warn('Status: %O', error.status)
      console.warn('Message: %O', error.message)

      // Generally, if it fails, it's because of a network error or
      // because busy servers. It's not our fault, but considering that
      // this script is supposed to run on frequent schedule, we don't
      // need to fret. We'll just try again next time.
      if (isOperationalError(error.status, error.message)) {
        break
      } else {
        throw error
      }
    }

    if (deletions >= MAX_DELETIONS) {
      console.log(`Reached max number of deletions: ${MAX_DELETIONS}`)
      break
    }
  }
  console.log(`Deleted ${deletions} runs in total`)
}

function isOperationalError(status, message) {
  if (status && status >= 500) {
    return true
  }
  if (/Unable to delete logs while the workflow is running/.test(message)) {
    return true
  }
  if (status === 403 && /API rate limit exceeded/.test(message)) {
    return true
  }

  return false
}

async function deleteWorkflowRuns(
  github,
  owner,
  repo,
  workflow,
  { dryRun = false, minAgeDays = 100, maxDeletions = 1000 },
) {
  // https://docs.github.com/en/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates
  const minCreated = new Date(Date.now() - minAgeDays * 24 * 60 * 60 * 1000)
  const minCreatedSearch = `<=${minCreated.toISOString().split('T')[0]}`
  // Delete is 10, but max is 100. But if we're only going to delete,
  // 30, use 30. And if we're only going to delete 5, use the default
  // per_page value of 10.
  const perPage = Math.max(100, Math.max(10, maxDeletions))
  // We could use github.paginate(...) but given that we can use a
  // filter on `created` and we can set a decent `per_page`, there's no
  // reason to request data that we're not going to use.
  const { data } = await github.request(
    'GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs',
    {
      owner,
      repo,
      workflow_id: workflow.id,
      per_page: perPage,
      created: minCreatedSearch,
    },
  )
  const runs = data.workflow_runs
  console.log(
    `Total runs in workflow "${
      workflow.name
    }" (${minCreatedSearch}): ${data.total_count.toLocaleString()}`,
  )

  let deletions = 0
  let notDeletions = 0
  for (const run of runs) {
    const created = new Date(run.created_at)
    if (created < minCreated) {
      const ageDays = Math.round((Date.now() - created.getTime()) / (24 * 60 * 60 * 1000))
      console.log(
        'DELETE',
        {
          id: run.id,
          created_at: run.created_at,
          name: run.name,
          display_title: run.display_title,
        },
        `${ageDays} days old`,
      )

      if (!dryRun) {
        try {
          const { status } = await github.request(
            'DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs',
            {
              owner,
              repo,
              run_id: run.id,
            },
          )
          assert(status === 204, `Unexpected status deleting logs for run ${run.id}: ${status}`)
        } catch (error) {
          console.warn('ERROR trying to delete the logs for run', run.id, error.message)
          if (error.message && error.message.includes('API rate limit exceeded')) {
            // This can not be recovered by continuing on to the next run.
            break
          }
        }
      }

      if (!dryRun) {
        try {
          const { status } = await github.request(
            'DELETE /repos/{owner}/{repo}/actions/runs/{run_id}',
            {
              owner,
              repo,
              run_id: run.id,
            },
          )
          assert(status === 204, `Unexpected status deleting logs for run ${run.id}: ${status}`)
        } catch (error) {
          console.warn('ERROR trying to delete run', run.id, error.message)
          if (error.message && error.message.includes('API rate limit exceeded')) {
            // This can not be recovered by continuing on to the next run.
            break
          }
        }
      }

      deletions++
      if (maxDeletions && deletions >= maxDeletions) {
        console.log(
          `Reached max number of deletions (${maxDeletions}) for one workflow: ${workflow.name}`,
        )
        break
      } else {
        console.log(`Deleted ${deletions} of ${maxDeletions} runs for workflow: ${workflow.name}`)
      }
    } else {
      notDeletions++
    }
  }
  console.log(`Deleted ${deletions} runs in total for workflow: ${workflow.name}`)
  if (notDeletions) {
    console.log(`Skipped ${notDeletions} runs for workflow: ${workflow.name}`)
  }

  return deletions
}
