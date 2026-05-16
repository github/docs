import { createContext, useContext } from 'react'
import { getFeaturedLinksFromReq } from '@/landings/lib/featured-links'
import type { RawTocItem, TocItem, FeaturedLink } from '@/landings/types'
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

// Request type for context extraction — uses Record<string, unknown> for the page
// because the Page type doesn't include all runtime-computed properties.
interface ContextRequest {
  context: {
    page: Record<string, unknown> & { title: string; intro: string }
    genericTocFlat?: unknown[]
    genericTocNested?: unknown[]
    renderedPage?: string
    currentLayoutName?: string
    featuredLinks?: Record<string, unknown[]>
    [key: string]: unknown
  }
  [key: string]: unknown
}

export const getCategoryLandingContextFromRequest = (
  req: ContextRequest,
): CategoryLandingContextT => {
  return {
    title: req.context.page.title,
    productCallout: (req.context.page.product as string) || '',
    permissions: (req.context.page.permissions as string) || '',
    intro: req.context.page.intro,
    tocItems: (
      (req.context.genericTocFlat || req.context.genericTocNested || []) as RawTocItem[]
    ).map(mapRawTocItemToTocItem),
    variant: req.context.genericTocFlat ? 'expanded' : 'compact',
    featuredLinks: getFeaturedLinksFromReq(req),
    renderedPage: (req.context.renderedPage as string) || '',
    currentLayout: req.context.currentLayoutName || '',
    spotlight: req.context.page.spotlight as SpotlightItem[] | undefined,
  }
}
