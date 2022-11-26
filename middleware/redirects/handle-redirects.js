import patterns from '../../lib/patterns.js'
import { URL } from 'url'
import { pathLanguagePrefixed } from '../../lib/languages.js'
import { deprecatedWithFunctionalRedirects } from '../../lib/enterprise-server-releases.js'
import getRedirect from '../../lib/get-redirect.js'
import { cacheControlFactory } from '../cache-control.js'

const cacheControl = cacheControlFactory(60 * 60 * 24) // one day
const noCacheControl = cacheControlFactory(0)

export default function handleRedirects(req, res, next) {
  // never redirect assets
  if (patterns.assetPaths.test(req.path)) return next()

  // Any double-slashes in the URL should be removed first
  if (req.path.includes('//')) {
    return res.redirect(301, req.path.replace(/\/\//g, '/'))
  }

  // blanket redirects for languageless homepage
  if (req.path === '/') {
    const language = getLanguage(req)
    noCacheControl(res)
    return res.redirect(302, `/${language}`)
  }

  // The URL `/search` was the old JSON API. We no longer use it anywhere
  // and neither does support.github.com any more.
  // But there could be legacy third-party integrators which we don't know
  // about.
  // In the future we might want to re-use this for our dedicated search
  // result page which is `/$lang/search` but until we're certain all
  // third-party search apps have noticed, we can't do that. Perhaps
  // some time in mid to late 2023.
  if (req.path === '/search') {
    let url = '/api/search/legacy'
    if (Object.keys(req.query).length) {
      url += `?${new URLSearchParams(req.query)}`
    }
    // This is a 302 redirect.
    // Why not a 301? Because permanent redirects tend to get very stuck
    // in client caches (e.g. browsers) which would make it hard to one
    // day turn this redirect into a redirect to `/en/search` which is
    // how all pages work when typed in without a language prefix.
    return res.redirect(url)
  }

  // begin redirect handling
  let redirect = req.path
  let queryParams = req._parsedUrl.query

  // If process.env.ENABLE_SEARCH_RESULTS_PAGE isn't set, you can't go to the
  // dedicated search results page.
  // If that's the case, use the "old redirect" where all it does is
  // "correcting" the old query string 'q' to 'query'.
  if (!process.env.ENABLE_SEARCH_RESULTS_PAGE && 'q' in req.query && !('query' in req.query)) {
    // update old-style query params (#9467)
    const newQueryParams = new URLSearchParams(queryParams)
    newQueryParams.set('query', newQueryParams.get('q'))
    newQueryParams.delete('q')
    return res.redirect(301, `${req.path}?${newQueryParams.toString()}`)
  }

  // If process.env.ENABLE_SEARCH_RESULTS_PAGE is set, the dedicated search
  // result page is ready. If that's the case, we can redirect to
  // `/$locale/search?query=...` from `/foo/bar?query=...` or from
  // (the old style) `/foo/bar/?q=...`
  if (
    process.env.ENABLE_SEARCH_RESULTS_PAGE &&
    ('q' in req.query ||
      ('query' in req.query &&
        !(req.path.endsWith('/search') || req.path.startsWith('/api/search'))))
  ) {
    // If you had the old legacy format of /some/uri?q=stuff
    // it needs to redirect to /en/search?query=stuff or
    // /some/uri?query=stuff depending on if ENABLE_SEARCH_RESULTS_PAGE has been
    // set up.
    // If you have the new format of /some/uri?query=stuff it too needs
    // to redirect to /en/search?query=stuff
    // ...or /en/{version}/search?query=stuff
    const language = getLanguage(req)
    const sp = new URLSearchParams(req.query)
    if (sp.has('q') && !sp.has('query')) {
      sp.set('query', sp.get('q'))
      sp.delete('q')
    }

    let redirectTo = `/${language}`
    const { currentVersion } = req.context
    if (currentVersion !== 'free-pro-team@latest') {
      redirectTo += `/${currentVersion}`
      // The `req.context.currentVersion` is just the portion of the URL
      // pathname. It could be that the currentVersion is something
      // like `enterprise` which needs to be redirected to its new name.
      redirectTo = getRedirect(redirectTo, req.context)
    }

    redirectTo += `/search?${sp.toString()}`
    return res.redirect(301, redirectTo)
  }

  // have to do this now because searchPath replacement changes the path as well as the query params
  if (queryParams) {
    queryParams = '?' + queryParams
  }

  // remove query params temporarily so we can find the path in the redirects object
  let redirectWithoutQueryParams = removeQueryParams(redirect)

  const redirectTo = getRedirect(redirectWithoutQueryParams, req.context)

  redirectWithoutQueryParams = redirectTo || redirectWithoutQueryParams

  redirect = queryParams ? redirectWithoutQueryParams + queryParams : redirectWithoutQueryParams

  if (!redirectTo && !pathLanguagePrefixed(req.path)) {
    // No redirect necessary, but perhaps it's to a known page, and the URL
    // currently doesn't have a language prefix, then we need to add
    // the language prefix.
    // We can't always force on the language prefix because some URLs
    // aren't pages. They're other middleware endpoints such as
    // `/healthz` which should never redirect.
    // But for example, a `/authentication/connecting-to-github-with-ssh`
    // needs to become `/en/authentication/connecting-to-github-with-ssh`
    const possibleRedirectTo = `/en${req.path}`
    if (possibleRedirectTo in req.context.pages || isDeprecatedVersion(req.path)) {
      const language = getLanguage(req)

      // Note, it's important to use `req.url` here and not `req.path`
      // because the full URL can contain query strings.
      // E.g. `/foo?json=breadcrumbs`
      redirect = `/${language}${req.url}`
    }
  }

  // do not redirect a path to itself
  // req._parsedUrl.path includes query params whereas req.path does not
  if (redirect === req._parsedUrl.path) {
    return next()
  }

  // do not redirect if the redirected page can't be found
  if (
    !(req.context.pages[removeQueryParams(redirect)] || isDeprecatedVersion(req.path)) &&
    !redirect.includes('://')
  ) {
    // display error on the page in development, but not in production
    // include final full redirect path in the message
    if (process.env.NODE_ENV !== 'production' && req.context) {
      req.context.redirectNotFound = redirect
    }
    return next()
  }

  // do the redirect if the from-URL already had a language in it
  if (pathLanguagePrefixed(req.path) || redirect.includes('://')) {
    cacheControl(res)
  } else {
    noCacheControl(res)
  }

  const permanent = redirect.includes('://') || usePermanentRedirect(req)
  return res.redirect(permanent ? 301 : 302, redirect)
}

function getLanguage(req, default_ = 'en') {
  // req.context.userLanguage, if it truthy, is always a valid supported
  // language. It's whatever was in the user's request but filtered
  // based on non-WIP languages in lib/languages.js
  return req.context.userLanguage || default_
}

function usePermanentRedirect(req) {
  // If the redirect was to essentially swap `enterprise-server@latest`
  // for `enterprise-server@3.x` then, we definitely don't want to
  // do a permanent redirect.
  // When this is the case, we don't want a permanent redirect because
  // it could overzealously cache in the users' browser which could
  // be bad when whatever "latest" means changes.
  if (req.path.includes('/enterprise-server@latest')) return false

  // If the redirect involved injecting a language prefix, then don't
  // permanently redirect because that could overly cache in users'
  // browsers if we some day want to make the language redirect
  // depend on a cookie or 'Accept-Language' header.
  if (pathLanguagePrefixed(req.path)) return true

  // The default is to *not* do a permanent redirect.
  return false
}

function removeQueryParams(redirect) {
  return new URL(redirect, 'https://docs.github.com').pathname
}

function isDeprecatedVersion(path) {
  // When we rewrote how redirects work, from a lookup model to a
  // functional model, the enterprise-server releases that got
  // deprecated since then fall between the cracks. Especially
  // for custom NextJS page-like pages like /admin/release-notes
  // These URLs don't come from any remaining .json lookup file
  // and they're not active pages either (e.g. req.context.pages)
  const split = path.split('/')
  for (const version of deprecatedWithFunctionalRedirects) {
    if (split.includes(`enterprise-server@${version}`)) {
      return true
    }
  }
  return false
}
