import { createContext, useContext } from 'react'
import { LearningTrack } from './ArticleContext'
import { FeaturedLink, getFeaturedLinksFromReq } from '@/landings/components/ProductLandingContext'
import type { TocItem } from '@/landings/types'
import { mapRawTocItemToTocItem } from '@/landings/types'
import type { SpotlightItem } from '@/types'

export type CategoryLandingContextT = {
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
  spotlight?: SpotlightItem[]
}

export const CategoryLandingContext = createContext<CategoryLandingContextT | null>(null)

export const useCategoryLandingContext = (): CategoryLandingContextT => {
  const context = useContext(CategoryLandingContext)

  if (!context) {
    throw new Error(
      '"useCategoryLandingContext" may only be used inside "CategoryLandingContext.Provider"',
    )
  }

  return context
}

export const getCategoryLandingContextFromRequest = (req: any): CategoryLandingContextT => {
  return {
    title: req.context.page.title,
    productCallout: req.context.page.product || '',
    permissions: req.context.page.permissions || '',
    intro: req.context.page.intro,
    tocItems: (req.context.genericTocFlat || req.context.genericTocNested || []).map(
      mapRawTocItemToTocItem,
    ),
    variant: req.context.genericTocFlat ? 'expanded' : 'compact',
    featuredLinks: getFeaturedLinksFromReq(req),
    renderedPage: req.context.renderedPage,
    currentLearningTrack: req.context.currentLearningTrack,
    currentLayout: req.context.currentLayoutName,
    spotlight: req.context.page.spotlight,
  }
}
