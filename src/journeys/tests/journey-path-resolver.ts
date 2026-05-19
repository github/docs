import { afterEach, describe, expect, test, vi } from 'vitest'

import { resolveJourneyContext, resolveJourneyTracks } from '../lib/journey-path-resolver'
import getLinkData from '@/journeys/lib/get-link-data'
import type { Page } from '@/types'

// Mock modules since we just want to test journey functions, not their dependencies or
// against real content files
vi.mock('@/journeys/lib/get-link-data', () => ({
  default: vi.fn(async (rawLinks: string | string[] | undefined) => {
    const path = Array.isArray(rawLinks) ? rawLinks[0] : rawLinks
    if (!path) return undefined
    return [
      {
        href: `/en/enterprise-cloud@latest${path}`,
        title: `Mock Title for ${path}`,
        page: {} as unknown as Page,
      },
    ]
  }),
}))

const mockGetLinkData = vi.mocked(getLinkData)

const mockRenderContent = vi.fn(async (content: string, _context?: unknown, _options?: unknown) => {
  void _context
  void _options
  return content
})

vi.mock('@/content-render/index', () => ({
  renderContent: (content: string, context?: unknown, options?: unknown) =>
    mockRenderContent(content, context, options),
}))

vi.mock('@/languages/lib/render-with-fallback', () => ({
  executeWithFallback: async (fn: () => Promise<string>, fallback: () => string) => {
    try {
      return await fn()
    } catch {
      return fallback()
    }
  },
}))

describe('journey-path-resolver', () => {
  describe('resolveJourneyContext', () => {
    const mockContext = {
      currentProduct: 'github',
      currentLanguage: 'en',
      currentVersion: 'enterprise-cloud@latest',
    }

    const mockPages = {
      'enterprise-onboarding/index': {
        layout: 'journey-landing',
        title: 'Enterprise onboarding',
        permalink: '/enterprise-onboarding',
        journeyTracks: [
          {
            id: 'getting_started',
            title: 'Getting started',
            description: 'Learn the basics',
            guides: [
              { href: '/enterprise-onboarding/setup' },
              {
                href: '/enterprise-onboarding/config',
                alternativeNextStep:
                  'Ready for more? Visit [AUTOTITLE](/enterprise-onboarding/advanced-setup)',
              },
              { href: '/enterprise-onboarding/deploy' },
            ],
          },
          {
            id: 'advanced',
            title: 'Advanced configuration',
            description: 'Configure advanced options',
            guides: [{ href: '/enterprise-onboarding/advanced-setup' }],
          },
        ],
      },
    } as unknown as Record<string, Page>

    test('returns null for article not in any journey track', async () => {
      const result = await resolveJourneyContext('/some-other-article', mockPages, mockContext)
      expect(result).toBeNull()
    })

    test('finds article in journey track', async () => {
      const result = await resolveJourneyContext(
        '/enterprise-onboarding/config',
        mockPages,
        mockContext,
      )

      expect(result).not.toBeNull()
      expect(result?.trackId).toBe('getting_started')
      expect(result?.trackTitle).toBe('Getting started')
      expect(result?.currentGuideIndex).toBe(1)
      expect(result?.numberOfGuides).toBe(3)
    })

    test('sets up previous guide navigation', async () => {
      const result = await resolveJourneyContext(
        '/enterprise-onboarding/config',
        mockPages,
        mockContext,
      )

      expect(result?.prevGuide).toEqual({
        href: '/en/enterprise-cloud@latest/enterprise-onboarding/setup',
        title: 'Mock Title for /enterprise-onboarding/setup',
      })
    })

    test('sets up next guide navigation', async () => {
      const result = await resolveJourneyContext(
        '/enterprise-onboarding/config',
        mockPages,
        mockContext,
      )

      expect(result?.nextGuide).toEqual({
        href: '/en/enterprise-cloud@latest/enterprise-onboarding/deploy',
        title: 'Mock Title for /enterprise-onboarding/deploy',
      })
    })

    test('includes alternative next step when provided', async () => {
      const result = await resolveJourneyContext(
        '/enterprise-onboarding/config',
        mockPages,
        mockContext,
      )

      expect(result?.alternativeNextStep).toBe(
        'Ready for more? Visit [AUTOTITLE](/enterprise-onboarding/advanced-setup)',
      )
    })

    test('does not populate next track guide when not on last guide', async () => {
      const result = await resolveJourneyContext(
        '/enterprise-onboarding/config',
        mockPages,
        mockContext,
      )

      expect(result?.nextTrackFirstGuide).toBeUndefined()
    })

    test('handles first article in track (no previous)', async () => {
      const result = await resolveJourneyContext(
        '/enterprise-onboarding/setup',
        mockPages,
        mockContext,
      )

      expect(result?.prevGuide).toBeUndefined()
      expect(result?.currentGuideIndex).toBe(0)
    })

    test('handles last article in track (no next)', async () => {
      const result = await resolveJourneyContext(
        '/enterprise-onboarding/deploy',
        mockPages,
        mockContext,
      )

      expect(result?.nextGuide).toBeUndefined()
      expect(result?.currentGuideIndex).toBe(2)
    })

    test('populates next track guide when on last guide', async () => {
      const result = await resolveJourneyContext(
        '/enterprise-onboarding/deploy',
        mockPages,
        mockContext,
      )

      expect(result?.nextTrackFirstGuide).toEqual({
        href: '/en/enterprise-cloud@latest/enterprise-onboarding/advanced-setup',
        title: 'Mock Title for /enterprise-onboarding/advanced-setup',
        trackTitle: 'Advanced configuration',
      })
    })

    test('normalizes article paths without leading slash', async () => {
      // The resolver should handle paths without leading slashes
      // by normalizing them to match the guide paths in the data
      const result = await resolveJourneyContext(
        'enterprise-onboarding/config',
        mockPages,
        mockContext,
      )

      // This should find the same track as the version with leading slash
      expect(result?.trackId).toBe('getting_started')
      expect(result?.currentGuideIndex).toBe(1)
    })
  })

  describe('resolveJourneyTracks', () => {
    const mockContext = {
      currentProduct: 'github',
      currentLanguage: 'en',
      currentVersion: 'enterprise-cloud@latest',
    }

    const mockJourneyTracks = [
      {
        id: 'getting_started',
        title: 'Getting started with {% data variables.product.company_short %}',
        description: 'Learn the {% data variables.product.company_short %} basics',
        timeCommitment: '{% data variables.product.company_short %} 2-4 hours',
        guides: [
          { href: '/enterprise-onboarding/setup' },
          { href: '/enterprise-onboarding/config' },
        ],
      },
      {
        id: 'advanced',
        title: 'Advanced configuration',
        description: 'Advanced topics for experts',
        timeCommitment: '4-6 hours',
        guides: [{ href: '/enterprise-onboarding/advanced-setup' }],
      },
    ]

    test('resolves all journey tracks', async () => {
      const result = await resolveJourneyTracks(mockJourneyTracks, mockContext)

      expect(result).toHaveLength(2)
      expect(result[0].id).toBe('getting_started')
      expect(result[1].id).toBe('advanced')
    })

    test('renders liquid templates in titles and descriptions', async () => {
      const result = await resolveJourneyTracks(mockJourneyTracks, mockContext)

      // Should return the content as-is since our mock renderContent is a passthrough
      expect(result[0].title).toBe(
        'Getting started with {% data variables.product.company_short %}',
      )
      expect(result[0].description).toBe(
        'Learn the {% data variables.product.company_short %} basics',
      )
    })

    test('propagates timeCommitment and renders Liquid with textOnly like title/description', async () => {
      mockRenderContent.mockClear()
      const result = await resolveJourneyTracks(mockJourneyTracks, mockContext)

      // Liquid value passes through the (passthrough) renderer; plain string is unchanged
      expect(result[0].timeCommitment).toBe('{% data variables.product.company_short %} 2-4 hours')
      expect(result[1].timeCommitment).toBe('4-6 hours')

      // The Liquid-bearing timeCommitment should be rendered with { textOnly: true },
      // matching how title/description are rendered.
      const timeCommitmentCall = mockRenderContent.mock.calls.find(
        ([content]) => content === '{% data variables.product.company_short %} 2-4 hours',
      )
      expect(timeCommitmentCall).toBeDefined()
      expect(timeCommitmentCall?.[2]).toEqual({ textOnly: true })

      // Plain (non-Liquid) timeCommitment should not be sent through renderContent
      const plainCall = mockRenderContent.mock.calls.find(([content]) => content === '4-6 hours')
      expect(plainCall).toBeUndefined()
    })

    test('resolves guide links with proper versioning', async () => {
      const result = await resolveJourneyTracks(mockJourneyTracks, mockContext)

      expect(result[0].guides).toHaveLength(2)
      expect(result[0].guides[0]).toEqual({
        href: '/en/enterprise-cloud@latest/enterprise-onboarding/setup',
        title: 'Mock Title for /enterprise-onboarding/setup',
      })
    })

    test('handles tracks with no guides', async () => {
      const emptyTrack = [
        {
          id: 'empty',
          title: 'Empty track',
          description: 'No guides here',
          guides: [],
        },
      ]

      const result = await resolveJourneyTracks(emptyTrack, mockContext)

      expect(result).toHaveLength(1)
      expect(result[0].guides).toHaveLength(0)
    })

    test('handles missing optional descriptions', async () => {
      const trackWithoutDescription = [
        {
          id: 'no_desc',
          title: 'Track without description',
          guides: [{ href: '/some-guide' }],
        },
      ]

      const result = await resolveJourneyTracks(trackWithoutDescription, mockContext)

      expect(result[0].description).toBeUndefined()
      expect(result[0].timeCommitment).toBeUndefined()
    })
  })

  describe('resolveJourneyContext with version-filtered guides', () => {
    afterEach(() => {
      // Restore the default implementation after each test in this block
      mockGetLinkData.mockImplementation(async (rawLinks: string | string[] | undefined) => {
        const path = Array.isArray(rawLinks) ? rawLinks[0] : rawLinks
        if (!path) return undefined
        return [
          {
            href: `/en/enterprise-cloud@latest${path}`,
            title: `Mock Title for ${path}`,
            page: {} as unknown as Page,
          },
        ]
      })
    })

    const mockContext = {
      currentProduct: 'github',
      currentLanguage: 'en',
      currentVersion: 'enterprise-cloud@latest',
    }

    // Track with 4 guides where the 2nd guide is unavailable in the current version:
    // raw indices: 0=setup, 1=unavailable, 2=config, 3=deploy
    // filtered:    0=setup,                1=config,  2=deploy
    const mockPages = {
      'enterprise-onboarding/index': {
        layout: 'journey-landing',
        title: 'Enterprise onboarding',
        permalink: '/enterprise-onboarding',
        journeyTracks: [
          {
            id: 'getting_started',
            title: 'Getting started',
            guides: [
              { href: '/enterprise-onboarding/setup' },
              { href: '/enterprise-onboarding/unavailable' },
              { href: '/enterprise-onboarding/config' },
              { href: '/enterprise-onboarding/deploy' },
            ],
          },
        ],
      },
    } as unknown as Record<string, Page>

    test('resolveJourneyTracks filters out guides unavailable for the current version', async () => {
      mockGetLinkData.mockImplementation(async (rawLinks: string | string[] | undefined) => {
        const path = Array.isArray(rawLinks) ? rawLinks[0] : rawLinks
        if (path === '/enterprise-onboarding/config') return undefined
        if (!path) return undefined
        return [
          {
            href: `/en/enterprise-cloud@latest${path}`,
            title: `Mock Title for ${path}`,
            page: {} as unknown as Page,
          },
        ]
      })

      const tracks = [
        {
          id: 'getting_started',
          title: 'Getting started',
          guides: [
            { href: '/enterprise-onboarding/setup' },
            { href: '/enterprise-onboarding/config' },
          ],
        },
      ]
      const result = await resolveJourneyTracks(tracks, mockContext)

      // /enterprise-onboarding/config is unavailable, so only /enterprise-onboarding/setup remains
      expect(result[0].guides).toHaveLength(1)
      expect(result[0].guides[0].href).toBe(
        '/en/enterprise-cloud@latest/enterprise-onboarding/setup',
      )
    })

    test('numberOfGuides reflects only version-available guides', async () => {
      mockGetLinkData.mockImplementation(async (rawLinks: string | string[] | undefined) => {
        const path = Array.isArray(rawLinks) ? rawLinks[0] : rawLinks
        if (path === '/enterprise-onboarding/unavailable') return undefined
        if (!path) return undefined
        return [
          {
            href: `/en/enterprise-cloud@latest${path}`,
            title: `Mock Title for ${path}`,
            page: {} as unknown as Page,
          },
        ]
      })

      const result = await resolveJourneyContext(
        '/enterprise-onboarding/config',
        mockPages,
        mockContext,
      )

      expect(result?.numberOfGuides).toBe(3) // 3 available, not 4 raw
    })

    test('currentGuideIndex reflects position in version-filtered list', async () => {
      mockGetLinkData.mockImplementation(async (rawLinks: string | string[] | undefined) => {
        const path = Array.isArray(rawLinks) ? rawLinks[0] : rawLinks
        if (path === '/enterprise-onboarding/unavailable') return undefined
        if (!path) return undefined
        return [
          {
            href: `/en/enterprise-cloud@latest${path}`,
            title: `Mock Title for ${path}`,
            page: {} as unknown as Page,
          },
        ]
      })

      const result = await resolveJourneyContext(
        '/enterprise-onboarding/config',
        mockPages,
        mockContext,
      )

      // config is at raw index 2, but filtered index 1 (setup=0, config=1, deploy=2)
      expect(result?.currentGuideIndex).toBe(1)
    })

    test('prevGuide skips unavailable guides', async () => {
      mockGetLinkData.mockImplementation(async (rawLinks: string | string[] | undefined) => {
        const path = Array.isArray(rawLinks) ? rawLinks[0] : rawLinks
        if (path === '/enterprise-onboarding/unavailable') return undefined
        if (!path) return undefined
        return [
          {
            href: `/en/enterprise-cloud@latest${path}`,
            title: `Mock Title for ${path}`,
            page: {} as unknown as Page,
          },
        ]
      })

      // config's predecessor in the raw list is "unavailable", but in filtered list it's "setup"
      const result = await resolveJourneyContext(
        '/enterprise-onboarding/config',
        mockPages,
        mockContext,
      )

      expect(result?.prevGuide?.href).toBe(
        '/en/enterprise-cloud@latest/enterprise-onboarding/setup',
      )
    })
  })
})
