import zlib from 'zlib'

import cheerio from 'cheerio'
import QuickLRU from 'quick-lru'

// This is what NextJS uses when it injects the JSON serialized
// in the `<script id="__NEXT_DATA__">`
import { htmlEscapeJsonString } from 'next/dist/server/htmlescape.js'

import { getTheme } from '../lib/get-theme.js'
import statsd from '../lib/statsd.js'

const HEADER_NAME = 'x-middleware-cache'
const HEADER_VALUE_HIT = 'hit'
const HEADER_VALUE_MISS = 'miss'
const HEADER_VALUE_DISABLED = 'disabled'
const HEADER_VALUE_TRANSFERRING = 'transferring'

const DISABLE_RENDERING_CACHE = Boolean(JSON.parse(process.env.DISABLE_RENDERING_CACHE || 'false'))

const cheerioCache = new QuickLRU({
  // NOTE: Apr 20, when storing about 200 cheerio instances, the total
  // heap size becomes about 2.3GB.
  maxSize: 100,
  // Don't use arrow function so we can access `this`.
  onEviction: function onEviction() {
    const { heapUsed } = process.memoryUsage()
    statsd.gauge('middleware.rendering_cache_cheerio', heapUsed, [`size:${this.size}`])
  },
})

const gzipCache = new QuickLRU({
  maxSize: 1000,
  // Don't use arrow function so we can access `this`.
  onEviction: function onEviction() {
    const { heapUsed } = process.memoryUsage()
    statsd.gauge('middleware.rendering_cache_gzip', heapUsed, [`size:${gzipCache.size}`])
  },
})

export default async function cacheFullRendering(req, res, next) {
  // Even if you use `app.get('/*', myMiddleware)` in Express, the
  // middleware will be executed for HEAD requests.
  if (req.method !== 'GET') return next()

  // The req.pagePath will be identical if it's a regular HTML GET
  // or one of those /_next/data/... URLs.
  const key = req.url

  // We have 2 LRU caches.
  // - Tuples of [cheerio object, headers]
  // - Tuples of [html gzipped, headers]
  // The reason for having two is that many cheerio objects will
  // significantly bloat the heap memory. Where as storing the
  // html strings as gzip buffers is tiny.
  // The point of using cheerio objects, is to avoid deserializing the
  // HTML on every warm hit (e.g. stampeding herd) and only pay
  // for the mutation + serialization which is unavoidable.
  // Since the gzip cache is larger than the cheerio cache,
  // we elevate from one cache to the other. Like layers of caching.

  if (!cheerioCache.has(key) && gzipCache.has(key)) {
    res.setHeader(HEADER_NAME, HEADER_VALUE_TRANSFERRING)
    const [htmlBuffer, headers] = gzipCache.get(key)
    setHeaders(headers, res)
    const html = zlib.gunzipSync(htmlBuffer).toString()
    const body = cheerio.load(html)
    cheerioCache.set(key, [body, headers])
    mutateCheeriobodyByRequest(body, req)
    return res.status(200).send(body.html())
  } else if (cheerioCache.has(key)) {
    res.setHeader(HEADER_NAME, HEADER_VALUE_HIT)
    const [$, headers] = cheerioCache.get(key)
    setHeaders(headers, res)
    mutateCheeriobodyByRequest($, req)
    return res.status(200).send($.html())
  } else {
    res.setHeader(HEADER_NAME, HEADER_VALUE_MISS)
  }

  if (DISABLE_RENDERING_CACHE) {
    res.setHeader(HEADER_NAME, HEADER_VALUE_DISABLED)
  } else {
    const originalEndFunc = res.end.bind(res)
    res.end = function (body) {
      // Can end the response to the user now
      originalEndFunc(body)

      // After the response has been sent back to the user,
      // take our time to store this in the cache.
      if (body && res.statusCode === 200) {
        // It's important to note that we only cache the HTML outputs.
        // Why, because JSON outputs should be cached in the CDN.
        // The only JSON outputs we have today is the search API
        // and the NextJS data requests. These are not dependent on the
        // request cookie, so they're primed for caching in the CDN.
        const ct = res.get('content-type')
        // We also don't want to bother caching this if it doesn't
        // appear to be a NextJS HTML output with
        // its `<script id="__NEXT_DATA__">` tag.
        if (ct.startsWith('text/html') && body.includes('__NEXT_DATA__')) {
          const $ = cheerio.load(body)
          const headers = res.getHeaders()
          cheerioCache.set(key, [$, headers])
          const gzipped = zlib.gzipSync(Buffer.from(body))
          gzipCache.set(key, [gzipped, headers])
        }
        // If it's not HTML or JSON, it's probably an image (binary)
        // or some plain text. Let's ignore all of those.
      }
    }
  }

  next()
}

function setHeaders(headers, res) {
  Object.entries(headers).forEach(([key, value]) => {
    if (!(key === HEADER_NAME || key === 'set-cookie')) {
      res.setHeader(key, value)
    }
  })
}

function mutateCheeriobodyByRequest($, req) {
  // A fresh CSRF token into the <meta> tag
  const freshCsrfToken = req.csrfToken()
  $('meta[name="csrf-token"]').attr('content', freshCsrfToken)

  // Populate if you have the `dotcom_user` user cookie and it's truthy
  const isDotComAuthenticated = Boolean(req.cookies?.dotcom_user)

  const cssTheme = getTheme(req, true)
  const theme = getTheme(req, false)

  // The <body> needs tags pertaining to the parsed theme
  // Don't use `$.data()` because it doesn't actually mutate the "DOM"
  // https://github.com/cheeriojs/cheerio/issues/950#issuecomment-274324269
  $('body')
    .attr('data-color-mode', cssTheme.colorMode)
    .attr('data-dark-theme', cssTheme.nightTheme)
    .attr('data-light-theme', cssTheme.dayTheme)

  // Update the __NEXT_DATA__ too with the equivalent pieces
  const nextData = $('script#__NEXT_DATA__')
  console.assert(nextData.length === 1, 'Not exactly 1')
  // Note, once we upgrade to cheerio >= v1.0.0-rc.11
  // we can access this with `.text()`.
  // See https://github.com/cheeriojs/cheerio/releases/tag/v1.0.0-rc.11
  // and https://github.com/cheeriojs/cheerio/pull/2509
  const parsedNextData = JSON.parse(nextData.get()[0].children[0].data)
  parsedNextData.props.csrfToken = freshCsrfToken
  parsedNextData.props.dotComAuthenticatedContext.isDotComAuthenticated = isDotComAuthenticated
  parsedNextData.props.languagesContext.userLanguage = req.context.userLanguage
  parsedNextData.props.themeProps = {
    colorMode: theme.colorMode,
    nightTheme: theme.nightTheme,
    dayTheme: theme.dayTheme,
  }
  nextData.text(htmlEscapeJsonString(JSON.stringify(parsedNextData)))

  // The <ThemeProvider {...} preventSSRMismatch> component will
  // inject a script tag too that looks like this:
  //
  //   <script
  //      type="application/json"
  //      id="__PRIMER_DATA__">{"resolvedServerColorMode":"night"}</script>
  //
  const primerData = $('script#__PRIMER_DATA__')
  console.assert(primerData.length === 1, 'Not exactly 1')
  const parsedPrimerData = JSON.parse(primerData.get()[0].children[0].data)
  parsedPrimerData.resolvedServerColorMode = cssTheme.colorMode === 'dark' ? 'night' : 'day'
  primerData.text(htmlEscapeJsonString(JSON.stringify(parsedPrimerData)))
}
