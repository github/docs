/* See function main in this file for documentation */

import coreLib from '@actions/core'

import github from '#src/workflows/github.js'
import { getActionContext } from '#src/workflows/action-context.js'
import { boolEnvVar } from '#src/workflows/get-env-inputs.js'

// When this file is invoked directly from action as opposed to being imported
if (import.meta.url.endsWith(process.argv[1])) {
  if (!process.env.GITHUB_TOKEN) {
    throw new Error('You must set the GITHUB_TOKEN environment variable.')
  }

  const { ADD_LABELS, REMOVE_LABELS } = process.env

  const octokit = github()

  const opts = {
    addLabels: ADD_LABELS,
    removeLabels: REMOVE_LABELS,
    ignoreIfAssigned: boolEnvVar('IGNORE_IF_ASSIGNED'),
    ignoreIfLabeled: boolEnvVar('IGNORE_IF_LABELED'),
  }

  // labels come in comma separated from actions
  let addLabels

  if (opts.addLabels) {
    addLabels = [...opts.addLabels.split(',')]
    opts.addLabels = addLabels.map((l) => l.trim())
  } else {
    opts.addLabels = []
  }

  let removeLabels

  if (opts.removeLabels) {
    removeLabels = [...opts.removeLabels.split(',')]
    opts.removeLabels = removeLabels.map((l) => l.trim())
  } else {
    opts.removeLabels = []
  }

  const actionContext = getActionContext()
  const { owner, repo } = actionContext
  let issueOrPrNumber = actionContext?.pull_request?.number

  if (!issueOrPrNumber) {
    issueOrPrNumber = actionContext?.issue?.number
  }

  opts.issue_number = issueOrPrNumber
  opts.owner = owner
  opts.repo = repo

  main(coreLib, octokit, opts, {})
}

/*
 * Applies labels to an issue or pull request.
 *
 * opts:
 *  issue_number {number} id of the issue or pull request to label
 *  owner {string} owner of the repository
 *  repo {string} repository name
 *  addLabels {Array<string>} array of labels to apply
 *  removeLabels {Array<string>} array of labels to remove
 *  ignoreIfAssigned {boolean} don't apply labels if there are assignees
 *  ignoreIfLabeled {boolean} don't apply labels if there are already labels added
 */
export default async function main(core, octokit, opts = {}) {
  if (opts.addLabels?.length === 0 && opts.removeLabels?.length === 0) {
    core.info('No labels to add or remove specified, nothing to do.')
    return
  }

  if (opts.ignoreIfAssigned || opts.ignoreIfLabeled) {
    try {
      const { data } = await octokit.issues.get({
        issue_number: opts.issue_number,
        owner: opts.owner,
        repo: opts.repo,
      })

      if (opts.ignoreIfAssigned) {
        if (data.assignees.length > 0) {
          core.info(
            `ignore-if-assigned is true: not applying labels since there's ${data.assignees.length} assignees`,
          )
          return 0
        }
      }

      if (opts.ignoreIfLabeled) {
        if (data.labels.length > 0) {
          core.info(
            `ignore-if-labeled is true: not applying labels since there's ${data.labels.length} labels applied`,
          )
          return 0
        }
      }
    } catch (err) {
      throw new Error(`Error getting issue: ${err}`)
    }
  }

  if (opts.removeLabels?.length > 0) {
    // removing a label fails if the label isn't already applied
    let appliedLabels = []

    try {
      const { data } = await octokit.issues.get({
        issue_number: opts.issue_number,
        owner: opts.owner,
        repo: opts.repo,
      })

      appliedLabels = data.labels.map((l) => l.name)
    } catch (err) {
      throw new Error(`Error getting issue: ${err}`)
    }

    opts.removeLabels = opts.removeLabels.filter((l) => appliedLabels.includes(l))

    await Promise.all(
      opts.removeLabels.map(async (label) => {
        try {
          await octokit.issues.removeLabel({
            issue_number: opts.issue_number,
            owner: opts.owner,
            repo: opts.repo,
            name: label,
          })
        } catch (err) {
          throw new Error(`Error removing label: ${err}`)
        }
      }),
    )

    if (opts.removeLabels.length > 0) {
      core.info(`Removed labels: ${opts.removeLabels.join(', ')}`)
    }
  }

  if (opts.addLabels?.length > 0) {
    try {
      await octokit.issues.addLabels({
        issue_number: opts.issue_number,
        owner: opts.owner,
        repo: opts.repo,
        labels: opts.addLabels,
      })

      core.info(`Added labels: ${opts.addLabels.join(', ')}`)
    } catch (err) {
      throw new Error(`Error adding label: ${err}`)
    }
  }
}
