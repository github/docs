import type { Response } from 'express'

import { Context } from '@/types'
import { ExtendedRequestWithPageInfo } from '@/article-api/types'
import contextualize from '@/frame/middleware/context/context'
import features from '@/versions/middleware/features'
import glossaries from '@/frame/middleware/context/glossaries'
import { transformerRegistry } from '@/article-api/transformers'
import { allVersions } from '@/versions/lib/all-versions'
import type { Page } from '@/types'

/**
 * Creates a mocked rendering request and contextualizes it.
 * This is used to prepare a request for rendering pages in markdown format.
 */
async function createContextualizedRenderingRequest(pathname: string, page: Page) {
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

  // contextualize the request to get proper version info
  await contextualize(renderingReq as ExtendedRequestWithPageInfo, {} as Response, () => {})
  renderingReq.context.page = page

  // Load feature flags into context (needed for {% ifversion %} tags)
  features(renderingReq as ExtendedRequestWithPageInfo, {} as Response, () => {})

  // Run page-specific contextualizers (e.g., glossaries middleware)
  await glossaries(renderingReq as ExtendedRequestWithPageInfo, {} as Response, () => {})

  return renderingReq
}

export async function getArticleBody(req: ExtendedRequestWithPageInfo) {
  // req.pageinfo is set from pageValidationMiddleware and pathValidationMiddleware
  // and is in the ExtendedRequestWithPageInfo
  const { page, pathname, archived } = req.pageinfo

  if (archived?.isArchived)
    throw new Error(`Page ${pathname} is archived and can't be rendered in markdown.`)

  // Extract apiVersion from query params if provided
  const apiVersion = req.query.apiVersion as string | undefined

  // With the catch-all ArticleTransformer registered last,
  // findTransformer always returns a transformer.
  const transformer = transformerRegistry.findTransformer(page)
  if (!transformer) throw new Error(`No transformer found for page: ${pathname}`)

  // Use the transformer
  const renderingReq = await createContextualizedRenderingRequest(pathname, page)

  // Determine the API version to use (provided or latest)
  // Validation is handled by apiVersionValidationMiddleware
  const currentVersion = renderingReq.context.currentVersion
  let effectiveApiVersion = apiVersion

  // Use latest version if not provided
  if (!effectiveApiVersion && currentVersion && allVersions[currentVersion]) {
    effectiveApiVersion = allVersions[currentVersion].latestApiVersion || undefined
  }

  return await transformer.transform(page, pathname, renderingReq.context, effectiveApiVersion)
}
