import patterns from '../../lib/patterns.js'
import { URL } from 'url'

export default function handleRedirects(req, res, next) {
  // never redirect assets
  if (patterns.assetPaths.test(req.path)) return next()

  // blanket redirects for languageless homepage to English homepage
  if (req.path === '/') {
    return res.redirect(301, '/en')
  }

  // begin redirect handling
  let redirect = req.path
  let queryParams = req._parsedUrl.query

  // update old-style query params (#9467)
  // have to do this now because searchPath replacement changes the path as well as the query params
  if (queryParams) {
    queryParams = '?' + queryParams.replace('q=', 'query=')
    redirect = (redirect + queryParams).replace(patterns.searchPath, '$1')
  }

  // remove query params temporarily so we can find the path in the redirects object
  let redirectWithoutQueryParams = removeQueryParams(redirect)

  // look for a redirect in the global object
  // for example, given an incoming path /v3/activity/event_types
  // find /en/developers/webhooks-and-events/github-event-types
  redirectWithoutQueryParams =
    req.context.redirects[redirectWithoutQueryParams] || redirectWithoutQueryParams

  // add query params back in
  redirect = queryParams ? redirectWithoutQueryParams + queryParams : redirectWithoutQueryParams

  // do not redirect a path to itself
  // req._parsedUrl.path includes query params whereas req.path does not
  if (redirect === req._parsedUrl.path) return next()

  // do not redirect if the redirected page can't be found
  if (!req.context.pages[removeQueryParams(redirect)]) {
    // display error on the page in development, but not in production
    // include final full redirect path in the message
    if (process.env.NODE_ENV !== 'production' && req.context) {
      req.context.redirectNotFound = redirect
    }
    return next()
  }

  // do the redirect!
  return res.redirect(301, redirect)
}

function removeQueryParams(redirect) {
  return new URL(redirect, 'https://docs.github.com').pathname
}
