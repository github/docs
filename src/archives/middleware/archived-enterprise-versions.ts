import type { Response, NextFunction } from 'express'
import got from 'got'

import statsd from '@/observability/lib/statsd.js'
import {
  firstVersionDeprecatedOnNewSite,
  lastVersionWithoutArchivedRedirectsFile,
  deprecatedWithFunctionalRedirects,
  firstReleaseStoredInBlobStorage,
} from '@/versions/lib/enterprise-server-releases.js'
import patterns from '@/frame/lib/patterns.js'
import versionSatisfiesRange from '@/versions/lib/version-satisfies-range.js'
import { isArchivedVersion } from '@/archives/lib/is-archived-version'
import {
  setFastlySurrogateKey,
  SURROGATE_ENUMS,
} from '@/frame/middleware/set-fastly-surrogate-key.js'
import { readCompressedJsonFileFallbackLazily } from '@/frame/lib/read-json-file.js'
import { archivedCacheControl, languageCacheControl } from '@/frame/middleware/cache-control.js'
import { pathLanguagePrefixed, languagePrefixPathRegex } from '@/languages/lib/languages.js'
import getRedirect, { splitPathByLanguage } from '@/redirects/lib/get-redirect.js'
import getRemoteJSON from '@/frame/lib/get-remote-json.js'
import { ExtendedRequest } from '@/types'

const OLD_PUBLIC_AZURE_BLOB_URL = 'https://githubdocs.azureedge.net'
// Old Azure Blob Storage `enterprise` container.
const OLD_AZURE_BLOB_ENTERPRISE_DIR = `${OLD_PUBLIC_AZURE_BLOB_URL}/enterprise`
// Old Azure Blob storage `github-images` container with
// the root directory of 'enterprise'.
const OLD_GITHUB_IMAGES_ENTERPRISE_DIR = `${OLD_PUBLIC_AZURE_BLOB_URL}/github-images/enterprise`
const OLD_DEVELOPER_SITE_CONTAINER = `${OLD_PUBLIC_AZURE_BLOB_URL}/developer-site`
// This is the new repo naming convention we use for each archived enterprise
// version. E.g. https://github.github.com/docs-ghes-2.10
const ENTERPRISE_GH_PAGES_URL_PREFIX = 'https://github.github.com/docs-ghes-'

type ArchivedRedirects = {
  [url: string]: string | null
}
// These files are huge so lazy-load them. But note that the
// `readJsonFileLazily()` function will, at import-time, check that
// the path does exist.
const archivedRedirects: () => ArchivedRedirects = readCompressedJsonFileFallbackLazily(
  './src/redirects/lib/static/archived-redirects-from-213-to-217.json',
)

type ArchivedFrontmatterURLs = {
  [url: string]: string[]
}
const archivedFrontmatterValidURLS: () => ArchivedFrontmatterURLs =
  readCompressedJsonFileFallbackLazily(
    './src/redirects/lib/static/archived-frontmatter-valid-urls.json',
  )

// Combine all the things you need to make sure the response is
// aggressively cached.
const cacheAggressively = (res: Response) => {
  archivedCacheControl(res)

  // This sets a custom Fastly surrogate key so that this response
  // won't get updated in every deployment.
  // Essentially, this sets a surrogate key such that Fastly
  // doesn't do soft-purges on these responses on every
  // automated deployment.
  setFastlySurrogateKey(res, SURROGATE_ENUMS.MANUAL)
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
// Our own timeout, in #src/frame/middleware/timeout.js defaults to 10 seconds.
// So there's no point in trying more attempts than 3 because it would
// just timeout on the 10s. (i.e. 1000 + 2000 + 4000 + 8000 > 10,000)
const retryConfiguration = { limit: 3 }
// According to our Datadog metrics, the *average* time for the
// the 'archive_enterprise_proxy' metric is ~70ms (excluding spikes)
// which much less than 1500ms.
// We have observed errors of timeout, in production, when it was
// set to 500ms. Let's try to be very conservative here to avoid
// unnecessary error reporting.
const timeoutConfiguration = { response: 1500 }

// This module handles requests for deprecated GitHub Enterprise versions
// by routing them to static content in
// one of the docs-ghes-<release number> repos.

export default async function archivedEnterpriseVersions(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  const { isArchived, requestedVersion } = isArchivedVersion(req)
  if (!isArchived || !requestedVersion) return next()

  // Skip asset paths
  if (patterns.assetPaths.test(req.path)) return next()

  const redirectCode = pathLanguagePrefixed(req.path) ? 301 : 302

  // Redirects for releases 3.0+
  if (deprecatedWithFunctionalRedirects.includes(requestedVersion)) {
    const redirectTo = getRedirect(req.path, req.context)
    if (redirectTo) {
      if (redirectCode === 302) {
        languageCacheControl(res) // call first to get `vary`
      }
      archivedCacheControl(res) // call second to extend duration
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
    if (!req.context) throw new Error('No context on request')
    const [language, withoutLanguage] = splitPathByLanguage(req.path, req.context.userLanguage)
    const newRedirectTo = redirectJson[withoutLanguage]
    if (newRedirectTo && newRedirectTo !== withoutLanguage) {
      if (redirectCode === 302) {
        languageCacheControl(res) // call first to get `vary`
      }
      archivedCacheControl(res) // call second to extend duration
      return res.redirect(redirectCode, `/${language}${newRedirectTo}`)
    }
  }
  // For releases 2.13 and lower, redirect language-prefixed URLs like /en/enterprise/2.10 -> /enterprise/2.10
  if (
    req.path.startsWith('/en/') &&
    versionSatisfiesRange(requestedVersion, `<${firstVersionDeprecatedOnNewSite}`)
  ) {
    archivedCacheControl(res)
    return res.redirect(redirectCode, req.baseUrl + req.path.replace(/^\/en/, ''))
  }

  // Redirects for releases 2.13 - 2.17
  if (
    versionSatisfiesRange(requestedVersion, `>=${firstVersionDeprecatedOnNewSite}`) &&
    versionSatisfiesRange(requestedVersion, `<=${lastVersionWithoutArchivedRedirectsFile}`)
  ) {
    const [language, withoutLanguagePath] = splitByLanguage(req.path)

    // `archivedRedirects` is a callable because it's a lazy function
    // and memoized so calling it is cheap.

    const newPath = withoutLanguagePath && archivedRedirects()[withoutLanguagePath]
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
  // Redirects for 2.18 - 3.0. Starting with 2.18, we updated the archival
  // script to create a redirects.json file
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
  // Retrieve the page from the archived repo
  const doGet = () =>
    got(getProxyPath(req.path, requestedVersion), {
      throwHttpErrors: false,
      retry: retryConfiguration,
      timeout: timeoutConfiguration,
    })

  const statsdTags = [`version:${requestedVersion}`]
  const r = await statsd.asyncTimer(doGet, 'archive_enterprise_proxy', [
    ...statsdTags,
    `path:${req.path}`,
  ])()

  if (r.statusCode === 200) {
    const [, withoutLanguagePath] = splitByLanguage(req.path)
    const isDeveloperPage = withoutLanguagePath?.startsWith(
      `/enterprise/${requestedVersion}/developer`,
    )
    res.set('x-robots-tag', 'noindex')

    // make stubbed redirect files (which exist in versions <2.13) redirect with a 301
    const staticRedirect = r.body.match(patterns.staticRedirect)
    if (staticRedirect) {
      cacheAggressively(res)
      return res.redirect(redirectCode, staticRedirect[1])
    }

    res.set('content-type', r.headers['content-type'])

    cacheAggressively(res)

    // Releases 3.2 and higher contain image asset paths with the
    // old Azure Blob Storage URL. These need to be rewritten to
    // the new archived enterprise repo URL.
    if (
      versionSatisfiesRange(requestedVersion, `>=${firstReleaseStoredInBlobStorage}`) &&
      versionSatisfiesRange(requestedVersion, `<=3.9`)
    ) {
      // `x-host` is a custom header set by Fastly.
      // GLB automatically deletes the `x-forwarded-host` header.
      const host = req.get('x-host') || req.get('x-forwarded-host') || req.get('host')
      r.body = r.body
        .replaceAll(
          `${OLD_AZURE_BLOB_ENTERPRISE_DIR}/${requestedVersion}/assets/cb-`,
          `${ENTERPRISE_GH_PAGES_URL_PREFIX}${requestedVersion}/assets/cb-`,
        )
        .replaceAll(
          `${OLD_AZURE_BLOB_ENTERPRISE_DIR}/${requestedVersion}/`,
          `${req.protocol}://${host}/enterprise-server@${requestedVersion}/`,
        )
    }

    // Releases 3.1 and lower were previously hosted in the
    // help-docs-archived-enterprise-versions repo. Only the images
    // were stored in the old Azure Blob Storage `github-images` container.
    // The image paths all need to be updated to reference the images in the
    // new archived enterprise repo's root assets directory.
    if (versionSatisfiesRange(requestedVersion, `<${firstReleaseStoredInBlobStorage}`)) {
      r.body = r.body.replaceAll(
        `${OLD_GITHUB_IMAGES_ENTERPRISE_DIR}/${requestedVersion}`,
        `${ENTERPRISE_GH_PAGES_URL_PREFIX}${requestedVersion}`,
      )
      if (versionSatisfiesRange(requestedVersion, '<=2.18') && isDeveloperPage) {
        r.body = r.body.replaceAll(
          `${OLD_DEVELOPER_SITE_CONTAINER}/${requestedVersion}`,
          `${ENTERPRISE_GH_PAGES_URL_PREFIX}${requestedVersion}/developer`,
        )
        // Update all hrefs to add /developer to the path
        r.body = r.body.replaceAll(
          `="/enterprise/${requestedVersion}`,
          `="/enterprise/${requestedVersion}/developer`,
        )
        // The changelog is the only thing remaining on developer.github.com
        r.body = r.body.replaceAll('href="/changes', 'href="https://developer.github.com/changes')
      }
    }

    // In all releases, some assets were incorrectly scraped and contain
    // deep relative paths. For example, releases 3.4+ use the webp format
    // for images. The URLs for those images were never rewritten to pull
    // from the Azure Blob Storage container. This may be due to not
    // updating our scraping tool to handle the new image types. There
    // are additional images in older versions that also have a relative path.
    // We want to update the URLs in the format
    // "../../../../../../assets/" to prefix the assets directory with the
    // new archived enterprise repo URL.
    r.body = r.body.replaceAll(
      /="(\.\.\/)*assets/g,
      `="${ENTERPRISE_GH_PAGES_URL_PREFIX}${requestedVersion}/assets`,
    )

    // Fix broken hrefs on the 2.16 landing page
    if (requestedVersion === '2.16' && req.path === '/en/enterprise/2.16') {
      r.body = r.body.replaceAll('ref="/en/enterprise', 'ref="/en/enterprise/2.16')
    }

    // Remove the search results container from the page, which removes a white
    // box that prevents clicking on page links
    r.body = r.body.replaceAll('<div id="search-results-container"></div>', '')

    return res.send(r.body)
  }
  // In releases 2.13 - 2.17, we lost access to frontmatter redirects
  //  during the archival process. This workaround finds potentially
  // relevant frontmatter redirects in currently supported pages
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

function getProxyPath(reqPath: string, requestedVersion: string) {
  const [, withoutLanguagePath] = splitByLanguage(reqPath)
  const isDeveloperPage = withoutLanguagePath?.startsWith(
    `/enterprise/${requestedVersion}/developer`,
  )

  // This was the last release supported on developer.github.com
  if (isDeveloperPage) {
    const enterprisePath = `/enterprise/${requestedVersion}`
    const newReqPath = reqPath.replace(enterprisePath, '')
    return ENTERPRISE_GH_PAGES_URL_PREFIX + requestedVersion + newReqPath
  }

  // Releases 2.18 and higher
  if (versionSatisfiesRange(requestedVersion, `>${lastVersionWithoutArchivedRedirectsFile}`)) {
    const newReqPath = reqPath.includes('redirects.json') ? `/${reqPath}` : reqPath + '/index.html'
    return ENTERPRISE_GH_PAGES_URL_PREFIX + requestedVersion + newReqPath
  }

  // Releases 2.13 - 2.17
  // redirect.json files don't exist for these versions
  if (versionSatisfiesRange(requestedVersion, `>=2.13`)) {
    return ENTERPRISE_GH_PAGES_URL_PREFIX + requestedVersion + reqPath + '/index.html'
  }

  // Releases 2.12 and lower
  const enterprisePath = `/enterprise/${requestedVersion}`
  const newReqPath = reqPath.replace(enterprisePath, '')
  return ENTERPRISE_GH_PAGES_URL_PREFIX + requestedVersion + newReqPath
}

// Module-level global cache object.
// Get's populated lazily inside getFallbackRedirect().
const fallbackRedirectLookups = new Map()

function getFallbackRedirect(req: ExtendedRequest) {
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
  // in one of the docs-ghes-<release number> repos.
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

function splitByLanguage(uri: string) {
  let language = null
  let withoutLanguage = uri
  const match = uri.match(languagePrefixPathRegex)
  if (match) {
    language = match[1]
    withoutLanguage = uri.replace(languagePrefixPathRegex, '/')
  }
  return [language, withoutLanguage]
}
