const { get } = require('lodash')
const env = require('lil-env-thing')
const { liquid } = require('../lib/render-content')
const patterns = require('../lib/patterns')
const layouts = require('../lib/layouts')
const getMiniTocItems = require('../lib/get-mini-toc-items')
const Page = require('../lib/page')

// We've got lots of memory, let's use it
// We can eventually throw this into redis
const pageCache = {}

module.exports = async function renderPage (req, res, next) {
  const page = req.context.page
  const originalUrl = req.originalUrl

  // Serve from the cache if possible (skip during tests)
  if (!process.env.CI && process.env.NODE_ENV !== 'test') {
    if (req.method === 'GET' && pageCache[originalUrl]) {
      console.log(`Serving from cached version of ${originalUrl}`)
      return res.send(pageCache[originalUrl])
    }
  }

  // render a 404 page
  if (!page) {
    if (process.env.NODE_ENV !== 'test' && req.context.redirectNotFound) {
      console.error(`\nTried to redirect to ${req.context.redirectNotFound}, but that page was not found.\n`)
    }
    return res.status(404).send(await liquid.parseAndRender(layouts['error-404'], req.context))
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
  if ('json' in req.query && !env.production) {
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

  // Save output to cache for the next time around
  if (!process.env.CI) {
    if (req.method === 'GET') {
      pageCache[originalUrl] = output
    }
  }

  // send response
  return res.send(output)
}
