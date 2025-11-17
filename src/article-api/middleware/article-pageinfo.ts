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

export async function getPageInfo(page: Page, pathname: string) {
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
  await currentProductTree(renderingReq as ExtendedRequest, res as Response, next)
  features(renderingReq as ExtendedRequest, res as Response, next)
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

  // Call breadcrumbs middleware to populate renderingReq.context.breadcrumbs
  breadcrumbs(renderingReq as ExtendedRequest, res as Response, next)

  const { breadcrumbs: pageBreadcrumbs } = renderingReq.context

  return { title, intro, product, breadcrumbs: pageBreadcrumbs }
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

type CachedPageInfo = {
  [url: string]: {
    title: string
    intro: string
    product: string
    cacheInfo?: string
  }
}

let _cache: CachedPageInfo | null = null
export async function getPageInfoFromCache(page: Page, pathname: string) {
  let cacheInfo = ''
  if (_cache === null) {
    try {
      _cache = readCompressedJsonFile(CACHE_FILE_PATH) as CachedPageInfo
      cacheInfo = 'initial-load'
    } catch (error) {
      cacheInfo = 'initial-fail'
      if (error instanceof Error && (error as any).code !== 'ENOENT') {
        throw error
      }
      _cache = {}
    }
  }

  let meta = _cache[pathname]
  if (!cacheInfo) {
    cacheInfo = meta ? 'hit' : 'miss'
  }
  if (!meta) {
    meta = await getPageInfo(page, pathname)
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
  const { page, pathname, archived } = req.pageinfo

  if (archived && archived.isArchived) {
    const { requestedVersion } = archived
    const title = `GitHub Enterprise Server ${requestedVersion} Help Documentation`
    const intro = ''
    const product = 'GitHub Enterprise Server'
    return { meta: { intro, title, product } }
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

  return { meta, cacheInfo }
}
