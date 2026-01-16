import { describe, test, expect, vi, beforeEach } from 'vitest'
import type { Response, NextFunction } from 'express'
import type { ExtendedRequest, Page, ResolvedArticle } from '@/types'
import findPage from '@/frame/lib/find-page'
import resolveRecommended from '../middleware/resolve-recommended'

// Mock the findPage function
vi.mock('@/frame/lib/find-page', () => ({
  default: vi.fn(),
}))

// Mock the renderContent function
vi.mock('@/content-render/index', () => ({
  renderContent: vi.fn((content) => `<p>${content}</p>`),
}))

describe('resolveRecommended middleware', () => {
  const mockFindPage = vi.mocked(findPage)

  type TestPage = Partial<Page> & {
    rawRecommended?: string[]
    spotlight?: Array<{ article: string }>
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

    await resolveRecommended(req, mockRes, mockNext)

    expect(mockNext).toHaveBeenCalled()
    expect(mockFindPage).not.toHaveBeenCalled()
  })

  test('should call next when no page', async () => {
    const req = { context: {} } as ExtendedRequest

    await resolveRecommended(req, mockRes, mockNext)

    expect(mockNext).toHaveBeenCalled()
    expect(mockFindPage).not.toHaveBeenCalled()
  })

  test('should call next when no pages collection', async () => {
    const req = createMockRequest({ rawRecommended: ['/test-article'] }, { pages: undefined })

    await resolveRecommended(req, mockRes, mockNext)

    expect(mockNext).toHaveBeenCalled()
    expect(mockFindPage).not.toHaveBeenCalled()
  })

  test('should call next when no rawRecommended', async () => {
    const req = createMockRequest()

    await resolveRecommended(req, mockRes, mockNext)

    expect(mockNext).toHaveBeenCalled()
    expect(mockFindPage).not.toHaveBeenCalled()
  })

  test('should resolve recommended articles when they exist', async () => {
    const testPage: Partial<import('@/types').Page> = {
      title: 'Test Article',
      intro: 'Test intro',
      relativePath: 'copilot/tutorials/article.md',
      applicableVersions: ['free-pro-team@latest'],
    }

    mockFindPage.mockReturnValue(testPage as unknown as Page)

    const req = createMockRequest({ rawRecommended: ['/copilot/tutorials/article'] })

    await resolveRecommended(req, mockRes, mockNext)

    expect(mockFindPage).toHaveBeenCalledWith(
      '/en/copilot/tutorials/article',
      req.context!.pages,
      req.context!.redirects,
    )
    expect((req.context!.page as Page & { recommended?: ResolvedArticle[] }).recommended).toEqual([
      {
        title: 'Test Article',
        intro: '<p>Test intro</p>',
        href: '/copilot/tutorials/article',
        category: ['copilot', 'tutorials'],
      },
    ])
    expect(mockNext).toHaveBeenCalled()
  })

  test('should not resolve spotlight articles when there are recommended articles', async () => {
    const testPage: Partial<import('@/types').Page> = {
      title: 'Test Article',
      intro: 'Test intro',
      relativePath: 'copilot/tutorials/article.md',
      applicableVersions: ['free-pro-team@latest'],
    }

    mockFindPage.mockReturnValueOnce(testPage as unknown as Page)

    const req = createMockRequest({
      rawRecommended: ['/copilot/tutorials/article'],
      spotlight: [{ article: '/copilot/tutorials/spotlight-article' }],
    })

    await resolveRecommended(req, mockRes, mockNext)

    expect(mockFindPage).toHaveBeenCalledTimes(1)
    expect(mockFindPage).toHaveBeenCalledWith(
      '/en/copilot/tutorials/article',
      req.context!.pages,
      req.context!.redirects,
    )
    expect((req.context!.page as Page & { recommended?: ResolvedArticle[] }).recommended).toEqual([
      {
        title: 'Test Article',
        intro: '<p>Test intro</p>',
        href: '/copilot/tutorials/article',
        category: ['copilot', 'tutorials'],
      },
    ])
    expect(mockNext).toHaveBeenCalled()
  })

  test('should handle articles not found', async () => {
    mockFindPage.mockReturnValue(undefined)

    const req = createMockRequest({ rawRecommended: ['/nonexistent-article'] })

    await resolveRecommended(req, mockRes, mockNext)

    expect(mockFindPage).toHaveBeenCalledWith(
      '/en/nonexistent-article',
      req.context!.pages,
      req.context!.redirects,
    )
    expect((req.context!.page as Page & { recommended?: ResolvedArticle[] }).recommended).toEqual(
      [],
    )
    expect(mockNext).toHaveBeenCalled()
  })

  test('should handle errors gracefully', async () => {
    mockFindPage.mockImplementation(() => {
      throw new Error('Test error')
    })

    const req = createMockRequest({ rawRecommended: ['/error-article'] as string[] })

    await resolveRecommended(req, mockRes, mockNext)

    expect((req.context!.page as Page & { recommended?: ResolvedArticle[] }).recommended).toEqual(
      [],
    )
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

    const req = createMockRequest({ rawRecommended: ['/valid-article', '/invalid-article'] })

    await resolveRecommended(req, mockRes, mockNext)

    expect((req.context!.page as Page & { recommended?: ResolvedArticle[] }).recommended).toEqual([
      {
        title: 'Valid Article',
        intro: '<p>Valid intro</p>',
        href: '/test/valid',
        category: ['test'],
      },
    ])
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
      rawRecommended: ['relative-article'],
      relativePath: 'copilot/index.md',
    })

    await resolveRecommended(req, mockRes, mockNext)

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
    expect((req.context!.page as Page & { recommended?: ResolvedArticle[] }).recommended).toEqual([
      {
        title: 'Relative Article',
        intro: '<p>Relative intro</p>',
        href: '/copilot/relative-article', // Updated to clean path
        category: ['copilot'],
      },
    ])
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

    const req = createMockRequest({ rawRecommended: ['/copilot/tutorials/tutorial-page'] })

    await resolveRecommended(req, mockRes, mockNext)

    expect(mockFindPage).toHaveBeenCalledWith(
      '/en/copilot/tutorials/tutorial-page',
      req.context!.pages,
      req.context!.redirects,
    )

    // Verify that the href is a clean path without language/version, that gets
    // added on the React side.
    expect((req.context!.page as Page & { recommended?: ResolvedArticle[] }).recommended).toEqual([
      {
        title: 'Tutorial Page',
        intro: '<p>Tutorial intro</p>',
        href: '/copilot/tutorials/tutorial-page',
        category: ['copilot', 'tutorials', 'tutorial-page'],
      },
    ])
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
      { rawRecommended: ['/test/fpt-only'] },
      {
        currentVersion: 'enterprise-cloud@latest', // Current context is GHEC, not FPT
        currentLanguage: 'en',
      },
    )

    await resolveRecommended(req, mockRes, mockNext)

    // The recommended array should be empty since the article isn't available in enterprise-cloud
    expect((req.context!.page as Page & { recommended?: ResolvedArticle[] }).recommended).toEqual(
      [],
    )
    expect(mockNext).toHaveBeenCalled()
  })
})
