import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

import { describe, expect, test, vi } from 'vitest'
import { load } from 'js-yaml'
import { flatten } from 'flat'
import { chain, get } from 'lodash-es'

const githubOwnedActionsRegex =
  /^(actions\/(cache|checkout|download-artifact|upload-artifact)@v\d+(\.\d+)*)$/
const actionHashRegexp = /^[A-Za-z0-9-/]+@[0-9a-f]{40}$/
const internalReusableWorkflowRegexp =
  /^github\/internal-actions\/\.github\/workflows\/[A-Za-z0-9_-]+\.ya?ml@main$/
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
  with?: Record<string, unknown>
  [key: string]: unknown
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const workflowsDir = path.join(__dirname, '../../../.github/workflows')
const workflows: WorkflowMeta[] = fs
  .readdirSync(workflowsDir)
  .filter((filename) => filename.endsWith('.yml') || filename.endsWith('.yaml'))
  .filter((filename) => filename !== 'moda-ci.yaml')
  // Agentic workflow lock files are auto-generated.
  .filter((filename) => !filename.endsWith('.lock.yml'))
  .map((filename) => {
    const fullpath = path.join(workflowsDir, filename)
    const data = load(fs.readFileSync(fullpath, 'utf8')) as WorkflowMeta['data']
    return { filename, fullpath, data }
  })

describe('invalid PR run cancellation', () => {
  const repo = { owner: 'github', repo: 'docs' }
  const source = { full_name: 'contributor/docs' }
  const pr = { number: 123, head: { sha: 'abc123', ref: 'patch-1', repo: source } }
  const context = { repo, payload: { pull_request: pr } }
  const core = { info: vi.fn() }
  const run = {
    id: 1,
    name: 'Test',
    event: 'pull_request',
    path: '.github/workflows/test.yml',
    status: 'in_progress',
    head_branch: pr.head.ref,
    head_repository: source,
    pull_requests: [] as { number: number }[],
  }
  const workflow = workflows.find(({ filename }) => filename === 'close-on-invalid-label.yaml')!
  const script = workflow.data.jobs['close-on-adding-invalid-label'].steps.find(
    ({ name }) => name === 'Cancel CI for the invalid PR',
  )!.with!.script

  function cancellationClient(runs = [run], labels = ['invalid']) {
    return {
      rest: {
        pulls: {
          get: vi
            .fn()
            .mockResolvedValue({ data: { ...pr, labels: labels.map((name) => ({ name })) } }),
        },
        actions: { listWorkflowRunsForRepo: vi.fn(), cancelWorkflowRun: vi.fn() },
      },
      paginate: vi.fn().mockResolvedValue(runs),
    }
  }

  async function execute(github: object) {
    core.info.mockClear()
    await new Function('github', 'context', 'core', `return (async () => { ${script} })()`)(
      github,
      context,
      core,
    )
  }

  test('cancels fork CI without PR metadata, but not unrelated runs or protected workflows', async () => {
    const github = cancellationClient([
      run,
      {
        ...run,
        id: 2,
        event: 'pull_request_target',
        path: '.github/workflows/triage-pull-requests.yml',
        status: 'queued',
      },
      ...[
        'test-changed-content.yml',
        'content-linter-rules-docs.yml',
        'article-api-docs.yml',
        'move-content.yml',
      ].map((file, index) => ({ ...run, id: index + 3, path: `.github/workflows/${file}` })),
      { ...run, head_branch: 'another-branch' },
      { ...run, head_repository: { full_name: 'another/docs' } },
      { ...run, pull_requests: [{ number: 456 }] },
      { ...run, event: 'push' },
      { ...run, status: 'completed' },
      ...[
        'repo-sync.yml',
        'check-for-spammy-prs.yml',
        'close-on-invalid-label.yaml',
        'triage-unallowed-contributions.yml',
        'review-comment.yml',
        'notify-when-maintainers-cannot-edit.yaml',
      ].map((file) => ({ ...run, path: `.github/workflows/${file}` })),
    ])
    await execute(github)
    expect(github.paginate).toHaveBeenCalledWith(github.rest.actions.listWorkflowRunsForRepo, {
      ...repo,
      head_sha: pr.head.sha,
      per_page: 100,
    })
    expect(github.rest.actions.cancelWorkflowRun.mock.calls).toEqual([
      [{ ...repo, run_id: 1 }],
      [{ ...repo, run_id: 2 }],
      ...[3, 4, 5, 6].map((run_id) => [{ ...repo, run_id }]),
    ])
    expect(core.info).toHaveBeenCalledWith(
      'Skipping run 1 (.github/workflows/review-comment.yml): workflow is not a cancellation target.',
    )
    expect(core.info).toHaveBeenCalledWith(
      'Cancellation summary: 6 requested, 0 no longer cancellable, 11 skipped.',
    )
  })

  test.each([{ labels: [] }, { labels: ['invalid', 'skip-spammy-check'] }])(
    'leaves recovered PRs alone ($labels)',
    async ({ labels }) => {
      const github = cancellationClient([run], labels)
      await execute(github)
      expect(github.paginate).not.toHaveBeenCalled()
      expect(core.info).toHaveBeenCalledWith(expect.stringContaining('Skipping cancellation:'))
    },
  )

  test('continues past a cancellation race but surfaces permission failures', async () => {
    const github = cancellationClient([run, { ...run, id: 2 }])
    github.rest.actions.cancelWorkflowRun.mockRejectedValueOnce({ status: 409 })
    await execute(github)
    expect(github.rest.actions.cancelWorkflowRun).toHaveBeenCalledTimes(2)
    expect(core.info).toHaveBeenCalledWith(
      'Cancellation summary: 1 requested, 1 no longer cancellable, 0 skipped.',
    )
    const error = { status: 403 }
    github.rest.actions.cancelWorkflowRun.mockRejectedValueOnce(error)
    await expect(execute(github)).rejects.toBe(error)
  })
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

// Unattended triggers need explicit Slack and issue alerts because no human watches the run.
// Pull request, workflow dispatch, workflow call, and merge group triggers are attended.
//
// Treat issues and issue_comment as unattended only for docs-internal jobs.
// Jobs gated by if: github.repository == 'github/docs' surface failures on the public issue
// or comment, so another alert issue would duplicate that signal.
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

// Workflows with steps are the candidate set. Each alert test filters jobs by trigger.
const alertWorkflows = workflows.filter(({ data }) =>
  Object.values(data.jobs).some((job) => job.steps),
)

const dailyWorkflows = scheduledWorkflows
  // purge-fastly.yml soft-purges daily at 02:20 UTC, outside the standard 16:20 slot.
  .filter(({ filename }) => filename !== 'purge-fastly.yml')
  // The non-employee digest runs every day, including weekends.
  .filter(({ filename }) => filename !== 'notify-non-employee-comments.yml')
  .filter(({ data }) =>
    data.on.schedule!.find(({ cron }: { cron: string }) => /^20 \d{1,2} /.test(cron)),
  )

// Weekly workflows use one day-of-week digit, such as "20 16 * * 1".
const weeklyWorkflows = dailyWorkflows.filter(({ data }) =>
  data.on.schedule!.find(({ cron }: { cron: string }) => /^20 16 \* \* \d$/.test(cron)),
)

describe('GitHub Actions workflows', () => {
  test.each(allUsedActions)('requires specific hash: %p', (actionName) => {
    const matchesGitHubOwnedActions = githubOwnedActionsRegex.test(actionName)
    const matchesActionHash = actionHashRegexp.test(actionName)
    const matchesInternalReusableWorkflow = internalReusableWorkflowRegexp.test(actionName)
    expect(matchesGitHubOwnedActions || matchesActionHash || matchesInternalReusableWorkflow).toBe(
      true,
    )
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
      // Day-of-week must be a weekday digit, 1 through 5, or a range within it.
      expect(dayOfWeek).toMatch(/^[1-5](-[1-5])?$/)
    }
  })

  test.each(weeklyWorkflows)('weekly scheduled workflows run on Monday $filename', ({ data }) => {
    for (const { cron } of data.on.schedule!) {
      const fields = cron.trim().split(/\s+/)
      const dayOfWeek = fields[4]
      // Day-of-week must be 1 for Monday.
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

  // A long-lived shared personal access token, DOCS_BOT_PAT_BASE, must never pass to a
  // local composite action, uses: ./..., inside a pull_request_target workflow. That
  // trigger exposes repository secrets even for fork PRs from anonymous outside
  // contributors, and the local action lives in the checked-out PR workspace, so a
  // malicious fork PR could rewrite it to exfiltrate the token.
  // Use a short-lived, scoped GitHub App token instead.
  //
  // Plain pull_request workflows stay out of scope because they do not expose secrets to fork PRs.
  // Workflows such as get-docs-early-access intentionally pass DOCS_BOT_PAT_BASE to local actions
  // on same-repo pull requests, where contributors already have write access.
  const pullRequestTargetWorkflows = workflows.filter(({ data }) => {
    const on = (data.on || {}) as Record<string, unknown>
    // Check key presence because YAML parses a trigger with no nested value as null.
    return 'pull_request_target' in on
  })

  test.each(pullRequestTargetWorkflows)(
    'does not pass DOCS_BOT_PAT_BASE to a local composite action in $filename',
    ({ filename, data }) => {
      for (const [name, job] of Object.entries(data.jobs)) {
        for (const step of job.steps || []) {
          const usesLocalAction = typeof step.uses === 'string' && step.uses.startsWith('./')
          if (!usesLocalAction || !step.with) continue
          const passesPat = Object.values(step.with).some(
            (value) => typeof value === 'string' && value.includes('DOCS_BOT_PAT_BASE'),
          )
          if (passesPat) {
            throw new Error(
              `Job ${filename} # ${name} passes DOCS_BOT_PAT_BASE into local action ${step.uses}; ` +
                `pull_request_target workflows must use a scoped GitHub App token instead`,
            )
          }
        }
      }
    },
  )
})
