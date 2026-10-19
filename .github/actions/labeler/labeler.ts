import * as coreLib from '@actions/core'
import { type Octokit } from '@octokit/rest'
import { CoreInject } from '@/links/scripts/action-injections'

import github from '@/workflows/github'
import { getActionContext } from '@/workflows/action-context'
import { boolEnvVar } from '@/workflows/get-env-inputs'

type Options = {
  addLabels?: string[]
  removeLabels?: string[]
  ignoreIfAssigned?: boolean
  ignoreIfLabeled?: boolean
  issue_number?: number
  owner?: string
  repo?: string
}

// Run action wiring only for direct execution, not imports from tests or other code.
if (import.meta.url.endsWith(process.argv[1])) {
  if (!process.env.GITHUB_TOKEN) {
    throw new Error('You must set the GITHUB_TOKEN environment variable.')
  }

  const { ADD_LABELS, REMOVE_LABELS } = process.env

  const octokit = github()

  const opts: Options = {
    ignoreIfAssigned: boolEnvVar('IGNORE_IF_ASSIGNED'),
    ignoreIfLabeled: boolEnvVar('IGNORE_IF_LABELED'),
  }

  // Actions pass comma-separated labels.
  if (typeof ADD_LABELS === 'string') {
    opts.addLabels = [...ADD_LABELS.split(',')].map((l) => l.trim())
  } else {
    opts.addLabels = []
  }
  if (typeof REMOVE_LABELS === 'string') {
    opts.removeLabels = [...REMOVE_LABELS.split(',')].map((l) => l.trim())
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

  main(coreLib, octokit, opts)
}

export default async function main(
  core: typeof coreLib | CoreInject,
  octokit: Octokit,
  opts: Options = {},
) {
  if (opts.addLabels?.length === 0 && opts.removeLabels?.length === 0) {
    core.info('No labels to add or remove specified, nothing to do.')
    return
  }

  if (!opts.issue_number || !opts.owner || !opts.repo) {
    throw new Error(`Missing required parameters ${JSON.stringify(opts)}`)
  }
  const issueOpts = {
    issue_number: opts.issue_number,
    owner: opts.owner,
    repo: opts.repo,
  }

  if (opts.ignoreIfAssigned || opts.ignoreIfLabeled) {
    try {
      const { data } = await octokit.issues.get(issueOpts)

      if (opts.ignoreIfAssigned) {
        if (data.assignees?.length) {
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

  if (opts.removeLabels?.length) {
    // Remove only applied labels because the API rejects missing labels.
    let appliedLabels = []

    try {
      const { data } = await octokit.issues.get(issueOpts)
      appliedLabels = data.labels.map((l) => (typeof l === 'string' ? l : l.name))
    } catch (err) {
      throw new Error(`Error getting issue: ${err}`)
    }

    opts.removeLabels = opts.removeLabels?.filter((l) => appliedLabels.includes(l))

    await Promise.all(
      opts.removeLabels.map(async (label) => {
        try {
          await octokit.issues.removeLabel({
            ...issueOpts,
            name: label,
          })
        } catch (err) {
          throw new Error(`Error removing label: ${err}`)
        }
      }),
    )

    if (opts.removeLabels?.length) {
      core.info(`Removed labels: ${opts.removeLabels.join(', ')}`)
    }
  }

  if (opts.addLabels?.length) {
    try {
      await octokit.issues.addLabels({
        ...issueOpts,
        labels: opts.addLabels,
      })

      core.info(`Added labels: ${opts.addLabels.join(', ')}`)
    } catch (err) {
      throw new Error(`Error adding label: ${err}`)
    }
  }
}
