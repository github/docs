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
  purgeSurrogateKeys,
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
    // One surrogate key covers every version URL for a source page.
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

describe('purgeSurrogateKeys', () => {
  // Tests skip the 20-second between-pass delay.
  const noSleep = async () => {}

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

  test('sends one hard batch purge per pass with a surrogate_keys body (no soft header)', async () => {
    fetchWithRetry.mockResolvedValue({ ok: true })
    await purgeSurrogateKeys(
      ['language:en,path:a.md', 'language:en,path:b.md'],
      'token-123',
      'svc-1',
      { sleepFn: noSleep },
    )
    expect(fetchWithRetry).toHaveBeenCalledTimes(2)
    const [url, init] = fetchWithRetry.mock.calls[0]
    expect(url).toBe('https://api.fastly.com/service/svc-1/purge')
    expect(init.method).toBe('POST')
    expect(init.headers['fastly-key']).toBe('token-123')
    expect(init.headers['fastly-soft-purge']).toBeUndefined()
    expect(JSON.parse(init.body)).toEqual({
      surrogate_keys: ['language:en,path:a.md', 'language:en,path:b.md'],
    })
    expect(fetchWithRetry.mock.calls[1][1].body).toBe(init.body)
  })

  test('sends the soft-purge header when soft is set', async () => {
    fetchWithRetry.mockResolvedValue({ ok: true })
    await purgeSurrogateKeys(['language:en'], 'tok', 'svc', { soft: true, sleepFn: noSleep })
    expect(fetchWithRetry).toHaveBeenCalledTimes(2)
    for (const [, init] of fetchWithRetry.mock.calls) {
      expect(init.headers['fastly-soft-purge']).toBe('1')
    }
  })

  test('waits between the two passes to let the shield re-populate first', async () => {
    fetchWithRetry.mockResolvedValue({ ok: true })
    const waits: number[] = []
    await purgeSurrogateKeys(['language:en,path:a.md'], 'tok', 'svc', {
      sleepFn: async (ms: number) => {
        waits.push(ms)
      },
    })
    expect(waits).toEqual([20_000])
  })

  test('splits more than 256 keys into multiple batches, per pass', async () => {
    fetchWithRetry.mockResolvedValue({ ok: true })
    const keys = Array.from({ length: 257 }, (_unused, i) => `language:en,path:p${i}.md`)
    await purgeSurrogateKeys(keys, 'tok', 'svc', { sleepFn: noSleep })
    // 2 batches x 2 passes.
    expect(fetchWithRetry).toHaveBeenCalledTimes(4)
    expect(JSON.parse(fetchWithRetry.mock.calls[0][1].body).surrogate_keys).toHaveLength(256)
    expect(JSON.parse(fetchWithRetry.mock.calls[1][1].body).surrogate_keys).toHaveLength(1)
    expect(JSON.parse(fetchWithRetry.mock.calls[2][1].body).surrogate_keys).toHaveLength(256)
    expect(JSON.parse(fetchWithRetry.mock.calls[3][1].body).surrogate_keys).toHaveLength(1)
  })

  test('throws if any batch fails, after attempting all of them in both passes', async () => {
    fetchWithRetry.mockResolvedValueOnce({ ok: true }).mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: 'err',
      text: async () => 'boom',
    })
    fetchWithRetry.mockResolvedValue({ ok: true })
    const keys = Array.from({ length: 300 }, (_unused, i) => `language:en,path:p${i}.md`)
    await expect(purgeSurrogateKeys(keys, 'tok', 'svc', { sleepFn: noSleep })).rejects.toThrow(
      /1 of 4 batch purge\(s\) failed/,
    )
    expect(fetchWithRetry).toHaveBeenCalledTimes(4)
  })

  test('still runs the second pass when the first one fails outright', async () => {
    fetchWithRetry
      .mockResolvedValueOnce({
        ok: false,
        status: 500,
        statusText: 'err',
        text: async () => 'boom',
      })
      .mockResolvedValue({ ok: true })
    await expect(
      purgeSurrogateKeys(['language:en,path:a.md'], 'tok', 'svc', { sleepFn: noSleep }),
    ).rejects.toThrow(/1 of 2 batch purge\(s\) failed/)
    expect(fetchWithRetry).toHaveBeenCalledTimes(2)
  })

  test('retries a 429, honoring the hint, then succeeds', async () => {
    fetchWithRetry
      .mockResolvedValueOnce(fakeResponse(429, { headers: { 'retry-after': '0' } }))
      .mockResolvedValue(fakeResponse(200, { ok: true }))
    await purgeSurrogateKeys(['language:en,path:a.md'], 'tok', 'svc', {
      rateLimitDelayFn: () => 0,
      sleepFn: noSleep,
    })
    // The first pass gets a 429 and retries once; the second pass makes one call.
    expect(fetchWithRetry).toHaveBeenCalledTimes(3)
  })

  test('gives up after the retry budget and reports the batch as failed', async () => {
    fetchWithRetry.mockResolvedValue(fakeResponse(429, { headers: { 'retry-after': '0' } }))
    await expect(
      purgeSurrogateKeys(['language:en,path:a.md'], 'tok', 'svc', {
        rateLimitDelayFn: () => 0,
        sleepFn: noSleep,
      }),
    ).rejects.toThrow(/2 of 2 batch purge\(s\) failed/)
    // Initial attempt plus 5 retries, times 2 passes.
    expect(fetchWithRetry).toHaveBeenCalledTimes(12)
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
    // Math.random of 0.5 adds 75 ms to the 5000 ms hint, so retries do not wake together.
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
    // 1000 * (40 + 1) would be 41,000 ms, so the 30,000 ms cap applies.
    expect(rateLimitDelayMs(fakeResponse({}), 40)).toBe(30_000)
    // The 30,000 ms cap also applies to far-future server hints.
    expect(rateLimitDelayMs(fakeResponse({ 'retry-after': '99999' }), 0)).toBe(30_000)
  })

  test('floors a stale or zero hint at the backoff instead of retrying instantly', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)
    // Negative Retry-After and elapsed reset hints floor at backoff, so retries never hit 0 ms.
    expect(rateLimitDelayMs(fakeResponse({ 'retry-after': '-5' }), 0)).toBe(1000)
    expect(rateLimitDelayMs(fakeResponse({ 'fastly-ratelimit-reset': '1' }), 0)).toBe(1000)
    // Hint floors use the same attempt-based backoff as missing hints.
    expect(rateLimitDelayMs(fakeResponse({ 'retry-after': '0' }), 2)).toBe(3000)
  })
})
