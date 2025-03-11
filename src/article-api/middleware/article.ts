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
} from '#src/frame/middleware/set-fastly-surrogate-key.js'
import statsd from '#src/observability/lib/statsd.js'

const router = express.Router()

// For all these routes in `/api/article`:
// - pathValidationMiddleware ensures the path is properly structured and handles errors when it's not
// - pageValidationMiddleware fetches the page from the pagelist, returns 404 to the user if not found

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
