import { createContext, useContext } from 'react'
import pick from 'lodash/pick'

export type TocItem = {
  fullPath: string
  title: string
  intro?: string
  childTocItems?: Array<{
    fullPath: string
    title: string
  }>
}
export type FeaturedLink = {
  title: string
  href: string
  intro?: string
  authors?: Array<string>
  date?: string
  fullTitle?: string
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

type Release = {
  version: string
  firstPreviousRelease: string
  secondPreviousRelease: string
  patches: Array<{ date: string; version: string }>
  isReleaseCandidate: boolean
}

export type ProductLandingContextT = {
  title: string
  introPlainText: string
  shortTitle: string
  intro: string
  beta_product: boolean
  product: Product
  introLinks: Record<string, string> | null
  productVideo: string
  productVideoTranscript: string
  featuredLinks: Record<string, Array<FeaturedLink>>
  productUserExamples: Array<{ username: string; description: string }>
  productCommunityExamples: Array<{ repo: string; description: string }>
  featuredArticles: Array<{
    key: string // Featured article section key (startHere, popular, etc.)
    label: string // Start here, Popular, etc.
    viewAllHref?: string // If provided, adds a "View All ->" to the header
    viewAllTitleText?: string // Adds 'title' attribute text for the "View All" href
    articles: Array<FeaturedLink>
  }>
  changelogUrl?: string
  whatsNewChangelog?: Array<{ href: string; title: string; date: string }>
  tocItems: Array<TocItem>
  hasGuidesPage: boolean
  ghesReleases: Array<Release>
}

export const ProductLandingContext = createContext<ProductLandingContextT | null>(null)

export const useProductLandingContext = (): ProductLandingContextT => {
  const context = useContext(ProductLandingContext)

  if (!context) {
    throw new Error(
      '"useProductLandingContext" may only be used inside "ProductLandingContext.Provider"',
    )
  }

  return context
}

export const getFeaturedLinksFromReq = (req: any): Record<string, Array<FeaturedLink>> => {
  return Object.fromEntries(
    Object.entries(req.context.featuredLinks || {}).map(([key, entries]) => {
      return [
        key,
        ((entries as Array<any>) || []).map((entry: any) => ({
          href: entry.href,
          title: entry.title,
          intro: entry.intro || null,
          authors: entry.page?.authors || [],
          fullTitle: entry.fullTitle || null,
        })),
      ]
    }),
  )
}

export const getProductLandingContextFromRequest = async (
  req: any,
): Promise<ProductLandingContextT> => {
  const productTree = req.context.currentProductTree
  const page = req.context.page
  const hasGuidesPage = (page.children || []).includes('/guides')

  const productVideo = page.product_video
    ? await page.renderProp('product_video', req.context, { textOnly: true })
    : ''

  const title = await page.renderProp('title', req.context, { textOnly: true })
  const shortTitle = (await page.renderProp('shortTitle', req.context, { textOnly: true })) || null

  // This props is displayed on the product landing page as "Supported
  // releases". So we omit, if there is one, the release candidate.
  const ghesReleases = (req.context.ghesReleases || []).filter((release: Release) => {
    return !release.isReleaseCandidate
  })

  return {
    title,
    shortTitle,
    ...pick(page, ['introPlainText', 'beta_product', 'intro']),
    productVideo,
    productVideoTranscript: page.product_video_transcript || null,
    hasGuidesPage,
    product: {
      href: productTree.href,
      title: productTree.page.shortTitle || productTree.page.title,
    },
    whatsNewChangelog: req.context.whatsNewChangelog || [],
    changelogUrl: req.context.changelogUrl || [],
    productCommunityExamples: req.context.productCommunityExamples || [],
    ghesReleases,
    productUserExamples: (req.context.productUserExamples || []).map(
      ({ user, description }: any) => ({
        username: user,
        description,
      }),
    ),

    introLinks: page.introLinks || null,

    featuredLinks: getFeaturedLinksFromReq(req),

    tocItems: req.context.tocItems || [],

    featuredArticles: Object.entries(req.context.featuredLinks || [])
      .filter(([key]) => {
        return key === 'startHere' || key === 'popular' || key === 'videos'
      })
      .map(([key, links]: any) => {
        return {
          key,
          label:
            key === 'popular' || key === 'videos'
              ? req.context.page.featuredLinks[key + 'Heading'] || req.context.site.data.ui.toc[key]
              : req.context.site.data.ui.toc[key],
          viewAllHref:
            key === 'startHere' && !req.context.currentCategory && hasGuidesPage
              ? `${req.context.currentPath}/guides`
              : '',
          articles: links.map((link: any) => {
            return {
              href: link.href,
              title: link.title,
              intro: link.intro || null,
              authors: link.page?.authors || [],
              fullTitle: link.fullTitle || null,
            }
          }),
        }
      }),
  }
}
