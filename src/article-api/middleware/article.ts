import type { RequestHandler, Response } from 'express'
import express from 'express'

import { defaultCacheControl } from '@/frame/middleware/cache-control.js'
import catchMiddlewareError from '@/observability/middleware/catch-middleware-error.js'
import { ExtendedRequestWithPageInfo } from '../types'
import { pageValidationMiddleware, pathValidationMiddleware } from './validation'
import { getArticleBody } from './article-body'
import { getMetadata } from './article-pageinfo'
import {
  makeLanguageSurrogateKey,
  setFastlySurrogateKey,
  SURROGATE_ENUMS,
} from '@/frame/middleware/set-fastly-surrogate-key.js'
import statsd from '@/observability/lib/statsd.js'

const router = express.Router()

// For all these routes in `/api/article`:
// - pathValidationMiddleware ensures the path is properly structured and handles errors when it's not
// - pageValidationMiddleware fetches the page from the pagelist, returns 404 to the user if not found

/**
 * Get article metadata and content in a single object. Equivalent to calling `/article/meta` concatenated with `/article/body`.
 * @route GET /api/article
 * @param {string} pathname - Article path (e.g. '/en/get-started/article-name')
 * @returns {object} JSON object with article metadata and content (`meta` and `body` keys)
 * @throws {Error} 403 - If the article body cannot be retrieved. Reason is given in the error message.
 * @throws {Error} 400 - If pathname parameter is invalid.
 * @throws {Error} 404 - If the path is valid, but the page couldn't be resolved.
 * @example
 * ❯ curl -s "https://docs.github.com/api/article?pathname=/en/get-started/start-your-journey/about-github-and-git"
 * {
 *   "meta": {
 *     "title": "About GitHub and Git",
 *     "intro": "You can use GitHub and Git to collaborate on work.",
 *     "product": "Get started"
 *   },
 *   "body": "## About GitHub\n\nGitHub is a cloud-based platform where you can store, share, and work together with others to write code.\n\nStoring your code in a \"repository\" on GitHub allows you to:\n\n* **Showcase or share** your work.\n [...]"
 * }
 */
router.get(
  '/',
  pathValidationMiddleware as RequestHandler,
  pageValidationMiddleware as RequestHandler,
  catchMiddlewareError(async function (req: ExtendedRequestWithPageInfo, res: Response) {
    const { meta, cacheInfo } = await getMetadata(req)
    let bodyContent
    try {
      bodyContent = await getArticleBody(req)
    } catch (error) {
      return res.status(403).json({ error: (error as Error).message })
    }

    incrementArticleLookup(req, 'full', cacheInfo)

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
 * @returns {string} Article body content in markdown format.
 * @throws {Error} 403 - If the article body cannot be retrieved. Reason is given in the error message.
 * @throws {Error} 400 - If pathname parameter is invalid.
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
  catchMiddlewareError(async function (req: ExtendedRequestWithPageInfo, res: Response) {
    let bodyContent
    try {
      bodyContent = await getArticleBody(req)
    } catch (error) {
      return res.status(403).json({ error: (error as Error).message })
    }

    incrementArticleLookup(req, 'body')

    defaultCacheControl(res)
    return res.type('text/markdown').send(bodyContent)
  }),
)

/**
 * Get metadata about an article.
 * @route GET /api/article/meta
 * @param {string} pathname - Article path (e.g. '/en/get-started/article-name')
 * @returns {object} JSON object containing article metadata with title, intro, and product information.
 * @throws {Error} 400 - If pathname parameter is invalid.
 * @throws {Error} 404 - If the path is valid, but the page couldn't be resolved.
 * @example
 * ❯ curl -s "https://docs.github.com/api/article/meta?pathname=/en/get-started/start-your-journey/about-github-and-git"
 * {
 *   "title": "About GitHub and Git",
 *   "intro": "You can use GitHub and Git to collaborate on work.",
 *   "product": "Get started",
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

    // This is necessary so that the `Surrogate-Key` header is set with
    // the correct language surrogate key bit. By default, it's set
    // from the pathname but `/api/**` URLs don't have a language
    // (other than the default 'en').
    // We do this so that all of these URLs are cached in Fastly by language
    // which we need for the staggered purge.

    setFastlySurrogateKey(
      res,
      `${SURROGATE_ENUMS.DEFAULT} ${makeLanguageSurrogateKey(req.pageinfo?.page?.languageCode || 'en')}`,
      true,
    )
    return res.json(meta)
  }),
)

// this helps us standardize calls to our datadog agent for article api purposes
function incrementArticleLookup(
  req: ExtendedRequestWithPageInfo,
  type: 'full' | 'body' | 'meta',
  cacheInfo?: string,
) {
  const pathname = req.pageinfo.pathname
  const language = req.pageinfo.page?.languageCode || 'en'

  // logs the source of the request, if it's for hovercards it'll have the header X-Request-Source.
  // see src/links/components/LinkPreviewPopover.tsx
  const source =
    req.get('X-Request-Source') ||
    (req.get('Referer')
      ? 'external-' + (new URL(req.get('Referer') || '').hostname || 'unknown')
      : 'external')

  const tags = [
    // According to https://docs.datadoghq.com/getting_started/tagging/#define-tags
    // the max length of a tag is 200 characters. Most of ours are less than
    // that but we truncate just to be safe.
    `pathname:${pathname}`.slice(0, 200),
    `language:${language}`,
    `type:${type}`,
    `source:${source}`.slice(0, 200),
  ]

  // the /article/meta endpoint uses a cache
  if (cacheInfo) tags.push(`cache:${cacheInfo}`)

  statsd.increment('api.article.lookup', 1, tags)
}

export default router
