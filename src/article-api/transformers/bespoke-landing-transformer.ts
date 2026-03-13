import type { Context, Page, ResolvedArticle } from '@/types'
import type { PageTransformer, TemplateData, Section, LinkData } from './types'
import { renderContent } from '@/content-render/index'
import { loadTemplate } from '@/article-api/lib/load-template'
import { getAllTocItems, flattenTocItems } from '@/article-api/lib/get-all-toc-items'

interface BespokeLandingPage extends Omit<Page, 'featuredLinks'> {
  featuredLinks?: Record<string, Array<string | { href: string; title: string; intro?: string }>>
  children?: string[]
  carousels?: Record<string, ResolvedArticle[]>
  rawCarousels?: Record<string, string[]>
  includedCategories?: string[]
}

/**
 * Transforms bespoke-landing pages into markdown format.
 * Handles carousels and full article listings.
 * Note: Unlike discovery-landing, bespoke-landing shows ALL articles
 * regardless of includedCategories.
 */
export class BespokeLandingTransformer implements PageTransformer {
  templateName = 'landing-page.template.md'

  canTransform(page: Page): boolean {
    return page.layout === 'bespoke-landing'
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
    const bespokePage = page as BespokeLandingPage
    const sections: Section[] = []

    // Process carousels (each carousel becomes a section)
    const carousels = bespokePage.carousels ?? bespokePage.rawCarousels
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

    // Articles section: recursively gather ALL descendant articles
    // This matches the behavior of the site which uses genericTocFlat/genericTocNested
    // Note: For bespoke-landing pages, the site shows ALL articles regardless of includedCategories
    // (includedCategories only filters for discovery-landing pages)
    if (bespokePage.children && bespokePage.children.length > 0) {
      const tocItems = await getAllTocItems(page, context, {
        recurse: true,
        renderIntros: true,
      })

      // Flatten to get all leaf articles (excludeParents: true means only get articles, not category pages)
      const allArticles = flattenTocItems(tocItems, { excludeParents: true })

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
