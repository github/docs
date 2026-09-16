import type { Context, Page } from '@/types'
import type { PageTransformer } from './types'

/**
 * /en/search is a UI-only page with no markdown content, so this returns the
 * title plus a pointer to the Search API.
 */
export class SearchPageTransformer implements PageTransformer {
  templateName = ''

  canTransform(page: Page): boolean {
    return page.relativePath === 'search/index.md'
  }

  async transform(page: Page, _pathname: string, context: Context): Promise<string> {
    const title = await page.renderTitle(context, { unwrap: true })
    return `# ${title}

Use the Search API to search programmatically:

\`\`\`
curl "https://docs.github.com/api/search?query=actions&language=en&version=free-pro-team@latest"
\`\`\`
`
  }
}
