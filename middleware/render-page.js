import { get } from 'lodash-es'

import FailBot from '#src/observability/lib/failbot.js'
import patterns from '../lib/patterns.js'
import getMiniTocItems from '../lib/get-mini-toc-items.js'
import { pathLanguagePrefixed } from '#src/languages/lib/languages.js'
import statsd from '#src/observability/lib/statsd.js'
import { allVersions } from '#src/versions/lib/all-versions.js'
import { isConnectionDropped } from './halt-on-dropped-connection.js'
import { nextApp, nextHandleRequest } from './next.js'
import { defaultCacheControl } from './cache-control.js'

const STATSD_KEY_RENDER = 'middleware.render_page'
const STATSD_KEY_404 = 'middleware.render_404'

async function buildRenderedPage(req) {
  const { context } = req
  const { page } = context
  const path = req.pagePath || req.path

  const pageRenderTimed = statsd.asyncTimer(page.render, STATSD_KEY_RENDER, [`path:${path}`])

  return await pageRenderTimed(context)
}

async function buildMiniTocItems(req) {
  const { context } = req
  const { page } = context

  // get mini TOC items on articles
  if (!page.showMiniToc) {
    return
  }

  return getMiniTocItems(context.renderedPage, '')
}

export default async function renderPage(req, res) {
  const { context } = req

  // This is a contextualizing the request so that when this `req` is
  // ultimately passed into the `Error.getInitialProps` function,
  // which NextJS executes at runtime on errors, so that we can
  // from there send the error to Failbot.
  req.FailBot = FailBot

  const { page } = context
  const path = req.pagePath || req.path

  // render a 404 page
  if (!page) {
    if (process.env.NODE_ENV !== 'test' && context.redirectNotFound) {
      console.error(
        `\nTried to redirect to ${context.redirectNotFound}, but that page was not found.\n`,
      )
    }

    if (!pathLanguagePrefixed(req.path)) {
      defaultCacheControl(res)
      return res.status(404).type('text').send('Not found')
    }

    // The rest is "unhandled" requests where we don't have the page
    // but the URL looks like a real page.

    statsd.increment(STATSD_KEY_404, 1, [
      `url:${req.url}`,
      `ip:${req.ip}`,
      `path:${req.path}`,
      `referer:${req.headers.referer || ''}`,
    ])

    return nextApp.render404(req, res)
  }

  // Just finish fast without all the details like Content-Length
  if (req.method === 'HEAD') {
    return res.status(200).send('')
  }

  // Updating the Last-Modified header for substantive changes on a page for engineering
  // Docs Engineering Issue #945
  if (page.effectiveDate) {
    // Note that if a page has an invalidate `effectiveDate` string value,
    // it would be caught prior to this usage and ultimately lead to
    // 500 error.
    res.setHeader('Last-Modified', new Date(page.effectiveDate).toUTCString())
  }

  // Stop processing if the connection was already dropped
  if (isConnectionDropped(req, res)) return

  req.context.renderedPage = await buildRenderedPage(req)
  req.context.miniTocItems = await buildMiniTocItems(req)

  // Stop processing if the connection was already dropped
  if (isConnectionDropped(req, res)) return

  // Create string for <title> tag
  page.fullTitle = page.title

  // add localized ` - GitHub Docs` suffix to <title> tag (except for the homepage)
  if (!patterns.homepagePath.test(path)) {
    if (
      req.context.currentVersion === 'free-pro-team@latest' ||
      !allVersions[req.context.currentVersion]
    ) {
      page.fullTitle += ' - ' + context.site.data.ui.header.github_docs
    } else {
      const { versionTitle } = allVersions[req.context.currentVersion]
      page.fullTitle += ' - '
      // Some plans don't have the word "GitHub" in them.
      // E.g. "Enterprise Server 3.5"
      // In those cases manually prefix the word "GitHub" before it.
      if (!versionTitle.includes('GitHub')) {
        page.fullTitle += 'GitHub '
      }
      page.fullTitle += versionTitle + ' Docs'
    }
  }

  // Is the request for JSON debugging info?
  const isRequestingJsonForDebugging = 'json' in req.query && process.env.NODE_ENV !== 'production'

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

  defaultCacheControl(res)

  return nextHandleRequest(req, res)
}
