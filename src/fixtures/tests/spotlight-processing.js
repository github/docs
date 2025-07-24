import { describe, expect, test } from 'vitest'

// Mock data to simulate tocItems and spotlight configurations
const mockTocItems = [
  {
    title: 'Test Debug Article',
    intro: 'A test article for debugging functionality.',
    fullPath: '/en/category/debugging-errors/test-debug-article',
  },
  {
    title: 'Test Refactor Article',
    intro: 'A test article for refactoring functionality.',
    fullPath: '/en/category/refactoring-code/test-refactor-article',
  },
  {
    title: 'Test Unit Article',
    intro: 'A test article for unit testing functionality.',
    fullPath: '/en/category/testing-code/test-unit-article',
  },
]

// Helper function to simulate the spotlight processing logic from CategoryLanding
function processSpotlight(spotlight, tocItems) {
  const findArticleData = (articlePath) => {
    const cleanPath = articlePath.startsWith('/') ? articlePath.slice(1) : articlePath
    return tocItems.find(
      (item) =>
        item.fullPath?.endsWith(cleanPath) ||
        item.fullPath?.includes(cleanPath.split('/').pop() || ''),
    )
  }

  return (
    spotlight?.map((spotlightItem) => {
      const articleData = findArticleData(spotlightItem.article)
      return {
        article: spotlightItem.article,
        title: articleData?.title || 'Unknown Article',
        description: articleData?.intro || '',
        url: articleData?.fullPath || spotlightItem.article,
        image: spotlightItem.image,
      }
    }) || []
  )
}

describe('spotlight processing logic', () => {
  test('processes spotlight object items correctly', () => {
    const spotlight = [
      {
        article: '/debugging-errors/test-debug-article',
        image: '/assets/images/test-debugging.png',
      },
      {
        article: '/refactoring-code/test-refactor-article',
        image: '/assets/images/test-refactoring.png',
      },
    ]

    const result = processSpotlight(spotlight, mockTocItems)

    expect(result).toHaveLength(2)
    expect(result[0]).toEqual({
      article: '/debugging-errors/test-debug-article',
      title: 'Test Debug Article',
      description: 'A test article for debugging functionality.',
      url: '/en/category/debugging-errors/test-debug-article',
      image: '/assets/images/test-debugging.png',
    })
    expect(result[1]).toEqual({
      article: '/refactoring-code/test-refactor-article',
      title: 'Test Refactor Article',
      description: 'A test article for refactoring functionality.',
      url: '/en/category/refactoring-code/test-refactor-article',
      image: '/assets/images/test-refactoring.png',
    })
  })

  test('processes multiple spotlight items with different images', () => {
    const spotlight = [
      {
        article: '/debugging-errors/test-debug-article',
        image: '/assets/images/debugging.png',
      },
      {
        article: '/refactoring-code/test-refactor-article',
        image: '/assets/images/refactoring.png',
      },
      {
        article: '/testing-code/test-unit-article',
        image: '/assets/images/testing.png',
      },
    ]

    const result = processSpotlight(spotlight, mockTocItems)

    expect(result).toHaveLength(3)
    expect(result[0].image).toBe('/assets/images/debugging.png')
    expect(result[1].image).toBe('/assets/images/refactoring.png')
    expect(result[2].image).toBe('/assets/images/testing.png')
    expect(result[2].title).toBe('Test Unit Article')
  })

  test('finds articles by filename when full path does not match', () => {
    const spotlight = [
      {
        article: 'test-debug-article',
        image: '/assets/images/debug.png',
      },
    ]
    const result = processSpotlight(spotlight, mockTocItems)

    expect(result[0].title).toBe('Test Debug Article')
    expect(result[0].url).toBe('/en/category/debugging-errors/test-debug-article')
    expect(result[0].image).toBe('/assets/images/debug.png')
  })

  test('handles articles not found in tocItems', () => {
    const spotlight = [
      {
        article: '/completely/nonexistent/path',
        image: '/assets/images/missing1.png',
      },
      {
        article: '/another/totally-missing-article',
        image: '/assets/images/missing2.png',
      },
    ]

    const result = processSpotlight(spotlight, mockTocItems)

    expect(result).toHaveLength(2)
    expect(result[0]).toEqual({
      article: '/completely/nonexistent/path',
      title: 'Unknown Article',
      description: '',
      url: '/completely/nonexistent/path',
      image: '/assets/images/missing1.png',
    })
    expect(result[1]).toEqual({
      article: '/another/totally-missing-article',
      title: 'Unknown Article',
      description: '',
      url: '/another/totally-missing-article',
      image: '/assets/images/missing2.png',
    })
  })

  test('handles empty spotlight array', () => {
    const spotlight = []
    const result = processSpotlight(spotlight, mockTocItems)
    expect(result).toEqual([])
  })

  test('handles undefined spotlight', () => {
    const result = processSpotlight(undefined, mockTocItems)
    expect(result).toEqual([])
  })
})
