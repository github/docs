import express from 'express'

import statsd from '#src/observability/lib/statsd.js'
import { defaultCacheControl } from '#src/frame/middleware/cache-control.js'
import catchMiddlewareError from '#src/observability/middleware/catch-middleware-error.js'
import {
  SURROGATE_ENUMS,
  setFastlySurrogateKey,
  makeLanguageSurrogateKey,
} from '#src/frame/middleware/set-fastly-surrogate-key.js'
import shortVersions from '#src/versions/middleware/short-versions.js'
import contextualize from '#src/frame/middleware/context/context.js'
import features from '#src/versions/middleware/features.js'
import getRedirect from '#src/redirects/lib/get-redirect.js'
import { isArchivedVersionByPath } from '#src/archives/lib/is-archived-version.js'
import { readCompressedJsonFile } from '#src/frame/lib/read-json-file.js'

const router = express.Router()

// If you have pre-computed page info into a JSON file on disk, this is
// where it would be expected to be found.
// Note that if the file does not exist, it will be ignored and
// every pageinfo is computed every time.
// Note! The only reason this variable is exported is so that
// it can be imported by the script scripts/precompute-pageinfo.ts
export const CACHE_FILE_PATH = '.pageinfo-cache.json.br'

const validationMiddleware = (req, res, next) => {
  const { pathname } = req.query
  if (!pathname) {
    return res.status(400).json({ error: `No 'pathname' query` })
  }
  if (Array.isArray(pathname)) {
    return res.status(400).json({ error: "Multiple 'pathname' keys" })
  }
  if (!pathname.trim()) {
    return res.status(400).json({ error: `'pathname' query empty` })
  }
  if (!pathname.startsWith('/')) {
    return res.status(400).json({ error: `'pathname' has to start with /` })
  }
  if (/\s/.test(pathname)) {
    return res.status(400).json({ error: `'pathname' cannot contain whitespace` })
  }
  req.pageinfo = { pathname }
  return next()
}

const pageinfoMiddleware = (req, res, next) => {
  let { pathname } = req.pageinfo
  // We can't use the `findPage` middleware utility function because we
  // need to know when the pathname is a redirect.
  // This is important so that the final `pathname` value
  // matches the page's permalinks.
  // This is important when rendering a page because of translations,
  // if it needs to do a fallback, it needs to know the correct
  // equivalent English page.
  const redirectsContext = { pages: req.context.pages, redirects: req.context.redirects }

  // Similar to how the `handle-redirects.js` middleware works, let's first
  // check if the URL is just having a trailing slash.
  while (pathname.endsWith('/') && pathname.length > 1) {
    pathname = pathname.slice(0, -1)
  }

  // E.g. a request for `/` is handled as a redirect outside the
  // getRedirect() function.
  if (pathname === '/') {
    pathname = `/${req.context.currentLanguage}`
  }

  if (!(pathname in req.context.pages)) {
    // If a pathname is not a known page, it might *either* be a redirect,
    // or an archived enterprise version, or both.
    // That's why it's import to not bother looking at the redirects
    // if the pathname is an archived enterprise version.
    // This mimics how our middleware work and their order.
    req.pageinfo.archived = isArchivedVersionByPath(pathname)
    if (!req.pageinfo.archived.isArchived) {
      const redirect = getRedirect(pathname, redirectsContext)
      if (redirect) {
        pathname = redirect
      }
    }
  }

  // Remember this might yield undefined if the pathname is not a page
  req.pageinfo.page = req.context.pages[pathname]
  // The pathname might have changed if it was a redirect
  req.pageinfo.pathname = pathname

  return next()
}

export async function getPageInfo(page, pathname) {
  const renderingReq = {
    path: pathname,
    language: page.languageCode,
    pagePath: pathname,
    cookies: {},
  }
  const next = () => {}
  const res = {}
  await contextualize(renderingReq, res, next)
  await shortVersions(renderingReq, res, next)
  renderingReq.context.page = page
  await features(renderingReq, res, next)
  const context = renderingReq.context

  const title = await page.renderProp('title', context, { textOnly: true })
  const intro = await page.renderProp('intro', context, { textOnly: true })

  let productPage = null
  for (const permalink of page.permalinks) {
    const rootHref = permalink.href
      .split('/')
      .slice(0, permalink.pageVersion === 'free-pro-team@latest' ? 3 : 4)
      .join('/')
    const rootPage = context.pages[rootHref]
    if (rootPage) {
      productPage = rootPage
      break
    }
  }
  const product = productPage ? await getProductPageInfo(productPage, context) : ''

  return { title, intro, product }
}

const _productPageCache = {}
// The title of the product is much easier to cache because it's often
// repeated. What determines the title of the product is the language
// and the version. A lot of pages have the same title for the product.
async function getProductPageInfo(page, context) {
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

let _cache = null
async function getPageInfoFromCache(page, pathname) {
  let cacheInfo = ''
  if (_cache === null) {
    try {
      _cache = readCompressedJsonFile(CACHE_FILE_PATH)
      cacheInfo = 'initial-load'
    } catch (error) {
      cacheInfo = 'initial-fail'
      if (error.code !== 'ENOENT') {
        throw error
      }
      _cache = {}
    }
  }

  let info = _cache[pathname]
  if (!cacheInfo) {
    cacheInfo = info ? 'hit' : 'miss'
  }
  if (!info) {
    info = await getPageInfo(page, pathname)
    // You might wonder; why do we not store this compute information
    // into the `_cache` from here?
    // The short answer is; it won't be used again.
    // In production, which is the only place where performance matters,
    // a HTTP GET request will only happen once per deployment. That's
    // because the CDN will cache it until the next deployment (which is
    // followed by a CDN purge).
    // In development (local preview), the performance doesn't really matter.
    // In CI, we use the caching because the CI runs
    // `npm run precompute-pageinfo` right before it runs vitest tests.
  }
  info.cacheInfo = cacheInfo
  return info
}

router.get(
  '/v1',
  validationMiddleware,
  pageinfoMiddleware,
  catchMiddlewareError(async function pageInfo(req, res) {
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
      defaultCacheControl(res)
      return res.json({ info: { intro, title, product } })
    }

    if (!page) {
      return res.status(400).json({ error: `No page found for '${pathname}'` })
    }

    const pagePermalinks = page.permalinks.map((p) => p.href)
    if (!pagePermalinks.includes(pathname)) {
      throw new Error(`pathname '${pathname}' not one of the page's permalinks`)
    }

    const fromCache = await getPageInfoFromCache(page, pathname)
    const { cacheInfo, ...info } = fromCache

    const tags = [
      // According to https://docs.datadoghq.com/getting_started/tagging/#define-tags
      // the max length of a tag is 200 characters. Most of ours are less than
      // that but we truncate just to be safe.
      `pathname:${pathname}`.slice(0, 200),
      `language:${page.languageCode}`,
      `cache:${cacheInfo}`,
    ]
    statsd.increment('pageinfo.lookup', 1, tags)

    defaultCacheControl(res)

    // This is necessary so that the `Surrogate-Key` header is set with
    // the correct language surrogate key bit. By default, it's set
    // from the pathname but `/api/**` URLs don't have a language
    // (other than the default 'en').
    // We do this so that all of these URLs are cached in Fastly by language
    // which we need for the staggered purge.
    setFastlySurrogateKey(
      res,
      `${SURROGATE_ENUMS.DEFAULT} ${makeLanguageSurrogateKey(page.languageCode)}`,
      true,
    )
    res.status(200).json({ info })
  }),
)

// Alias for the latest version
router.get('/', (req, res) => {
  res.redirect(307, req.originalUrl.replace('/pageinfo', '/pageinfo/v1'))
})

export default router
