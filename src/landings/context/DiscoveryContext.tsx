import { createContext, useContext } from 'react'
import { FeaturedLink, getFeaturedLinksFromReq } from '@/landings/components/ProductLandingContext'
import { mapRawTocItemToTocItem } from '@/landings/types'
import type { TocItem } from '@/landings/types'
import type { LearningTrack } from '@/types'

export type DiscoveryContextT = {
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
  recommended?: string[] // Array of article paths
}

export const DiscoveryContext = createContext<DiscoveryContextT | null>(null)

export const useDiscoveryContext = (): DiscoveryContextT => {
  const context = useContext(DiscoveryContext)

  if (!context) {
    throw new Error('"useDiscoveryContext" may only be used inside "DiscoveryContext.Provider"')
  }

  return context
}

export const getDiscoveryContextFromRequest = async (req: any): Promise<DiscoveryContextT> => {
  const page = req.context.page

  // Support legacy `spotlight` property as `recommended` for pages like Copilot Cookbook
  // However, `spotlight` will have lower priority than the `recommended` property
  let recommended: string[] = []
  if (page.recommended && page.recommended.length > 0) {
    recommended = page.recommended
  } else if (page.spotlight && page.spotlight.length > 0) {
    // Remove the `image` property from spotlight items, since we don't use those for the carousel
    recommended = page.spotlight.map((item: any) => item.article)
  }

  return {
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
    recommended,
  }
}
