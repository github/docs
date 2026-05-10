/**
 * Unit tests for src/rest/lib/index.ts (PR #60342 changes)
 *
 * Covers:
 *   1. Two-tier cache: fpt/ghec → pinnedCache, other versions → lruCache
 *   2. In-flight deduplication: concurrent cold-cache requests share one readFile call
 *   3. Brotli fallback: any error reading/decompressing .br falls back to .json
 */

import { describe, test, expect, vi, beforeEach } from 'vitest'

// ---------------------------------------------------------------------------
// Module-level mocks – declared before any dynamic imports so that vi.mock
// hoisting places them before the module under test is first evaluated.
// ---------------------------------------------------------------------------

vi.mock('fs', async (importOriginal) => {
  const real = await importOriginal<typeof import('fs')>()
  const readFile = vi.fn()
  // Only intercept readdirSync calls for the REST content dir (used at module
  // scope in index.ts). All other callers (all-products, etc.) get real fs.
  const readdirSync = vi.fn((...args: Parameters<typeof real.readdirSync>) => {
    const p = String(args[0])
    if (p === 'content/rest' || p.endsWith('/content/rest')) {
      return [] as ReturnType<typeof real.readdirSync>
    }
    return real.readdirSync(...(args as Parameters<typeof real.readdirSync>))
  })
  return {
    ...real,
    default: {
      ...real,
      readdirSync,
      promises: { ...real.promises, readFile },
    },
    promises: { ...real.promises, readFile },
    readdirSync,
  }
})

vi.mock('@/languages/lib/languages-server', async (importOriginal) => {
  const real = await importOriginal<typeof import('@/languages/lib/languages-server')>()
  return {
    ...real,
    default: { en: {} },
  }
})

// getOpenApiVersion is mocked with a spy; the rest of the module is real so
// transitive dependencies (all-products, non-enterprise-default-version, etc.)
// continue to work correctly.
vi.mock('@/versions/lib/all-versions', async (importOriginal) => {
  const real = await importOriginal<typeof import('@/versions/lib/all-versions')>()
  return {
    ...real,
    getOpenApiVersion: vi.fn((version: string) => {
      if (version.startsWith('free-pro-team')) return 'fpt'
      if (version.startsWith('enterprise-cloud')) return 'ghec'
      if (version.startsWith('enterprise-server')) {
        const release = version.split('@')[1] ?? '3.10'
        return `ghes-${release}`
      }
      return real.getOpenApiVersion(version)
    }),
  }
})

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function enoent(path = 'fake'): NodeJS.ErrnoException {
  const err = new Error(
    `ENOENT: no such file or directory, open '${path}'`,
  ) as NodeJS.ErrnoException
  err.code = 'ENOENT'
  return err
}

const FAKE_DATA: Record<string, string[]> = { ops: ['GET /repos'] }
const FAKE_JSON = JSON.stringify(FAKE_DATA)

// ---------------------------------------------------------------------------
// Re-import a fresh module instance before each test so module-level state
// (pinnedCache, lruCache, inflight) is empty.
// ---------------------------------------------------------------------------

type GetRest = (
  version: string,
  apiVersion: string | undefined,
  category: string,
) => Promise<Record<string, string[]>>

type FsMock = {
  readdirSync: ReturnType<typeof vi.fn>
  promises: { readFile: ReturnType<typeof vi.fn> }
}

let getRest: GetRest
let pinnedCache: Map<string, unknown>
let lruCache: { has: (k: string) => boolean; get: (k: string) => unknown; size: number }
let fsMock: FsMock

beforeEach(async () => {
  vi.resetModules()

  // Import fs mock to configure per-test readFile behaviour.
  const fsModule = await import('fs')
  fsMock = fsModule.default as unknown as FsMock

  // Reset all call counts.
  vi.mocked(fsMock.promises.readFile).mockReset()
  vi.mocked(fsMock.readdirSync).mockReset()

  // Re-import the module under test with a clean slate.
  const mod = await import('@/rest/lib/index')
  getRest = mod.default as unknown as GetRest
  pinnedCache = mod.pinnedCache as unknown as Map<string, unknown>
  lruCache = mod.lruCache as unknown as {
    has: (k: string) => boolean
    get: (k: string) => unknown
    size: number
  }
})

// ---------------------------------------------------------------------------
// 1. Two-tier cache routing
// ---------------------------------------------------------------------------

describe('two-tier cache routing', () => {
  test('fpt version lands in pinnedCache, not lruCache', async () => {
    vi.mocked(fsMock.promises.readFile)
      .mockRejectedValueOnce(enoent()) // .br attempt
      .mockResolvedValueOnce(FAKE_JSON as unknown as Buffer) // .json fallback

    await getRest('free-pro-team@latest', undefined, 'actions')

    expect(pinnedCache.size).toBe(1)
    expect(lruCache.has([...pinnedCache.keys()][0])).toBe(false)
  })

  test('ghec version lands in pinnedCache, not lruCache', async () => {
    vi.mocked(fsMock.promises.readFile)
      .mockRejectedValueOnce(enoent())
      .mockResolvedValueOnce(FAKE_JSON as unknown as Buffer)

    await getRest('enterprise-cloud@latest', undefined, 'actions')

    expect(pinnedCache.size).toBe(1)
    expect(lruCache.has([...pinnedCache.keys()][0])).toBe(false)
  })

  test('ghes version lands in lruCache, not pinnedCache', async () => {
    vi.mocked(fsMock.promises.readFile)
      .mockRejectedValueOnce(enoent())
      .mockResolvedValueOnce(FAKE_JSON as unknown as Buffer)

    await getRest('enterprise-server@3.10', undefined, 'actions')

    expect(pinnedCache.size).toBe(0)
    // lruCache is a QuickLRU which exposes .size
    expect(lruCache.size).toBe(1)
  })

  test('repeated call with same key hits cache and does not call readFile again', async () => {
    vi.mocked(fsMock.promises.readFile)
      .mockRejectedValueOnce(enoent())
      .mockResolvedValueOnce(FAKE_JSON as unknown as Buffer)

    await getRest('free-pro-team@latest', undefined, 'actions')
    await getRest('free-pro-team@latest', undefined, 'actions')

    // readFile must still have been called exactly twice (once for .br, once for .json)
    // on the first call; the second call must be a cache hit.
    expect(vi.mocked(fsMock.promises.readFile)).toHaveBeenCalledTimes(2)
  })
})

// ---------------------------------------------------------------------------
// 2. In-flight deduplication
// ---------------------------------------------------------------------------

describe('in-flight deduplication', () => {
  test('N concurrent cold-cache requests for same key share one readFile call', async () => {
    // Use a deferred to keep all three getRest() calls in flight simultaneously.
    let resolveJson!: (v: string) => void
    const deferred = new Promise<string>((r) => {
      resolveJson = r
    })

    vi.mocked(fsMock.promises.readFile).mockImplementation((p: unknown) => {
      if (String(p).endsWith('.br')) return Promise.reject(enoent())
      return deferred as unknown as Promise<Buffer>
    })

    // Launch 3 concurrent calls before the deferred resolves — all should be
    // in flight at the same time and share the single inflight promise.
    const allPromise = Promise.all([
      getRest('free-pro-team@latest', undefined, 'actions'),
      getRest('free-pro-team@latest', undefined, 'actions'),
      getRest('free-pro-team@latest', undefined, 'actions'),
    ])

    resolveJson(FAKE_JSON)
    const results = await allPromise

    // All three callers should receive the same data.
    expect(results[0]).toEqual(FAKE_DATA)
    expect(results[1]).toEqual(FAKE_DATA)
    expect(results[2]).toEqual(FAKE_DATA)

    // Dedup: all 3 callers share a single loadCategoryFile() invocation.
    // That results in exactly 2 readFile calls: one for .br (rejected) and
    // one for .json — NOT 3×2=6 calls.
    expect(vi.mocked(fsMock.promises.readFile)).toHaveBeenCalledTimes(2)
  })
})

// ---------------------------------------------------------------------------
// 3. loadCategoryFile brotli fallback
// ---------------------------------------------------------------------------

describe('loadCategoryFile brotli fallback', () => {
  test('.br missing (ENOENT) → falls back to .json and returns parsed data', async () => {
    vi.mocked(fsMock.promises.readFile)
      .mockRejectedValueOnce(enoent()) // .br
      .mockResolvedValueOnce(FAKE_JSON as unknown as Buffer) // .json

    const result = await getRest('free-pro-team@latest', undefined, 'actions')

    expect(result).toEqual(FAKE_DATA)
  })

  test('.br corrupt (bad bytes) → brotliDecompress throws → falls back to .json', async () => {
    // Buffer.from('not brotli') is not valid brotli; brotliDecompressAsync will throw.
    vi.mocked(fsMock.promises.readFile)
      .mockResolvedValueOnce(Buffer.from('not brotli') as unknown as Buffer) // .br (corrupt)
      .mockResolvedValueOnce(FAKE_JSON as unknown as Buffer) // .json fallback

    const result = await getRest('free-pro-team@latest', undefined, 'actions')

    expect(result).toEqual(FAKE_DATA)
  })

  test('both .br and .json missing → getRest rejects', async () => {
    vi.mocked(fsMock.promises.readFile)
      .mockRejectedValueOnce(enoent()) // .br
      .mockRejectedValueOnce(enoent()) // .json

    await expect(getRest('free-pro-team@latest', undefined, 'actions')).rejects.toThrow()
  })
})
