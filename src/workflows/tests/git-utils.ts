import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

const searchCode = vi.fn()
vi.mock('@/workflows/github', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/workflows/github')>()
  return {
    ...actual,
    retryingGithub: () => ({ rest: { search: { code: searchCode } } }),
  }
})

const { getPathsWithMatchingStrings } = await import('@/workflows/git-utils')

function servesPage(paths: string[], totalCount: number) {
  return { data: { total_count: totalCount, items: paths.map((path) => ({ path })) } }
}

beforeEach(() => {
  vi.spyOn(console, 'log').mockImplementation(() => {})
})

afterEach(() => {
  vi.restoreAllMocks()
  searchCode.mockReset()
})

describe('getPathsWithMatchingStrings', () => {
  test('sends the search text without a q= prefix', async () => {
    searchCode.mockResolvedValue(servesPage(['app/a.rb', 'app/b.rb'], 2))

    const options = { cache: false }
    const paths = await getPathsWithMatchingStrings(
      ['https://docs.github.com'],
      'github',
      'github',
      options,
    )

    // Octokit adds the q= parameter name, so a prefix here becomes part of the search text.
    expect(searchCode).toHaveBeenCalledTimes(1)
    expect(searchCode.mock.calls[0][0].q).toBe('https://docs.github.com+in:file+repo:github/github')
    expect([...paths]).toEqual(['app/a.rb', 'app/b.rb'])
  })

  test('stops at the 1000 result limit of the search API', async () => {
    let page = 0
    searchCode.mockImplementation(async () => {
      page++
      return servesPage(
        Array.from({ length: 100 }, (_, i) => `file-${page}-${i}.rb`),
        5000,
      )
    })

    const paths = await getPathsWithMatchingStrings(['GitHub'], 'github', 'github', {
      cache: false,
    })

    expect(searchCode).toHaveBeenCalledTimes(10)
    expect(paths.size).toBe(1000)
  })

  test('stops after page 10 when a page returns fewer items than requested', async () => {
    let page = 0
    searchCode.mockImplementation(async () => {
      page++
      // Search can return a partial page when it times out.
      const length = page === 1 ? 99 : 100
      return servesPage(
        Array.from({ length }, (_, i) => `file-${page}-${i}.rb`),
        5000,
      )
    })

    const paths = await getPathsWithMatchingStrings(['GitHub'], 'github', 'github', {
      cache: false,
    })

    expect(searchCode).toHaveBeenCalledTimes(10)
    expect(paths.size).toBe(999)
  })

  test('stops when a page has no items', async () => {
    searchCode
      .mockResolvedValueOnce(servesPage(['app/a.rb'], 50))
      .mockResolvedValueOnce(servesPage([], 50))

    const paths = await getPathsWithMatchingStrings(['GitHub'], 'github', 'github', {
      cache: false,
    })

    expect(searchCode).toHaveBeenCalledTimes(2)
    expect([...paths]).toEqual(['app/a.rb'])
  })
})
