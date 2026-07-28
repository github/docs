import { afterEach, describe, expect, test, vi } from 'vitest'
import type { Octokit } from '@octokit/rest'

const fetchWithRetry = vi.fn()
vi.mock('@/frame/lib/fetch-utils', () => ({
  fetchWithRetry: (...args: unknown[]) => fetchWithRetry(...args),
}))

const {
  resolvePreviousProductionSha,
  getChangedContentFiles,
  contentFilesToPageKeys,
  chunk,
  hardPurgeSurrogateKeys,
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

describe('contentFilesToPageKeys', () => {
  test('maps content files to one deduped English page key each', () => {
    const keys = contentFilesToPageKeys([
      { filename: 'content/get-started/foo.md', status: 'modified' },
      { filename: 'content/get-started/bar.md', status: 'added' },
      { filename: 'content/get-started/foo.md', status: 'modified' },
    ])
    // One key per source page, deduped, covering every version-URL of the page.
    expect(keys).toEqual([
      'language:en,path:get-started/foo.md',
      'language:en,path:get-started/bar.md',
    ])
  })

  test('honors an explicit language', () => {
    expect(
      contentFilesToPageKeys([{ filename: 'content/x/y.md', status: 'modified' }], 'ja'),
    ).toEqual(['language:ja,path:x/y.md'])
  })

  test('returns an empty list for no files', () => {
    expect(contentFilesToPageKeys([])).toEqual([])
  })
})

describe('chunk', () => {
  test('splits into batches of at most the given size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
  })

  test('returns no batches for an empty list', () => {
    expect(chunk([], 256)).toEqual([])
  })
})

describe('hardPurgeSurrogateKeys', () => {
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

  test('sends one hard batch purge with a surrogate_keys body (no soft header)', async () => {
    fetchWithRetry.mockResolvedValue({ ok: true })
    await hardPurgeSurrogateKeys(
      ['language:en,path:a.md', 'language:en,path:b.md'],
      'token-123',
      'svc-1',
    )
    expect(fetchWithRetry).toHaveBeenCalledTimes(1)
    const [url, init] = fetchWithRetry.mock.calls[0]
    expect(url).toBe('https://api.fastly.com/service/svc-1/purge')
    expect(init.method).toBe('POST')
    expect(init.headers['fastly-key']).toBe('token-123')
    expect(init.headers['fastly-soft-purge']).toBeUndefined()
    expect(JSON.parse(init.body)).toEqual({
      surrogate_keys: ['language:en,path:a.md', 'language:en,path:b.md'],
    })
  })

  test('splits more than 256 keys into multiple batches', async () => {
    fetchWithRetry.mockResolvedValue({ ok: true })
    const keys = Array.from({ length: 257 }, (_unused, i) => `language:en,path:p${i}.md`)
    await hardPurgeSurrogateKeys(keys, 'tok', 'svc')
    expect(fetchWithRetry).toHaveBeenCalledTimes(2)
    expect(JSON.parse(fetchWithRetry.mock.calls[0][1].body).surrogate_keys).toHaveLength(256)
    expect(JSON.parse(fetchWithRetry.mock.calls[1][1].body).surrogate_keys).toHaveLength(1)
  })

  test('throws if any batch fails, after attempting all of them', async () => {
    fetchWithRetry.mockResolvedValueOnce({ ok: true }).mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: 'err',
      text: async () => 'boom',
    })
    const keys = Array.from({ length: 300 }, (_unused, i) => `language:en,path:p${i}.md`)
    await expect(hardPurgeSurrogateKeys(keys, 'tok', 'svc')).rejects.toThrow(
      /1 of 2 batch purge\(s\) failed/,
    )
    expect(fetchWithRetry).toHaveBeenCalledTimes(2)
  })

  test('retries a 429, honoring the hint, then succeeds', async () => {
    fetchWithRetry
      .mockResolvedValueOnce(fakeResponse(429, { headers: { 'retry-after': '0' } }))
      .mockResolvedValueOnce(fakeResponse(200, { ok: true }))
    await hardPurgeSurrogateKeys(['language:en,path:a.md'], 'tok', 'svc', () => 0)
    expect(fetchWithRetry).toHaveBeenCalledTimes(2)
  })

  test('gives up after the retry budget and reports the batch as failed', async () => {
    fetchWithRetry.mockResolvedValue(fakeResponse(429, { headers: { 'retry-after': '0' } }))
    await expect(
      hardPurgeSurrogateKeys(['language:en,path:a.md'], 'tok', 'svc', () => 0),
    ).rejects.toThrow(/1 of 1 batch purge\(s\) failed/)
    // Initial attempt + 5 retries.
    expect(fetchWithRetry).toHaveBeenCalledTimes(6)
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
    // the honored 5000ms hint so concurrent retries don't wake in lockstep.
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
