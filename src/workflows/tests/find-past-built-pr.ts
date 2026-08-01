import { describe, expect, test, vi } from 'vitest'
import type { Octokit } from '@octokit/rest'

import {
  extractPrNumber,
  findBatchPrNumbers,
  ensureProductionComment,
  commentOnDeployBatch,
  GONE_TO_PRODUCTION_MARKER,
} from '../find-past-built-pr'

type FakeComment = { body?: string; user?: { login: string } }

interface FakeOptions {
  commitMessages?: string[]
  comments?: Record<number, FakeComment[]>
  locked?: Record<number, boolean>
  failCreateOn?: number[]
}

// Builds a minimal Octokit stand-in exposing only the methods the script uses.
function makeFakeOctokit(options: FakeOptions = {}) {
  const { commitMessages = [], comments = {}, locked = {}, failCreateOn = [] } = options

  const createComment = vi.fn(async ({ issue_number }: { issue_number: number; body?: string }) => {
    if (failCreateOn.includes(issue_number)) {
      throw new Error(`boom on #${issue_number}`)
    }
    return { data: { html_url: `https://example.com/pr/${issue_number}#comment` } }
  })

  const listComments = vi.fn()

  const listCommits = vi.fn(async () => ({
    data: commitMessages.map((message) => ({ commit: { message } })),
  }))

  const fake = {
    rest: {
      repos: { listCommits },
      issues: {
        get: vi.fn(async ({ issue_number }: { issue_number: number }) => ({
          data: { locked: Boolean(locked[issue_number]) },
        })),
        listComments,
        createComment,
      },
    },
    // The real octokit.paginate pulls every page; our fakes are single-page, so
    // resolve straight to the configured comment list.
    paginate: vi.fn(async (_method: unknown, params: { issue_number: number }) => {
      return comments[params.issue_number] || []
    }),
  }

  return {
    octokit: fake as unknown as Octokit,
    createComment,
    listComments,
    listCommits,
  }
}

describe('extractPrNumber', () => {
  test('reads the PR number appended to a squash-merge title', () => {
    expect(extractPrNumber('Fix the thing (#61554)')).toBe(61554)
  })

  test('uses only the title line, ignoring the body', () => {
    expect(extractPrNumber('Fix the thing (#100)\n\nFixes #200 and (#300)')).toBe(100)
  })

  test('takes the last reference when the title has several', () => {
    expect(extractPrNumber('Revert "Thing (#10)" (#42)')).toBe(42)
  })

  test('returns null when there is no PR reference', () => {
    expect(extractPrNumber('Direct push to main')).toBeNull()
  })
})

describe('findBatchPrNumbers', () => {
  test('returns deduped PR numbers from the deployed SHA ancestry', async () => {
    const { octokit } = makeFakeOctokit({
      commitMessages: ['Head PR (#5)', 'Middle PR (#4)', 'First PR (#3)', 'No PR here'],
    })
    const numbers = await findBatchPrNumbers(octokit, 'github', 'docs-internal', 'abc123')
    expect(numbers).toEqual([5, 4, 3])
  })

  test('caps the lookback at the configured batch size', async () => {
    const { octokit, listCommits } = makeFakeOctokit({ commitMessages: ['Head PR (#9)'] })
    await findBatchPrNumbers(octokit, 'github', 'docs-internal', 'abc123', 5)
    expect(listCommits).toHaveBeenCalledWith(
      expect.objectContaining({ sha: 'abc123', per_page: 5 }),
    )
  })
})

describe('ensureProductionComment', () => {
  test('creates the comment when none exists', async () => {
    const { octokit, createComment } = makeFakeOctokit({ comments: { 7: [] } })
    const result = await ensureProductionComment(octokit, 'github', 'docs-internal', 7)
    expect(result).toBe('created')
    expect(createComment).toHaveBeenCalledTimes(1)
    expect(createComment.mock.calls[0][0].body).toContain(GONE_TO_PRODUCTION_MARKER)
  })

  test('skips when a marker comment already exists, regardless of author', async () => {
    const { octokit, createComment } = makeFakeOctokit({
      comments: {
        7: [{ body: `${GONE_TO_PRODUCTION_MARKER}\nalready here`, user: { login: 'docs-bot' } }],
      },
    })
    const result = await ensureProductionComment(octokit, 'github', 'docs-internal', 7)
    expect(result).toBe('exists')
    expect(createComment).not.toHaveBeenCalled()
  })

  test('respects an existing comment authored by github-actions[bot]', async () => {
    const { octokit, createComment } = makeFakeOctokit({
      comments: {
        7: [{ body: `${GONE_TO_PRODUCTION_MARKER}\nold`, user: { login: 'github-actions[bot]' } }],
      },
    })
    const result = await ensureProductionComment(octokit, 'github', 'docs-internal', 7)
    expect(result).toBe('exists')
    expect(createComment).not.toHaveBeenCalled()
  })

  test('skips locked PRs without listing comments', async () => {
    const { octokit, createComment, listComments } = makeFakeOctokit({ locked: { 7: true } })
    const result = await ensureProductionComment(octokit, 'github', 'docs-internal', 7)
    expect(result).toBe('locked')
    expect(listComments).not.toHaveBeenCalled()
    expect(createComment).not.toHaveBeenCalled()
  })
})

describe('commentOnDeployBatch', () => {
  test('comments on every PR in the batch', async () => {
    const { octokit, createComment } = makeFakeOctokit({ comments: { 3: [], 4: [], 5: [] } })
    await commentOnDeployBatch(octokit, 'github', 'docs-internal', [5, 4, 3])
    expect(createComment).toHaveBeenCalledTimes(3)
  })

  test('one PR failure does not block the others, but the batch throws', async () => {
    const { octokit, createComment } = makeFakeOctokit({
      comments: { 3: [], 4: [], 5: [] },
      failCreateOn: [4],
    })
    await expect(
      commentOnDeployBatch(octokit, 'github', 'docs-internal', [5, 4, 3]),
    ).rejects.toThrow(/Failed to comment on 1 PR/)
    // #5 and #3 still get their comments despite #4 failing.
    expect(createComment).toHaveBeenCalledTimes(3)
  })
})
