const { get } = require('lodash')
const { liquid } = require('../lib/render-content')
const patterns = require('../lib/patterns')
const layouts = require('../lib/layouts')
const getMiniTocItems = require('../lib/get-mini-toc-items')
const Page = require('../lib/page')
const statsd = require('../lib/statsd')
const RedisAccessor = require('../lib/redis-accessor')
const { isConnectionDropped } = require('./halt-on-dropped-connection')
const { nextHandleRequest } = require('./next')

const { HEROKU_RELEASE_VERSION } = process.env

const pageCacheDatabaseNumber = 1
const pageCacheExpiration = 24 * 60 * 60 * 1000 // 24 hours

const pageCache = new RedisAccessor({
  databaseNumber: pageCacheDatabaseNumber,
  prefix: (HEROKU_RELEASE_VERSION ? HEROKU_RELEASE_VERSION + ':' : '') + 'rp',
  // Allow for graceful failures if a Redis SET operation fails
  allowSetFailures: true,
  // Allow for graceful failures if a Redis GET operation fails
  allowGetFailures: true,
  name: 'page-cache'
})

// a list of query params that *do* alter the rendered page, and therefore should be cached separately
const cacheableQueries = ['learn']

function modifyOutput (req, text) {
  return addColorMode(req, addCsrf(req, text))
}

function addCsrf (req, text) {
  return text.replace('$CSRFTOKEN$', req.csrfToken())
}

function addColorMode (req, text) {
  let colorMode = 'auto'
  let darkTheme = 'dark'
  let lightTheme = 'light'

  try {
    const cookieValue = JSON.parse(decodeURIComponent(req.cookies.color_mode))
    colorMode = encodeURIComponent(cookieValue.color_mode) || colorMode
    darkTheme = encodeURIComponent(cookieValue.dark_theme.name) || darkTheme
    lightTheme = encodeURIComponent(cookieValue.light_theme.name) || lightTheme
  } catch (e) {
    // do nothing
  }

  return text
    .replace('$COLORMODE$', colorMode)
    .replace('$DARKTHEME$', darkTheme)
    .replace('$LIGHTTHEME$', lightTheme)
}

module.exports = async function renderPage (req, res, next) {
  const page = req.context.page

  // render a 404 page
  if (!page) {
    if (process.env.NODE_ENV !== 'test' && req.context.redirectNotFound) {
      console.error(`\nTried to redirect to ${req.context.redirectNotFound}, but that page was not found.\n`)
    }
    return res.status(404).send(
      modifyOutput(
        req,
        await liquid.parseAndRender(layouts['error-404'], req.context)
      )
    )
  }

  if (req.method === 'HEAD') {
    return res.status(200).end()
  }

  // Remove any query string (?...) and/or fragment identifier (#...)
  const { pathname, searchParams } = new URL(req.originalUrl, 'https://docs.github.com')

  for (const queryKey in req.query) {
    if (!cacheableQueries.includes(queryKey)) {
      searchParams.delete(queryKey)
    }
  }
  const originalUrl = pathname + ([...searchParams].length > 0 ? `?${searchParams}` : '')

  // Is the request for JSON debugging info?
  const isRequestingJsonForDebugging = 'json' in req.query && process.env.NODE_ENV !== 'production'

  // Is in an airgapped session?
  const isAirgapped = Boolean(req.cookies.AIRGAP)

  // Is the request for the GraphQL Explorer page?
  const isGraphQLExplorer = req.context.currentPathWithoutLanguage === '/graphql/overview/explorer'

  // Serve from the cache if possible
  const isCacheable = (
    // Skip for CI
    !process.env.CI &&
    // Skip for tests
    process.env.NODE_ENV !== 'test' &&
    // Skip for HTTP methods other than GET
    req.method === 'GET' &&
    // Skip for JSON debugging info requests
    !isRequestingJsonForDebugging &&
    // Skip for NextJS rendering
    !req.renderWithNextjs &&
    // Skip for airgapped sessions
    !isAirgapped &&
    // Skip for the GraphQL Explorer page
    !isGraphQLExplorer
  )

  if (isCacheable) {
    // Stop processing if the connection was already dropped
    if (isConnectionDropped(req, res)) return

    const cachedHtml = await pageCache.get(originalUrl)
    if (cachedHtml) {
      // Stop processing if the connection was already dropped
      if (isConnectionDropped(req, res)) return

      console.log(`Serving from cached version of ${originalUrl}`)
      statsd.increment('page.sent_from_cache')
      return res.send(modifyOutput(req, cachedHtml))
    }
  }

  // add page context
  const context = Object.assign({}, req.context, { page })

  // collect URLs for variants of this page in all languages
  context.page.languageVariants = Page.getLanguageVariants(req.pagePath)
  // Stop processing if the connection was already dropped
  if (isConnectionDropped(req, res)) return

  // render page
  context.renderedPage = await page.render(context)

  // Stop processing if the connection was already dropped
  if (isConnectionDropped(req, res)) return

  // get mini TOC items on articles
  if (page.showMiniToc) {
    context.miniTocItems = getMiniTocItems(context.renderedPage, page.miniTocMaxHeadingLevel)
  }

  // handle special-case prerendered GraphQL objects page
  if (req.pagePath.endsWith('graphql/reference/objects')) {
    // concat the markdown source miniToc items and the prerendered miniToc items
    context.miniTocItems = context.miniTocItems.concat(req.context.graphql.prerenderedObjectsForCurrentVersion.miniToc)
    context.renderedPage = context.renderedPage + req.context.graphql.prerenderedObjectsForCurrentVersion.html
  }

  // handle special-case prerendered GraphQL input objects page
  if (req.pagePath.endsWith('graphql/reference/input-objects')) {
    // concat the markdown source miniToc items and the prerendered miniToc items
    context.miniTocItems = context.miniTocItems.concat(req.context.graphql.prerenderedInputObjectsForCurrentVersion.miniToc)
    context.renderedPage = context.renderedPage + req.context.graphql.prerenderedInputObjectsForCurrentVersion.html
  }

  // Create string for <title> tag
  context.page.fullTitle = context.page.titlePlainText

  // add localized ` - GitHub Docs` suffix to <title> tag (except for the homepage)
  if (!patterns.homepagePath.test(req.pagePath)) {
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

  // Hand rendering over to NextJS when appropriate
  if (req.renderWithNextjs) {
    req.context.renderedPage = context.renderedPage
    req.context.miniTocItems = context.miniTocItems
    return nextHandleRequest(req, res)
  }

  // currentLayout is added to the context object in middleware/contextualizers/layouts
  const output = await liquid.parseAndRender(req.context.currentLayout, context)

  // First, send the response so the user isn't waiting
  // NOTE: Do NOT `return` here as we still need to cache the response afterward!
  res.send(modifyOutput(req, output))

  // Finally, save output to cache for the next time around
  if (isCacheable) {
    await pageCache.set(originalUrl, output, { expireIn: pageCacheExpiration })
  }
}
