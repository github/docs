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
})
