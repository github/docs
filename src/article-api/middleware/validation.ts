import { ExtendedRequestWithPageInfo } from '../types'
import type { NextFunction, Response } from 'express'

import { ExtendedRequest, Page } from '@/types'
import { isArchivedVersionByPath } from '@/archives/lib/is-archived-version'
import getRedirect from '@/redirects/lib/get-redirect'
import { getVersionStringFromPath, getLangFromPath } from '@/frame/lib/path-utils'
import nonEnterpriseDefaultVersion from '@/versions/lib/non-enterprise-default-version'
import { allVersions } from '@/versions/lib/all-versions'

// Pagelist paths use /en/free-pro-team@latest when language or version is missing.
// The pagelist lookup rejects unknown normalized language or version fragments.
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

  // pageValidationMiddleware replaces the placeholder page or returns an error.
  req.pageinfo = { pathname, page: {} as Page }
  return next()
}

// pageValidationMiddleware calls getRedirect directly because findPage hides pathname changes.
// Redirected pathnames must match page.permalinks for translated-page fallback.
// Archived enterprise paths skip redirect lookup, even if they also match a redirect.
// This matches the site middleware order.
export const pageValidationMiddleware = (
  req: ExtendedRequestWithPageInfo,
  res: Response,
  next: NextFunction,
) => {
  let { pathname } = req.pageinfo

  if (!req.context || !req.context.pages || !req.context.redirects)
    throw new Error('request not yet contextualized')

  const redirectsContext = { pages: req.context.pages, redirects: req.context.redirects }

  // Strip trailing slashes before redirect lookup, as the site's trailingSlashes middleware does.
  while (pathname.endsWith('/') && pathname.length > 1) {
    pathname = pathname.slice(0, -1)
  }

  // getRedirect does not handle /, so use the current language root.
  if (pathname === '/') {
    pathname = `/${req.context.currentLanguage}`
  }

  // Initialized so downstream readers never see undefined.
  req.pageinfo.archived = { isArchived: false }

  if (!(pathname in req.context.pages)) {
    req.pageinfo.archived = isArchivedVersionByPath(pathname)
    if (!req.pageinfo.archived.isArchived) {
      const redirect = getRedirect(pathname, redirectsContext)
      if (redirect) {
        req.pageinfo.redirectedFrom = pathname
        pathname = redirect
      }
    }
  }

  // Archived paths can leave page undefined.
  req.pageinfo.page = req.context.pages[pathname]
  if (!req.pageinfo.page && !req.pageinfo.archived.isArchived) {
    return res.status(404).json({ error: `No page found for '${pathname}'` })
  }
  // Store the normalized or redirected pathname for rendering, metadata, and metrics.
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
    // pathValidationMiddleware runs before API version validation.
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
