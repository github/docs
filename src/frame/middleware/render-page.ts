import type { Response } from 'express'

import type { Failbot } from '@github/failbot'
import { get } from 'lodash-es'
import { createLogger } from '@/observability/logger'

import { buildMiniTocFromCollected, type CollectedHeading } from '@/frame/lib/get-mini-toc-items'
import patterns from '@/frame/lib/patterns'
import FailBot from '@/observability/lib/failbot'
import statsd, { adaptForTimer } from '@/observability/lib/statsd'
import type { ExtendedRequest } from '@/types'
import { allVersions } from '@/versions/lib/all-versions'
import { transformerRegistry } from '@/article-api/transformers'
import { normalizeRenderedMarkdown } from '@/article-api/lib/normalize-markdown'
import { renderContentToHast } from '@/content-render/index'
import { minimumNotFoundHtml } from '../lib/constants'
import { contentTypeCacheControl, defaultCacheControl } from './cache-control'
import { nextHandleRequest } from './next'

const logger = createLogger(import.meta.url)
const STATSD_KEY_RENDER = 'middleware.render_page'

async function buildRenderedPage(req: ExtendedRequest): Promise<string> {
  const { context } = req
  if (!context) throw new Error('request not contextualized')
  const { page } = context
  if (!page) throw new Error('page not set in context')
  const path = req.pagePath || req.path

  // Collect mini-TOC headings only for pages that show one, so other renders avoid plugin work.
  if (page.showMiniToc) {
    const collectMiniToc: CollectedHeading[] = []
    context.collectMiniToc = collectMiniToc
  }

  const pageRenderTimed = statsd.asyncTimer(adaptForTimer(page.render), STATSD_KEY_RENDER, [
    `path:${path}`,
  ])

  return (await pageRenderTimed(context)) as string
}

// buildRenderedPageHast returns a serializable HTML AST alongside renderedPage.
// It runs after buildRenderedPage because page.render populates englishHeadings and alertTitles.
// It disables collectMiniToc so mini-TOC collection does not repeat.
// Failures return undefined, and the React layer falls back to renderedPage.
async function buildRenderedPageHast(req: ExtendedRequest) {
  const { context } = req
  if (!context) throw new Error('request not contextualized')
  const { page } = context
  if (!page || !page.markdown) return undefined

  try {
    const hastContext = { ...context, collectMiniToc: undefined }
    const { hast } = await renderContentToHast(page.markdown, hastContext)
    return hast || undefined
  } catch (error) {
    logger.error(
      'buildRenderedPageHast failed; falling back to string path',
      error instanceof Error ? error : new Error(String(error)),
      { path: req.pagePath || req.path },
    )
    return undefined
  }
}

function buildMiniTocItems(req: ExtendedRequest) {
  const { context } = req
  if (!context) throw new Error('request not contextualized')
  const { page } = context

  if (!page || !page.showMiniToc) {
    return
  }

  // Collected headings avoid rendering article content a second time.
  const collected = context.collectMiniToc as CollectedHeading[] | undefined
  if (collected) {
    return buildMiniTocFromCollected(collected, 2)
  }
}

export default async function renderPage(req: ExtendedRequest, res: Response) {
  const { context } = req

  // Next.js Error.getInitialProps reads req.FailBot so it can report errors to Failbot.
  req.FailBot = FailBot as Failbot

  if (!context) throw new Error('request not contextualized')
  const { page } = context
  const path = req.pagePath || req.path

  if (!page) {
    if (process.env.NODE_ENV !== 'test' && context.redirectNotFound) {
      logger.error('Tried to redirect to a page that was not found', {
        redirectNotFound: context.redirectNotFound,
      })
    }

    // Passing this context to App Router 404 handling causes hydration failures.
    defaultCacheControl(res)
    return res.status(404).type('html').send(minimumNotFoundHtml)
  }

  // HEAD skips page rendering but still lets Express send Content-Length: 0.
  if (req.method === 'HEAD') {
    return res.status(200).send('')
  }

  // effectiveDate marks substantive page changes for clients that watch Last-Modified.
  if (page.effectiveDate) {
    // ArticleContext turns unparseable effectiveDate strings into a 500.
    res.setHeader('Last-Modified', new Date(page.effectiveDate).toUTCString())
  }

  // Serve markdown when the client prefers it over HTML; agents can omit text/html.
  if (req.accepts(['text/html', 'text/markdown']) === 'text/markdown') {
    context.markdownRequested = true
  }

  if (!req.context) throw new Error('request not contextualized')

  if (context.markdownRequested) {
    const transformer = transformerRegistry.findTransformer(page)
    if (!transformer) throw new Error(`No transformer found for page: ${req.pagePath}`)
    // Clear markdownRequested so renderTitle and renderProp output HTML for stripOuterTag.
    const transformerContext = { ...context, markdownRequested: false }
    req.context.renderedPage = normalizeRenderedMarkdown(
      await transformer.transform(page, path, transformerContext),
    )
  } else {
    req.context.renderedPage = await buildRenderedPage(req)
    req.context.renderedPageHast = await buildRenderedPageHast(req)
    req.context.miniTocItems = buildMiniTocItems(req)
  }

  page.fullTitle = page.title

  if (!patterns.homepagePath.test(path)) {
    if (
      req.context.currentVersion === 'free-pro-team@latest' ||
      !allVersions[req.context.currentVersion!]
    ) {
      page.fullTitle += ` - ${get(context.site!.data.ui, 'header.github_docs')}`
    } else {
      const { versionTitle } = allVersions[req.context.currentVersion!]
      page.fullTitle += ' - '
      // Prefix version titles that omit GitHub.
      if (!versionTitle.includes('GitHub')) {
        page.fullTitle += 'GitHub '
      }
      page.fullTitle += `${versionTitle} Docs`
    }
  }

  const isRequestingJsonForDebugging = 'json' in req.query && process.env.NODE_ENV !== 'production'

  if (isRequestingJsonForDebugging) {
    const json = req.query.json
    if (Array.isArray(json)) {
      // Example: ?json=page.permalinks&json=currentPath.
      throw new Error("'json' query string can only be 1")
    }

    if (json) {
      // Example deep reference: ?json=page.permalinks.
      return res.json(get(context, req.query.json as string))
    } else {
      // Example full key dump: ?json.
      return res.json({
        message:
          'The full context object is too big to display! Try one of the individual keys below, e.g. ?json=page. You can also access nested props like ?json=site.data.reusables',
        keys: Object.keys(context),
      })
    }
  }

  if (context.markdownRequested) {
    if (context.markdownViaUrl) {
      // A .md URL suffix always returns markdown, so Vary: accept would mislead.
      defaultCacheControl(res)
    } else {
      // The Accept header picks the representation, so Vary: accept is correct.
      contentTypeCacheControl(res)
    }
    return res.type('text/markdown').send(req.context.renderedPage)
  }

  contentTypeCacheControl(res)

  return nextHandleRequest(req, res)
}
