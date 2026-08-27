import { describe, test, expect, vi, beforeEach } from 'vitest'
import type { Response, NextFunction } from 'express'
import type { ExtendedRequest, Page, ResolvedArticle } from '@/types'
import findPage from '@/frame/lib/find-page'
import resolveCarousels from '../middleware/resolve-carousels'

// Mock the findPage function
vi.mock('@/frame/lib/find-page', () => ({
  default: vi.fn(),
}))

// Mock the renderContent function
vi.mock('@/content-render/index', () => ({
  renderContent: vi.fn((content, _context, options) => {
    // When textOnly is true, return plain text (no HTML wrapper)
    if (options?.textOnly) {
      return content
    }
    return `<p>${content}</p>`
  }),
}))

describe('resolveCarousels middleware', () => {
  const mockFindPage = vi.mocked(findPage)

  type TestPage = Partial<Page> & {
    rawCarousels?: Record<string, string[]>
  }

  const createMockRequest = (
    pageData: TestPage = {},
    contextData: Partial<ExtendedRequest['context']> & { pages?: Record<string, Page> } = {},
  ): ExtendedRequest => {
    const { pages: pagesOverride, ...restContext } = contextData
    const hasPagesOverride = Object.prototype.hasOwnProperty.call(contextData, 'pages')
    const pages = hasPagesOverride
      ? pagesOverride
      : ({
          '/test-article': {
            title: 'Test Article',
            intro: 'Test intro',
            relativePath: 'test/article.md',
          } as unknown as Page,
        } as Record<string, Page>)

    return {
      context: {
        page: pageData as Page,
        pages,
        redirects: {},
        currentVersion: 'free-pro-team@latest',
        currentLanguage: 'en',
        ...restContext,
      },
    } as unknown as ExtendedRequest
  }

  const mockRes = {} as Response
  const mockNext = vi.fn() as NextFunction

  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('should call next when no context', async () => {
    const req = {} as ExtendedRequest

    await resolveCarousels(req, mockRes, mockNext)

    expect(mockNext).toHaveBeenCalled()
    expect(mockFindPage).not.toHaveBeenCalled()
  })

  test('should call next when no page', async () => {
    const req = { context: {} } as ExtendedRequest

    await resolveCarousels(req, mockRes, mockNext)

    expect(mockNext).toHaveBeenCalled()
    expect(mockFindPage).not.toHaveBeenCalled()
  })

  test('should call next when no pages collection', async () => {
    const req = createMockRequest(
      { rawCarousels: { recommended: ['/test-article'] } },
      { pages: undefined },
    )

    await resolveCarousels(req, mockRes, mockNext)

    expect(mockNext).toHaveBeenCalled()
    expect(mockFindPage).not.toHaveBeenCalled()
  })

  test('should call next when no rawCarousels', async () => {
    const req = createMockRequest()

    await resolveCarousels(req, mockRes, mockNext)

    expect(mockNext).toHaveBeenCalled()
    expect(mockFindPage).not.toHaveBeenCalled()
  })

  test('should resolve carousel articles when they exist', async () => {
    const testPage: Partial<import('@/types').Page> = {
      title: 'Test Article',
      intro: 'Test intro',
      relativePath: 'copilot/tutorials/article.md',
      applicableVersions: ['free-pro-team@latest'],
    }

    mockFindPage.mockReturnValue(testPage as unknown as Page)

    const req = createMockRequest({
      rawCarousels: { recommended: ['/copilot/tutorials/article'] },
    })

    await resolveCarousels(req, mockRes, mockNext)

    expect(mockFindPage).toHaveBeenCalledWith(
      '/en/copilot/tutorials/article',
      req.context!.pages,
      req.context!.redirects,
    )
    expect(
      (req.context!.page as Page & { carousels?: Record<string, ResolvedArticle[]> }).carousels,
    ).toEqual({
      recommended: [
        {
          title: 'Test Article',
          intro: 'Test intro',
          href: '/copilot/tutorials/article',
          category: ['copilot', 'tutorials'],
        },
      ],
    })
    expect(mockNext).toHaveBeenCalled()
  })

  test('should resolve multiple carousels', async () => {
    const testPage1: Partial<import('@/types').Page> = {
      title: 'Article One',
      intro: 'Intro one',
      relativePath: 'test/article-one.md',
      applicableVersions: ['free-pro-team@latest'],
    }
    const testPage2: Partial<import('@/types').Page> = {
      title: 'Article Two',
      intro: 'Intro two',
      relativePath: 'test/article-two.md',
      applicableVersions: ['free-pro-team@latest'],
    }

    mockFindPage
      .mockReturnValueOnce(testPage1 as unknown as Page)
      .mockReturnValueOnce(testPage2 as unknown as Page)

    const req = createMockRequest({
      rawCarousels: {
        recommended: ['/test/article-one'],
        featured: ['/test/article-two'],
      },
    })

    await resolveCarousels(req, mockRes, mockNext)

    expect(
      (req.context!.page as Page & { carousels?: Record<string, ResolvedArticle[]> }).carousels,
    ).toEqual({
      recommended: [
        {
          title: 'Article One',
          intro: 'Intro one',
          href: '/test/article-one',
          category: ['test'],
        },
      ],
      featured: [
        {
          title: 'Article Two',
          intro: 'Intro two',
          href: '/test/article-two',
          category: ['test'],
        },
      ],
    })
    expect(mockNext).toHaveBeenCalled()
  })

  test('should handle articles not found', async () => {
    mockFindPage.mockReturnValue(undefined)

    const req = createMockRequest({
      rawCarousels: { recommended: ['/nonexistent-article'] },
    })

    await resolveCarousels(req, mockRes, mockNext)

    expect(mockFindPage).toHaveBeenCalledWith(
      '/en/nonexistent-article',
      req.context!.pages,
      req.context!.redirects,
    )
    // Carousel should not be added if all articles are not found
    expect(
      (req.context!.page as Page & { carousels?: Record<string, ResolvedArticle[]> }).carousels,
    ).toBeUndefined()
    expect(mockNext).toHaveBeenCalled()
  })

  test('should handle errors gracefully', async () => {
    mockFindPage.mockImplementation(() => {
      throw new Error('Test error')
    })

    const req = createMockRequest({
      rawCarousels: { recommended: ['/error-article'] },
    })

    await resolveCarousels(req, mockRes, mockNext)

    // Should still call next even on error
    expect(mockNext).toHaveBeenCalled()
  })

  test('should handle mixed valid and invalid articles', async () => {
    const testPage: Partial<import('@/types').Page> = {
      title: 'Valid Article',
      intro: 'Valid intro',
      relativePath: 'test/valid.md',
      applicableVersions: ['free-pro-team@latest'],
    }

    mockFindPage.mockReturnValueOnce(testPage as unknown as Page).mockReturnValueOnce(undefined)

    const req = createMockRequest({
      rawCarousels: { recommended: ['/valid-article', '/invalid-article'] },
    })

    await resolveCarousels(req, mockRes, mockNext)

    expect(
      (req.context!.page as Page & { carousels?: Record<string, ResolvedArticle[]> }).carousels,
    ).toEqual({
      recommended: [
        {
          title: 'Valid Article',
          intro: 'Valid intro',
          href: '/test/valid',
          category: ['test'],
        },
      ],
    })
    expect(mockNext).toHaveBeenCalled()
  })

  test('should try page-relative path when content-relative fails', async () => {
    const testPage: Partial<import('@/types').Page> = {
      title: 'Relative Article',
      intro: 'Relative intro',
      relativePath: 'copilot/relative-article.md',
      applicableVersions: ['free-pro-team@latest'],
    }

    // Mock findPage to fail on first call (content-relative) and succeed on second (page-relative)
    mockFindPage.mockReturnValueOnce(undefined).mockReturnValueOnce(testPage as unknown as Page)

    const req = createMockRequest({
      rawCarousels: { recommended: ['relative-article'] },
      relativePath: 'copilot/index.md',
    })

    await resolveCarousels(req, mockRes, mockNext)

    expect(mockFindPage).toHaveBeenCalledTimes(2)
    expect(mockFindPage).toHaveBeenCalledWith(
      '/en/relative-article',
      req.context!.pages,
      req.context!.redirects,
    )
    expect(mockFindPage).toHaveBeenCalledWith(
      '/en/copilot/relative-article',
      req.context!.pages,
      req.context!.redirects,
    )
    expect(
      (req.context!.page as Page & { carousels?: Record<string, ResolvedArticle[]> }).carousels,
    ).toEqual({
      recommended: [
        {
          title: 'Relative Article',
          intro: 'Relative intro',
          href: '/copilot/relative-article',
          category: ['copilot'],
        },
      ],
    })
    expect(mockNext).toHaveBeenCalled()
  })

  test('returns paths without language or version prefixes', async () => {
    const testPage: Partial<import('@/types').Page> = {
      title: 'Tutorial Page',
      intro: 'Tutorial intro',
      relativePath: 'copilot/tutorials/tutorial-page/index.md',
      applicableVersions: ['free-pro-team@latest'],
    }

    mockFindPage.mockReturnValue(testPage as unknown as Page)

    const req = createMockRequest({
      rawCarousels: { recommended: ['/copilot/tutorials/tutorial-page'] },
    })

    await resolveCarousels(req, mockRes, mockNext)

    expect(mockFindPage).toHaveBeenCalledWith(
      '/en/copilot/tutorials/tutorial-page',
      req.context!.pages,
      req.context!.redirects,
    )

    // Verify that the href is a clean path without language/version
    expect(
      (req.context!.page as Page & { carousels?: Record<string, ResolvedArticle[]> }).carousels,
    ).toEqual({
      recommended: [
        {
          title: 'Tutorial Page',
          intro: 'Tutorial intro',
          href: '/copilot/tutorials/tutorial-page',
          category: ['copilot', 'tutorials', 'tutorial-page'],
        },
      ],
    })
    expect(mockNext).toHaveBeenCalled()
  })

  test('should filter out articles not available in current version', async () => {
    // Create a test page that is only available in fpt, not ghec
    const fptOnlyPage: Partial<import('@/types').Page> = {
      title: 'FPT Only Article',
      intro: 'This article is only for FPT',
      relativePath: 'test/fpt-only.md',
      applicableVersions: ['free-pro-team@latest'], // Not available in ghec
    }

    mockFindPage.mockReturnValue(fptOnlyPage as unknown as Page)

    // Create a request context where we're viewing the GHEC version
    const req = createMockRequest(
      { rawCarousels: { recommended: ['/test/fpt-only'] } },
      {
        currentVersion: 'enterprise-cloud@latest', // Current context is GHEC, not FPT
        currentLanguage: 'en',
      },
    )

    await resolveCarousels(req, mockRes, mockNext)

    // The carousels should not be added since the article isn't available in enterprise-cloud
    expect(
      (req.context!.page as Page & { carousels?: Record<string, ResolvedArticle[]> }).carousels,
    ).toBeUndefined()
    expect(mockNext).toHaveBeenCalled()
  })

  test('should deduplicate articles within a carousel', async () => {
    const testPage: Partial<import('@/types').Page> = {
      title: 'Duplicate Article',
      intro: 'Duplicate intro',
      relativePath: 'test/duplicate.md',
      applicableVersions: ['free-pro-team@latest'],
    }

    mockFindPage.mockReturnValue(testPage as unknown as Page)

    const req = createMockRequest({
      rawCarousels: { recommended: ['/test/duplicate', '/test/duplicate', '/test/duplicate'] },
    })

    await resolveCarousels(req, mockRes, mockNext)

    // Should only have one article, not three duplicates
    expect(
      (req.context!.page as Page & { carousels?: Record<string, ResolvedArticle[]> }).carousels,
    ).toEqual({
      recommended: [
        {
          title: 'Duplicate Article',
          intro: 'Duplicate intro',
          href: '/test/duplicate',
          category: ['test'],
        },
      ],
    })
    expect(mockNext).toHaveBeenCalled()
  })
})
