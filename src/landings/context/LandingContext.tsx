import { createContext, useContext } from 'react'
import { getFeaturedLinksFromReq } from '@/landings/components/ProductLandingContext'
import { mapRawTocItemToTocItem } from '@/landings/types'
import type { TocItem } from '@/landings/types'
import type { LearningTrack } from '@/types'
import type { JourneyTrack } from '@/journeys/lib/journey-path-resolver'
import type { FeaturedLink } from '@/landings/components/ProductLandingContext'

export type LandingType = 'bespoke' | 'discovery' | 'journey'

export type LandingContextT = {
  landingType: LandingType
  title: string
  intro: string
  productCallout: string
  permissions: string
  tocItems: Array<TocItem>
  variant?: 'compact' | 'expanded'
  featuredLinks: Record<string, Array<FeaturedLink>>
  renderedPage: string
  currentLearningTrack?: LearningTrack
  currentLayout: string
  heroImage?: string
  // For landing pages with carousels
  recommended?: Array<{ title: string; intro: string; href: string; category: string[] }> // Resolved article data
  introLinks?: Record<string, string>
  // For journey landing pages
  journeyTracks?: JourneyTrack[]
  // For article grid category filtering
  includedCategories?: string[]
}

export const LandingContext = createContext<LandingContextT | null>(null)

export const useLandingContext = (): LandingContextT => {
  const context = useContext(LandingContext)

  if (!context) {
    throw new Error('"useLandingContext" may only be used inside "LandingContext.Provider"')
  }

  return context
}

/**
 * Server-side function to create LandingContext data from a request.
 */
export const getLandingContextFromRequest = async (
  req: any,
  landingType: LandingType,
): Promise<LandingContextT> => {
  const page = req.context.page

  let recommended: Array<{ title: string; intro: string; href: string; category: string[] }> = []

  if (landingType === 'discovery' || landingType === 'bespoke') {
    // Use resolved recommended articles from the page after middleware processing
    if (page.recommended && Array.isArray(page.recommended) && page.recommended.length > 0) {
      recommended = page.recommended
    }
  }

  let journeyTracks: JourneyTrack[] = []
  if (landingType === 'journey' && page.journeyTracks) {
    // Need a dynamic import because journey-path-resolver uses Node fs apis
    const { resolveJourneyTracks } = await import('@/journeys/lib/journey-path-resolver')
    journeyTracks = await resolveJourneyTracks(page.journeyTracks, req.context)
  }

  return {
    landingType,
    title: page.title,
    productCallout: page.product || '',
    permissions: page.permissions || '',
    intro: page.intro,
    tocItems: (req.context.genericTocFlat || req.context.genericTocNested || []).map(
      mapRawTocItemToTocItem,
    ),
    variant: req.context.genericTocFlat ? 'expanded' : 'compact',
    featuredLinks: getFeaturedLinksFromReq(req),
    renderedPage: req.context.renderedPage,
    currentLearningTrack: req.context.currentLearningTrack,
    currentLayout: req.context.currentLayoutName,
    heroImage: page.heroImage || '/assets/images/banner-images/hero-1.png',
    introLinks: page.introLinks || null,
    recommended,
    journeyTracks,
    includedCategories: page.includedCategories || [],
  }
}
