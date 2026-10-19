import { describe, test, expect, vi, beforeEach } from 'vitest'
import type { Response, NextFunction } from 'express'
import type { Context, ExtendedRequest, Page, ResolvedArticle } from '@/types'
import findPage from '@/frame/lib/find-page'
import resolveCarousels from '../middleware/resolve-carousels'

vi.mock('@/frame/lib/find-page', () => ({
  default: vi.fn(),
}))

describe('resolveCarousels middleware', () => {
  const mockFindPage = vi.mocked(findPage)

  type TestPage = Partial<Page> & {
    rawCarousels?: Record<string, string[]>
  }

  // renderProp reads the raw frontmatter, which is what the middleware should render.
  const createMockPage = (data: Partial<Page>): Page =>
    ({
      ...data,
      renderProp: vi.fn(async (prop: string) =>
        prop === 'title' ? (data.rawTitle ?? data.title) : (data.rawIntro ?? data.intro),
      ),
    }) as unknown as Page

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

    mockFindPage.mockReturnValue(createMockPage(testPage))

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
      .mockReturnValueOnce(createMockPage(testPage1))
      .mockReturnValueOnce(createMockPage(testPage2))

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

    expect(mockNext).toHaveBeenCalled()
  })

  test('should handle mixed valid and invalid articles', async () => {
    const testPage: Partial<import('@/types').Page> = {
      title: 'Valid Article',
      intro: 'Valid intro',
      relativePath: 'test/valid.md',
      applicableVersions: ['free-pro-team@latest'],
    }

    mockFindPage.mockReturnValueOnce(createMockPage(testPage)).mockReturnValueOnce(undefined)

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

    // First lookup is content-relative; second lookup is page-relative.
    mockFindPage.mockReturnValueOnce(undefined).mockReturnValueOnce(createMockPage(testPage))

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

    mockFindPage.mockReturnValue(createMockPage(testPage))

    const req = createMockRequest({
      rawCarousels: { recommended: ['/copilot/tutorials/tutorial-page'] },
    })

    await resolveCarousels(req, mockRes, mockNext)

    expect(mockFindPage).toHaveBeenCalledWith(
      '/en/copilot/tutorials/tutorial-page',
      req.context!.pages,
      req.context!.redirects,
    )

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
    const fptOnlyPage: Partial<import('@/types').Page> = {
      title: 'FPT Only Article',
      intro: 'This article is only for FPT',
      relativePath: 'test/fpt-only.md',
      applicableVersions: ['free-pro-team@latest'], // Not available in ghec
    }

    mockFindPage.mockReturnValue(createMockPage(fptOnlyPage))

    const req = createMockRequest(
      { rawCarousels: { recommended: ['/test/fpt-only'] } },
      {
        currentVersion: 'enterprise-cloud@latest', // Current context is GHEC, not FPT
        currentLanguage: 'en',
      },
    )

    await resolveCarousels(req, mockRes, mockNext)

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

    mockFindPage.mockReturnValue(createMockPage(testPage))

    const req = createMockRequest({
      rawCarousels: { recommended: ['/test/duplicate', '/test/duplicate', '/test/duplicate'] },
    })

    await resolveCarousels(req, mockRes, mockNext)

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

  test('renders title and intro from raw frontmatter, not the last rendered values', async () => {
    // title and intro hold output from an earlier render for another version.
    const testPage = createMockPage({
      title: 'Audit log for GHEC',
      intro: 'Logs of audited user actions.',
      rawTitle: 'Audit log for GHES',
      rawIntro: 'Logs of audited system, user actions.',
      relativePath: 'admin/audit-log.md',
      applicableVersions: ['enterprise-server@3.19'],
    })

    mockFindPage.mockReturnValue(testPage)

    const req = createMockRequest(
      { rawCarousels: { recommended: ['/admin/audit-log'] } },
      { currentVersion: 'enterprise-server@3.19' },
    )

    await resolveCarousels(req, mockRes, mockNext)

    expect(testPage.renderProp).toHaveBeenCalledWith('title', req.context, { textOnly: true })
    expect(testPage.renderProp).toHaveBeenCalledWith('intro', req.context, { textOnly: true })
    expect(
      (req.context!.page as Page & { carousels?: Record<string, ResolvedArticle[]> }).carousels,
    ).toEqual({
      recommended: [
        {
          title: 'Audit log for GHES',
          intro: 'Logs of audited system, user actions.',
          href: '/admin/audit-log',
          category: ['admin'],
        },
      ],
    })
  })

  test('falls back to the English carousel article, not the English landing page', async () => {
    const enArticle = createMockPage({
      rawTitle: 'English article title',
      rawIntro: 'English article intro',
      relativePath: 'admin/audit-log.md',
      applicableVersions: ['free-pro-team@latest'],
    })
    // Mimic renderContentWithFallback when the translated Liquid throws.
    const jaArticle = {
      relativePath: 'admin/audit-log.md',
      applicableVersions: ['free-pro-team@latest'],
      renderProp: vi.fn(async (prop: string, context: Context) => {
        const enPage = context.getEnglishPage!(context)
        return prop === 'title' ? enPage.rawTitle : enPage.rawIntro
      }),
    } as unknown as Page
    const enLanding = { rawTitle: 'English landing title' } as unknown as Page

    mockFindPage.mockImplementation((href) => {
      if (href === '/ja/admin/audit-log') return jaArticle
      if (href === '/en/admin/audit-log') return enArticle
      return undefined
    })

    const req = createMockRequest(
      { rawCarousels: { recommended: ['/admin/audit-log'] } },
      { currentLanguage: 'ja', getEnglishPage: () => enLanding },
    )

    await resolveCarousels(req, mockRes, mockNext)

    expect(
      (req.context!.page as Page & { carousels?: Record<string, ResolvedArticle[]> }).carousels,
    ).toEqual({
      recommended: [
        {
          title: 'English article title',
          intro: 'English article intro',
          href: '/admin/audit-log',
          category: ['admin'],
        },
      ],
    })
  })
})
