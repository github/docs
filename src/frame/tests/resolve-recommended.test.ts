import { describe, test, expect, vi, beforeEach } from 'vitest'
import type { Response, NextFunction } from 'express'
import type { ExtendedRequest } from '@/types'
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

  const createMockRequest = (pageData: any = {}, contextData: any = {}): ExtendedRequest =>
    ({
      context: {
        page: pageData,
        pages: {
          '/test-article': {
            title: 'Test Article',
            intro: 'Test intro',
            relativePath: 'test/article.md',
          },
        },
        redirects: {},
        ...contextData,
      },
    }) as ExtendedRequest

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
      mtime: Date.now(),
      title: 'Test Article',
      rawTitle: 'Test Article',
      intro: 'Test intro',
      rawIntro: 'Test intro',
      relativePath: 'copilot/tutorials/article.md',
      fullPath: '/full/path/copilot/tutorials/article.md',
      languageCode: 'en',
      documentType: 'article',
      markdown: 'Test content',
      versions: {},
      applicableVersions: ['free-pro-team@latest'],
      permalinks: [
        {
          languageCode: 'en',
          pageVersion: 'free-pro-team@latest',
          title: 'Test Article',
          href: '/en/copilot/tutorials/article',
          hrefWithoutLanguage: '/copilot/tutorials/article',
        },
      ],
      renderProp: vi.fn().mockResolvedValue('rendered'),
      renderTitle: vi.fn().mockResolvedValue('Test Article'),
      render: vi.fn().mockResolvedValue('rendered content'),
      buildRedirects: vi.fn().mockReturnValue({}),
    }

    mockFindPage.mockReturnValue(testPage as any)

    const req = createMockRequest({ rawRecommended: ['/copilot/tutorials/article'] })

    await resolveRecommended(req, mockRes, mockNext)

    expect(mockFindPage).toHaveBeenCalledWith(
      '/en/copilot/tutorials/article',
      req.context!.pages,
      req.context!.redirects,
    )
    expect((req.context!.page as any).recommended).toEqual([
      {
        title: 'Test Article',
        intro: '<p>Test intro</p>',
        href: '/en/copilot/tutorials/article',
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
    expect((req.context!.page as any).recommended).toEqual([])
    expect(mockNext).toHaveBeenCalled()
  })

  test('should handle errors gracefully', async () => {
    mockFindPage.mockImplementation(() => {
      throw new Error('Test error')
    })

    const req = createMockRequest({ rawRecommended: ['/error-article'] })

    await resolveRecommended(req, mockRes, mockNext)

    expect((req.context!.page as any).recommended).toEqual([])
    expect(mockNext).toHaveBeenCalled()
  })

  test('should handle mixed valid and invalid articles', async () => {
    const testPage: Partial<import('@/types').Page> = {
      mtime: Date.now(),
      title: 'Valid Article',
      rawTitle: 'Valid Article',
      intro: 'Valid intro',
      rawIntro: 'Valid intro',
      relativePath: 'test/valid.md',
      fullPath: '/full/path/test/valid.md',
      languageCode: 'en',
      documentType: 'article',
      markdown: 'Valid content',
      versions: {},
      applicableVersions: ['free-pro-team@latest'],
      permalinks: [
        {
          languageCode: 'en',
          pageVersion: 'free-pro-team@latest',
          title: 'Valid Article',
          href: '/en/test/valid',
          hrefWithoutLanguage: '/test/valid',
        },
      ],
      renderProp: vi.fn().mockResolvedValue('rendered'),
      renderTitle: vi.fn().mockResolvedValue('Valid Article'),
      render: vi.fn().mockResolvedValue('rendered content'),
      buildRedirects: vi.fn().mockReturnValue({}),
    }

    mockFindPage.mockReturnValueOnce(testPage as any).mockReturnValueOnce(undefined)

    const req = createMockRequest({ rawRecommended: ['/valid-article', '/invalid-article'] })

    await resolveRecommended(req, mockRes, mockNext)

    expect((req.context!.page as any).recommended).toEqual([
      {
        title: 'Valid Article',
        intro: '<p>Valid intro</p>',
        href: '/en/test/valid',
        category: ['test'],
      },
    ])
    expect(mockNext).toHaveBeenCalled()
  })

  test('should try page-relative path when content-relative fails', async () => {
    const testPage: Partial<import('@/types').Page> = {
      mtime: Date.now(),
      title: 'Relative Article',
      rawTitle: 'Relative Article',
      intro: 'Relative intro',
      rawIntro: 'Relative intro',
      relativePath: 'copilot/relative-article.md',
      fullPath: '/full/path/copilot/relative-article.md',
      languageCode: 'en',
      documentType: 'article',
      markdown: 'Relative content',
      versions: {},
      applicableVersions: ['free-pro-team@latest'],
      permalinks: [
        {
          languageCode: 'en',
          pageVersion: 'free-pro-team@latest',
          title: 'Relative Article',
          href: '/en/copilot/relative-article',
          hrefWithoutLanguage: '/copilot/relative-article',
        },
      ],
      renderProp: vi.fn().mockResolvedValue('rendered'),
      renderTitle: vi.fn().mockResolvedValue('Relative Article'),
      render: vi.fn().mockResolvedValue('rendered content'),
      buildRedirects: vi.fn().mockReturnValue({}),
    }

    // Mock findPage to fail on first call (content-relative) and succeed on second (page-relative)
    mockFindPage.mockReturnValueOnce(undefined).mockReturnValueOnce(testPage as any)

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
    expect((req.context!.page as any).recommended).toEqual([
      {
        title: 'Relative Article',
        intro: '<p>Relative intro</p>',
        href: '/en/copilot/relative-article',
        category: ['copilot'],
      },
    ])
    expect(mockNext).toHaveBeenCalled()
  })
})
