import { ExtendedRequestWithPageInfo } from '../types'
import type { NextFunction, Response } from 'express'
import { isArchivedVersionByPath } from '@/archives/lib/is-archived-version'
import getRedirect from '@/redirects/lib/get-redirect.js'
import { Page } from '#src/types.js'

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

  // Similar to how the `handle-redirects.js` middleware works, let's first
  // check if the URL is just having a trailing slash.
  while (pathname.endsWith('/') && pathname.length > 1) {
    pathname = pathname.slice(0, -1)
  }

  // E.g. a request for `/` is handled as a redirect outside the
  // getRedirect() function.
  if (pathname === '/') {
    pathname = `/${req.context.currentLanguage}`
  }

  // Initialize archived property to avoid it being undefined
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
