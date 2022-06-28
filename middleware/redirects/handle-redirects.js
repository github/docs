import patterns from '../../lib/patterns.js'
import { URL } from 'url'
import { pathLanguagePrefixed } from '../../lib/languages.js'
import getRedirect from '../../lib/get-redirect.js'
import { cacheControlFactory } from '../cache-control.js'

const cacheControl = cacheControlFactory(60 * 60 * 24) // one day
const noCacheControl = cacheControlFactory(0)

export default function handleRedirects(req, res, next) {
  // never redirect assets
  if (patterns.assetPaths.test(req.path)) return next()

  // blanket redirects for languageless homepage
  if (req.path === '/') {
    const language = getLanguage(req)

    // Undo the cookie setting that CSRF sets.
    res.removeHeader('set-cookie')

    noCacheControl(res)

    return res.redirect(302, `/${language}`)
  }

  // begin redirect handling
  let redirect = req.path
  let queryParams = req._parsedUrl.query

  // update old-style query params (#9467)
  if ('q' in req.query) {
    const newQueryParams = new URLSearchParams(queryParams)
    newQueryParams.set('query', newQueryParams.get('q'))
    newQueryParams.delete('q')
    return res.redirect(301, `${req.path}?${newQueryParams.toString()}`)
  }

  // have to do this now because searchPath replacement changes the path as well as the query params
  if (queryParams) {
    queryParams = '?' + queryParams
    redirect = (redirect + queryParams).replace(patterns.searchPath, '$1')
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
    if (possibleRedirectTo in req.context.pages) {
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
  if (!req.context.pages[removeQueryParams(redirect)] && !redirect.includes('://')) {
    // display error on the page in development, but not in production
    // include final full redirect path in the message
    if (process.env.NODE_ENV !== 'production' && req.context) {
      req.context.redirectNotFound = redirect
    }
    return next()
  }

  // Undo the cookie setting that CSRF sets.
  res.removeHeader('set-cookie')

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
