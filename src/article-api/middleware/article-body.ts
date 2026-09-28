import type { Response } from 'express'

import { Context } from '@/types'
import { ExtendedRequestWithPageInfo } from '@/article-api/types'
import contextualize from '@/frame/middleware/context/context'
import features from '@/versions/middleware/features'
import glossaries from '@/frame/middleware/context/glossaries'
import dataTables from '@/data-directory/middleware/data-tables'
import { transformerRegistry } from '@/article-api/transformers'
import { normalizeRenderedMarkdown } from '@/article-api/lib/normalize-markdown'
import { allVersions } from '@/versions/lib/all-versions'
import type { Page } from '@/types'

// Article Markdown rendering needs a mocked request with page context.
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

  // Context middleware sets currentVersion for API version fallback.
  await contextualize(renderingReq as ExtendedRequestWithPageInfo, {} as Response, () => {})
  renderingReq.context.page = page

  // ifversion Liquid tags read feature flags from context.
  features(renderingReq as ExtendedRequestWithPageInfo, {} as Response, () => {})

  // Glossary pages read rendered terms from context instead of the Markdown body.
  await glossaries(renderingReq as ExtendedRequestWithPageInfo, {} as Response, () => {})

  // Data table Liquid loops read tables from context.
  await dataTables(renderingReq as ExtendedRequestWithPageInfo, {} as Response, () => {})

  return renderingReq
}

// pathValidationMiddleware and pageValidationMiddleware fill req.pageinfo before getArticleBody.
export async function getArticleBody(req: ExtendedRequestWithPageInfo) {
  const { page, pathname, archived } = req.pageinfo

  if (archived?.isArchived)
    throw new Error(`Page ${pathname} is archived and can't be rendered in markdown.`)

  const apiVersion = req.query.apiVersion as string | undefined

  // The catch-all ArticleTransformer makes a missing transformer a registry bug.
  const transformer = transformerRegistry.findTransformer(page)
  if (!transformer) throw new Error(`No transformer found for page: ${pathname}`)

  const renderingReq = await createContextualizedRenderingRequest(pathname, page)

  // apiVersionValidationMiddleware rejects invalid explicit API versions before body rendering.
  const currentVersion = renderingReq.context.currentVersion
  let effectiveApiVersion = apiVersion

  if (!effectiveApiVersion && currentVersion && allVersions[currentVersion]) {
    effectiveApiVersion = allVersions[currentVersion].latestApiVersion || undefined
  }

  return normalizeRenderedMarkdown(
    await transformer.transform(page, pathname, renderingReq.context, effectiveApiVersion),
  )
}
