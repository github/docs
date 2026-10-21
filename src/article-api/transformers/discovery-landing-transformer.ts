import type { Context, Page } from '@/types'
import type { PageTransformer, TemplateData, Section } from './types'
import { renderContent } from '@/content-render/index'
import { loadTemplate } from '@/article-api/lib/load-template'
import { getAllTocItems, flattenTocItems } from '@/article-api/lib/get-all-toc-items'
import { getIntroLinksSection } from '@/article-api/lib/get-intro-links-section'
import { resolveCarouselLinks } from '@/article-api/lib/resolve-carousel-links'

interface DiscoveryPage extends Page {
  rawCarousels?: Record<string, string[]>
  includedCategories?: string[]
  children?: string[]
}

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

    // resolve-carousels overwrites page.carousels on the shared Page with another version's links.
    const carousels = discoveryPage.rawCarousels
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

    const introLinksSection = await getIntroLinksSection(page, context)
    if (introLinksSection) sections.push(introLinksSection)

    // getAllTocItems sets basePath to keep /rest from recursing into /enterprise-admin children.
    if (discoveryPage.children && discoveryPage.children.length > 0) {
      const tocItems = await getAllTocItems(page, context)

      // excludeParents keeps only leaf TOC items, dropping anything with children.
      let allArticles = flattenTocItems(tocItems, { excludeParents: true })

      if (discoveryPage.includedCategories && discoveryPage.includedCategories.length > 0) {
        const includedCategories = discoveryPage.includedCategories.map((c) => c.toLowerCase())

        // includedCategories filters by category metadata from the full TOC tree.
        const categoryMap = new Map<string, string[]>()
        interface TocNode {
          href: string
          category?: string[]
          childTocItems?: TocNode[]
        }
        function collectCategories(items: TocNode[]) {
          for (const item of items) {
            if (item.category && item.category.length > 0) {
              categoryMap.set(item.href, item.category)
            }
            if (item.childTocItems) collectCategories(item.childTocItems)
          }
        }
        collectCategories(tocItems)

        allArticles = allArticles.filter((item) => {
          const itemCategories = (categoryMap.get(item.href) || []).map((c) => c.toLowerCase())
          return (
            itemCategories.length === 0 ||
            itemCategories.some((cat) => includedCategories.includes(cat))
          )
        })
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
