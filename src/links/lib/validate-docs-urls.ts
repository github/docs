import type { Response } from 'express'
import { load } from 'cheerio'

import warmServer from '@/frame/lib/warm-server'
import { liquid } from '@/content-render/index'
import shortVersions from '@/versions/middleware/short-versions'
import contextualize from '@/frame/middleware/context/context'
import features from '@/versions/middleware/features'
import findPage from '@/frame/middleware/find-page'
import { createMinimalProcessor } from '@/content-render/unified/processor'
import getRedirect from '@/redirects/lib/get-redirect'
import type { ExtendedRequest, Page } from '@/types'

export type DocsUrls = {
  [identifier: string]: string
}

type Permalink = {
  href: string
  languageCode: string
}
type Redirects = {
  [from: string]: string
}

export type Check = {
  identifier: string
  url: string
  pageURL: string
  found: boolean
  fragment: string | undefined
  fragmentFound?: boolean
  fragmentCandidates?: string[]
  // Redirect destination with the /en prefix, when the source URL redirects.
  redirectPageURL?: string
  // Suggested replacement URL without /en, preserving any fragment.
  redirect?: string
}

export async function validateDocsUrl(docsUrls: DocsUrls, { checkFragments = false } = {}) {
  const site = await warmServer(['en'])
  const pages = site.pages
  const redirects: Redirects = site.redirects

  const checks: Check[] = []
  for (const [identifier, url] of Object.entries(docsUrls)) {
    if (!url.startsWith('/')) {
      throw new Error(`URL doesn't start with '/': ${url} (identifier: ${identifier})`)
    }
    const pathname = url.split('?')[0]
    // The homepage resolves at /en, not /en/.
    const [pageURL, fragment] = `/en${pathname === '/' ? '' : pathname}`.split('#')

    const page = pages[pageURL]
    const check: Check = {
      identifier,
      url,
      pageURL,
      fragment,
      found: !!page,
    }
    let redirectedPage: Page | null = null
    if (!page) {
      const redirect = getRedirect(pageURL, {
        userLanguage: 'en',
        redirects,
        pages,
      })
      if (redirect && isEnterpriseCloudRedirectOnly(pageURL, redirect)) {
        // Skip redirects that only add the Enterprise Cloud prefix; they are not reported.
        continue
      }
      if (redirect) {
        redirectedPage = pages[redirect]
        if (!redirectedPage) {
          throw new Error(`The redirected page doesn't exist: ${redirect}`)
        }
        check.found = true
        check.redirectPageURL = redirect
        check.redirect = stripLanguagePrefix(redirect)
        if (fragment) {
          check.redirect += `#${fragment}`
        }
      }
    }

    if (checkFragments && fragment) {
      const permalink = (redirectedPage || page).permalinks[0]
      const html = await renderInnerHTML(redirectedPage || page, permalink)
      const $ = load(html)
      check.fragmentFound = $(`#${fragment}`).length > 0 || $(`a[name="${fragment}"]`).length > 0
      if (!check.fragmentFound) {
        const fragmentCandidates: string[] = []
        $('h2[id], h3[id]').each((_, el) => {
          const id = $(el).attr('id')
          if (id) {
            fragmentCandidates.push(id)
          }
        })
        check.fragmentCandidates = fragmentCandidates
      }
    }
    checks.push(check)
  }
  return checks
}

function isEnterpriseCloudRedirectOnly(originalUrl: string, redirectUrl: string) {
  // Many URLs only redirect by adding /enterprise-cloud@latest under free-pro-team.
  return redirectUrl.replace('/enterprise-cloud@latest', '') === originalUrl
}

async function renderInnerHTML(page: Page, permalink: Permalink) {
  const next = () => {}
  const res = {}

  const pagePath = permalink.href
  const req = {
    path: pagePath,
    language: permalink.languageCode,
    pagePath,
    cookies: {},
    // contextualize replaces this placeholder, but TypeScript needs the key upfront.
    context: {},
  }
  await contextualize(req as ExtendedRequest, res as Response, next)
  await shortVersions(req as ExtendedRequest, res as Response, next)
  await findPage(req as ExtendedRequest, res as Response, next)
  features(req as ExtendedRequest, res as Response, next)

  const markdown = await liquid.parseAndRender(page.markdown, req.context)
  const processor = createMinimalProcessor(req.context)
  const vFile = await processor.process(markdown)
  return vFile.toString()
}

function stripLanguagePrefix(url: string) {
  return url.replace(/^\/en\//, '/')
}
