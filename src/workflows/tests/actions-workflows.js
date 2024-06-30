import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

import { describe, expect, test } from 'vitest'
import yaml from 'js-yaml'
import { flatten } from 'flat'
import { chain, get } from 'lodash-es'

const actionHashRegexp = /^[A-Za-z0-9-/]+@[0-9a-f]{40}$/
const checkoutRegexp = /^[actions/checkout]+@[0-9a-f]{40}$/
const permissionsRegexp = /(read|write)/

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const workflowsDir = path.join(__dirname, '../../../.github/workflows')
const workflows = fs
  .readdirSync(workflowsDir)
  .filter((filename) => filename.endsWith('.yml') || filename.endsWith('.yaml'))
  .map((filename) => {
    const fullpath = path.join(workflowsDir, filename)
    const data = yaml.load(fs.readFileSync(fullpath, 'utf8'), { fullpath })
    return { filename, fullpath, data }
  })

function actionsUsedInWorkflow(workflow) {
  return Object.keys(flatten(workflow))
    .filter((key) => key.endsWith('.uses'))
    .map((key) => get(workflow, key))
}

const allUsedActions = chain(workflows)
  .map(actionsUsedInWorkflow)
  .flatten()
  .uniq()
  .filter((use) => !use.startsWith('.'))
  .sort()
  .value()

const scheduledWorkflows = workflows.filter(({ data }) => data.on.schedule)

const alertWorkflows = workflows
  // Only include jobs running on docs-internal
  .filter(({ data }) =>
    Object.values(data.jobs)
      .map((job) => job.if)
      .toString()
      .includes('docs-internal'),
  )
  // Require slack alerts on workflows that aren't actively watched at time of run
  .filter(({ data }) => data.on.schedule || data.on.push || data.on.issues || data.on.issue_comment)
// Not including
// - premerge workflows: pull_request, pull_request_target, pull_request_review, merge_group
// - adhoc workflows: workflow_dispatch, workflow_run, workflow_call, repository_dispatch
// to generate list, console.log(new Set(workflows.map(({ data }) => Object.keys(data.on)).flat()))

const dailyWorkflows = scheduledWorkflows.filter(({ data }) =>
  data.on.schedule.find(({ cron }) => /^20 [^*]/.test(cron)),
)

describe('GitHub Actions workflows', () => {
  test.each(allUsedActions)('requires specific hash: %p', (actionName) => {
    expect(actionName).toMatch(actionHashRegexp)
  })

  test.each(scheduledWorkflows)(
    'schedule workflow runs at 20 minutes past $filename',
    ({ data }) => {
      for (const { cron } of data.on.schedule) {
        expect(cron).toMatch(/^20/)
      }
    },
  )

  test.each(dailyWorkflows)(
    'daily scheduled workflows run at 16:20 UTC / 8:20 PST $filename',
    ({ data }) => {
      for (const { cron } of data.on.schedule) {
        const hour = cron.match(/^20 ([^*\s]+)/)[1]
        expect(hour).toEqual('16')
      }
    },
  )

  test.each(workflows)(
    'contains contents:read permissions when permissions are used $filename',
    ({ data }) => {
      if (data.permissions) {
        expect(permissionsRegexp.test(data.permissions.contents)).toBe(true)
      }
    },
  )

  test.each(workflows)('limits repository scope $filename', ({ filename, data }) => {
    for (const condition of Object.values(data.jobs).map((job) => job.if)) {
      expect(condition).toContain('github.repository')
    }
  })

  test.each(alertWorkflows)(
    'scheduled workflows slack alert on fail $filename',
    ({ filename, data }) => {
      for (const [name, job] of Object.entries(data.jobs)) {
        if (!job.steps.find((step) => step.uses === './.github/actions/slack-alert')) {
          throw new Error(`Job ${filename} # ${name} missing slack alert on fail`)
        }
      }
    },
  )

  test.each(alertWorkflows)(
    'performs a checkout before calling composite action $filename',
    ({ filename, data }) => {
      for (const [name, job] of Object.entries(data.jobs)) {
        if (!job.steps.find((step) => checkoutRegexp.test(step.uses))) {
          throw new Error(
            `Job ${filename} # ${name} missing a checkout before calling the composite action`,
          )
        }
      }
    },
  )
})
