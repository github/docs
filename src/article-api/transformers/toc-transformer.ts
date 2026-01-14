import type { Context, Page } from '@/types'
import type { PageTransformer, TemplateData, Section } from './types'
import { renderContent } from '@/content-render/index'
import { loadTemplate } from '@/article-api/lib/load-template'
import { resolvePath } from '@/article-api/lib/resolve-path'
import { getLinkData } from '@/article-api/lib/get-link-data'

interface CategoryPage extends Page {
  children?: string[]
}

/**
 * Transformer for table of contents (TOC) landing pages - pages with children but no specific layout.
 * These are simple navigation pages (category/subcategory/product/homepage) that list child pages with titles and intros.
 * Corresponds to TocLanding component in the web UI.
 */
export class TocTransformer implements PageTransformer {
  templateName = 'landing-page.template.md'

  canTransform(page: Page): boolean {
    // Transform pages that have children but no layout specified
    // These are typically category, subcategory, product, or homepage pages
    const categoryPage = page as CategoryPage
    const validDocTypes = ['category', 'subcategory', 'product', 'homepage']
    return (
      !page.layout &&
      validDocTypes.includes(page.documentType) &&
      !!categoryPage.children &&
      categoryPage.children.length > 0
    )
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

  private async prepareTemplateData(
    page: Page,
    pathname: string,
    context: Context,
  ): Promise<TemplateData> {
    const mapPage = page as CategoryPage
    const languageCode = page.languageCode || 'en'
    const sections: Section[] = []

    // Get all child pages
    if (mapPage.children?.length) {
      const links = await Promise.all(
        mapPage.children.map(async (childHref) => {
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
}
