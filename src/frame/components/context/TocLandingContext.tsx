import { createContext, useContext } from 'react'
import { getFeaturedLinksFromReq } from '@/landings/lib/featured-links'
import type { RawTocItem, SimpleTocItem, FeaturedLink } from '@/landings/types'
import { mapRawTocItemToSimpleTocItem } from '@/landings/types'

export type TocLandingContextT = {
  title: string
  intro: string
  productCallout: string
  permissions: string
  tocItems: Array<SimpleTocItem>
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

// Request type for context extraction — uses Record<string, unknown> for the page
// because the Page type doesn't include all runtime-computed properties.
interface ContextRequest {
  context: {
    page: Record<string, unknown> & { title: string; intro: string }
    genericTocFlat?: unknown[]
    genericTocNested?: unknown[]
    renderedPage?: string
    featuredLinks?: Record<string, unknown[]>
    [key: string]: unknown
  }
  [key: string]: unknown
}

export const getTocLandingContextFromRequest = (req: ContextRequest): TocLandingContextT => {
  return {
    title: req.context.page.title,
    productCallout: (req.context.page.product as string) || '',
    permissions: (req.context.page.permissions as string) || '',
    intro: req.context.page.intro,
    tocItems: (
      (req.context.genericTocFlat || req.context.genericTocNested || []) as RawTocItem[]
    ).map(mapRawTocItemToSimpleTocItem),
    variant: req.context.genericTocFlat ? 'expanded' : 'compact',
    featuredLinks: getFeaturedLinksFromReq(req),
    renderedPage: (req.context.renderedPage as string) || '',
  }
}
