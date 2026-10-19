import type { Context, Page } from '@/types'
import type { PageTransformer, TemplateData, Section } from './types'
import { renderContent } from '@/content-render/index'
import { loadTemplate } from '@/article-api/lib/load-template'
import { getAllTocItems, flattenTocItems } from '@/article-api/lib/get-all-toc-items'
import { resolveCarouselLinks } from '@/article-api/lib/resolve-carousel-links'

interface BespokeLandingPage extends Omit<Page, 'featuredLinks'> {
  featuredLinks?: Record<string, Array<string | { href: string; title: string; intro?: string }>>
  children?: string[]
  rawCarousels?: Record<string, string[]>
  includedCategories?: string[]
}

// Bespoke landing pages ignore includedCategories; only discovery landing pages apply it.
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

    // resolve-carousels overwrites page.carousels on the shared Page with another version's links.
    const carousels = bespokePage.rawCarousels
    if (carousels && typeof carousels === 'object') {
      for (const [carouselKey, articles] of Object.entries(carousels)) {
        if (!Array.isArray(articles) || articles.length === 0) continue

        const links = await resolveCarouselLinks(articles, page, context)
        const validLinks = links.filter((l) => l.href && l.title)
        if (validLinks.length > 0) {
          const sectionTitle = carouselKey.charAt(0).toUpperCase() + carouselKey.slice(1)
          sections.push({
            title: sectionTitle,
            groups: [{ title: null, links: validLinks }],
          })
        }
      }
    }

    // getAllTocItems matches the site's genericTocFlat and genericTocNested behavior.
    if (bespokePage.children && bespokePage.children.length > 0) {
      const tocItems = await getAllTocItems(page, context)

      // excludeParents keeps only leaf TOC items, dropping anything with children.
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
