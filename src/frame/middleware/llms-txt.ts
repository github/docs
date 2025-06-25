import type { Response } from 'express'
import express from 'express'

import type { ExtendedRequest } from '@/types'
import { defaultCacheControl } from '@/frame/middleware/cache-control.js'
import catchMiddlewareError from '@/observability/middleware/catch-middleware-error.js'
import statsd from '@/observability/lib/statsd.js'
import languages from '@/languages/lib/languages.js'
import { allVersions } from '@/versions/lib/all-versions.js'

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

## Docs Content

- [Page List API](${BASE_API_URL}/en/free-pro-team@latest)
- [Article API](https://docs.github.com/api/article): \`curl "https://docs.github.com/api/article?pathname=/en/get-started/start-your-journey/about-github-and-git"\`
- [Search API](https://docs.github.com/api/search): \`curl "https://docs.github.com/api/search?query=actions&language=en&version=free-pro-team@latest"\`

## Translations

${translationsSection}

## Versions

${versionsSection}
`
}

export default router
