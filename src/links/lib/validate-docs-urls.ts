import type { Response } from 'express'
import cheerio from 'cheerio'

import warmServer from '@/frame/lib/warm-server'
import { liquid } from '@/content-render/index.js'
import shortVersions from '@/versions/middleware/short-versions.js'
import contextualize from '@/frame/middleware/context/context'
import features from '@/versions/middleware/features.js'
import findPage from '@/frame/middleware/find-page.js'
import { createMinimalProcessor } from '@/content-render/unified/processor.js'
import getRedirect from '@/redirects/lib/get-redirect.js'
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
  // If the URL lead to a redirect, this is its URL (starting with /en/...)
  redirectPageURL?: string
  // If the URL lead to a redirect, this is what the new URL should be
  // (for example /the/new/pathname#my-fragment)
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
    // If the url is just '/' we want to check the homepage,
    // which is `/en`, not `/en/`.
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
        // Ignore this one. It just added enterprise-cloud@latest to the URL.
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
      const $ = cheerio.load(html)
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
  // A lot of URLs don't work in free-pro-team so all they do is redirect
  // from {OLD-URL} to "/enterprise-count@latest/{OLD-URL}"
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
    // The contextualize() middleware will create a new one.
    // Here it just exists for the sake of TypeScript.
    context: {},
  }
  await contextualize(req as ExtendedRequest, res as Response, next)
  await shortVersions(req as ExtendedRequest, res as Response, next)
  await findPage(req, res, next)
  features(req as ExtendedRequest, res as Response, next)

  const markdown = await liquid.parseAndRender(page.markdown, req.context)
  const processor = createMinimalProcessor(req.context)
  const vFile = await processor.process(markdown)
  return vFile.toString()
}

function stripLanguagePrefix(url: string) {
  return url.replace(/^\/en\//, '/')
}
