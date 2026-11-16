import { describe, expect, test, vi, beforeEach } from 'vitest'

import getLinkData from '@/frame/lib/get-link-data'
import { DiscoveryLandingTransformer } from '@/article-api/transformers/discovery-landing-transformer'
import { BespokeLandingTransformer } from '@/article-api/transformers/bespoke-landing-transformer'
import type { Context, Page } from '@/types'
import type { TemplateData } from '@/article-api/transformers/types'

// /b exists only under the landing page's directory, like the page-relative fixture entries.
// /cloud-only mimics a versionless redirect to a page the requested version does not have.
const pageVersions: Record<string, string[]> = {
  '/a': ['enterprise-server@3.19'],
  '/landing/b': ['enterprise-server@3.19'],
  '/cloud-only': ['enterprise-cloud@latest'],
}

vi.mock('@/frame/lib/get-link-data', () => ({
  default: vi.fn(async (rawLink: string, context: Context) =>
    pageVersions[rawLink]
      ? [
          {
            href: `/${context.currentLanguage}/${context.currentVersion}${rawLink}`,
            title: `Title for ${rawLink}`,
            intro: `Intro for ${rawLink}`,
            page: { applicableVersions: pageVersions[rawLink] },
          },
        ]
      : undefined,
  ),
}))

vi.mock('@/content-render/index', () => ({
  renderContent: vi.fn((content: string) => content),
}))

type PrepareTemplateData = (page: Page, pathname: string, context: Context) => Promise<TemplateData>

// resolve-carousels middleware leaves version-specific ResolvedArticle[] on the shared Page.
const makePage = (layout: string, recommended: string[] = ['/a']) =>
  ({
    layout,
    relativePath: 'landing/index.md',
    title: 'Landing',
    intro: '',
    rawCarousels: { recommended },
    carousels: { recommended: [{ title: 'Stale', href: '/stale', intro: 'Stale intro' }] },
    renderProp: vi.fn().mockResolvedValue(''),
    renderTitle: vi.fn().mockResolvedValue('Landing'),
  }) as unknown as Page

const context = {
  currentLanguage: 'en',
  currentVersion: 'enterprise-server@3.19',
} as unknown as Context

describe('landing page carousels', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const transformers = [
    ['discovery-landing', new DiscoveryLandingTransformer()],
    ['bespoke-landing', new BespokeLandingTransformer()],
  ] as const

  const recommendedHrefs = (data: TemplateData) =>
    data.sections
      .find((section) => section.title === 'Recommended')
      ?.groups.flatMap((group) => group.links.map((link) => link.href))

  for (const [layout, transformer] of transformers) {
    const prepareTemplateData = (
      transformer as unknown as { prepareTemplateData: PrepareTemplateData }
    ).prepareTemplateData.bind(transformer)

    test(`${layout} resolves rawCarousels for the requested version`, async () => {
      const data = await prepareTemplateData(makePage(layout), '/en/landing', context)

      expect(vi.mocked(getLinkData)).toHaveBeenCalledWith('/a', context, {
        title: true,
        intro: true,
      })
      expect(recommendedHrefs(data)).toEqual(['/en/enterprise-server@3.19/a'])
    })

    test(`${layout} falls back to paths relative to the landing page`, async () => {
      const page = makePage(layout, ['/a', '/b', '/missing'])
      const data = await prepareTemplateData(page, '/en/landing', context)

      expect(recommendedHrefs(data)).toEqual([
        '/en/enterprise-server@3.19/a',
        '/en/enterprise-server@3.19/landing/b',
      ])
    })

    test(`${layout} skips pages unavailable in the requested version`, async () => {
      const page = makePage(layout, ['/cloud-only', '/a'])
      const data = await prepareTemplateData(page, '/en/landing', context)

      expect(recommendedHrefs(data)).toEqual(['/en/enterprise-server@3.19/a'])
    })
  }
})
