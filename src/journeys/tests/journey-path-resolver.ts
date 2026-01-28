import { describe, expect, test, vi } from 'vitest'

import { resolveJourneyContext, resolveJourneyTracks } from '../lib/journey-path-resolver'

// Mock modules since we just want to test journey functions, not their dependencies or
// against real content files
vi.mock('@/journeys/lib/get-link-data', () => ({
  default: async (path: string) => [
    {
      href: `/en/enterprise-cloud@latest${path}`,
      title: `Mock Title for ${path}`,
    },
  ],
}))

vi.mock('@/content-render/index', () => ({
  renderContent: async (content: string) => content,
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
    }

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
        guides: [
          { href: '/enterprise-onboarding/setup' },
          { href: '/enterprise-onboarding/config' },
        ],
      },
      {
        id: 'advanced',
        title: 'Advanced configuration',
        description: 'Advanced topics for experts',
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
    })
  })
})
