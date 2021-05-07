import { createContext, useContext } from 'react'
import pick from 'lodash/pick'

export type FeaturedLink = {
  title: string
  intro: string
  href: string
  authors?: Array<string>
  hideIntro?: boolean
}

export type ProductLandingContextT = {
  title: string
  introPlainText: string
  shortTitle: string
  intro: string
  beta_product: boolean
  // primaryAction: LinkButtonT
  // secondaryAction?: LinkButtonT
  heroLinks: Array<{
    translationKeyLabel: string
    secondary: boolean
    href: string
  }>
  product_video?: string
  // featuredLinks?: {
  //   guides: Array<FeaturedLink>
  //   popular: Array<FeaturedLink>
  //   guideCards: Array<FeaturedLink>
  // }
  featuredArticles?: Array<{
    translationKeyLabel: string // Guides
    viewAllHref?: string // If provided, adds a "View All ->" to the header
    articles: Array<FeaturedLink>
  }>
  changelog: { label: string; prefix: string }
}

export const ProductLandingContext = createContext<ProductLandingContextT | null>(null)

export const useProductLandingContext = (): ProductLandingContextT => {
  const context = useContext(ProductLandingContext)

  if (!context) {
    throw new Error(
      '"useProductLandingContext" may only be used inside "ProductLandingContext.Provider"'
    )
  }

  return context
}

export const getProductLandingContextFromRequest = (req: any): ProductLandingContextT => {
  const { currentCategory, currentPath, data } = req.context
  return {
    ...pick(req.context.page, [
      'title',
      'shortTitle',
      'introPlainText',
      'beta_product',
      'intro',
      'product_video',
      'changelog',
    ]),

    // TODO - these transformations should be temporary, we should alter the content file to roughly match this shape!
    heroLinks: Object.entries(req.context.page.introLinks)
      .filter(([key, val]) => {
        return !!val && !key.startsWith('raw')
      })
      .map(([key, val]) => {
        return {
          translationKeyLabel: key,
          secondary: key === 'reference' || key === 'overview', // this parameter would just be set in yaml
          href: val as string,
        }
      }),

    featuredArticles: Object.entries(req.context.featuredLinks)
      .filter(([key]) => {
        return key === 'guides' || key === 'popular'
      })
      .map(([key, links]: any) => {
        return {
          translationKeyLabel: key,
          viewAllHref: key === 'guides' && !currentCategory ? `${currentPath}/${key}` : '',
          articles: links.map((link: any) => {
            return {
              hideIntro: key === 'popular',
              href: link.href,
              title: link.title,
              intro: link.intro,
              authors: link.page.authors || [],
            }
          }),
        }
      }),
  }
}
