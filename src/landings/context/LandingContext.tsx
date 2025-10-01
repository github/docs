import { createContext, useContext } from 'react'
import { FeaturedLink, getFeaturedLinksFromReq } from '@/landings/components/ProductLandingContext'
import { mapRawTocItemToTocItem } from '@/landings/types'
import type { TocItem } from '@/landings/types'
import type { LearningTrack } from '@/types'

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
  // For discovery landing pages
  recommended?: string[] // Array of article paths
  // For discovery landing pages
  introLinks?: Record<string, string>
}

export const LandingContext = createContext<LandingContextT | null>(null)

export const useLandingContext = (): LandingContextT => {
  const context = useContext(LandingContext)

  if (!context) {
    throw new Error('"useLandingContext" may only be used inside "LandingContext.Provider"')
  }

  return context
}

export const getLandingContextFromRequest = async (
  req: any,
  landingType: LandingType,
): Promise<LandingContextT> => {
  const page = req.context.page

  let recommended: string[] = []
  if (landingType === 'discovery') {
    // Support legacy `spotlight` property as `recommended` for pages like Copilot Cookbook
    // However, `spotlight` will have lower priority than the `recommended` property
    if (page.recommended && page.recommended.length > 0) {
      recommended = page.recommended
    } else if (page.spotlight && page.spotlight.length > 0) {
      // Remove the `image` property from spotlight items, since we don't use those for the carousel
      recommended = page.spotlight.map((item: any) => item.article)
    }
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
  }
}
