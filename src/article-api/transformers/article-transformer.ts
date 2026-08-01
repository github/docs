import type { Context, Page } from '@/types'
import type { PageTransformer } from './types'

/**
 * Transformer for regular articles.
 *
 * This is a catch-all transformer registered last in the registry.
 * It renders the page body as markdown and prepends the title and intro.
 */
export class ArticleTransformer implements PageTransformer {
  canTransform(page: Page): boolean {
    // Catch-all: handles any page not matched by a more specific transformer.
    return page != null
  }

  async transform(page: Page, _pathname: string, context: Context): Promise<string> {
    const body = await page.render({ ...context, markdownRequested: true })
    const title = page.title
    const intro = page.intro ? await page.renderProp('intro', context, { textOnly: true }) : ''

    let result = `# ${title}\n\n`
    if (intro) result += `${intro}\n\n`
    result += body
    return result
  }
}
