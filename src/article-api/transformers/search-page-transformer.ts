import type { Context, Page } from '@/types'
import type { PageTransformer } from './types'

/**
 * Transformer for the search page (/en/search).
 * This is a special UI-only page with no markdown content.
 * Returns minimal markdown with just the title.
 */
export class SearchPageTransformer implements PageTransformer {
  templateName = ''

  canTransform(page: Page): boolean {
    // Only match the search page specifically
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
