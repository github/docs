import type { Context, Page } from '@/types'
import type { PageTransformer } from './types'

// /en/search has no markdown content, so return the title and a pointer to the Search API.
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
