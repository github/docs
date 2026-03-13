import type { Context, Page, ResolvedArticle } from '@/types'
import type { PageTransformer, TemplateData, Section, LinkGroup, LinkData } from './types'
import { renderContent } from '@/content-render/index'
import { loadTemplate } from '@/article-api/lib/load-template'
import { resolvePath } from '@/article-api/lib/resolve-path'
import { getLinkData } from '@/article-api/lib/get-link-data'

interface ProductPage extends Omit<Page, 'featuredLinks'> {
  featuredLinks?: Record<string, Array<string | { href: string; title: string; intro?: string }>>
  children?: string[]
  carousels?: Record<string, ResolvedArticle[]>
  rawCarousels?: Record<string, string[]>
  includedCategories?: string[]
}

interface PageWithChildren extends Page {
  children?: string[]
  category?: string[]
}

/**
 * Transforms product-landing pages into markdown format.
 * Handles featured links (startHere, popular, videos), guide cards,
 * article grids with category filtering, and children listings.
 */
export class ProductLandingTransformer implements PageTransformer {
  templateName = 'landing-page.template.md'

  canTransform(page: Page): boolean {
    return page.layout === 'product-landing'
  }

  async transform(page: Page, pathname: string, context: Context): Promise<string> {
    const templateData = await this.prepareTemplateData(page, pathname, context)

    const templateContent = loadTemplate(this.templateName)

    const rendered = await renderContent(templateContent, {
      ...context,
      ...templateData,
      markdownRequested: true,
    })

    return rendered
  }

  private async prepareTemplateData(
    page: Page,
    pathname: string,
    context: Context,
  ): Promise<TemplateData> {
    const productPage = page as ProductPage
    const languageCode = page.languageCode || 'en'
    const sections: Section[] = []

    // Process carousels (each carousel becomes a section)
    const carousels = productPage.carousels ?? productPage.rawCarousels
    if (carousels && typeof carousels === 'object') {
      const { default: getLearningTrackLinkData } = await import(
        '@/learning-track/lib/get-link-data'
      )

      for (const [carouselKey, articles] of Object.entries(carousels)) {
        if (!Array.isArray(articles) || articles.length === 0) continue

        let links: LinkData[]
        if (typeof articles[0] === 'object' && 'title' in articles[0]) {
          // Already resolved articles
          links = articles.map((item) => ({
            href: typeof item === 'string' ? item : item.href,
            title: (typeof item === 'object' && item.title) || '',
            intro: (typeof item === 'object' && item.intro) || '',
          }))
        } else {
          // Raw paths that need resolution
          const linkData = await getLearningTrackLinkData(articles as string[], context, {
            title: true,
            intro: true,
          })
          links = (linkData || []).map(
            (item: { href: string; title?: string; intro?: string }) => ({
              href: item.href,
              title: item.title || '',
              intro: item.intro || '',
            }),
          )
        }

        const validLinks = links.filter((l) => l.href && l.title)
        if (validLinks.length > 0) {
          // Use carousel key as title (capitalize first letter)
          const sectionTitle = carouselKey.charAt(0).toUpperCase() + carouselKey.slice(1)
          sections.push({
            title: sectionTitle,
            groups: [{ title: null, links: validLinks }],
          })
        }
      }
    }

    // Featured links (startHere, popular, videos, etc.)
    const rawFeaturedLinks = productPage.featuredLinks
    if (rawFeaturedLinks) {
      const { default: getLearningTrackLinkData } = await import(
        '@/learning-track/lib/get-link-data'
      )

      const featuredKeys = ['startHere', 'popular', 'videos']
      const featuredGroups: LinkGroup[] = []

      for (const key of featuredKeys) {
        const links = rawFeaturedLinks[key]
        if (!Array.isArray(links) || links.length === 0) continue

        const sectionTitle = this.getSectionTitle(key)

        let resolvedLinks: LinkData[]

        if (key === 'videos') {
          // Videos are external URLs with title and href properties
          const videoLinks = await Promise.all(
            links.map(async (link) => {
              if (typeof link === 'object' && link.href) {
                const title = await renderContent(link.title, context, { textOnly: true })
                return title ? { href: link.href, title, intro: link.intro || '' } : null
              }
              return null
            }),
          )
          resolvedLinks = videoLinks.filter((l) => l !== null) as LinkData[]
        } else {
          // Other featuredLinks are page hrefs that need Liquid evaluation
          const stringLinks = links.map((item) => (typeof item === 'string' ? item : item.href))
          const linkData = await getLearningTrackLinkData(stringLinks, context, {
            title: true,
            intro: true,
          })
          resolvedLinks = (linkData || []).map((item) => ({
            href: item.href,
            title: item.title || '',
            intro: item.intro || '',
          }))
        }

        const validLinks = resolvedLinks.filter((l) => l.href)
        if (validLinks.length > 0) {
          featuredGroups.push({
            title: sectionTitle,
            links: validLinks,
          })
        }
      }

      if (featuredGroups.length > 0) {
        sections.push({
          title: 'Featured',
          groups: featuredGroups,
        })
      }
    }

    // Guide cards
    if (rawFeaturedLinks?.guideCards) {
      const links = rawFeaturedLinks.guideCards
      if (Array.isArray(links)) {
        const resolvedLinks = await Promise.all(
          links.map(async (link) => {
            if (typeof link === 'string') {
              return await getLinkData(link, languageCode, pathname, context, resolvePath)
            } else if (link.href) {
              return {
                href: link.href,
                title: link.title,
                intro: link.intro || '',
              }
            }
            return null
          }),
        )

        const validLinks = resolvedLinks.filter((l): l is LinkData => l !== null && !!l.href)
        if (validLinks.length > 0) {
          sections.push({
            title: 'Guides',
            groups: [{ title: null, links: validLinks }],
          })
        }
      }
    }

    // Article grid with includedCategories filtering
    if (productPage.children && productPage.includedCategories) {
      const gridGroups: LinkGroup[] = []
      const includedCategories = productPage.includedCategories

      for (const childHref of productPage.children) {
        const childPage = resolvePath(childHref, languageCode, pathname, context) as
          | PageWithChildren
          | undefined
        if (!childPage?.children) continue

        const childChildren = childPage.children
        if (childChildren.length === 0) continue

        // Get the child page's pathname to use for resolving grandchildren
        const childPermalink = childPage.permalinks.find(
          (p) => p.languageCode === languageCode && p.pageVersion === context.currentVersion,
        )
        const childPathname = childPermalink ? childPermalink.href : pathname + childHref

        const articles = await Promise.all(
          childChildren.map(async (grandchildHref: string) => {
            const linkData = await getLinkData(
              grandchildHref,
              languageCode,
              childPathname,
              context,
              resolvePath,
            )

            if (includedCategories.length > 0) {
              const linkedPage = resolvePath(
                grandchildHref,
                languageCode,
                childPathname,
                context,
              ) as PageWithChildren | undefined
              if (linkedPage) {
                const pageCategories = linkedPage.category || []
                const hasMatchingCategory =
                  Array.isArray(pageCategories) &&
                  pageCategories.some((cat: string) =>
                    includedCategories.some(
                      (included) => included.toLowerCase() === cat.toLowerCase(),
                    ),
                  )
                if (!hasMatchingCategory) {
                  return null
                }
              }
            }

            return linkData
          }),
        )

        const validArticles = articles.filter((a): a is LinkData => a !== null && !!a.href)
        if (validArticles.length > 0) {
          const childTitle = await childPage.renderTitle(context, { unwrap: true })
          gridGroups.push({
            title: childTitle,
            links: validArticles,
          })
        }
      }

      if (gridGroups.length > 0) {
        sections.push({
          title: 'Articles',
          groups: gridGroups,
        })
      }
    }

    // All children (full listing)
    if (productPage.children) {
      const links = await Promise.all(
        productPage.children.map(async (childHref) => {
          return await getLinkData(childHref, languageCode, pathname, context, resolvePath)
        }),
      )
      const validLinks = links.filter((l) => l.href)
      if (validLinks.length > 0) {
        sections.push({
          title: 'Links',
          groups: [{ title: null, links: validLinks }],
        })
      }
    }

    const intro = page.intro ? await page.renderProp('intro', context, { textOnly: true }) : ''
    const title = await page.renderTitle(context, { unwrap: true })

    return {
      title,
      intro,
      sections,
    }
  }

  private getSectionTitle(key: string): string {
    const map: Record<string, string> = {
      gettingStarted: 'Getting started',
      startHere: 'Start here',
      guideCards: 'Guides',
      popular: 'Popular',
      videos: 'Videos',
    }
    return map[key] || key
  }
}
