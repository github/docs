import { createContext, useContext } from 'react'
import pick from 'lodash/pick'

export type FeaturedLink = {
  title: string
  href: string
  intro?: string
  authors?: Array<string>
  hideIntro?: boolean
  date?: string
}
export type CodeExample = {
  title: string
  description: string
  languages: string // single comma separated string
  href: string
  tags: Array<string>
}

export type ProductLandingContextT = {
  title: string
  introPlainText: string
  shortTitle: string
  intro: string
  beta_product: boolean
  // primaryAction: LinkButtonT
  // secondaryAction?: LinkButtonT
  introLinks: {
    quickstart?: string
    reference?: string
    overview?: string
  }
  product_video?: string
  // featuredLinks?: {
  //   guides: Array<FeaturedLink>
  //   popular: Array<FeaturedLink>
  //   guideCards: Array<FeaturedLink>
  // }
  guideCards: Array<FeaturedLink>
  productCodeExamples: Array<CodeExample>
  productUserExamples: Array<{ username: string; description: string }>
  productCommunityExamples: Array<{ repo: string; description: string }>
  featuredArticles: Array<{
    label: string // Guides
    viewAllHref?: string // If provided, adds a "View All ->" to the header
    articles: Array<FeaturedLink>
  }>
  changelog: { label: string; prefix: string }
  changelogUrl?: string
  whatsNewChangelog?: Array<{ href: string; title: string; date: string }>
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
    whatsNewChangelog: req.context.whatsNewChangelog,
    changelogUrl: req.context.changelogUrl,

    productCodeExamples: req.context.productCodeExamples || [],

    productCommunityExamples: req.context.productCommunityExamples || [],

    productUserExamples: (req.context.productUserExamples || []).map(
      ({ user, description }: any) => ({
        username: user,
        description,
      })
    ),

    introLinks: Object.fromEntries(
      Object.entries(req.context.page.introLinks || {}).filter(([key, val]) => !!val)
    ),

    guideCards: (req.context.featuredLinks.guideCards || []).map((link: any) => {
      return {
        href: link.href,
        title: link.title,
        intro: link.intro,
        authors: link.page.authors || [],
      }
    }),

    featuredArticles: Object.entries(req.context.featuredLinks)
      .filter(([key]) => {
        return key === 'guides' || key === 'popular'
      })
      .map(([key, links]: any) => {
        return {
          label: req.context.site.data.ui.toc[key],
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
