import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

const fetchWithRetry = vi.fn()
vi.mock('@/frame/lib/fetch-utils', () => ({
  fetchWithRetry: (...args: unknown[]) => fetchWithRetry(...args),
}))

const execFileSync = vi.fn()
vi.mock('node:child_process', () => ({
  execFileSync: (...args: unknown[]) => execFileSync(...args),
}))

const compareCommitsWithBasehead = vi.fn()
vi.mock('../github', () => ({
  default: () => ({ rest: { repos: { compareCommitsWithBasehead } } }),
}))

vi.mock('../action-context', () => ({
  getActionContext: () => ({ owner: 'github', repo: 'docs-internal' }),
}))

const { waitForBuild } = await import('../wait-for-build')

// The build endpoint returns the deployed sha as plain text.
function serves(sha: string) {
  return { ok: true, text: async () => `${sha}\n` }
}

beforeEach(() => {
  execFileSync.mockReturnValue('deployed-sha\n')
  compareCommitsWithBasehead.mockResolvedValue({ data: { status: 'behind' } })
  vi.spyOn(console, 'log').mockImplementation(() => {})
})

afterEach(() => {
  vi.clearAllMocks()
  vi.restoreAllMocks()
})

describe('waitForBuild', () => {
  test('polls the build endpoint until it matches enough times in a row', async () => {
    fetchWithRetry.mockResolvedValue(serves('deployed-sha'))

    await waitForBuild({ requiredMatches: 3, intervalMs: 0 })

    expect(fetchWithRetry).toHaveBeenCalledTimes(3)
    expect(fetchWithRetry.mock.calls[0][0]).toBe('https://docs.github.com/_build')
  })

  test('compares against the current HEAD sha', async () => {
    execFileSync.mockReturnValue('  head-sha  ')
    fetchWithRetry.mockResolvedValueOnce(serves('other-sha')).mockResolvedValue(serves('head-sha'))

    await waitForBuild({ requiredMatches: 1, intervalMs: 0 })

    expect(execFileSync).toHaveBeenCalledWith('git', ['rev-parse', 'HEAD'])
    expect(fetchWithRetry).toHaveBeenCalledTimes(2)
  })

  test('resets the consecutive count when production stops matching', async () => {
    // A stale instance mid-rollout must restart the streak, not just pause it.
    fetchWithRetry
      .mockResolvedValueOnce(serves('deployed-sha'))
      .mockResolvedValueOnce(serves('older-sha'))
      .mockResolvedValue(serves('deployed-sha'))

    await waitForBuild({ requiredMatches: 2, intervalMs: 0 })

    expect(fetchWithRetry).toHaveBeenCalledTimes(4)
  })

  test('counts a newer production build that contains this commit as a match', async () => {
    // A back-to-back deploy can replace this build before the streak completes.
    fetchWithRetry.mockResolvedValue(serves('newer-sha'))
    compareCommitsWithBasehead.mockResolvedValue({ data: { status: 'ahead' } })

    await waitForBuild({ requiredMatches: 3, intervalMs: 0, timeoutMs: 1000 })

    expect(fetchWithRetry).toHaveBeenCalledTimes(3)
    expect(compareCommitsWithBasehead).toHaveBeenCalledTimes(1)
    expect(compareCommitsWithBasehead).toHaveBeenCalledWith({
      owner: 'github',
      repo: 'docs-internal',
      basehead: 'deployed-sha...newer-sha',
    })
  })

  test('compares each distinct production sha only once', async () => {
    fetchWithRetry
      .mockResolvedValueOnce(serves('older-sha'))
      .mockResolvedValueOnce(serves('older-sha'))
      .mockResolvedValueOnce(serves('older-sha'))
      .mockResolvedValue(serves('deployed-sha'))

    await waitForBuild({ requiredMatches: 2, intervalMs: 0 })

    expect(fetchWithRetry).toHaveBeenCalledTimes(5)
    expect(compareCommitsWithBasehead).toHaveBeenCalledTimes(1)
    expect(compareCommitsWithBasehead.mock.calls[0][0].basehead).toBe('deployed-sha...older-sha')
  })

  test('treats a failed commit comparison as a non-match', async () => {
    fetchWithRetry
      .mockResolvedValueOnce(serves('newer-sha'))
      .mockResolvedValue(serves('deployed-sha'))
    compareCommitsWithBasehead.mockRejectedValue(new Error('API down'))

    await waitForBuild({ requiredMatches: 1, intervalMs: 0 })

    expect(fetchWithRetry).toHaveBeenCalledTimes(2)
  })

  test('treats a non-ok response as a non-match', async () => {
    fetchWithRetry
      .mockResolvedValueOnce({ ok: false, text: async () => 'deployed-sha' })
      .mockResolvedValue(serves('deployed-sha'))

    await waitForBuild({ requiredMatches: 1, intervalMs: 0 })

    expect(fetchWithRetry).toHaveBeenCalledTimes(2)
  })

  test('treats a fetch failure as a non-match instead of throwing', async () => {
    fetchWithRetry
      .mockRejectedValueOnce(new Error('network down'))
      .mockResolvedValue(serves('deployed-sha'))

    await expect(waitForBuild({ requiredMatches: 1, intervalMs: 0 })).resolves.toBeUndefined()
    expect(fetchWithRetry).toHaveBeenCalledTimes(2)
  })

  test('throws once the timeout elapses without enough matches', async () => {
    fetchWithRetry.mockResolvedValue(serves('older-sha'))
    // Date.now returns start time, then one in-budget poll, then an over-budget poll.
    vi.spyOn(Date, 'now').mockReturnValueOnce(0).mockReturnValueOnce(0).mockReturnValue(60_000)

    await expect(
      waitForBuild({ requiredMatches: 5, intervalMs: 0, timeoutMs: 30_000 }),
    ).rejects.toThrow(/did not reach 5 consecutive build matches within 30 seconds/)
    expect(fetchWithRetry).toHaveBeenCalledTimes(1)
  })
})
