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

    const carousels = discoveryPage.carousels ?? discoveryPage.rawCarousels
    if (carousels && typeof carousels === 'object') {
      const { default: getPageLinkData } = await import('@/frame/lib/get-link-data')

      for (const [carouselKey, articles] of Object.entries(carousels)) {
        if (!Array.isArray(articles) || articles.length === 0) continue

        let links: LinkData[]
        if (typeof articles[0] === 'object' && 'title' in articles[0]) {
          links = articles.map((item) => ({
            href: typeof item === 'string' ? item : item.href,
            title: (typeof item === 'object' && item.title) || '',
            intro: (typeof item === 'object' && item.intro) || '',
          }))
        } else {
          const linkData = await getPageLinkData(articles as string[], context, {
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
          const sectionTitle = carouselKey.charAt(0).toUpperCase() + carouselKey.slice(1)
          sections.push({
            title: sectionTitle,
            groups: [{ title: null, links: validLinks }],
          })
        }
      }
    }

    const rawIntroLinks = discoveryPage.introLinks ?? discoveryPage.rawIntroLinks
    if (rawIntroLinks) {
      const { default: getPageLinkData } = await import('@/frame/lib/get-link-data')
      const links = await Promise.all(
        Object.values(rawIntroLinks).map(async (href): Promise<LinkData> => {
          if (typeof href === 'string') {
            const linkData = await getPageLinkData(href, context)
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
