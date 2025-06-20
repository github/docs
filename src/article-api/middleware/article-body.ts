import type { Response } from 'express'

import { Context } from '@/types.js'
import { ExtendedRequestWithPageInfo } from '../types'
import contextualize from '@/frame/middleware/context/context.js'

export async function getArticleBody(req: ExtendedRequestWithPageInfo) {
  // req.pageinfo is set from pageValidationMiddleware and pathValidationMiddleware
  // and is in the ExtendedRequestWithPageInfo
  const { page, pathname, archived } = req.pageinfo

  if (archived?.isArchived)
    throw new Error(`Page ${pathname} is archived and can't be rendered in markdown.`)
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
