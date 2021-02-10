const { get } = require('lodash')
const { liquid } = require('../lib/render-content')
const patterns = require('../lib/patterns')
const layouts = require('../lib/layouts')
const getMiniTocItems = require('../lib/get-mini-toc-items')
const Page = require('../lib/page')
const statsd = require('../lib/statsd')
const RedisAccessor = require('../lib/redis-accessor')

const { HEROKU_RELEASE_VERSION } = process.env
const pageCacheDatabaseNumber = 1
const pageCacheExpiration = 24 * 60 * 60 * 1000 // 24 hours

const pageCache = new RedisAccessor({
  databaseNumber: pageCacheDatabaseNumber,
  prefix: (HEROKU_RELEASE_VERSION ? HEROKU_RELEASE_VERSION + ':' : '') + 'rp',
  // Allow for graceful failures if a Redis SET operation fails
  allowSetFailures: true
})

// a list of query params that *do* alter the rendered page, and therefore should be cached separately
const cacheableQueries = ['learn']

function addCsrf (req, text) {
  return text.replace('$CSRFTOKEN$', req.csrfToken())
}

module.exports = async function renderPage (req, res, next) {
  const page = req.context.page

  // Remove any query string (?...) and/or fragment identifier (#...)
  const { pathname, searchParams } = new URL(req.originalUrl, 'https://docs.github.com')

  for (const queryKey in req.query) {
    if (!cacheableQueries.includes(queryKey)) {
      searchParams.delete(queryKey)
    }
  }
  const originalUrl = pathname + ([...searchParams].length > 0 ? `?${searchParams}` : '')

  // Serve from the cache if possible (skip during tests)
  const isCacheable = !process.env.CI && process.env.NODE_ENV !== 'test' && req.method === 'GET'

  // Is the request for JSON debugging info?
  const isRequestingJsonForDebugging = 'json' in req.query && process.env.NODE_ENV !== 'production'

  if (isCacheable && !isRequestingJsonForDebugging) {
    const cachedHtml = await pageCache.get(originalUrl)
    if (cachedHtml) {
      console.log(`Serving from cached version of ${originalUrl}`)
      statsd.increment('page.sent_from_cache')
      return res.send(addCsrf(req, cachedHtml))
    }
  }

  // render a 404 page
  if (!page) {
    if (process.env.NODE_ENV !== 'test' && req.context.redirectNotFound) {
      console.error(`\nTried to redirect to ${req.context.redirectNotFound}, but that page was not found.\n`)
    }
    return res.status(404).send(
      addCsrf(
        req,
        await liquid.parseAndRender(layouts['error-404'], req.context)
      )
    )
  }

  if (req.method === 'HEAD') {
    return res.status(200).end()
  }

  // add page context
  const context = Object.assign({}, req.context, { page })

  // collect URLs for variants of this page in all languages
  context.page.languageVariants = Page.getLanguageVariants(req.path)

  // render page
  context.renderedPage = await page.render(context)

  // get mini TOC items on articles
  if (page.showMiniToc) {
    context.miniTocItems = getMiniTocItems(context.renderedPage, page.miniTocMaxHeadingLevel)
  }

  // handle special-case prerendered GraphQL objects page
  if (req.path.endsWith('graphql/reference/objects')) {
    // concat the markdown source miniToc items and the prerendered miniToc items
    context.miniTocItems = context.miniTocItems.concat(req.context.graphql.prerenderedObjectsForCurrentVersion.miniToc)
    context.renderedPage = context.renderedPage + req.context.graphql.prerenderedObjectsForCurrentVersion.html
  }

  // Create string for <title> tag
  context.page.fullTitle = context.page.title

  // add localized ` - GitHub Docs` suffix to <title> tag (except for the homepage)
  if (!patterns.homepagePath.test(req.path)) {
    context.page.fullTitle = context.page.fullTitle + ' - ' + context.site.data.ui.header.github_docs
  }

  // `?json` query param for debugging request context
  if (isRequestingJsonForDebugging) {
    if (req.query.json.length > 1) {
      // deep reference: ?json=page.permalinks
      return res.json(get(context, req.query.json))
    } else {
      // dump all the keys: ?json
      return res.json({
        message: 'The full context object is too big to display! Try one of the individual keys below, e.g. ?json=page. You can also access nested props like ?json=site.data.reusables',
        keys: Object.keys(context)
      })
    }
  }

  // Layouts can be specified with a `layout` frontmatter value
  // If unspecified, `layouts/default.html` is used.
  // Any invalid layout values will be caught by frontmatter schema validation.
  const layoutName = context.page.layout || 'default'

  // Set `layout: false` to use no layout
  const layout = context.page.layout === false ? '' : layouts[layoutName]

  const output = await liquid.parseAndRender(layout, context)

  // First, send the response so the user isn't waiting
  // NOTE: Do NOT `return` here as we still need to cache the response afterward!
  res.send(addCsrf(req, output))

  // Finally, save output to cache for the next time around
  if (isCacheable) {
    await pageCache.set(originalUrl, output, { expireIn: pageCacheExpiration })
  }
}
