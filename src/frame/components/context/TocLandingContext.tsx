import pick from 'lodash/pick'
import { createContext, useContext } from 'react'
import { LearningTrack } from './ArticleContext'
import {
  FeaturedLink,
  getFeaturedLinksFromReq,
} from 'src/landings/components/ProductLandingContext'

export type TocItem = {
  fullPath: string
  title: string
  intro?: string
}

export type TocLandingContextT = {
  title: string
  intro: string
  productCallout: string
  permissions: string
  tocItems: Array<TocItem>
  variant?: 'compact' | 'expanded'
  featuredLinks: Record<string, Array<FeaturedLink>>
  renderedPage: string
  currentLearningTrack?: LearningTrack
}

export const TocLandingContext = createContext<TocLandingContextT | null>(null)

export const useTocLandingContext = (): TocLandingContextT => {
  const context = useContext(TocLandingContext)

  if (!context) {
    throw new Error('"useTocLandingContext" may only be used inside "TocLandingContext.Provider"')
  }

  return context
}

export const getTocLandingContextFromRequest = (req: any): TocLandingContextT => {
  return {
    title: req.context.page.title,
    productCallout: req.context.page.product || '',
    permissions: req.context.page.permissions || '',
    intro: req.context.page.intro,
    tocItems: (req.context.genericTocFlat || req.context.genericTocNested || []).map((obj: any) =>
      pick(obj, ['fullPath', 'title', 'intro', 'childTocItems']),
    ),
    variant: req.context.genericTocFlat ? 'expanded' : 'compact',
    featuredLinks: getFeaturedLinksFromReq(req),
    renderedPage: req.context.renderedPage,
    currentLearningTrack: req.context.currentLearningTrack,
  }
}
