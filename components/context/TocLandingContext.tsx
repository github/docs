import pick from 'lodash/pick'
import { createContext, useContext } from 'react'
import { FeaturedLink, getFeaturedLinksFromReq } from './ProductLandingContext'

export type TocItem = {
  fullPath: string
  title: string
  intro?: string
}

export type TocLandingContextT = {
  title: string
  introPlainText: string
  productCallout: string
  tocItems: Array<TocItem>
  variant?: 'compact' | 'expanded'
  featuredLinks: Record<string, Array<FeaturedLink>>
  renderedPage: string
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
  const isEarlyAccess = req.context.page?.documentType === 'early-access'
  return {
    title: req.context.page.title,
    productCallout: req.context.page.product || '',
    introPlainText: req.context.page.introPlainText,
    tocItems: (req.context.genericTocFlat || req.context.genericTocNested || []).map((obj: any) =>
      pick(obj, ['fullPath', 'title', 'intro', 'childTocItems'])
    ),
    variant: req.context.genericTocFlat ? 'expanded' : 'compact',

    featuredLinks: getFeaturedLinksFromReq(req),
    renderedPage: isEarlyAccess ? req.context.renderedPage : '',
  }
}
