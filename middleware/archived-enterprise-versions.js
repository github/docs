import path from 'path'
import slash from 'slash'
import statsd from '../lib/statsd.js'
import {
  firstVersionDeprecatedOnNewSite,
  lastVersionWithoutArchivedRedirectsFile,
  deprecatedWithFunctionalRedirects,
} from '../lib/enterprise-server-releases.js'
import patterns from '../lib/patterns.js'
import versionSatisfiesRange from '../lib/version-satisfies-range.js'
import isArchivedVersion from '../lib/is-archived-version.js'
import { setFastlySurrogateKey, SURROGATE_ENUMS } from './set-fastly-surrogate-key.js'
import got from 'got'
import { readCompressedJsonFileFallbackLazily } from '../lib/read-json-file.js'
import { cacheControlFactory } from './cache-control.js'
import { pathLanguagePrefixed, languagePrefixPathRegex } from '../lib/languages.js'
import getRedirect, { splitPathByLanguage } from '../lib/get-redirect.js'

function splitByLanguage(uri) {
  let language = null
  let withoutLanguage = uri
  if (languagePrefixPathRegex.test(uri)) {
    language = uri.match(languagePrefixPathRegex)[1]
    withoutLanguage = uri.replace(languagePrefixPathRegex, '/')
  }
  return [language, withoutLanguage]
}

// These files are huge so lazy-load them. But note that the
// `readJsonFileLazily()` function will, at import-time, check that
// the path does exist.
const archivedRedirects = readCompressedJsonFileFallbackLazily(
  './lib/redirects/static/archived-redirects-from-213-to-217.json'
)
const archivedFrontmatterValidURLS = readCompressedJsonFileFallbackLazily(
  './lib/redirects/static/archived-frontmatter-valid-urls.json'
)

const cacheControl = cacheControlFactory(60 * 60 * 24 * 365)
const noCacheControl = cacheControlFactory(0)

// Combine all the things you need to make sure the response is
// aggresively cached.
const cacheAggressively = (res) => {
  cacheControl(res)

  // This sets a custom Fastly surrogate key so that this response
  // won't get updated in every deployment.
  // Essentially, this sets a surrogate key such that Fastly
  // doesn't do soft-purges on these responses on every
  // automated deployment.
  setFastlySurrogateKey(res, SURROGATE_ENUMS.MANUAL)

  // Because this middleware has (quite possibly) been executed before
  // the CSRF middleware, that would have set a cookie. Remove that.
  // The reason for removing the 'Set-Cookie' header is because
  // otherwise Fastly won't cache it.
  res.removeHeader('set-cookie')
}

// The way `got` does retries:
//
//   sleep = 1000 * Math.pow(2, retry - 1) + Math.random() * 100
//
// So, it means:
//
//   1. ~1000ms
//   2. ~2000ms
//   3. ~4000ms
//
// ...if the limit we set is 3.
// Our own timeout, in ./middleware/timeout.js defaults to 10 seconds.
// So there's no point in trying more attempts than 3 because it would
// just timeout on the 10s. (i.e. 1000 + 2000 + 4000 + 8000 > 10,000)
const retryConfiguration = { limit: 3 }
// According to our Datadog metrics, the *average* time for the
// the 'archive_enterprise_proxy' metric is ~70ms (excluding spikes)
// which much less than 500ms.
const timeoutConfiguration = { response: 500 }

async function getRemoteJSON(url, config) {
  if (_getRemoteJSONCache.has(url)) {
    return _getRemoteJSONCache.get(url)
  }
  const body = await got(url, config).json()
  _getRemoteJSONCache.set(url, body)
  return body
}
const _getRemoteJSONCache = new Map()

// This module handles requests for deprecated GitHub Enterprise versions
// by routing them to static content in help-docs-archived-enterprise-versions

export default async function archivedEnterpriseVersions(req, res, next) {
  const { isArchived, requestedVersion } = isArchivedVersion(req)
  if (!isArchived) return next()

  // Skip asset paths
  if (patterns.assetPaths.test(req.path)) return next()

  const redirectCode = pathLanguagePrefixed(req.path) ? 301 : 302

  if (deprecatedWithFunctionalRedirects.includes(requestedVersion)) {
    const redirectTo = getRedirect(req.path, req.context)
    if (redirectTo) {
      if (redirectCode === 301) {
        cacheControl(res)
      } else {
        noCacheControl(res)
      }
      res.removeHeader('set-cookie')
      return res.redirect(redirectCode, redirectTo)
    }

    const redirectJson = await getRemoteJSON(getProxyPath('redirects.json', requestedVersion), {
      retry: retryConfiguration,
      // This is allowed to be different compared to the other requests
      // we make because downloading the `redirects.json` once is very
      // useful because it caches so well.
      // And, as of 2021 that `redirects.json` is 10MB so it's more likely
      // to time out.
      timeout: { response: 1000 },
    })
    const [language, withoutLanguage] = splitPathByLanguage(req.path, req.context.userLanguage)
    const newRedirectTo = redirectJson[withoutLanguage]
    if (newRedirectTo) {
      if (redirectCode === 301) {
        cacheControl(res)
      } else {
        noCacheControl(res)
      }
      res.removeHeader('set-cookie')
      return res.redirect(redirectCode, `/${language}${newRedirectTo}`)
    }
  }
  // redirect language-prefixed URLs like /en/enterprise/2.10 -> /enterprise/2.10
  // (this only applies to versions <2.13)
  if (
    req.path.startsWith('/en/') &&
    versionSatisfiesRange(requestedVersion, `<${firstVersionDeprecatedOnNewSite}`)
  ) {
    cacheControl(res)
    return res.redirect(redirectCode, req.baseUrl + req.path.replace(/^\/en/, ''))
  }

  // find redirects for versions between 2.13 and 2.17
  // starting with 2.18, we updated the archival script to create a redirects.json file
  if (
    versionSatisfiesRange(requestedVersion, `>=${firstVersionDeprecatedOnNewSite}`) &&
    versionSatisfiesRange(requestedVersion, `<=${lastVersionWithoutArchivedRedirectsFile}`)
  ) {
    const [language, withoutLanguagePath] = splitByLanguage(req.path)

    // `archivedRedirects` is a callable because it's a lazy function
    // and memoized so calling it is cheap.

    const newPath = archivedRedirects()[withoutLanguagePath]
    // Some entries in the lookup exists purely for the sake of injecting
    // language.
    // E.g. '/enterprise/2.15/user'
    // URLs like this only need to redirect the original `req.path`
    // didn't already have a language
    if (newPath !== undefined && (newPath || !language)) {
      // Construct the new URL by combining the new language and the
      // new destination.
      const redirect = `/${language || 'en'}${newPath || withoutLanguagePath}`
      cacheAggressively(res)
      return res.redirect(redirectCode, redirect)
    }
  }

  if (
    versionSatisfiesRange(requestedVersion, `>${lastVersionWithoutArchivedRedirectsFile}`) &&
    !deprecatedWithFunctionalRedirects.includes(requestedVersion)
  ) {
    const redirectJson = await getRemoteJSON(getProxyPath('redirects.json', requestedVersion), {
      retry: retryConfiguration,
      // This is allowed to be different compared to the other requests
      // we make because downloading the `redirects.json` once is very
      // useful because it caches so well.
      // And, as of 2021 that `redirects.json` is 10MB so it's more likely
      // to time out.
      timeout: { response: 1000 },
    })

    // make redirects found via redirects.json redirect with a 301
    if (redirectJson[req.path]) {
      res.set('x-robots-tag', 'noindex')
      cacheAggressively(res)
      return res.redirect(redirectCode, redirectJson[req.path])
    }
  }

  const statsdTags = [`version:${requestedVersion}`]
  const doGet = () =>
    got(getProxyPath(req.path, requestedVersion), {
      throwHttpErrors: false,
      retry: retryConfiguration,
      timeout: timeoutConfiguration,
    })
  const r = await statsd.asyncTimer(doGet, 'archive_enterprise_proxy', [
    ...statsdTags,
    `path:${req.path}`,
  ])()
  if (r.statusCode === 200) {
    res.set('x-robots-tag', 'noindex')

    // make stubbed redirect files (which exist in versions <2.13) redirect with a 301
    const staticRedirect = r.body.match(patterns.staticRedirect)
    if (staticRedirect) {
      cacheAggressively(res)
      return res.redirect(redirectCode, staticRedirect[1])
    }

    res.set('content-type', r.headers['content-type'])

    cacheAggressively(res)

    return res.send(r.body)
  }

  // from 2.13 to 2.17, we lost access to frontmatter redirects during the archival process
  // this workaround finds potentially relevant frontmatter redirects in currently supported pages
  if (
    versionSatisfiesRange(requestedVersion, `>=${firstVersionDeprecatedOnNewSite}`) &&
    versionSatisfiesRange(requestedVersion, `<=${lastVersionWithoutArchivedRedirectsFile}`)
  ) {
    const statsTags = [`path:${req.path}`]
    const fallbackRedirect = getFallbackRedirect(req)
    if (fallbackRedirect) {
      statsTags.push(`fallback:${fallbackRedirect}`)
      statsd.increment('middleware.trying_fallback_redirect_success', 1, statsTags)
      cacheAggressively(res)
      return res.redirect(redirectCode, fallbackRedirect)
    }
    statsd.increment('middleware.trying_fallback_redirect_failure', 1, statsTags)
  }

  return next()
}

// paths are slightly different depending on the version
// for >=2.13: /2.13/en/enterprise/2.13/user/articles/viewing-contributions-on-your-profile
// for <2.13: /2.12/user/articles/viewing-contributions-on-your-profile
function getProxyPath(reqPath, requestedVersion) {
  const proxyPath = versionSatisfiesRange(requestedVersion, `>=${firstVersionDeprecatedOnNewSite}`)
    ? slash(path.join('/', requestedVersion, reqPath))
    : reqPath.replace(/^\/enterprise/, '')

  return `https://github.github.com/help-docs-archived-enterprise-versions${proxyPath}`
}

// Module-level global cache object.
// Get's populated lazily inside getFallbackRedirect().
const fallbackRedirectLookups = new Map()

function getFallbackRedirect(req) {
  // The file `lib/redirects/static/archived-frontmatter-valid-urls.json` which
  // we depend on here, is structured like this:
  //
  //  {
  //   "/enterprise/2.13/foo/bar": [
  //     "/enterprise/2.13/other/old/thing",
  //     "/enterprise/2.13/more/redirectable/url",
  //     "/enterprise/2.13/etc/etc"
  //   ],
  //   ...
  //
  // The keys are valid URLs that it can redirect to. I.e. these are
  // URLs that we definitely know are valid and will be found
  // in https://github.com/github/help-docs-archived-enterprise-versions
  // The array values are possible URLs we deem acceptable redirect
  // sources.
  // But to avoid an unnecessary, O(n), loop every time, we turn this
  // structure around to become:
  //
  //   {
  //     "/enterprise/2.13/other/old/thing": "/enterprise/2.13/foo/bar",
  //     "/enterprise/2.13/more/redirectable/url": "/enterprise/2.13/foo/bar",
  //     "/enterprise/2.13/etc/etc": "/enterprise/2.13/foo/bar",
  //     ...
  //
  // Now potential lookups are fast.
  if (!fallbackRedirectLookups.size) {
    for (const [destination, sources] of Object.entries(archivedFrontmatterValidURLS())) {
      for (const source of sources) {
        fallbackRedirectLookups.set(source, destination)
      }
    }
  }

  // But before we proceed, remember that the
  // file lib/redirects/static/archived-frontmatter-valid-urls.json never
  // contains a language prefix.
  // E.g. only `/enterprise/2.13/foo/bar` but the requested URL can be
  // `/en/enterprise/2.13/foo/bar`, `/pt/enterprise/2.13/foo/bar`,
  // or just `/enterprise/2.13/foo/bar`.
  // Whatever it is, pop the language prefix, operate, and put it back
  // again. In the end, it always has to have a language prefix.
  const [language, withoutLanguage] = splitPathByLanguage(req.path)
  const fallback = fallbackRedirectLookups.get(withoutLanguage)
  if (fallback) {
    return `/${language}${fallback}`
  }
}
