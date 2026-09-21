import { ExtendedRequestWithPageInfo } from '../types'
import type { NextFunction, Response } from 'express'

import { ExtendedRequest, Page } from '@/types'
import { isArchivedVersionByPath } from '@/archives/lib/is-archived-version'
import getRedirect from '@/redirects/lib/get-redirect'
import { getVersionStringFromPath, getLangFromPath } from '@/frame/lib/path-utils'
import nonEnterpriseDefaultVersion from '@/versions/lib/non-enterprise-default-version'
import { allVersions } from '@/versions/lib/all-versions'

// validates the path for pagelist endpoint
// specifically, defaults to `/en/free-pro-team@latest` when those values are missing
// when they're provided, checks and cleans them up so we don't just lookup bad lang codes or versions
export const pagelistValidationMiddleware = (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) => {
  const versionFromPath = getVersionStringFromPath(req.path) || nonEnterpriseDefaultVersion

  // Defensive: getVersionStringFromPath falls back above, so this is unreachable.
  if (!versionFromPath)
    return res.status(400).json({ error: `Couldn't get version from the given path.` })

  const langFromPath = getLangFromPath(req.path) || 'en'

  if (!langFromPath)
    return res.status(400).json({
      error: `Couldn't get language from the from the given path.`,
    })

  req.context!.currentVersion = versionFromPath
  req.context!.currentLanguage = langFromPath
  return next()
}

export const pathValidationMiddleware = (
  req: ExtendedRequestWithPageInfo,
  res: Response,
  next: NextFunction,
) => {
  const pathname = req.query.pathname as string | string[] | undefined
  if (!pathname) {
    return res.status(400).json({ error: `No 'pathname' query` })
  }
  if (Array.isArray(pathname)) {
    return res.status(400).json({ error: "Multiple 'pathname' keys" })
  }
  if (!pathname.trim()) {
    return res.status(400).json({ error: `'pathname' query empty` })
  }
  if (!pathname.startsWith('/')) {
    return res.status(400).json({ error: `'pathname' has to start with /` })
  }
  if (/\s/.test(pathname)) {
    return res.status(400).json({ error: `'pathname' cannot contain whitespace` })
  }

  // req.pageinfo.page will be defined later or it will throw
  req.pageinfo = { pathname, page: {} as Page }
  return next()
}

export const pageValidationMiddleware = (
  req: ExtendedRequestWithPageInfo,
  res: Response,
  next: NextFunction,
) => {
  let { pathname } = req.pageinfo
  // We can't use the `findPage` middleware utility function because we
  // need to know when the pathname is a redirect.
  // This is important so that the final `pathname` value
  // matches the page's permalinks.
  // This is important when rendering a page because of translations,
  // if it needs to do a fallback, it needs to know the correct
  // equivalent English page.

  if (!req.context || !req.context.pages || !req.context.redirects)
    throw new Error('request not yet contextualized')

  const redirectsContext = { pages: req.context.pages, redirects: req.context.redirects }

  // Similar to how the `handle-redirects.ts` middleware works, let's first
  // check if the URL is just having a trailing slash.
  while (pathname.endsWith('/') && pathname.length > 1) {
    pathname = pathname.slice(0, -1)
  }

  // E.g. a request for `/` is handled as a redirect outside the
  // getRedirect() function.
  if (pathname === '/') {
    pathname = `/${req.context.currentLanguage}`
  }

  // Initialized so downstream readers never see undefined.
  req.pageinfo.archived = { isArchived: false }

  if (!(pathname in req.context.pages)) {
    // If a pathname is not a known page, it might *either* be a redirect,
    // or an archived enterprise version, or both.
    // That's why it's import to not bother looking at the redirects
    // if the pathname is an archived enterprise version.
    // This mimics how our middleware work and their order.
    req.pageinfo.archived = isArchivedVersionByPath(pathname)
    if (!req.pageinfo.archived.isArchived) {
      const redirect = getRedirect(pathname, redirectsContext)
      if (redirect) {
        req.pageinfo.redirectedFrom = pathname
        pathname = redirect
      }
    }
  }

  // Remember this might yield undefined if the pathname is not a page
  req.pageinfo.page = req.context.pages[pathname]
  if (!req.pageinfo.page && !req.pageinfo.archived.isArchived) {
    return res.status(404).json({ error: `No page found for '${pathname}'` })
  }
  // The pathname might have changed if it was a redirect
  req.pageinfo.pathname = pathname

  return next()
}

export const apiVersionValidationMiddleware = (
  req: ExtendedRequestWithPageInfo,
  res: Response,
  next: NextFunction,
) => {
  const apiVersion = req.query.apiVersion as string | string[] | undefined

  if (!apiVersion) {
    return next()
  }

  if (Array.isArray(apiVersion)) {
    return res.status(400).json({ error: "Multiple 'apiVersion' keys" })
  }

  const pathname = req.pageinfo?.pathname || (req.query.pathname as string)
  if (!pathname) {
    // This should not happen as pathValidationMiddleware runs first
    throw new Error('pathname not available for apiVersion validation')
  }

  const currentVersion = getVersionStringFromPath(pathname) || nonEnterpriseDefaultVersion
  const versionInfo = allVersions[currentVersion]

  if (!versionInfo) {
    return res.status(400).json({ error: `Invalid version '${currentVersion}'` })
  }

  const validApiVersions = versionInfo.apiVersions || []

  if (validApiVersions.length > 0 && !validApiVersions.includes(apiVersion)) {
    return res.status(400).json({
      error: `Invalid apiVersion '${apiVersion}' for ${currentVersion}. Valid API versions are: ${validApiVersions.join(', ')}`,
    })
  }

  return next()
}
