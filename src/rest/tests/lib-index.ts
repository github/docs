import { describe, test, expect, vi, beforeEach } from 'vitest'

// Declare mocks before dynamic imports so vi.mock hoisting beats module evaluation.

vi.mock('fs', async (importOriginal) => {
  const real = await importOriginal<typeof import('fs')>()
  const readFile = vi.fn()
  // Only intercept the REST content dir; all other readdirSync callers get real fs.
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

// Mock getOpenApiVersion only; transitive dependencies keep their real behavior.
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

function enoent(path = 'fake'): NodeJS.ErrnoException {
  const err = new Error(
    `ENOENT: no such file or directory, open '${path}'`,
  ) as NodeJS.ErrnoException
  err.code = 'ENOENT'
  return err
}

const FAKE_DATA: Record<string, string[]> = { ops: ['GET /repos'] }
const FAKE_JSON = JSON.stringify(FAKE_DATA)

// Each test re-imports a fresh module so cache state starts empty.

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

  const fsModule = await import('fs')
  fsMock = fsModule.default as unknown as FsMock

  vi.mocked(fsMock.promises.readFile).mockReset()
  vi.mocked(fsMock.readdirSync).mockReset()

  const mod = await import('@/rest/lib/index')
  getRest = mod.default as unknown as GetRest
  pinnedCache = mod.pinnedCache as unknown as Map<string, unknown>
  lruCache = mod.lruCache as unknown as {
    has: (k: string) => boolean
    get: (k: string) => unknown
    size: number
  }
})

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
    expect(lruCache.size).toBe(1)
  })

  test('repeated call with same key hits cache and does not call readFile again', async () => {
    vi.mocked(fsMock.promises.readFile)
      .mockRejectedValueOnce(enoent())
      .mockResolvedValueOnce(FAKE_JSON as unknown as Buffer)

    await getRest('free-pro-team@latest', undefined, 'actions')
    await getRest('free-pro-team@latest', undefined, 'actions')

    // The first call reads .br and .json once; the second call must hit cache.
    expect(vi.mocked(fsMock.promises.readFile)).toHaveBeenCalledTimes(2)
  })
})

describe('pinned cache compression', () => {
  test('pinnedCache stores a Buffer (compressed), not a parsed object', async () => {
    vi.mocked(fsMock.promises.readFile)
      .mockRejectedValueOnce(enoent())
      .mockResolvedValueOnce(FAKE_JSON as unknown as Buffer)

    await getRest('free-pro-team@latest', undefined, 'actions')

    const stored = [...pinnedCache.values()][0]
    expect(Buffer.isBuffer(stored)).toBe(true)
  })

  test('getRest returns correct parsed data from compressed pinnedCache on cache hit', async () => {
    vi.mocked(fsMock.promises.readFile)
      .mockRejectedValueOnce(enoent())
      .mockResolvedValueOnce(FAKE_JSON as unknown as Buffer)

    const first = await getRest('free-pro-team@latest', undefined, 'actions')
    const second = await getRest('free-pro-team@latest', undefined, 'actions')

    expect(first).toEqual(FAKE_DATA)
    expect(second).toEqual(FAKE_DATA)
  })

  test('lruCache stores parsed objects, not Buffers', async () => {
    vi.mocked(fsMock.promises.readFile)
      .mockRejectedValueOnce(enoent())
      .mockResolvedValueOnce(FAKE_JSON as unknown as Buffer)

    await getRest('enterprise-server@3.10', undefined, 'actions')

    const stored = lruCache.get([...(lruCache as unknown as Map<string, unknown>).keys()][0])
    expect(Buffer.isBuffer(stored)).toBe(false)
    expect(stored).toEqual(FAKE_DATA)
  })
})

describe('in-flight deduplication', () => {
  test('N concurrent cold-cache requests for same key share one readFile call', async () => {
    // Use a deferred to keep all three getRest calls in flight simultaneously.
    let resolveJson!: (v: string) => void
    const deferred = new Promise<string>((r) => {
      resolveJson = r
    })

    vi.mocked(fsMock.promises.readFile).mockImplementation((p: unknown) => {
      if (String(p).endsWith('.br')) return Promise.reject(enoent())
      return deferred as unknown as Promise<Buffer>
    })

    // Launch 3 calls before the deferred resolves so they share the inflight promise.
    const allPromise = Promise.all([
      getRest('free-pro-team@latest', undefined, 'actions'),
      getRest('free-pro-team@latest', undefined, 'actions'),
      getRest('free-pro-team@latest', undefined, 'actions'),
    ])

    resolveJson(FAKE_JSON)
    const results = await allPromise

    expect(results[0]).toEqual(FAKE_DATA)
    expect(results[1]).toEqual(FAKE_DATA)
    expect(results[2]).toEqual(FAKE_DATA)

    // One shared loadCategoryFile call means 2 readFile calls, not 6.
    expect(vi.mocked(fsMock.promises.readFile)).toHaveBeenCalledTimes(2)
  })
})

describe('loadCategoryFile brotli fallback', () => {
  test('.br missing (ENOENT) → falls back to .json and returns parsed data', async () => {
    vi.mocked(fsMock.promises.readFile)
      .mockRejectedValueOnce(enoent()) // .br
      .mockResolvedValueOnce(FAKE_JSON as unknown as Buffer) // .json

    const result = await getRest('free-pro-team@latest', undefined, 'actions')

    expect(result).toEqual(FAKE_DATA)
  })

  test('.br corrupt (bad bytes) → brotliDecompress throws → falls back to .json', async () => {
    // Buffer.from('not brotli') is not valid brotli, so decompression throws.
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
