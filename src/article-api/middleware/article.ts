import type { RequestHandler, Response } from 'express'
import express from 'express'

import { defaultCacheControl } from '@/frame/middleware/cache-control.js'
import { Context } from '#src/types.js'
import catchMiddlewareError from '@/observability/middleware/catch-middleware-error.js'
import { ExtendedRequestWithPageInfo } from '../types'
import { pageValidationMiddleware, pathValidationMiddleware } from './validation'
import contextualize from '#src/frame/middleware/context/context.js'

/** START helper functions */

// for now, we're just querying pageinfo, we'll likely replace /api/pageinfo
// with /api/meta and move or reference that code here
async function getArticleMetadata(req: ExtendedRequestWithPageInfo) {
  const queryString = new URLSearchParams(req.query as Record<string, string>).toString()
  const apiUrl = `${req.protocol}://${req.get('host')}/api/pageinfo${queryString ? `?${queryString}` : ''}`

  // Fetch the data from the pageinfo API
  const response = await fetch(apiUrl)

  // Check if the response is OK
  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Failed to fetch metadata: ${response.status} ${errorText}`)
  }

  return await response.json()
}

async function getArticleBody(req: ExtendedRequestWithPageInfo) {
  // req.pageinfo is set from pageValidationMiddleware and pathValidationMiddleware
  // and is in the ExtendedRequestWithPageInfo
  const { page, pathname } = req.pageinfo

  // for anything that's not an article (like index pages), don't try to render and
  // tell the user what's going on
  if (page.documentType !== 'article') {
    throw new Error(`Page ${pathname} isn't yet available in markdown.`)
  }
  // these parts allow us to render the page
  const mockedContext: Context = {}
  const renderingReq = {
    path: pathname,
    language: page.languageCode,
    pagePath: pathname,
    cookies: {},
    context: mockedContext,
    headers: {
      'content-type': 'text/markdown',
    },
  }

  // contextualize and render the page
  await contextualize(renderingReq as ExtendedRequestWithPageInfo, {} as Response, () => {})
  renderingReq.context.page = page
  renderingReq.context.markdownRequested = true
  return await page.render(renderingReq.context)
}

/** END helper functions */

/** START routes */
const router = express.Router()

// For all these routes:
// - pathValidationMiddleware ensures the path is properly structured and handles errors when it's not
// - pageValidationMiddleware fetches the page from the pagelist, returns 404 to the user if not found

router.get(
  '/',
  pathValidationMiddleware as RequestHandler,
  pageValidationMiddleware as RequestHandler,
  catchMiddlewareError(async function (req: ExtendedRequestWithPageInfo, res: Response) {
    // First, fetch metadata
    const metaData = await getArticleMetadata(req)
    let bodyContent
    try {
      bodyContent = await getArticleBody(req)
    } catch (error) {
      return res.status(403).json({ error: (error as Error).message })
    }

    defaultCacheControl(res)
    return res.json({
      meta: metaData,
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
    defaultCacheControl(res)
    return res.type('text/markdown').send(bodyContent)
  }),
)

router.get(
  '/meta',
  pathValidationMiddleware as RequestHandler,
  pageValidationMiddleware as RequestHandler,
  catchMiddlewareError(async function (req: ExtendedRequestWithPageInfo, res: Response) {
    const metaData = await getArticleMetadata(req)
    defaultCacheControl(res)
    return res.json(metaData)
  }),
)

/** END routes */

export default router
