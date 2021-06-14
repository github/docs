import { createContext, useContext } from 'react'
import pick from 'lodash/pick'

export type TocItem = {
  fullPath: string
  title: string
  intro?: string
}
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
export type Product = {
  title: string
  href: string
}

export type ProductLandingContextT = {
  title: string
  introPlainText: string
  shortTitle: string
  intro: string
  beta_product: boolean
  product: Product
  introLinks: {
    quickstart?: string
    reference?: string
    overview?: string
  } | null
  product_video?: string
  guideCards: Array<FeaturedLink>
  productCodeExamples: Array<CodeExample>
  productUserExamples: Array<{ username: string; description: string }>
  productCommunityExamples: Array<{ repo: string; description: string }>
  featuredArticles: Array<{
    label: string // Guides
    viewAllHref?: string // If provided, adds a "View All ->" to the header
    articles: Array<FeaturedLink>
  }>
  changelogUrl?: string
  whatsNewChangelog?: Array<{ href: string; title: string; date: string }>
  tocItems: Array<TocItem>
  releases: Array<{
    version: string
    firstPreviousRelease: string
    secondPreviousRelease: string
    patches: Array<{ date: string; version: string }>
  }>
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
  const productTree = req.context.currentProductTree
  const page = req.context.page
  return {
    ...pick(page, [
      'title',
      'shortTitle',
      'introPlainText',
      'beta_product',
      'intro',
      'product_video',
    ]),
    product: {
      href: productTree.href,
      title: productTree.renderedShortTitle || productTree.renderedFullTitle,
    },
    whatsNewChangelog: req.context.whatsNewChangelog || [],
    changelogUrl: req.context.changelogUrl || [],
    productCodeExamples: req.context.productCodeExamples || [],
    productCommunityExamples: req.context.productCommunityExamples || [],
    releases: req.context.releases || [],

    productUserExamples: (req.context.productUserExamples || []).map(
      ({ user, description }: any) => ({
        username: user,
        description,
      })
    ),

    introLinks: page.introLinks
      ? {
          quickstart: page.introLinks.quickstart,
          reference: page.introLinks.reference,
          overview: page.introLinks.overview,
        }
      : null,

    guideCards: (req.context.featuredLinks ? req.context.featuredLinks.guideCards || [] : []).map(
      (link: any) => {
        return {
          href: link.href,
          title: link.title,
          intro: link.intro,
          authors: link.page.authors || [],
        }
      }
    ),

    tocItems: req.context.tocItems || [],

    featuredArticles: Object.entries(req.context.featuredLinks || [])
      .filter(([key]) => {
        return key === 'guides' || key === 'popular'
      })
      .map(([key, links]: any) => {
        return {
          label: req.context.site.data.ui.toc[key],
          viewAllHref:
            key === 'guides' && !req.context.currentCategory
              ? `${req.context.currentPath}/${key}`
              : '',
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
