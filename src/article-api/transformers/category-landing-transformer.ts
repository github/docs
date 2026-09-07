import type { Context, Page } from '@/types'
import type { PageTransformer, TemplateData, Section, LinkData } from './types'
import { renderContent } from '@/content-render/index'
import { loadTemplate } from '@/article-api/lib/load-template'
import { resolvePath } from '@/article-api/lib/resolve-path'
import { getLinkData } from '@/article-api/lib/get-link-data'

interface CategoryPage extends Page {
  spotlight?: Array<{ article: string; image: string }>
  children?: string[]
}

/**
 * Transforms category-landing pages into markdown format.
 * Handles spotlight sections and recursively collects all descendant articles.
 */
export class CategoryLandingTransformer implements PageTransformer {
  templateName = 'landing-page.template.md'

  canTransform(page: Page): boolean {
    return page.layout === 'category-landing'
  }

  async transform(page: Page, pathname: string, context: Context): Promise<string> {
    const templateData = await this.prepareTemplateData(page, pathname, context)
    const templateContent = loadTemplate(this.templateName)

    return await renderContent(templateContent, {
      ...context,
      ...templateData,
      markdownRequested: true,
    })
  }

  /**
   * Recursively collects all descendant articles from the given parent hrefs.
   * Traverses the page tree, adding non-index pages and recursing into children.
   * Uses a visited set to prevent infinite loops from circular references.
   */
  private async getAllDescendantArticles(
    parentHrefs: string[],
    languageCode: string,
    pathname: string,
    context: Context,
    visited: Set<string> = new Set(),
  ): Promise<LinkData[]> {
    const allArticles: LinkData[] = []

    for (const href of parentHrefs) {
      // Prevent infinite loops from circular references
      if (visited.has(href)) continue
      visited.add(href)

      const parentPage = resolvePath(href, languageCode, pathname, context) as
        | CategoryPage
        | undefined
      if (!parentPage) continue

      // Add this page if it's an article (not an index)
      if (!parentPage.relativePath.endsWith('index.md')) {
        const linkData = await getLinkData(href, languageCode, pathname, context, resolvePath)
        if (linkData.href) {
          allArticles.push(linkData)
        }
      }

      // Recursively get children
      const children = parentPage.children
      if (children && Array.isArray(children) && children.length > 0) {
        // Get the parent's permalink to use as the base path for resolving children
        const parentPermalink = parentPage.permalinks.find(
          (p) => p.languageCode === languageCode && p.pageVersion === context.currentVersion,
        )
        const parentPathname = parentPermalink ? parentPermalink.href : pathname

        const childArticles = await this.getAllDescendantArticles(
          children,
          languageCode,
          parentPathname,
          context,
          visited,
        )
        allArticles.push(...childArticles)
      }
    }

    return allArticles
  }

  private async prepareTemplateData(
    page: Page,
    pathname: string,
    context: Context,
  ): Promise<TemplateData> {
    const categoryPage = page as CategoryPage
    const languageCode = page.languageCode || 'en'
    const sections: Section[] = []

    // Spotlight section
    const spotlight = categoryPage.spotlight
    if (spotlight && spotlight.length > 0) {
      const links = await Promise.all(
        spotlight.map(async (item) => {
          const linkData = await getLinkData(
            item.article,
            languageCode,
            pathname,
            context,
            resolvePath,
          )
          return {
            ...linkData,
            intro: linkData.intro
              ? `${linkData.intro} (Image: ${item.image})`
              : `Image: ${item.image}`,
          }
        }),
      )

      const validLinks = links.filter((l) => l.href)
      if (validLinks.length > 0) {
        sections.push({
          title: 'Spotlight',
          groups: [{ title: null, links: validLinks }],
        })
      }
    }

    // Children - get all descendant articles recursively
    if (categoryPage.children) {
      const allArticles = await this.getAllDescendantArticles(
        categoryPage.children,
        languageCode,
        pathname,
        context,
      )

      if (allArticles.length > 0) {
        sections.push({
          title: 'Links',
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
