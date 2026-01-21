import type { Context, Page } from '@/types'
import type { PageTransformer, TemplateData, Section, LinkData } from './types'
import { renderContent } from '@/content-render/index'
import { loadTemplate } from '@/article-api/lib/load-template'
import { getAllTocItems, flattenTocItems } from '@/article-api/lib/get-all-toc-items'

interface RecommendedItem {
  href: string
  title?: string
  intro?: string
}

interface BespokeLandingPage extends Omit<Page, 'featuredLinks'> {
  featuredLinks?: Record<string, Array<string | { href: string; title: string; intro?: string }>>
  children?: string[]
  recommended?: RecommendedItem[]
  rawRecommended?: string[]
  includedCategories?: string[]
}

/**
 * Transforms bespoke-landing pages into markdown format.
 * Handles recommended carousel and full article listings.
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

    // Recommended carousel
    const recommended = bespokePage.recommended ?? bespokePage.rawRecommended
    if (recommended && recommended.length > 0) {
      const { default: getLearningTrackLinkData } = await import(
        '@/learning-track/lib/get-link-data'
      )

      let links: LinkData[]
      if (typeof recommended[0] === 'object' && 'title' in recommended[0]) {
        links = recommended.map((item) => ({
          href: typeof item === 'string' ? item : item.href,
          title: (typeof item === 'object' && item.title) || '',
          intro: (typeof item === 'object' && item.intro) || '',
        }))
      } else {
        const linkData = await getLearningTrackLinkData(recommended as string[], context, {
          title: true,
          intro: true,
        })
        links = (linkData || []).map((item: { href: string; title?: string; intro?: string }) => ({
          href: item.href,
          title: item.title || '',
          intro: item.intro || '',
        }))
      }

      const validLinks = links.filter((l) => l.href && l.title)
      if (validLinks.length > 0) {
        sections.push({
          title: 'Recommended',
          groups: [{ title: null, links: validLinks }],
        })
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
