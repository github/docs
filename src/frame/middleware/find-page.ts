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

// Development rereads of index pages keep startup versions and permalinks.
// Tree construction mutates category pages from child versions, but rereads use only file data.
export default async function findPage(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
  // Express ignores these options, but tests can pass them directly.
  {
    isDev = process.env.NODE_ENV === 'development',
    contentRoot = CONTENT_ROOT,
  }: FindPageOptions = {},
): Promise<void> {
  // Only language-prefixed content paths can map to pages; /will/redirect continues.
  if (!req.pagePath || !languagePrefixPathRegex.test(req.pagePath)) {
    return next()
  }

  if (!req.context?.pages) {
    return next()
  }

  let page = req.context.pages[req.pagePath] as Page | undefined
  if (page && isDev && englishPrefixRegex.test(req.pagePath)) {
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

    // A reread page can drop the requested version from applicableVersions.
    if (
      req.context?.currentVersion &&
      !page.applicableVersions.includes(req.context.currentVersion)
    ) {
      res
        .status(404)
        .send(
          `After re-reading the page, '${req.context?.currentVersion}' is no longer an applicable version. ` +
            'A restart is required.',
        )
      return
    }
  }

  if (page && req.context) {
    req.context.page = page
    ;(req.context.page as Page & { version: string }).version = req.context.currentVersion || ''

    // page.hidden also hides search, which needs every language; restrict only early-access pages.
    if (page.relativePath.startsWith('early-access') && req.context?.languages?.en) {
      req.context.languages = {
        en: req.context.languages.en,
      }
    }
  }

  return next()
}

// rereadByPath handles only English content because translations load at build time.
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
  const possible = path.join(contentRoot, withoutVersion)
  const filePath = existsSync(possible) ? path.join(possible, 'index.md') : `${possible}.md`
  const relativePath = path.relative(contentRoot, filePath)
  const basePath = contentRoot

  // When a reread fails, the caller keeps the already-found page.
  const page = await Page.init({
    basePath,
    relativePath,
    languageCode,
  })
  return page || null
}
