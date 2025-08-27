import { createContext, useContext } from 'react'
import { FeaturedLink, getFeaturedLinksFromReq } from '@/landings/components/ProductLandingContext'
import { mapRawTocItemToTocItem } from '@/landings/types'
import type { TocItem } from '@/landings/types'
import type { LearningTrack } from '@/types'

export type BespokeContextT = {
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
}

export const BespokeContext = createContext<BespokeContextT | null>(null)

export const useBespokeContext = (): BespokeContextT => {
  const context = useContext(BespokeContext)

  if (!context) {
    throw new Error('"useBespokeContext" may only be used inside "BespokeContext.Provider"')
  }

  return context
}

export const getBespokeContextFromRequest = async (req: any): Promise<BespokeContextT> => {
  const page = req.context.page

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
  }
}
