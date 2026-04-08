import type { Response } from 'express'
import express from 'express'

import type { ExtendedRequest } from '@/types'
import { defaultCacheControl } from '@/frame/middleware/cache-control'
import catchMiddlewareError from '@/observability/middleware/catch-middleware-error'
import statsd from '@/observability/lib/statsd'
import languages from '@/languages/lib/languages-server'
import { allVersions } from '@/versions/lib/all-versions'

const router = express.Router()
const BASE_API_URL = 'https://docs.github.com/api/pagelist'

/**
 * Serves an llms.txt file following the specification at https://llmstxt.org/
 * This provides LLM-friendly content discovery for GitHub Docs
 * @route GET /llms.txt
 * @returns {string} Markdown content following llms.txt specification
 */
router.get(
  '/',
  catchMiddlewareError(async function (req: ExtendedRequest, res: Response) {
    // Generate basic llms.txt content
    const llmsTxtContent = generateBasicLlmsTxt()

    statsd.increment('api.llms-txt.lookup', 1)
    defaultCacheControl(res)

    res.type('text/markdown').send(llmsTxtContent)
  }),
)

function generateBasicLlmsTxt(): string {
  // Generate translations section dynamically
  const translationsSection = Object.entries(languages)
    .filter(([code]) => code !== 'en') // Exclude English since it's the default
    .map(([code, lang]) => {
      const nativeName = lang.nativeName ? ` (${lang.nativeName})` : ''
      return `- [${lang.name}${nativeName}](${BASE_API_URL}/${code}/free-pro-team@latest)`
    })
    .join('\n')

  // Generate all versions dynamically
  const versionsSection = Object.values(allVersions)
    .map((version) => {
      const versionKey = version.version
      const title = version.versionTitle
      return `- [${title}](${BASE_API_URL}/en/${versionKey})`
    })
    .join('\n')

  return `# GitHub Docs

> Help for wherever you are on your GitHub journey.

## How to Use

To find a specific article, use the **Search API** with a query. To browse all available pages, use the **Page List API** to get a list of paths, then fetch individual articles with the **Article API**. The \`/api/article/body\` endpoint returns clean markdown, ideal for LLM consumption.

## APIs

- [Page List API](${BASE_API_URL}/en/free-pro-team@latest): Returns all article paths for a given version. Use this to discover what content is available.
- [Article API](https://docs.github.com/api/article): Fetches a single article as JSON (metadata and markdown body). Use \`/api/article/body\` for markdown only. Example: \`/api/article/body?pathname=/en/get-started/start-your-journey/about-github-and-git\`
- [Search API](https://docs.github.com/api/search/v1): Full-text search across all articles. Returns matching pages with context. Example: \`/api/search/v1?query=actions&language=en&version=free-pro-team@latest&client_name=curl\`
- [Versions API](${BASE_API_URL}/versions): Lists all available documentation versions.
- [Languages API](${BASE_API_URL}/languages): Lists all available languages.

## Translations

${translationsSection}

## Versions

${versionsSection}
`
}

export default router
