import type { RequestHandler, Response } from 'express'
import express from 'express'

import { defaultCacheControl } from '@/frame/middleware/cache-control'
import catchMiddlewareError from '@/observability/middleware/catch-middleware-error'
import { ExtendedRequestWithPageInfo } from '../types'
import {
  pageValidationMiddleware,
  pathValidationMiddleware,
  apiVersionValidationMiddleware,
} from './validation'
import { getArticleBody } from './article-body'
import { getMetadata } from './article-pageinfo'
import {
  makeLanguageSurrogateKey,
  setFastlySurrogateKey,
} from '@/frame/middleware/set-fastly-surrogate-key'
import statsd from '@/observability/lib/statsd'

const router = express.Router()

// All /api/article routes validate pathname structure before page lookup.
// pageValidationMiddleware returns 404 when the pagelist cannot resolve the path.
/**
 * Get article metadata and content in a single object. Equivalent to calling `/article/meta` concatenated with `/article/body`.
 * @route GET /api/article
 * @param {string} pathname - Article path (e.g. '/en/get-started/article-name')
 * @param {string} [apiVersion] - API version for REST pages (optional, defaults to latest)
 * @returns {object} JSON object with article metadata and content (`meta` and `body` keys)
 * @throws {Error} 403 - If the article body cannot be retrieved. Reason is given in the error message.
 * @throws {Error} 400 - If pathname or apiVersion parameters are invalid.
 * @throws {Error} 404 - If the path is valid, but the page couldn't be resolved.
 * @example
 * ❯ curl -s "https://docs.github.com/api/article?pathname=/en/get-started/start-your-journey/about-github-and-git"
 * {
 *   "meta": {
 *     "title": "About GitHub and Git",
 *     "intro": "You can use GitHub and Git to collaborate on work.",
 *     "product": "Get started",
 *     "documentType": "article"
 *   },
 *   "body": "## About GitHub\n\nGitHub is a cloud-based platform where you can store, share, and work together with others to write code.\n\nStoring your code in a \"repository\" on GitHub allows you to:\n\n* **Showcase or share** your work.\n [...]"
 * }
 */
router.get(
  '/',
  pathValidationMiddleware as RequestHandler,
  pageValidationMiddleware as RequestHandler,
  apiVersionValidationMiddleware as RequestHandler,
  catchMiddlewareError(async function (req: ExtendedRequestWithPageInfo, res: Response) {
    const { meta, cacheInfo } = await getMetadata(req)
    let bodyContent
    try {
      bodyContent = await getArticleBody(req)
    } catch (error) {
      return res.status(403).json({ error: (error as Error).message })
    }

    incrementArticleLookup(req, 'full', cacheInfo)
    recordBodySize(req, bodyContent)

    defaultCacheControl(res)
    return res.json({
      meta,
      body: bodyContent,
    })
  }),
)

/**
 * Get the contents of an article's body.
 * @route GET /api/article/body
 * @param {string} pathname - Article path (e.g. '/en/get-started/article-name')
 * @param {string} [apiVersion] - API version (optional, defaults to latest)
 * @returns {string} Article body content in markdown format.
 * @throws {Error} 403 - If the article body cannot be retrieved. Reason is given in the error message.
 * @throws {Error} 400 - If pathname or apiVersion parameters are invalid.
 * @throws {Error} 404 - If the path is valid, but the page couldn't be resolved.
 * @example
 * ❯ curl -s https://docs.github.com/api/article/body\?pathname=/en/get-started/start-your-journey/about-github-and-git
 * ## About GitHub
 *
 * GitHub is a cloud-based platform where you can store, share, and work together with others to write code.
 *
 * Storing your code in a "repository" on GitHub allows you to:
 * [...]
 */
router.get(
  '/body',
  pathValidationMiddleware as RequestHandler,
  pageValidationMiddleware as RequestHandler,
  apiVersionValidationMiddleware as RequestHandler,
  catchMiddlewareError(async function (req: ExtendedRequestWithPageInfo, res: Response) {
    let bodyContent
    try {
      bodyContent = await getArticleBody(req)
    } catch (error) {
      return res.status(403).json({ error: (error as Error).message })
    }

    incrementArticleLookup(req, 'body')
    recordBodySize(req, bodyContent)

    defaultCacheControl(res)
    return res.type('text/markdown').send(bodyContent)
  }),
)

// /api/article/meta sets a language surrogate key because /api URLs lack a language segment.
// Fastly needs the key for staggered language purges.
/**
 * Get metadata about an article.
 * @route GET /api/article/meta
 * @param {string} pathname - Article path (e.g. '/en/get-started/article-name')
 * @returns {object} JSON object containing article metadata with title, intro, product, and documentType information.
 * @throws {Error} 400 - If pathname parameter is invalid.
 * @throws {Error} 404 - If the path is valid, but the page couldn't be resolved.
 * @example
 * ❯ curl -s "https://docs.github.com/api/article/meta?pathname=/en/get-started/start-your-journey/about-github-and-git"
 * {
 *   "title": "About GitHub and Git",
 *   "intro": "You can use GitHub and Git to collaborate on work.",
 *   "product": "Get started",
 *   "documentType": "article",
 *   "breadcrumbs": [
 *     {
 *       "href": "/en/get-started",
 *       "title": "Get started"
 *     },
 *     {
 *       "href": "/en/get-started/start-your-journey",
 *       "title": "Start your journey"
 *     },
 *     {
 *       "href": "/en/get-started/start-your-journey/about-github-and-git",
 *       "title": "About GitHub and Git"
 *     }
 *   ]
 * }
 */
router.get(
  '/meta',
  pathValidationMiddleware as RequestHandler,
  pageValidationMiddleware as RequestHandler,
  catchMiddlewareError(async function pageInfo(req: ExtendedRequestWithPageInfo, res: Response) {
    const { meta, cacheInfo } = await getMetadata(req)

    incrementArticleLookup(req, 'meta', cacheInfo)
    defaultCacheControl(res)

    setFastlySurrogateKey(
      res,
      makeLanguageSurrogateKey(req.pageinfo?.page?.languageCode || 'en'),
      true,
    )
    return res.json(meta)
  }),
)

// Keep Datadog metric tags consistent across Article API endpoints.
// Datadog tags max at 200 characters, so path and source tags are truncated.
// See https://docs.datadoghq.com/getting_started/tagging/#define-tags
function incrementArticleLookup(
  req: ExtendedRequestWithPageInfo,
  type: 'full' | 'body' | 'meta',
  cacheInfo?: string,
) {
  const pathname = req.pageinfo.pathname
  const language = req.pageinfo.page?.languageCode || 'en'

  // Hovercards set X-Request-Source; src/links/components/LinkPreviewPopover.tsx sends the header.
  let source = req.get('X-Request-Source')
  if (!source) {
    const referer = req.get('Referer')
    if (referer) {
      try {
        source = `external-${new URL(referer).hostname || 'unknown'}`
      } catch {
        source = 'external'
      }
    } else {
      source = 'external'
    }
  }

  const tags = [
    `pathname:${pathname}`.slice(0, 200),
    `language:${language}`,
    `type:${type}`,
    `source:${source}`.slice(0, 200),
  ]

  // Full and metadata lookups include page-info cache status.
  if (cacheInfo) tags.push(`cache:${cacheInfo}`)

  statsd.increment('api.article.lookup', 1, tags)
}

function recordBodySize(req: ExtendedRequestWithPageInfo, body: string) {
  const sizeBytes = Buffer.byteLength(body, 'utf8')
  const tags = [
    `pathname:${req.pageinfo.pathname}`.slice(0, 200),
    `language:${req.pageinfo.page?.languageCode || 'en'}`,
  ]
  statsd.distribution('api.article.body_size_bytes', sizeBytes, tags)
}

export default router
