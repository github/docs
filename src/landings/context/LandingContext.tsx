import { createContext, useContext } from 'react'
import { getFeaturedLinksFromReq } from '@/landings/lib/featured-links'
import { mapRawTocItemToTocItem } from '@/landings/types'
import type { TocItem, FeaturedLink } from '@/landings/types'
import type { ExtendedRequest, Context } from '@/types'
import type { JourneyTrack } from '@/journeys/lib/journey-path-resolver'

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
  currentLayout: string
  heroImage?: string
  carousels?: Record<
    string,
    Array<{ title: string; intro: string; href: string; category: string[] }>
  >
  introLinks?: Record<string, string> | null
  journeyTracks?: JourneyTrack[]
  journeyArticlesHeading?: string | null
  includedCategories?: string[]
}

type LandingPage = NonNullable<Context['page']> & {
  carousels?: LandingContextT['carousels']
  includedCategories?: string[]
  heroImage?: string
  product?: string
  permissions?: string
  rawPermissions?: string
  introLinks?: Record<string, string> | null
  resolvedJourneyTracks?: JourneyTrack[]
  journeyArticlesHeading?: string
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
  req: ExtendedRequest,
  landingType: LandingType,
): Promise<LandingContextT> => {
  const context = (req.context ?? {}) as Context & {
    journeyTracks?: JourneyTrack[]
    page?: LandingPage
  }
  const page = context.page as LandingPage | undefined

  if (!page) {
    throw new Error('"getLandingContextFromRequest" requires req.context.page')
  }

  const carousels =
    landingType !== 'discovery' && landingType !== 'bespoke'
      ? {}
      : page.carousels && typeof page.carousels === 'object'
        ? (page.carousels as LandingContextT['carousels'])
        : {}

  // Middleware resolves journey tracks because server-side APIs cannot run client-side.
  const journeyTracks: JourneyTrack[] = Array.isArray(context.journeyTracks)
    ? context.journeyTracks
    : Array.isArray(page.resolvedJourneyTracks)
      ? page.resolvedJourneyTracks
      : []

  const tocItems = (context.genericTocFlat || context.genericTocNested || []).map(
    mapRawTocItemToTocItem,
  )

  return {
    landingType,
    title: page.title,
    productCallout: page.product ?? '',
    permissions: page.permissions ?? page.rawPermissions ?? '',
    intro: page.intro,
    tocItems,
    variant: context.genericTocFlat ? 'expanded' : 'compact',
    featuredLinks: getFeaturedLinksFromReq(req),
    renderedPage: context.renderedPage ?? '',
    currentLayout: context.currentLayoutName ?? '',
    heroImage: page.heroImage || '/assets/images/banner-images/hero-1',
    introLinks: page.introLinks || null,
    carousels,
    journeyTracks,
    journeyArticlesHeading: page.journeyArticlesHeading || null,
    includedCategories: page.includedCategories || [],
  }
}
