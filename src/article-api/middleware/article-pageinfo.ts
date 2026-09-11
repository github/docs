import type { Response } from 'express'
import type { ExtendedRequestWithPageInfo } from '../types'

import type { ExtendedRequest, Page, Context, Permalink } from '@/types'
import shortVersions from '@/versions/middleware/short-versions'
import contextualize from '@/frame/middleware/context/context'
import features from '@/versions/middleware/features'
import breadcrumbs from '@/frame/middleware/context/breadcrumbs'
import currentProductTree from '@/frame/middleware/context/current-product-tree'
import { readCompressedJsonFile } from '@/frame/lib/read-json-file'

// If you have pre-computed page info into a JSON file on disk, this is
// where it would be expected to be found.
// Note that if the file does not exist, it will be ignored and
// every pageinfo is computed every time.
// Note! The only reason this variable is exported is so that
// it can be imported by the script scripts/precompute-pageinfo.ts
export const CACHE_FILE_PATH = '.pageinfo-cache.json.br'

// Build a mocked request/context for `page` at `pathname`, running the
// minimum middleware chain needed for downstream renderProp calls and
// breadcrumb computation.
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

async function computeCacheableFromReq(renderingReq: RenderingReq, page: Page) {
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

async function computeBreadcrumbsFromReq(renderingReq: RenderingReq) {
  const next = () => {}
  const res = {}
  await currentProductTree(renderingReq as ExtendedRequest, res as Response, next)
  breadcrumbs(renderingReq as ExtendedRequest, res as Response, next)
  // Return as-is. Note that for hidden non-early-access pages and
  // unset-page requests, the breadcrumbs middleware does not assign
  // `context.breadcrumbs` at all, so this can be `undefined`. Callers
  // rely on that to keep the existing JSON response shape (the field
  // is omitted from the response rather than serialized as `[]`).
  return renderingReq.context.breadcrumbs as Breadcrumb[] | undefined
}

// Compute the cacheable portion of a page's metadata: title, intro, product.
// Breadcrumbs are intentionally excluded so they can be computed lazily on
// cache hits, keeping the on-disk cache and in-memory dictionary smaller.
export async function getCacheablePageInfo(page: Page, pathname: string) {
  const renderingReq = await makeRenderingReq(page, pathname)
  return computeCacheableFromReq(renderingReq, page)
}

// Compute breadcrumbs for `page` at `pathname`. Cheap relative to title/intro
// rendering, so it's safe to run on every cache hit instead of bloating the
// precomputed cache file.
export async function getBreadcrumbsForPage(page: Page, pathname: string) {
  const renderingReq = await makeRenderingReq(page, pathname)
  return computeBreadcrumbsFromReq(renderingReq)
}

export async function getPageInfo(page: Page, pathname: string) {
  // Cache-miss path: build the rendering req once and reuse it for both the
  // cacheable fields and breadcrumbs, instead of letting the two helpers
  // each call makeRenderingReq() (which would run
  // contextualize/shortVersions/features twice).
  const renderingReq = await makeRenderingReq(page, pathname)
  const base = await computeCacheableFromReq(renderingReq, page)
  const pageBreadcrumbs = await computeBreadcrumbsFromReq(renderingReq)
  return { ...base, breadcrumbs: pageBreadcrumbs }
}

const _productPageCache: {
  [key: string]: string
} = {}
// The title of the product is much easier to cache because it's often
// repeated. What determines the title of the product is the language
// and the version. A lot of pages have the same title for the product.
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

type CachedPageInfoEntry = {
  title: string
  intro: string
  product: string
}

type CachedPageInfo = {
  [url: string]: CachedPageInfoEntry
}

type Breadcrumb = { href: string; title: string }

type PageInfoWithBreadcrumbs = CachedPageInfoEntry & {
  breadcrumbs?: Breadcrumb[]
  cacheInfo?: string
}

let _cache: CachedPageInfo | null = null
export async function getPageInfoFromCache(
  page: Page,
  pathname: string,
): Promise<PageInfoWithBreadcrumbs> {
  let cacheInfo = ''
  if (_cache === null) {
    try {
      _cache = readCompressedJsonFile(CACHE_FILE_PATH) as CachedPageInfo
      cacheInfo = 'initial-load'
    } catch (error) {
      cacheInfo = 'initial-fail'
      if (error instanceof Error && (error as NodeJS.ErrnoException).code !== 'ENOENT') {
        throw error
      }
      _cache = {}
    }
  }

  const cached = _cache[pathname]
  if (!cacheInfo) {
    cacheInfo = cached ? 'hit' : 'miss'
  }

  let meta: PageInfoWithBreadcrumbs
  if (cached) {
    // Breadcrumbs are not stored in the precomputed cache (they are large
    // and cheap to compute). Compute on demand on every cache hit.
    const pageBreadcrumbs = await getBreadcrumbsForPage(page, pathname)
    meta = { ...cached, breadcrumbs: pageBreadcrumbs }
  } else {
    // Cache miss path: compute the full thing inline.
    // You might wonder; why do we not store this compute information
    // into the `_cache` from here?
    // The short answer is; it won't be used again.
    // In production, which is the only place where performance matters,
    // a HTTP GET request will only happen once per deployment. That's
    // because the CDN will cache it until the next deployment (which is
    // followed by a CDN purge).
    // In development (local review), the performance doesn't really matter.
    // In CI, we use the caching because the CI runs
    // `npm run precompute-pageinfo` right before it runs vitest tests.
    meta = await getPageInfo(page, pathname)
  }
  meta.cacheInfo = cacheInfo
  return meta
}

export async function getMetadata(req: ExtendedRequestWithPageInfo) {
  // Remember, the `validationMiddleware` will use redirects if the
  // `pathname` used is a redirect (e.g. /en/articles/foo or
  // /articles or '/en/enterprise-server@latest/foo/bar)
  // So by the time we get here, the pathname should be one of the
  // page's valid permalinks.
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

  const fromCache = await getPageInfoFromCache(page, pathname)
  const { cacheInfo, ...meta } = fromCache

  return {
    meta: { ...meta, documentType, ...(redirectedFrom && { redirectedFrom }) },
    cacheInfo,
  }
}
