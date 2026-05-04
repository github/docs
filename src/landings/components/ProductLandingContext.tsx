import { createContext, useContext } from 'react'
import pick from 'lodash/pick'
import type { SimpleTocItem } from '@/landings/types'
import type { ExtendedRequest, FeaturedLinkExpanded } from '@/types'
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
  heroImage?: string
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
  tocItems: Array<SimpleTocItem>
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

// Minimal request shape needed to extract featured links. We use a structural type
// here because callers pass either an Express ExtendedRequest or a narrower
// per-context request type defined alongside other landing-context helpers.
type FeaturedLinksRequest = {
  context?: {
    featuredLinks?: Record<string, unknown[]> | unknown
  }
}

export const getFeaturedLinksFromReq = (
  req: FeaturedLinksRequest,
): Record<string, Array<FeaturedLink>> => {
  const featuredLinks = (req.context?.featuredLinks || {}) as Record<string, unknown[]>
  return Object.fromEntries(
    Object.entries(featuredLinks).map(([key, entries]) => {
      return [
        key,
        ((entries as FeaturedLinkExpanded[]) || []).map((entry) => ({
          href: entry.href,
          title: entry.title,
          intro: entry.intro,
          authors: (entry.page as { authors?: string[] } | undefined)?.authors || [],
          fullTitle: entry.fullTitle,
        })),
      ]
    }),
  )
}

export const getProductLandingContextFromRequest = async (
  req: ExtendedRequest,
): Promise<ProductLandingContextT> => {
  const context = req.context
  if (!context) {
    throw new Error('"getProductLandingContextFromRequest" requires req.context')
  }
  const productTree = context.currentProductTree
  if (!productTree) {
    throw new Error('"getProductLandingContextFromRequest" requires req.context.currentProductTree')
  }
  const page = context.page
  if (!page) {
    throw new Error('"getProductLandingContextFromRequest" requires req.context.page')
  }
  const hasGuidesPage = (page.children || []).includes('/guides')

  const title = await page.renderProp('title', context, { textOnly: true })
  const shortTitle = (await page.renderProp('shortTitle', context, { textOnly: true })) || null

  // This props is displayed on the product landing page as "Supported
  // releases". So we omit, if there is one, the release candidate.
  const ghesReleases = ((context.ghesReleases || []) as Release[]).filter((release) => {
    return !release.isReleaseCandidate
  })

  return {
    title,
    shortTitle: shortTitle || '',
    ...(pick(page as unknown as Record<string, unknown>, [
      'introPlainText',
      'beta_product',
      'intro',
    ]) as { introPlainText: string; beta_product: boolean; intro: string }),
    heroImage: (page as { heroImage?: string }).heroImage,
    hasGuidesPage,
    product: {
      href: productTree.href,
      title: productTree.page.shortTitle || productTree.page.title,
    },
    whatsNewChangelog: context.whatsNewChangelog || [],
    changelogUrl: context.changelogUrl,
    productCommunityExamples: (context.productCommunityExamples ||
      []) as ProductLandingContextT['productCommunityExamples'],
    ghesReleases,
    productUserExamples: (context.productUserExamples || []).map(({ user, description }) => ({
      username: user as string,
      description,
    })),

    introLinks:
      ((page as { introLinks?: Record<string, string> }).introLinks as
        | Record<string, string>
        | undefined) || null,

    featuredLinks: getFeaturedLinksFromReq(req),

    tocItems: ((context as { tocItems?: SimpleTocItem[] }).tocItems || []) as SimpleTocItem[],

    featuredArticles: Object.entries(context.featuredLinks || {})
      .filter(([key]) => {
        return key === 'startHere' || key === 'popular'
      })
      .map(([key, links]) => {
        const pageFeaturedLinks = (page.featuredLinks || {}) as unknown as Record<string, string>
        const tocLabels = ((context.site as { data?: { ui?: { toc?: Record<string, string> } } })
          ?.data?.ui?.toc || {}) as Record<string, string>
        return {
          key,
          label:
            key === 'popular'
              ? pageFeaturedLinks[`${key}Heading`] || tocLabels[key]
              : tocLabels[key],
          viewAllHref:
            key === 'startHere' && !context.currentCategory && hasGuidesPage
              ? `${context.currentPath}/guides`
              : '',
          articles: (links as FeaturedLinkExpanded[]).map((link) => {
            return {
              href: link.href,
              title: link.title,
              intro: link.intro,
              authors: (link.page as { authors?: string[] } | undefined)?.authors || [],
              fullTitle: link.fullTitle,
            }
          }),
        }
      }),
  }
}
