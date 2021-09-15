import { get } from 'lodash-es'
import patterns from '../lib/patterns.js'
import getMiniTocItems from '../lib/get-mini-toc-items.js'
import Page from '../lib/page.js'
import { isConnectionDropped } from './halt-on-dropped-connection.js'
import { nextApp, nextHandleRequest } from './next.js'

export default async function renderPage(req, res, next) {
  if (req.path.startsWith('/storybook')) {
    return nextHandleRequest(req, res)
  }

  const page = req.context.page
  // render a 404 page
  if (!page) {
    if (process.env.NODE_ENV !== 'test' && req.context.redirectNotFound) {
      console.error(
        `\nTried to redirect to ${req.context.redirectNotFound}, but that page was not found.\n`
      )
    }
    return nextApp.render404(req, res)
  }

  // Just finish fast without all the details like Content-Length
  if (req.method === 'HEAD') {
    return res.status(200).end()
  }

  // Is the request for JSON debugging info?
  const isRequestingJsonForDebugging = 'json' in req.query && process.env.NODE_ENV !== 'production'

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
    context.miniTocItems = context.miniTocItems.concat(
      req.context.graphql.prerenderedObjectsForCurrentVersion.miniToc
    )
    context.renderedPage =
      context.renderedPage + req.context.graphql.prerenderedObjectsForCurrentVersion.html
  }

  // handle special-case prerendered GraphQL input objects page
  if (req.pagePath.endsWith('graphql/reference/input-objects')) {
    // concat the markdown source miniToc items and the prerendered miniToc items
    context.miniTocItems = context.miniTocItems.concat(
      req.context.graphql.prerenderedInputObjectsForCurrentVersion.miniToc
    )
    context.renderedPage =
      context.renderedPage + req.context.graphql.prerenderedInputObjectsForCurrentVersion.html
  }

  // Create string for <title> tag
  context.page.fullTitle = context.page.titlePlainText

  // add localized ` - GitHub Docs` suffix to <title> tag (except for the homepage)
  if (!patterns.homepagePath.test(req.pagePath)) {
    context.page.fullTitle =
      context.page.fullTitle + ' - ' + context.site.data.ui.header.github_docs
  }

  // `?json` query param for debugging request context
  if (isRequestingJsonForDebugging) {
    if (req.query.json.length > 1) {
      // deep reference: ?json=page.permalinks
      return res.json(get(context, req.query.json))
    } else {
      // dump all the keys: ?json
      return res.json({
        message:
          'The full context object is too big to display! Try one of the individual keys below, e.g. ?json=page. You can also access nested props like ?json=site.data.reusables',
        keys: Object.keys(context),
      })
    }
  }

  // Hand rendering over to NextJS
  req.context.renderedPage = context.renderedPage
  req.context.miniTocItems = context.miniTocItems
  return nextHandleRequest(req, res)
}
