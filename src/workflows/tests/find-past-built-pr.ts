import { describe, expect, test, vi } from 'vitest'
import type { Octokit } from '@octokit/rest'

import {
  extractPrNumber,
  findBatchPrNumbers,
  ensureProductionComment,
  commentOnDeployBatch,
  resolveDeploySha,
  GONE_TO_PRODUCTION_MARKER,
} from '../find-past-built-pr'

type FakeComment = { body?: string; user?: { login: string } }
type FakeCommit = { message: string; parents: string[] }

interface FakeOptions {
  commits?: Record<string, FakeCommit>
  comments?: Record<number, FakeComment[]>
  locked?: Record<number, boolean>
  failCreateOn?: number[]
}

function makeFakeOctokit(options: FakeOptions = {}) {
  const { commits = {}, comments = {}, locked = {}, failCreateOn = [] } = options

  const createComment = vi.fn(async ({ issue_number }: { issue_number: number; body?: string }) => {
    if (failCreateOn.includes(issue_number)) {
      throw new Error(`boom on #${issue_number}`)
    }
    return { data: { html_url: `https://example.com/pr/${issue_number}#comment` } }
  })

  const listComments = vi.fn()

  // Like the real API, this lists every reachable commit, following all parents.
  const listCommits = vi.fn(async ({ sha, per_page = 30 }: { sha: string; per_page?: number }) => {
    const queue = [sha]
    const seen = new Set<string>()
    const data = []
    while (queue.length > 0 && data.length < per_page) {
      const current = queue.shift()!
      const commit = commits[current]
      if (seen.has(current) || !commit) continue
      seen.add(current)
      data.push({
        sha: current,
        commit: { message: commit.message },
        parents: commit.parents.map((parent) => ({ sha: parent })),
      })
      queue.push(...commit.parents)
    }
    return { data }
  })

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
    // The real Octokit paginate reads every page, but these fakes return one configured page.
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

function linearHistory(headSha: string, messages: string[]): Record<string, FakeCommit> {
  const commits: Record<string, FakeCommit> = {}
  for (const [index, message] of messages.entries()) {
    const sha = index === 0 ? headSha : `parent${index}`
    const parents = index < messages.length - 1 ? [`parent${index + 1}`] : []
    commits[sha] = { message, parents }
  }
  return commits
}

describe('findBatchPrNumbers', () => {
  test('returns deduped PR numbers from the deployed SHA ancestry', async () => {
    const { octokit } = makeFakeOctokit({
      commits: linearHistory('abc123', [
        'Head PR (#5)',
        'Middle PR (#4)',
        'Revert "Middle PR (#4)"',
        'First PR (#3)',
        'No PR here',
      ]),
    })
    const numbers = await findBatchPrNumbers(octokit, 'github', 'docs-internal', 'abc123')
    expect(numbers).toEqual([5, 4, 3])
  })

  test('caps the lookback at the configured batch size', async () => {
    const { octokit, listCommits } = makeFakeOctokit({
      commits: linearHistory('abc123', ['A (#9)', 'B (#8)', 'C (#7)', 'D (#6)', 'E (#5)']),
    })
    const numbers = await findBatchPrNumbers(octokit, 'github', 'docs-internal', 'abc123', 3)
    expect(numbers).toEqual([9, 8, 7])
    expect(listCommits).toHaveBeenCalledTimes(3)
    expect(listCommits).toHaveBeenCalledWith(
      expect.objectContaining({ sha: 'abc123', per_page: 1 }),
    )
  })

  test('follows first parents only, skipping repo-sync side history', async () => {
    const { octokit, listCommits } = makeFakeOctokit({
      commits: {
        head: {
          message: 'Merge pull request #63880 from github/repo-sync',
          parents: ['a', 'side'],
        },
        a: { message: 'Internal PR (#63761)', parents: ['b'] },
        b: { message: 'Another internal PR (#63842)', parents: [] },
        side: { message: 'Public repo PR (#46333)', parents: ['b'] },
      },
    })
    const numbers = await findBatchPrNumbers(octokit, 'github', 'docs-internal', 'head')
    expect(numbers).toEqual([63761, 63842])
    expect(listCommits).not.toHaveBeenCalledWith(expect.objectContaining({ sha: 'side' }))
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
    // Successful PRs still get comments even when another PR comment fails.
    expect(createComment).toHaveBeenCalledTimes(3)
  })
})

describe('resolveDeploySha', () => {
  const deploySha = 'a'.repeat(40)
  const liveSha = 'b'.repeat(40)

  test('uses the deploy SHA from the environment without reading /_build', async () => {
    const fallback = vi.fn(async () => liveSha)
    expect(await resolveDeploySha(deploySha, fallback)).toBe(deploySha)
    expect(fallback).not.toHaveBeenCalled()
  })

  test('reads /_build when no deploy SHA is set', async () => {
    const fallback = vi.fn(async () => liveSha)
    expect(await resolveDeploySha(undefined, fallback)).toBe(liveSha)
    expect(await resolveDeploySha('', fallback)).toBe(liveSha)
    expect(fallback).toHaveBeenCalledTimes(2)
  })

  test('reads /_build when the deploy SHA is malformed', async () => {
    const fallback = vi.fn(async () => liveSha)
    expect(await resolveDeploySha('not-a-sha', fallback)).toBe(liveSha)
    expect(await resolveDeploySha(`${deploySha}x`, fallback)).toBe(liveSha)
    expect(fallback).toHaveBeenCalledTimes(2)
  })
})
