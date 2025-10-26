import type { Response } from 'express'

import type { Failbot } from '@github/failbot'
import { get } from 'lodash-es'

import getMiniTocItems from '@/frame/lib/get-mini-toc-items'
import patterns from '@/frame/lib/patterns'
import FailBot from '@/observability/lib/failbot'
import statsd from '@/observability/lib/statsd'
import type { ExtendedRequest } from '@/types'
import { allVersions } from '@/versions/lib/all-versions'
import { minimumNotFoundHtml } from '../lib/constants'
import { defaultCacheControl } from './cache-control'
import { isConnectionDropped } from './halt-on-dropped-connection'
import { nextHandleRequest } from './next'

const STATSD_KEY_RENDER = 'middleware.render_page'

async function buildRenderedPage(req: ExtendedRequest): Promise<string> {
  const { context } = req
  if (!context) throw new Error('request not contextualized')
  const { page } = context
  if (!page) throw new Error('page not set in context')
  const path = req.pagePath || req.path

  const pageRenderTimed = statsd.asyncTimer(page.render, STATSD_KEY_RENDER, [`path:${path}`])

  return (await pageRenderTimed(context)) as string
}

function buildMiniTocItems(req: ExtendedRequest) {
  const { context } = req
  if (!context) throw new Error('request not contextualized')
  const { page } = context

  // get mini TOC items on articles
  if (!page || !page.showMiniToc) {
    return
  }

  return getMiniTocItems(context.renderedPage || '', 0)
}

export default async function renderPage(req: ExtendedRequest, res: Response) {
  // Skip if App Router has already handled this request
  if (res.locals?.handledByAppRouter) {
    return
  }

  const { context } = req

  // This is a contextualizing the request so that when this `req` is
  // ultimately passed into the `Error.getInitialProps` function,
  // which NextJS executes at runtime on errors, so that we can
  // from there send the error to Failbot.
  req.FailBot = FailBot as Failbot

  if (!context) throw new Error('request not contextualized')
  const { page } = context
  const path = req.pagePath || req.path

  // render a 404 page
  if (!page) {
    if (process.env.NODE_ENV !== 'test' && context.redirectNotFound) {
      console.error(
        `\nTried to redirect to ${context.redirectNotFound}, but that page was not found.\n`,
      )
    }

    // send minimal 404 at this point since we ran into hydration issues trying to pass
    // these along to AppRouter 404 handling
    defaultCacheControl(res)
    return res.status(404).type('html').send(minimumNotFoundHtml)
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

  if (!req.context) throw new Error('request not contextualized')
  req.context.renderedPage = await buildRenderedPage(req)
  req.context.miniTocItems = buildMiniTocItems(req)

  // Stop processing if the connection was already dropped
  if (isConnectionDropped(req, res)) return

  // Create string for <title> tag
  page.fullTitle = page.title

  // add localized ` - GitHub Docs` suffix to <title> tag (except for the homepage)
  if (!patterns.homepagePath.test(path)) {
    if (
      req.context.currentVersion === 'free-pro-team@latest' ||
      !allVersions[req.context.currentVersion!]
    ) {
      page.fullTitle += ' - ' + context.site!.data.ui.header.github_docs
    } else {
      const { versionTitle } = allVersions[req.context.currentVersion!]
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
    const json = req.query.json
    if (Array.isArray(json)) {
      // e.g. ?json=page.permalinks&json=currentPath
      throw new Error("'json' query string can only be 1")
    }

    if (json) {
      // deep reference: ?json=page.permalinks
      return res.json(get(context, req.query.json as string))
    } else {
      // dump all the keys: ?json
      return res.json({
        message:
          'The full context object is too big to display! Try one of the individual keys below, e.g. ?json=page. You can also access nested props like ?json=site.data.reusables',
        keys: Object.keys(context),
      })
    }
  }

  if (context.markdownRequested) {
    if (!page.autogenerated && page.documentType === 'article') {
      return res.type('text/markdown').send(req.context.renderedPage)
    } else {
      const newUrl = req.originalUrl.replace(req.path, req.path.replace(/\.md$/, ''))
      return res.redirect(newUrl)
    }
  }

  defaultCacheControl(res)

  return nextHandleRequest(req, res)
}
