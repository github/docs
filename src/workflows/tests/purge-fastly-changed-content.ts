import { afterEach, describe, expect, test, vi } from 'vitest'
import type { Octokit } from '@octokit/rest'

const fetchWithRetry = vi.fn()
vi.mock('@/frame/lib/fetch-utils', () => ({
  fetchWithRetry: (...args: unknown[]) => fetchWithRetry(...args),
}))
// warmServer is only used by the entry point, not the exported helpers under
// test, but importing the module pulls it in, so stub it to stay light.
vi.mock('@/frame/lib/warm-server', () => ({ default: vi.fn() }))

const {
  resolvePreviousProductionSha,
  getChangedContentFiles,
  contentFilesToEnglishUrls,
  hardPurgeUrls,
  rateLimitDelayMs,
} = await import('../purge-fastly-changed-content')

afterEach(() => {
  vi.clearAllMocks()
})

describe('resolvePreviousProductionSha', () => {
  function makeOctokit(
    deployments: Array<{ id: number; sha: string }>,
    statuses: Record<number, string[]>,
  ) {
    return {
      rest: {
        repos: {
          listDeployments: vi.fn(async () => ({ data: deployments })),
          listDeploymentStatuses: vi.fn(async ({ deployment_id }: { deployment_id: number }) => ({
            data: (statuses[deployment_id] || []).map((state) => ({ state })),
          })),
        },
      },
    } as unknown as Octokit
  }

  test('returns the most recent prior deployment that reached production', async () => {
    const octokit = makeOctokit(
      [
        { id: 3, sha: 'head' },
        { id: 2, sha: 'prev' },
        { id: 1, sha: 'older' },
      ],
      { 2: ['pending', 'success'], 1: ['success'] },
    )
    expect(await resolvePreviousProductionSha(octokit, 'github', 'docs-internal', 'head')).toBe(
      'prev',
    )
  })

  test('does not treat an inactive-only deployment as previously-live', async () => {
    const octokit = makeOctokit(
      [
        { id: 3, sha: 'never-live' },
        { id: 2, sha: 'prev' },
      ],
      { 3: ['inactive'], 2: ['success', 'inactive'] },
    )
    expect(await resolvePreviousProductionSha(octokit, 'github', 'docs-internal', 'head')).toBe(
      'prev',
    )
  })

  test('skips deployments matching the head sha', async () => {
    const octokit = makeOctokit([{ id: 3, sha: 'head' }], { 3: ['success'] })
    expect(
      await resolvePreviousProductionSha(octokit, 'github', 'docs-internal', 'head'),
    ).toBeNull()
  })

  test('returns null when no prior deployment ever succeeded', async () => {
    const octokit = makeOctokit([{ id: 2, sha: 'prev' }], { 2: ['failure', 'error'] })
    expect(
      await resolvePreviousProductionSha(octokit, 'github', 'docs-internal', 'head'),
    ).toBeNull()
  })
})

describe('getChangedContentFiles', () => {
  function makeOctokit(files: Array<{ filename: string; status: string }>) {
    return {
      rest: {
        repos: {
          compareCommitsWithBasehead: vi.fn(async () => ({ data: { files } })),
        },
      },
    } as unknown as Octokit
  }

  test('keeps changed/added content markdown, drops everything else', async () => {
    const octokit = makeOctokit([
      { filename: 'content/get-started/foo.md', status: 'modified' },
      { filename: 'content/get-started/bar.md', status: 'added' },
      { filename: 'content/get-started/gone.md', status: 'removed' },
      { filename: 'content/get-started/readme.md', status: 'modified' },
      { filename: 'data/reusables/x.md', status: 'modified' },
      { filename: 'src/foo.ts', status: 'modified' },
    ])
    const result = await getChangedContentFiles(octokit, 'github', 'docs-internal', 'base', 'head')
    expect(result).toEqual([
      { filename: 'content/get-started/foo.md', status: 'modified' },
      { filename: 'content/get-started/bar.md', status: 'added' },
      { filename: 'content/get-started/readme.md', status: 'modified' },
    ])
  })

  test('returns null when the change set is too large', async () => {
    const files = Array.from({ length: 300 }, (_unused, i) => ({
      filename: `content/x/file-${i}.md`,
      status: 'modified',
    }))
    const octokit = makeOctokit(files)
    expect(
      await getChangedContentFiles(octokit, 'github', 'docs-internal', 'base', 'head'),
    ).toBeNull()
  })
})

describe('contentFilesToEnglishUrls', () => {
  test('maps content paths to full prod URLs across versions and dedupes', () => {
    const permalinks: Record<string, string[]> = {
      'get-started/foo.md': ['/en/get-started/foo', '/en/enterprise-server@3.14/get-started/foo'],
      'get-started/bar.md': ['/en/get-started/bar'],
    }
    const urls = contentFilesToEnglishUrls(
      [
        { filename: 'content/get-started/foo.md', status: 'modified' },
        { filename: 'content/get-started/bar.md', status: 'added' },
        { filename: 'content/get-started/foo.md', status: 'modified' },
      ],
      (relativePath) => permalinks[relativePath] || [],
    )
    expect(urls).toEqual([
      'https://docs.github.com/en/get-started/foo',
      'https://docs.github.com/en/enterprise-server@3.14/get-started/foo',
      'https://docs.github.com/en/get-started/bar',
    ])
  })

  test('skips files that resolve to no permalinks', () => {
    const urls = contentFilesToEnglishUrls(
      [{ filename: 'content/unknown/page.md', status: 'modified' }],
      () => [],
    )
    expect(urls).toEqual([])
  })
})

describe('hardPurgeUrls', () => {
  // A minimal stand-in for a fetch Response, with a case-insensitive headers.get.
  function fakeResponse(
    status: number,
    { headers = {}, ok = false }: { headers?: Record<string, string>; ok?: boolean } = {},
  ) {
    const lower: Record<string, string> = {}
    for (const [k, v] of Object.entries(headers)) lower[k.toLowerCase()] = v
    return {
      ok,
      status,
      statusText: 'rate limited',
      headers: { get: (name: string) => lower[name.toLowerCase()] ?? null },
      text: async () => '',
    }
  }

  test('issues a hard URL purge per URL (no soft-purge header)', async () => {
    fetchWithRetry.mockResolvedValue({ ok: true })
    await hardPurgeUrls(
      ['https://docs.github.com/en/foo', 'https://docs.github.com/en/bar'],
      'token-123',
      2,
    )
    expect(fetchWithRetry).toHaveBeenCalledTimes(2)
    const [url, init] = fetchWithRetry.mock.calls[0]
    expect(url).toBe('https://api.fastly.com/purge/docs.github.com/en/foo')
    expect(init.method).toBe('POST')
    expect(init.headers['fastly-key']).toBe('token-123')
    expect(init.headers['fastly-soft-purge']).toBeUndefined()
  })

  test('throws if any purge fails, after attempting all of them', async () => {
    fetchWithRetry.mockResolvedValueOnce({ ok: true }).mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: 'err',
      text: async () => 'boom',
    })
    await expect(
      hardPurgeUrls(['https://docs.github.com/en/foo', 'https://docs.github.com/en/bar'], 'tok', 1),
    ).rejects.toThrow(/1 of 2 URL purge\(s\) failed/)
    expect(fetchWithRetry).toHaveBeenCalledTimes(2)
  })

  test('retries a 429, honoring the hint, then succeeds', async () => {
    fetchWithRetry
      .mockResolvedValueOnce(fakeResponse(429, { headers: { 'retry-after': '0' } }))
      .mockResolvedValueOnce(fakeResponse(200, { ok: true }))
    await hardPurgeUrls(['https://docs.github.com/en/foo'], 'tok', 1, 0, undefined, () => 0)
    expect(fetchWithRetry).toHaveBeenCalledTimes(2)
  })

  test('gives up after the retry budget and reports the URL as failed', async () => {
    fetchWithRetry.mockResolvedValue(fakeResponse(429, { headers: { 'retry-after': '0' } }))
    await expect(
      hardPurgeUrls(['https://docs.github.com/en/foo'], 'tok', 1, 0, undefined, () => 0),
    ).rejects.toThrow(/1 of 1 URL purge\(s\) failed/)
    // Initial attempt + 5 retries.
    expect(fetchWithRetry).toHaveBeenCalledTimes(6)
  })

  test('stops starting purges once the time budget is exceeded', async () => {
    fetchWithRetry.mockResolvedValue(fakeResponse(200, { ok: true }))
    // Budget below zero: the deadline is already in the past on the first loop
    // check, so no purge is attempted and every URL is reported as skipped.
    await expect(
      hardPurgeUrls(
        ['https://docs.github.com/en/foo', 'https://docs.github.com/en/bar'],
        'tok',
        1,
        0,
        -1,
      ),
    ).rejects.toThrow(/2 of 2 URL purge\(s\) failed/)
    expect(fetchWithRetry).not.toHaveBeenCalled()
  })
})

describe('rateLimitDelayMs', () => {
  function fakeResponse(headers: Record<string, string>): Response {
    const lower: Record<string, string> = {}
    for (const [k, v] of Object.entries(headers)) lower[k.toLowerCase()] = v
    return {
      headers: { get: (name: string) => lower[name.toLowerCase()] ?? null },
    } as unknown as Response
  }

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  test('honors Retry-After given in seconds', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)
    expect(rateLimitDelayMs(fakeResponse({ 'retry-after': '5' }), 0)).toBe(5000)
  })

  test('honors Retry-After given as an HTTP date', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)
    vi.useFakeTimers()
    const now = new Date('2026-01-01T00:00:00Z')
    vi.setSystemTime(now)
    const when = new Date(now.getTime() + 3000).toUTCString()
    expect(rateLimitDelayMs(fakeResponse({ 'retry-after': when }), 0)).toBe(3000)
  })

  test('honors Fastly-RateLimit-Reset as a Unix timestamp', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)
    vi.useFakeTimers()
    const now = new Date('2026-01-01T00:00:00Z')
    vi.setSystemTime(now)
    const reset = String(Math.floor(now.getTime() / 1000) + 7)
    expect(rateLimitDelayMs(fakeResponse({ 'fastly-ratelimit-reset': reset }), 0)).toBe(7000)
  })

  test('adds jitter on top of a server hint to decorrelate workers', () => {
    // Math.random -> 0.5 gives jitter = floor(0.5 * 150) = 75ms, added on top of
    // the honored 5000ms hint so concurrent workers don't wake in lockstep.
    vi.spyOn(Math, 'random').mockReturnValue(0.5)
    expect(rateLimitDelayMs(fakeResponse({ 'retry-after': '5' }), 0)).toBe(5075)
  })

  test('falls back to additive backoff when no hint is present', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)
    expect(rateLimitDelayMs(fakeResponse({}), 0)).toBe(1000)
    expect(rateLimitDelayMs(fakeResponse({}), 2)).toBe(3000)
  })

  test('clamps any delay to the maximum', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)
    // 1000 * (40 + 1) would be 41,000ms; clamped to 30,000.
    expect(rateLimitDelayMs(fakeResponse({}), 40)).toBe(30_000)
    // A far-future server hint is likewise capped.
    expect(rateLimitDelayMs(fakeResponse({ 'retry-after': '99999' }), 0)).toBe(30_000)
  })

  test('floors a stale or zero hint at the backoff instead of retrying instantly', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)
    // A negative Retry-After and an already-elapsed reset both compute to <= 0,
    // but must not collapse the retry to 0ms; they floor at the backoff.
    expect(rateLimitDelayMs(fakeResponse({ 'retry-after': '-5' }), 0)).toBe(1000)
    expect(rateLimitDelayMs(fakeResponse({ 'fastly-ratelimit-reset': '1' }), 0)).toBe(1000)
    // The floor grows with the attempt count, same as a hintless backoff.
    expect(rateLimitDelayMs(fakeResponse({ 'retry-after': '0' }), 2)).toBe(3000)
  })
})
