import type { Context, Page, ResolvedArticle } from '@/types'
import type { PageTransformer, TemplateData, Section, LinkData } from './types'
import { renderContent } from '@/content-render/index'
import { loadTemplate } from '@/article-api/lib/load-template'
import { getAllTocItems, flattenTocItems } from '@/article-api/lib/get-all-toc-items'

interface DiscoveryPage extends Page {
  rawIntroLinks?: Record<string, string>
  introLinks?: Record<string, string>
  carousels?: Record<string, ResolvedArticle[]>
  rawCarousels?: Record<string, string[]>
  includedCategories?: string[]
  children?: string[]
}

/**
 * Transforms discovery-landing pages into markdown format.
 * Handles recommended carousel, intro links, article grids with
 * category filtering, and children listings.
 */
export class DiscoveryLandingTransformer implements PageTransformer {
  templateName = 'landing-page.template.md'

  canTransform(page: Page): boolean {
    return page.layout === 'discovery-landing'
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
    _pathname: string,
    context: Context,
  ): Promise<TemplateData> {
    const discoveryPage = page as DiscoveryPage
    const sections: Section[] = []

    // Process carousels (each carousel becomes a section)
    const carousels = discoveryPage.carousels ?? discoveryPage.rawCarousels
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

    // Intro links (getting started)
    const rawIntroLinks = discoveryPage.introLinks ?? discoveryPage.rawIntroLinks
    if (rawIntroLinks) {
      const { default: getLearningTrackLinkData } = await import(
        '@/learning-track/lib/get-link-data'
      )
      const links = await Promise.all(
        Object.values(rawIntroLinks).map(async (href): Promise<LinkData> => {
          if (typeof href === 'string') {
            const linkData = await getLearningTrackLinkData(href, context)
            if (Array.isArray(linkData) && linkData.length > 0) {
              const item = linkData[0]
              return { href: item.href || '', title: item.title || '', intro: item.intro || '' }
            } else if (
              linkData &&
              typeof linkData === 'object' &&
              !Array.isArray(linkData) &&
              'href' in linkData
            ) {
              const item = linkData as { href?: string; title?: string; intro?: string }
              return {
                href: item.href || '',
                title: item.title || '',
                intro: item.intro || '',
              }
            }
          }
          return { href: '', title: '' }
        }),
      )
      const validLinks = links.filter((l) => l.href)
      if (validLinks.length > 0) {
        sections.push({
          title: 'Links',
          groups: [{ title: 'Getting started', links: validLinks }],
        })
      }
    }

    // Articles section: recursively gather ALL descendant articles
    // This matches the behavior of the site which uses genericTocFlat/genericTocNested
    if (discoveryPage.children && discoveryPage.children.length > 0) {
      const tocItems = await getAllTocItems(page, context, {
        recurse: true,
        renderIntros: true,
      })

      // Flatten to get all leaf articles (excludeParents: true means only get articles, not category pages)
      let allArticles = flattenTocItems(tocItems, { excludeParents: true })

      // Apply includedCategories filter if specified
      if (discoveryPage.includedCategories && discoveryPage.includedCategories.length > 0) {
        const includedCategories = discoveryPage.includedCategories.map((c) => c.toLowerCase())
        // Filter tocItems before flattening to preserve category info
        const filterByCategory = (items: typeof tocItems): typeof tocItems => {
          return items.filter((item) => {
            const itemCategories = (item.category || []).map((c: string) => c.toLowerCase())
            return itemCategories.some((cat) => includedCategories.includes(cat))
          })
        }

        // Re-flatten with category filtering
        const filteredTocItems = filterByCategory(flattenTocItemsWithCategory(tocItems))
        allArticles = filteredTocItems.map((item) => ({
          href: item.href,
          title: item.title,
          intro: item.intro,
        }))
      }

      if (allArticles.length > 0) {
        sections.push({
          title: 'Articles',
          groups: [{ title: null, links: allArticles }],
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
}

/**
 * Helper to flatten TOC items while preserving category info for filtering
 */
interface TocItemWithCategory {
  href: string
  title: string
  intro?: string
  category?: string[]
  childTocItems?: TocItemWithCategory[]
}

function flattenTocItemsWithCategory(tocItems: TocItemWithCategory[]): TocItemWithCategory[] {
  const result: TocItemWithCategory[] = []

  function recurse(items: TocItemWithCategory[]) {
    for (const item of items) {
      const hasChildren = item.childTocItems && item.childTocItems.length > 0

      // Only include leaf nodes (articles, not category pages)
      if (!hasChildren) {
        result.push(item)
      }

      if (hasChildren) {
        recurse(item.childTocItems!)
      }
    }
  }

  recurse(tocItems)
  return result
}
