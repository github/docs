import type { NextFunction, Response } from 'express'

import patterns from '@/frame/lib/patterns'
import { pathLanguagePrefixed } from '@/languages/lib/languages-server'
import { deprecatedWithFunctionalRedirects } from '@/versions/lib/enterprise-server-releases'
import getRedirect from '../lib/get-redirect'
import { getVersionPreference } from '../lib/version-preference'
import { applyGraphqlCategoryRedirect } from '../lib/graphql-category-redirect'
import {
  defaultCacheControl,
  languageCacheControl,
  languageAndVersionCacheControl,
} from '@/frame/middleware/cache-control'
import { ExtendedRequest, URLSearchParamsTypes } from '@/types'

// Version preference redirects stay in their own branch so cookie-dependent paths use 302.
// A 301 would cache one reader's version preference in the browser.
// Deep links from search, the product UI, or bookmarks otherwise ignore the cookie and serve
// Free/Pro/Team. Measured corrective switching showed 1,288 moves to Enterprise Cloud and 500
// moves to Enterprise Server per 24 hours.
// When getVersionPreference returns vary without redirectTo, append Vary: x-user-version,
// because the 200 response depends on the cookie.
// Use append, not set, to keep existing Vary values.
// src/versions/tests/version-cookie.ts verifies the served header.
export default function handleRedirects(req: ExtendedRequest, res: Response, next: NextFunction) {
  if (!req.context) throw new Error('Request not contextualized')

  // Collapse duplicate slashes before patterns.assetPaths, so //example.com cannot bypass handling.
  if (req.path.includes('//')) {
    return res.safeRedirect(301, req.path.replace(/\/+/g, '/'))
  }

  if (patterns.assetPaths.test(req.path)) return next()

  // API endpoints handle their own redirects.
  if (req.path.startsWith('/api/')) return next()

  if (req.path === '/') {
    const language = getLanguage(req)
    languageAndVersionCacheControl(res)

    let redirectPath = `/${language}`
    const userVersion = req.userVersion
    if (userVersion && userVersion !== 'free-pro-team@latest') {
      redirectPath += `/${userVersion}`
    }

    let queryParams = new URLSearchParams(req?.query as URLSearchParamsTypes).toString()
    if (queryParams) {
      queryParams = `?${queryParams}`
    }
    return res.safeRedirect(302, redirectPath + queryParams)
  }

  let redirect = req.path
  let queryParams = req.originalUrl.includes('?') ? req.originalUrl.split('?')[1] : null

  // Route page searches to the search endpoint, and rename legacy q to query.
  const onSearch = req.path.endsWith('/search') || req.path.startsWith('/api/search')
  const hasQ = 'q' in req.query
  const hasQuery = 'query' in req.query
  if ((hasQ && !hasQuery) || (hasQuery && !onSearch)) {
    const language = getLanguage(req)
    const sp = new URLSearchParams(req.query as URLSearchParamsTypes)
    if (sp.has('q') && !sp.has('query')) {
      sp.set('query', sp.get('q')!)
      sp.delete('q')
    }

    let redirectTo = `/${language}`
    const { currentVersion } = req.context
    if (currentVersion !== 'free-pro-team@latest') {
      redirectTo += `/${currentVersion}`
      // currentVersion comes from the path, so legacy names such as enterprise need getRedirect.
      redirectTo = getRedirect(redirectTo, req.context) || redirectTo
    }

    redirectTo += `/search?${sp.toString()}`
    return res.safeRedirect(301, redirectTo)
  }

  if (queryParams) {
    queryParams = `?${queryParams}`
  }

  // Redirect keys omit query strings.
  let redirectWithoutQueryParams = removeQueryParams(redirect)

  const redirectTo = getRedirect(redirectWithoutQueryParams, req.context)

  redirectWithoutQueryParams = redirectTo || redirectWithoutQueryParams

  // Parse legacy GraphQL fragments before reapplying query params, so fragment parsing stays clear.
  const graphqlRewrite = applyGraphqlCategoryRedirect(
    redirectWithoutQueryParams,
    req.context.userLanguage || 'en',
  )
  if (graphqlRewrite) {
    redirectWithoutQueryParams = graphqlRewrite
  }

  redirect = queryParams ? redirectWithoutQueryParams + queryParams : redirectWithoutQueryParams

  if (!redirectTo && !pathLanguagePrefixed(req.path)) {
    // Add a language prefix only for pages or deprecated versions; /healthcheck passes through.
    const possibleRedirectTo = `/en${req.path}`
    // Pages are keyed without .md, so strip the extension before lookup.
    const lookupPath = possibleRedirectTo.endsWith('.md')
      ? possibleRedirectTo.replace(/\.md$/, '')
      : possibleRedirectTo
    if (!req.context.pages) throw new Error('req.context.pages not yet set')
    if (lookupPath in req.context.pages || isDeprecatedVersion(req.path)) {
      const language = getLanguage(req)

      // Use req.url here so redirects preserve query strings such as ?json=breadcrumbs.
      redirect = `/${language}${req.url}`
    }
  }

  if (!req.context.pages) throw new Error('req.context.pages not yet set')

  if (!redirect.includes('://')) {
    const preference = getVersionPreference(
      req.path,
      removeQueryParams(redirect),
      req.userVersion,
      req.context.pages,
    )
    if (preference.vary && !preference.redirectTo) {
      res.append('vary', 'x-user-version')
    }
    if (preference.redirectTo) {
      languageAndVersionCacheControl(res)
      return res.safeRedirect(302, preference.redirectTo + (queryParams || ''))
    }
  }

  if (redirect === req.originalUrl) {
    return next()
  }

  // Skip internal redirects whose target page is missing.
  if (
    !(
      req.context.pages[removeQueryParams(redirect).replace(/\.md$/, '')] ||
      isDeprecatedVersion(req.path)
    ) &&
    !redirect.includes('://')
  ) {
    // Development responses expose the missing redirect target; production keeps the page clean.
    if (process.env.NODE_ENV !== 'production' && req.context) {
      req.context.redirectNotFound = redirect
    }
    return next()
  }

  // Language-prefixed and external redirects do not vary by language preference.
  if (pathLanguagePrefixed(req.path) || redirect.includes('://')) {
    defaultCacheControl(res)
  } else {
    languageCacheControl(res)
  }

  const permanent = redirect.includes('://') || usePermanentRedirect(req)
  return res.safeRedirect(permanent ? 301 : 302, redirect)
}

function getLanguage(req: ExtendedRequest, default_ = 'en') {
  // detect-language.ts limits userLanguage to supported cookie or Accept-Language values.
  return req.context!.userLanguage || default_
}

function usePermanentRedirect(req: ExtendedRequest) {
  // Redirects from enterprise-server@latest stay temporary because latest changes over time.
  if (req.path.includes('/enterprise-server@latest')) return false

  // Language-prefixed paths redirect permanently here; injected prefixes fall through to temporary.
  if (pathLanguagePrefixed(req.path)) return true

  return false
}

function removeQueryParams(redirect: string) {
  return new URL(redirect, 'https://docs.github.com').pathname
}

// Deprecated enterprise-server releases in deprecatedWithFunctionalRedirects have functional
// redirects but no lookup entries or active req.context.pages for custom Next.js paths such as
// /admin/release-notes.
function isDeprecatedVersion(path: string) {
  const split = path.split('/')
  for (const version of deprecatedWithFunctionalRedirects) {
    if (split.includes(`enterprise-server@${version}`)) {
      return true
    }
  }
  return false
}
