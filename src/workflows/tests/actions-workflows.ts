import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

import { describe, expect, test } from 'vitest'
import yaml from 'js-yaml'
import { flatten } from 'flat'
import { chain, get } from 'lodash-es'

const githubOwnedActionsRegex =
  /^(actions\/(cache|checkout|download-artifact|upload-artifact)@v\d+(\.\d+)*)$/
const actionHashRegexp = /^[A-Za-z0-9-/]+@[0-9a-f]{40}$/
const checkoutRegexp = /^[actions/checkout]+@(v\d+(\.\d+)*|[0-9a-f]{40})$/
const permissionsRegexp = /(read|write)/

interface WorkflowTriggers {
  schedule?: Array<{ cron: string }>
  [key: string]: unknown
}

type WorkflowMeta = {
  filename: string
  fullpath: string
  data: {
    name: string
    on: WorkflowTriggers
    permissions: Record<string, string>
    jobs: Record<string, WorkflowJob>
  }
}

interface WorkflowJob {
  if?: string
  steps: WorkflowStep[]
}

interface WorkflowStep {
  uses?: string
  [key: string]: unknown
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const workflowsDir = path.join(__dirname, '../../../.github/workflows')
const workflows: WorkflowMeta[] = fs
  .readdirSync(workflowsDir)
  .filter((filename) => filename.endsWith('.yml') || filename.endsWith('.yaml'))
  .filter((filename) => filename !== 'moda-ci.yaml') // Skip moda-ci
  .filter((filename) => !filename.endsWith('.lock.yml')) // Skip auto-generated agentic workflow lock files
  .map((filename) => {
    const fullpath = path.join(workflowsDir, filename)
    const data = yaml.load(fs.readFileSync(fullpath, 'utf8')) as WorkflowMeta['data']
    return { filename, fullpath, data }
  })

function actionsUsedInWorkflow(workflow: WorkflowMeta) {
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

// Triggers where a workflow runs without a human actively watching and
// therefore needs explicit failure reporting (Slack + issue). Attended
// triggers (pull_request*, workflow_dispatch, workflow_call, merge_group)
// are intentionally excluded: the person who triggered the run sees the
// result directly.
//
// `issues` and `issue_comment` are only considered unattended for jobs
// running in docs-internal itself. When a job is scoped to the public
// github/docs fork via `if: github.repository == 'github/docs'`, those
// triggers fire from external reporters/commenters, and the issue or
// comment itself is the natural failure surface — piling on automated
// alert-issues there is duplicative and noisy.
const ALWAYS_UNATTENDED_TRIGGERS = ['schedule', 'workflow_run', 'repository_dispatch', 'push']
const DOCS_INTERNAL_ONLY_UNATTENDED_TRIGGERS = ['issues', 'issue_comment']

function jobIsPublicDocsScoped(job: WorkflowJob): boolean {
  return typeof job.if === 'string' && /github\.repository\s*==\s*['"]github\/docs['"]/.test(job.if)
}

function jobRequiresFailureAlerts(workflow: WorkflowMeta, job: WorkflowJob): boolean {
  const triggers = workflow.data.on || {}
  if (ALWAYS_UNATTENDED_TRIGGERS.some((t) => (triggers as Record<string, unknown>)[t])) {
    return true
  }
  if (
    !jobIsPublicDocsScoped(job) &&
    DOCS_INTERNAL_ONLY_UNATTENDED_TRIGGERS.some((t) => (triggers as Record<string, unknown>)[t])
  ) {
    return true
  }
  return false
}

// Workflows where at least one job requires failure alerts — used to drive
// the parameterised tests below. Per-job filtering happens inside each test.
const alertWorkflows = workflows.filter(({ data }) =>
  Object.values(data.jobs).some((job) => job.steps),
)
// to generate list, console.log(new Set(workflows.map(({ data }) => Object.keys(data.on)).flat()))

const dailyWorkflows = scheduledWorkflows.filter(({ data }) =>
  data.on.schedule!.find(({ cron }: { cron: string }) => /^20 \d{1,2} /.test(cron)),
)

// Weekly workflows have a single day-of-week digit (e.g. "20 16 * * 1")
const weeklyWorkflows = dailyWorkflows.filter(({ data }) =>
  data.on.schedule!.find(({ cron }: { cron: string }) => /^20 16 \* \* \d$/.test(cron)),
)

describe('GitHub Actions workflows', () => {
  test.each(allUsedActions)('requires specific hash: %p', (actionName) => {
    const matchesGitHubOwnedActions = githubOwnedActionsRegex.test(actionName)
    const matchesActionHash = actionHashRegexp.test(actionName)
    expect(matchesGitHubOwnedActions || matchesActionHash).toBe(true)
  })

  test.each(scheduledWorkflows)(
    'schedule workflow runs at 20 minutes past $filename',
    ({ data }) => {
      for (const { cron } of data.on.schedule!) {
        expect(cron).toMatch(/^20/)
      }
    },
  )

  test.each(dailyWorkflows)(
    'daily scheduled workflows run at 16:20 UTC / 8:20 PST $filename',
    ({ data }) => {
      for (const { cron } of data.on.schedule!) {
        const hour = cron.match(/^20 ([^*\s]+)/)![1]
        expect(hour).toEqual('16')
      }
    },
  )

  test.each(dailyWorkflows)('daily scheduled workflows only run Mon-Fri $filename', ({ data }) => {
    for (const { cron } of data.on.schedule!) {
      const fields = cron.trim().split(/\s+/)
      const dayOfWeek = fields[4]
      // Day-of-week must be 1-5 (Mon-Fri) or a range within 1-5
      expect(dayOfWeek).toMatch(/^[1-5](-[1-5])?$/)
    }
  })

  test.each(weeklyWorkflows)('weekly scheduled workflows run on Monday $filename', ({ data }) => {
    for (const { cron } of data.on.schedule!) {
      const fields = cron.trim().split(/\s+/)
      const dayOfWeek = fields[4]
      // Day-of-week must be 1 (Monday)
      expect(dayOfWeek).toBe('1')
    }
  })

  test.each(workflows)(
    'contains contents:read permissions when permissions are used $filename',
    ({ data }) => {
      if (data.permissions) {
        expect(permissionsRegexp.test(data.permissions.contents)).toBe(true)
      }
    },
  )

  test.each(workflows)('limits repository scope $filename', ({ data }) => {
    for (const condition of Object.values(data.jobs).map((job) => job.if)) {
      expect(condition).toContain('github.repository')
    }
  })

  test.each(alertWorkflows)('unattended workflows slack alert on fail $filename', (workflow) => {
    const { filename, data } = workflow
    for (const [name, job] of Object.entries(data.jobs)) {
      if (!jobRequiresFailureAlerts(workflow, job)) continue
      if (!job.steps.find((step: WorkflowStep) => step.uses === './.github/actions/slack-alert')) {
        throw new Error(`Job ${filename} # ${name} missing slack alert on fail`)
      }
    }
  })

  test.each(alertWorkflows)(
    'unattended workflows create failure issue on fail $filename',
    (workflow) => {
      const { filename, data } = workflow
      for (const [name, job] of Object.entries(data.jobs)) {
        if (!jobRequiresFailureAlerts(workflow, job)) continue
        if (
          !job.steps.find(
            (step: WorkflowStep) => step.uses === './.github/actions/create-workflow-failure-issue',
          )
        ) {
          throw new Error(`Job ${filename} # ${name} missing create-workflow-failure-issue on fail`)
        }
      }
    },
  )

  test.each(alertWorkflows)(
    'performs a checkout before calling composite action $filename',
    (workflow) => {
      const { filename, data } = workflow
      for (const [name, job] of Object.entries(data.jobs)) {
        if (!jobRequiresFailureAlerts(workflow, job)) continue
        if (!job.steps.find((step: WorkflowStep) => checkoutRegexp.test(step.uses || ''))) {
          throw new Error(
            `Job ${filename} # ${name} missing a checkout before calling the composite action`,
          )
        }
      }
    },
  )
})
