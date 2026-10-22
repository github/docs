import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

import { load } from 'js-yaml'
import { describe, expect, test } from 'vitest'

const workflow = load(fs.readFileSync('.github/workflows/content-pipelines.yml', 'utf8')) as {
  jobs: { update: { steps: Array<{ name?: string; if?: string; run?: string }> } }
}

function step(name: string) {
  const found = workflow.jobs.update.steps.find((entry) => entry.name === name)
  if (!found?.run) throw new Error(`Missing workflow step: ${name}`)
  return { ...found, run: found.run }
}

function run(
  name: string,
  options: {
    existing?: boolean
    draft?: boolean
    failure?: 'list' | 'create' | 'label' | 'routing-label' | 'view' | 'ready'
  } = {},
) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'content-pipeline-pr-'))
  try {
    fs.writeFileSync(path.join(dir, 'draft'), String(options.draft ?? true))
    const script = step(name).run.replace(/\$\{\{\s*([^}]+?)\s*\}\}/g, (_, expression: string) => {
      if (expression === 'steps.check-pr.outputs.pr_number') return options.existing ? '42' : ''
      return 'workflow-test'
    })
    const result = spawnSync(
      'bash',
      [
        '-e',
        '-c',
        `
          gh() {
            printf '%s\\n' "$*" >> "$TEST_DIR/calls"
            case "$1 $2" in
              "pr list")
                [ "$FAILURE" != list ] || return 1
                printf '%s\\n' "$PR_REF"
                ;;
              "pr create")
                [ "$FAILURE" != create ] || return 1
                if [[ "$*" == *"--draft"* ]]; then
                  touch "$TEST_DIR/created-draft"
                else
                  touch "$TEST_DIR/created-ready"
                fi
                echo https://github.com/github/docs-internal/pull/42
                ;;
              "pr edit")
                if [[ "$*" == *"skip FR board"* ]]; then
                  [ "$FAILURE" != label ] || return 1
                  touch "$TEST_DIR/labeled"
                fi
                if [[ "$*" == *"content-pipeline-update"* ]]; then
                  [ "$FAILURE" != routing-label ] || return 1
                fi
                ;;
              "pr view")
                [ "$FAILURE" != view ] || return 1
                cat "$TEST_DIR/draft"
                ;;
              "pr ready")
                [ -f "$TEST_DIR/labeled" ] || return 2
                [ "$FAILURE" != ready ] || return 1
                touch "$TEST_DIR/ready"
                ;;
              *) return 3 ;;
            esac
          }
          ${script}
        `,
      ],
      {
        encoding: 'utf8',
        env: {
          ...process.env,
          TEST_DIR: dir,
          GITHUB_OUTPUT: path.join(dir, 'output'),
          PR_REF: options.existing ? '42' : '',
          UPDATE_BRANCH: 'docs/content-pipeline-copilot-cli-update',
          PIPELINE_ID: 'copilot-cli',
          SOURCE_REPO: 'github/copilot-agent-runtime',
          SOURCE_PATH: 'docs',
          FAILURE: options.failure ?? '',
        },
      },
    )
    return {
      status: result.status,
      output: result.stdout + result.stderr,
      createdDraft: fs.existsSync(path.join(dir, 'created-draft')),
      createdReady: fs.existsSync(path.join(dir, 'created-ready')),
      ready: fs.existsSync(path.join(dir, 'ready')),
      calls: fs.existsSync(path.join(dir, 'calls'))
        ? fs.readFileSync(path.join(dir, 'calls'), 'utf8')
        : '',
    }
  } finally {
    fs.rmSync(dir, { recursive: true, force: true })
  }
}

describe('content pipeline PR publication', () => {
  test('creates a draft and applies the exclusion before marking it ready', () => {
    const result = run('Create or update PR')
    expect(result.status, result.output).toBe(0)
    expect(result.createdDraft).toBe(true)
    expect(result.createdReady).toBe(false)
    expect(result.ready).toBe(true)
  })

  test('finishes an existing draft without creating another PR', () => {
    const result = run('Create or update PR', { existing: true })
    expect(result.status, result.output).toBe(0)
    expect(result.calls).not.toContain('pr create')
    expect(result.ready).toBe(true)
  })

  test('warns but marks the PR ready when a routing label fails', () => {
    const result = run('Create or update PR', { failure: 'routing-label' })
    expect(result.status, result.output).toBe(0)
    expect(result.output).toContain('Could not apply the "content-pipeline-update" label.')
    expect(result.calls).toContain('pr ready https://github.com/github/docs-internal/pull/42')
    expect(result.ready).toBe(true)
  })

  test('runs for an existing PR even without new content changes', () => {
    expect(step('Create or update PR').if).toBe(
      "steps.commit.outputs.has_changes == 'true' || steps.check-pr.outputs.pr_number != ''",
    )
  })

  test('does not try to mark an already-ready PR ready again', () => {
    const result = run('Create or update PR', { existing: true, draft: false })
    expect(result.status, result.output).toBe(0)
    expect(result.calls).not.toContain('pr ready')
  })

  test.each(['create', 'label', 'view', 'ready'] as const)(
    'fails visibly when %s fails',
    (failure) => {
      const result = run('Create or update PR', { failure })
      expect(result.status, result.output).not.toBe(0)
      expect(result.ready).toBe(false)
      expect(result.createdReady).toBe(false)
      if (failure !== 'ready') expect(result.calls).not.toContain('pr ready')
    },
  )

  test('does not treat a failed PR lookup as an absent PR', () => {
    const result = run('Check for existing PR', { failure: 'list' })
    expect(result.status, result.output).not.toBe(0)
  })
})
