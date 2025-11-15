import path from 'path'
import { existsSync } from 'fs'
import type { Response, NextFunction } from 'express'

import { ROOT } from '@/frame/lib/constants'
import Page from '@/frame/lib/page'
import { languagePrefixPathRegex } from '@/languages/lib/languages-server'
import type { ExtendedRequest } from '@/types'

interface FindPageOptions {
  isDev?: boolean
  contentRoot?: string
}

const englishPrefixRegex = /^\/en(\/|$)/
const CONTENT_ROOT = path.join(ROOT, 'content')

export default async function findPage(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
  // Express won't execute these but it makes it easier to unit test
  // the middleware.
  {
    isDev = process.env.NODE_ENV === 'development',
    contentRoot = CONTENT_ROOT,
  }: FindPageOptions = {},
): Promise<any> {
  // Filter out things like `/will/redirect` or `/_next/data/...`
  if (!req.pagePath || !languagePrefixPathRegex.test(req.pagePath)) {
    return next()
  }

  if (!req.context?.pages) {
    return next()
  }

  // Using any for page because it's dynamically assigned properties (like version) that aren't in the Page type
  let page: any = req.context.pages[req.pagePath]
  if (page && isDev && englishPrefixRegex.test(req.pagePath)) {
    // The .applicableVersions and .permalinks properties are computed
    // when the page is read in from disk. But when the initial tree
    // was created at startup, the pages in the tree were mutated
    // based on their context. For example, a category page's versions
    // is based on looping through all its children's versions.
    const reuseOldVersions = page.relativePath.endsWith('index.md')
    const oldApplicableVersions = page.applicableVersions
    const oldPermalinks = page.permalinks

    const rereadPage = await rereadByPath(
      req.pagePath,
      contentRoot,
      req.context?.currentVersion || '',
    )
    if (rereadPage) {
      page = rereadPage
    }
    if (reuseOldVersions) {
      page.applicableVersions = oldApplicableVersions
      page.permalinks = oldPermalinks
    }

    // This can happen if the page we just re-read has changed which
    // versions it's available in (the `versions` frontmatter) meaning
    // it might no longer be available on the current URL.
    if (
      req.context?.currentVersion &&
      !page.applicableVersions.includes(req.context.currentVersion)
    ) {
      return res
        .status(404)
        .send(
          `After re-reading the page, '${req.context?.currentVersion}' is no longer an applicable version. ` +
            'A restart is required.',
        )
    }
  }

  if (page && req.context) {
    req.context.page = page
    // Note: Page doesn't have a version property, this might be setting it dynamically
    ;(req.context.page as any).version = req.context.currentVersion

    // We can't depend on `page.hidden` because the dedicated search
    // results page is a hidden page but it needs to offer all possible
    // languages.
    if (page.relativePath.startsWith('early-access') && req.context?.languages?.en) {
      // Override the languages to be only English
      req.context.languages = {
        en: req.context.languages.en,
      }
    }
  }

  return next()
}

async function rereadByPath(
  uri: string,
  contentRoot: string,
  currentVersion: string,
): Promise<Page | null> {
  const match = uri.match(languagePrefixPathRegex)
  if (!match) return null
  const languageCode = match[1]
  const withoutLanguage = uri.replace(languagePrefixPathRegex, '/')
  const withoutVersion = withoutLanguage.replace(`/${currentVersion}`, '')
  // TODO: Support loading translations the same way.
  // NOTE: No one is going to test translations like this in development
  // but perhaps one day we can always and only do these kinds of lookups
  // at runtime.
  const possible = path.join(contentRoot, withoutVersion)
  const filePath = existsSync(possible) ? path.join(possible, 'index.md') : `${possible}.md`
  const relativePath = path.relative(contentRoot, filePath)
  const basePath = contentRoot

  // Remember, the Page.init() can return a Promise that resolves to falsy
  // if it can't read the file in from disk. E.g. a request for /en/non/existent.
  // In other words, it's fine if it can't be read from disk. It'll get
  // handled and turned into a nice 404 message.
  const page = await Page.init({
    basePath,
    relativePath,
    languageCode,
  })
  return page || null
}
