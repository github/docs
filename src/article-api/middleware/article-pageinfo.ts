import type { Response } from 'express'
import type { ExtendedRequestWithPageInfo } from '../types'

import type { ExtendedRequest, Page, Context, Permalink } from '@/types'
import shortVersions from '@/versions/middleware/short-versions'
import contextualize from '@/frame/middleware/context/context'
import features from '@/versions/middleware/features'
import breadcrumbs from '@/frame/middleware/context/breadcrumbs'
import currentProductTree from '@/frame/middleware/context/current-product-tree'

// Metadata rendering and breadcrumbs need this minimal middleware chain.
async function makeRenderingReq(page: Page, pathname: string) {
  const mockedContext: Context = {}
  const renderingReq = {
    path: pathname,
    language: page.languageCode,
    pagePath: pathname,
    cookies: {},
    context: mockedContext,
  }
  const next = () => {}
  const res = {}
  await contextualize(renderingReq as ExtendedRequest, res as Response, next)
  await shortVersions(renderingReq as ExtendedRequest, res as Response, next)
  renderingReq.context.page = page
  features(renderingReq as ExtendedRequest, res as Response, next)
  return renderingReq
}

type RenderingReq = Awaited<ReturnType<typeof makeRenderingReq>>

async function computePageInfoFromReq(renderingReq: RenderingReq, page: Page): Promise<PageInfo> {
  const context = renderingReq.context

  const title = await page.renderProp('title', context, { textOnly: true })
  const intro = await page.renderProp('intro', context, { textOnly: true })

  let productPage = null
  for (const permalink of page.permalinks) {
    const rootHref = permalink.href
      .split('/')
      .slice(0, permalink.pageVersion === 'free-pro-team@latest' ? 3 : 4)
      .join('/')
    if (!context.pages) throw new Error('context.pages not yet set')
    const rootPage = context.pages[rootHref]
    if (rootPage) {
      productPage = rootPage
      break
    }
  }
  const product = productPage ? await getProductPageInfo(productPage, context) : ''

  return { title, intro, product }
}

// For hidden non-early-access pages and unset-page requests, breadcrumbs middleware leaves
// context.breadcrumbs unset so JSON responses omit breadcrumbs instead of serializing [].
async function computeBreadcrumbsFromReq(renderingReq: RenderingReq) {
  const next = () => {}
  const res = {}
  await currentProductTree(renderingReq as ExtendedRequest, res as Response, next)
  breadcrumbs(renderingReq as ExtendedRequest, res as Response, next)
  return renderingReq.context.breadcrumbs as Breadcrumb[] | undefined
}

// getPageInfo reuses one rendering request.
// contextualize, shortVersions, and features run once for metadata and breadcrumbs.
export async function getPageInfo(page: Page, pathname: string): Promise<PageInfoWithBreadcrumbs> {
  const renderingReq = await makeRenderingReq(page, pathname)
  const base = await computePageInfoFromReq(renderingReq, page)
  const pageBreadcrumbs = await computeBreadcrumbsFromReq(renderingReq)
  return { ...base, breadcrumbs: pageBreadcrumbs }
}

const _productPageCache: {
  [key: string]: string
} = {}
// Product page titles repeat across articles, so cache them by page, version, and language.
async function getProductPageInfo(page: Page, context: Context) {
  const cacheKey = `${page.relativePath}:${context.currentVersion}:${context.currentLanguage}`
  if (!(cacheKey in _productPageCache)) {
    const title =
      (await page.renderProp('shortTitle', context, {
        textOnly: true,
      })) ||
      (await page.renderProp('title', context, {
        textOnly: true,
      }))
    _productPageCache[cacheKey] = title
  }
  return _productPageCache[cacheKey]
}

type PageInfo = {
  title: string
  intro: string
  product: string
}

type Breadcrumb = { href: string; title: string }

type PageInfoWithBreadcrumbs = PageInfo & {
  breadcrumbs?: Breadcrumb[]
}

// pageValidationMiddleware follows redirects before getMetadata.
// For pages, pathname matches a valid permalink before metadata renders.
// For example, /en/articles/foo resolves to that page's valid permalink.
export async function getMetadata(req: ExtendedRequestWithPageInfo) {
  const { page, pathname, archived, redirectedFrom } = req.pageinfo
  const documentType = page?.documentType ?? null

  if (archived && archived.isArchived) {
    const { requestedVersion } = archived
    const title = `GitHub Enterprise Server ${requestedVersion} Help Documentation`
    const intro = ''
    const product = 'GitHub Enterprise Server'
    return { meta: { intro, title, product, documentType } }
  }

  if (!page) {
    throw new Error(`No page found for '${pathname}'`)
  }

  const pagePermalinks = page.permalinks.map((p: Permalink) => p.href)
  if (!pagePermalinks.includes(pathname)) {
    throw new Error(`pathname '${pathname}' not one of the page's permalinks`)
  }

  const meta = await getPageInfo(page, pathname)

  return {
    meta: { ...meta, documentType, ...(redirectedFrom && { redirectedFrom }) },
  }
}
