import type { Response, NextFunction } from 'express'
import { fetchWithRetry, readBodyWithTimeout } from '@/frame/lib/fetch-utils'

import statsd, { adaptForTimer } from '@/observability/lib/statsd'
import { createLogger } from '@/observability/logger'
import {
  firstVersionDeprecatedOnNewSite,
  lastVersionWithoutArchivedRedirectsFile,
  deprecatedWithFunctionalRedirects,
  firstReleaseStoredInBlobStorage,
} from '@/versions/lib/enterprise-server-releases'
import patterns from '@/frame/lib/patterns'
import versionSatisfiesRange from '@/versions/lib/version-satisfies-range'
import { isArchivedVersion } from '@/archives/lib/is-archived-version'
import { setFastlySurrogateKey, SURROGATE_ENUMS } from '@/frame/middleware/set-fastly-surrogate-key'
import { readCompressedJsonFileFallbackLazily } from '@/frame/lib/read-json-file'
import { archivedCacheControl, languageCacheControl } from '@/frame/middleware/cache-control'
import { pathLanguagePrefixed, languagePrefixPathRegex } from '@/languages/lib/languages-server'
import { languages as allLanguages } from '@/languages/lib/languages'
import getRedirect, { splitPathByLanguage } from '@/redirects/lib/get-redirect'
import getRemoteJSON from '@/frame/lib/get-remote-json'
import { ExtendedRequest } from '@/types'

const logger = createLogger(import.meta.url)

const OLD_PUBLIC_AZURE_BLOB_URL = 'https://githubdocs.azureedge.net'
// Old Azure Blob Storage enterprise container.
const OLD_AZURE_BLOB_ENTERPRISE_DIR = `${OLD_PUBLIC_AZURE_BLOB_URL}/enterprise`
// Old Azure Blob Storage github-images container rooted at enterprise.
const OLD_GITHUB_IMAGES_ENTERPRISE_DIR = `${OLD_PUBLIC_AZURE_BLOB_URL}/github-images/enterprise`
const OLD_DEVELOPER_SITE_CONTAINER = `${OLD_PUBLIC_AZURE_BLOB_URL}/developer-site`
// Archived enterprise repositories use https://github.github.com/docs-ghes-2.10.
const ENTERPRISE_GH_PAGES_URL_PREFIX = 'https://github.github.com/docs-ghes-'

type ArchivedRedirects = {
  [url: string]: string | null
}
// Lazy-load the large redirect files.
// readCompressedJsonFileFallbackLazily verifies the path at import time.
const archivedRedirects = readCompressedJsonFileFallbackLazily(
  './src/redirects/lib/static/archived-redirects-from-213-to-217.json',
) as () => ArchivedRedirects

type ArchivedFrontmatterURLs = {
  [url: string]: string[]
}
const archivedFrontmatterValidURLS = readCompressedJsonFileFallbackLazily(
  './src/redirects/lib/static/archived-frontmatter-valid-urls.json',
) as () => ArchivedFrontmatterURLs

const cacheAggressively = (res: Response) => {
  archivedCacheControl(res)

  // Manual surrogate keys avoid Fastly soft purges on every automated deployment.
  setFastlySurrogateKey(res, SURROGATE_ENUMS.MANUAL)
}

// Got sleeps about 1s, 2s, then 4s for three retries.
// A fourth retry would exceed MAX_REQUEST_TIMEOUT, which defaults to 10 seconds in production.
const retryConfiguration = { limit: 3 }
// Datadog reports archive_enterprise_proxy averages about 70ms excluding spikes.
// Production timed out at 500ms and 1500ms, so 3000ms avoids noise from slow responses.
const timeoutConfiguration = { response: 3000 }

const WARN_RESPONSE_THRESHOLD = timeoutConfiguration.response / 2
// Log successful responses slower than 500ms.
const SLOW_RESPONSE_THRESHOLD = 500

export default async function archivedEnterpriseVersions(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  const { isArchived, requestedVersion } = isArchivedVersion(req)
  if (!isArchived || !requestedVersion) return next()

  if (patterns.assetPaths.test(req.path)) return next()

  const redirectCode = pathLanguagePrefixed(req.path) ? 301 : 302

  if (deprecatedWithFunctionalRedirects.includes(requestedVersion)) {
    const redirectTo = req.context ? getRedirect(req.path, req.context) : undefined
    if (redirectTo) {
      if (redirectCode === 302) {
        // languageCacheControl sets vary; archivedCacheControl extends the cache duration.
        languageCacheControl(res)
      }
      archivedCacheControl(res)
      return res.safeRedirect(redirectCode, redirectTo)
    }

    let redirectJson: Record<string, string>
    try {
      redirectJson = (await getRemoteJSON(getProxyPath('redirects.json', requestedVersion), {
        retry: retryConfiguration,
        // Cache misses use a 1-second time-to-first-byte limit; body transfer may take longer.
        timeout: { response: 1000 },
      })) as Record<string, string>
    } catch (err) {
      logger.error('Failed to fetch archived redirects.json', {
        version: requestedVersion,
        error: err instanceof Error ? err : new Error(String(err)),
      })
      throw err
    }
    if (!req.context) throw new Error('No context on request')
    const [language, withoutLanguage] = splitPathByLanguage(req.path, req.context.userLanguage)
    const newRedirectTo = redirectJson[withoutLanguage]
    if (newRedirectTo && newRedirectTo !== withoutLanguage) {
      if (redirectCode === 302) {
        // languageCacheControl sets vary; archivedCacheControl extends the cache duration.
        languageCacheControl(res)
      }
      archivedCacheControl(res)
      return res.safeRedirect(redirectCode, `/${language}${newRedirectTo}`)
    }
  }
  // Earlier releases redirect /en/enterprise/2.10 to /enterprise/2.10.
  if (
    req.path.startsWith('/en/') &&
    versionSatisfiesRange(requestedVersion, `<${firstVersionDeprecatedOnNewSite}`)
  ) {
    archivedCacheControl(res)
    return res.safeRedirect(redirectCode, req.baseUrl + req.path.replace(/^\/en/, ''))
  }

  if (
    versionSatisfiesRange(requestedVersion, `>=${firstVersionDeprecatedOnNewSite}`) &&
    versionSatisfiesRange(requestedVersion, `<=${lastVersionWithoutArchivedRedirectsFile}`)
  ) {
    const [language, withoutLanguagePath] = splitByLanguage(req.path)

    // archivedRedirects is lazy and memoized, so calling it here is cheap.
    const newPath = withoutLanguagePath && archivedRedirects()[withoutLanguagePath]
    // Null entries inject /en when the original request has no language prefix.
    if (newPath !== undefined && (newPath || !language)) {
      const redirect = `/${language || 'en'}${newPath || withoutLanguagePath}`
      cacheAggressively(res)
      return res.safeRedirect(redirectCode, redirect)
    }
  }
  if (
    versionSatisfiesRange(requestedVersion, `>${lastVersionWithoutArchivedRedirectsFile}`) &&
    !deprecatedWithFunctionalRedirects.includes(requestedVersion)
  ) {
    let redirectJson: Record<string, string>
    try {
      redirectJson = (await getRemoteJSON(getProxyPath('redirects.json', requestedVersion), {
        retry: retryConfiguration,
        // Cache misses use a 1-second time-to-first-byte limit; body transfer may take longer.
        timeout: { response: 1000 },
      })) as Record<string, string>
    } catch (err) {
      logger.error('Failed to fetch archived redirects.json', {
        version: requestedVersion,
        error: err instanceof Error ? err : new Error(String(err)),
      })
      throw err
    }

    if (redirectJson[req.path]) {
      res.set('x-robots-tag', 'noindex')
      cacheAggressively(res)
      return res.safeRedirect(redirectCode, redirectJson[req.path])
    }
  }
  // Short-circuit impossible archive paths to avoid unnecessary upstream requests.
  const earlyNotFound = getEarlyNotFoundReason(req.path, requestedVersion)
  if (earlyNotFound) {
    statsd.increment('middleware.archived_early_not_found', 1, [
      `reason:${earlyNotFound}`,
      `version:${requestedVersion}`,
    ])
    cacheAggressively(res)
    return res.status(404).type('text').send('Page not found')
  }

  // Archive repos after 2.17 require language prefixes; redirects handle unlanguaged paths.
  if (
    versionSatisfiesRange(requestedVersion, `>${lastVersionWithoutArchivedRedirectsFile}`) &&
    !pathLanguagePrefixed(req.path)
  ) {
    statsd.increment('middleware.archived_skip_no_language', 1, [`version:${requestedVersion}`])
    return next()
  }

  const doGet = () =>
    fetchWithRetry(
      getProxyPath(req.path, requestedVersion),
      {},
      {
        retries: retryConfiguration.limit,
        timeout: timeoutConfiguration.response,
        throwHttpErrors: false,
      },
    )

  const statsdTags = [`version:${requestedVersion}`]
  const startTime = Date.now()
  const r = await statsd.asyncTimer(adaptForTimer(doGet), 'archive_enterprise_proxy', [
    ...statsdTags,
    `path:${req.path}`,
  ])()
  const responseTime = Date.now() - startTime

  if (responseTime > WARN_RESPONSE_THRESHOLD) {
    logger.warn('Slow response from archived enterprise content', {
      version: requestedVersion,
      path: req.path,
      responseTime: `${responseTime}ms`,
      status: r.status,
      threshold: `${WARN_RESPONSE_THRESHOLD}ms`,
    })
  }

  // Missing archived pages are expected 404s; other upstream failures need error logs.
  if (r.status !== 200) {
    let upstreamBody: string | undefined
    try {
      upstreamBody = await readBodyWithTimeout(r, () => r.text(), timeoutConfiguration.response)
    } catch {
      // Ignore unreadable bodies so the original upstream status controls error handling.
    }
    const level = r.status === 404 ? 'warn' : 'error'
    logger[level]('Failed to fetch archived enterprise content', {
      version: requestedVersion,
      path: req.path,
      status: r.status,
      statusText: r.statusText,
      responseTime: `${responseTime}ms`,
      url: getProxyPath(req.path, requestedVersion),
      upstreamBody: upstreamBody?.slice(0, 500),
    })
  }

  // Log slow successful responses for monitoring trends.
  if (r.status === 200 && responseTime > SLOW_RESPONSE_THRESHOLD) {
    logger.info('Archived enterprise content response', {
      version: requestedVersion,
      responseTime: `${responseTime}ms`,
      status: r.status,
    })
  }

  if (r.status === 200) {
    const body = await readBodyWithTimeout(r, () => r.text(), timeoutConfiguration.response)
    const [, withoutLanguagePath] = splitByLanguage(req.path)
    const isDeveloperPage = withoutLanguagePath?.startsWith(
      `/enterprise/${requestedVersion}/developer`,
    )
    res.set('x-robots-tag', 'noindex')

    // Stubbed redirect files in releases before 2.13 return a static redirect target.
    const staticRedirect = body.match(patterns.staticRedirect)
    if (staticRedirect) {
      cacheAggressively(res)
      return res.safeRedirect(redirectCode, staticRedirect[1])
    }

    res.set('content-type', r.headers.get('content-type') || '')

    cacheAggressively(res)

    // Releases 3.2 through 3.9 contain old Azure Blob image URLs that need archive URLs.
    if (
      versionSatisfiesRange(requestedVersion, `>=${firstReleaseStoredInBlobStorage}`) &&
      versionSatisfiesRange(requestedVersion, `<=3.9`)
    ) {
      // Fastly sets x-host, and GLB removes x-forwarded-host.
      const host = req.get('x-host') || req.get('x-forwarded-host') || req.get('host')
      const modifiedBody = body
        .replaceAll(
          `${OLD_AZURE_BLOB_ENTERPRISE_DIR}/${requestedVersion}/assets/cb-`,
          `${ENTERPRISE_GH_PAGES_URL_PREFIX}${requestedVersion}/assets/cb-`,
        )
        .replaceAll(
          `${OLD_AZURE_BLOB_ENTERPRISE_DIR}/${requestedVersion}/`,
          `${req.protocol}://${host}/enterprise-server@${requestedVersion}/`,
        )

      return res.send(modifiedBody)
    }

    // Releases before 3.2 need github-images Azure Blob paths rewritten to archive root assets.
    if (versionSatisfiesRange(requestedVersion, `<${firstReleaseStoredInBlobStorage}`)) {
      let modifiedBody = body.replaceAll(
        `${OLD_GITHUB_IMAGES_ENTERPRISE_DIR}/${requestedVersion}`,
        `${ENTERPRISE_GH_PAGES_URL_PREFIX}${requestedVersion}`,
      )
      if (versionSatisfiesRange(requestedVersion, '<=2.18') && isDeveloperPage) {
        modifiedBody = modifiedBody.replaceAll(
          `${OLD_DEVELOPER_SITE_CONTAINER}/${requestedVersion}`,
          `${ENTERPRISE_GH_PAGES_URL_PREFIX}${requestedVersion}/developer`,
        )
        modifiedBody = modifiedBody.replaceAll(
          `="/enterprise/${requestedVersion}`,
          `="/enterprise/${requestedVersion}/developer`,
        )
        // The changelog remains on developer.github.com.
        modifiedBody = modifiedBody.replaceAll(
          'href="/changes',
          'href="https://developer.github.com/changes',
        )
      }

      modifiedBody = modifiedBody.replaceAll(
        /="(\.\.\/)*assets/g,
        `="${ENTERPRISE_GH_PAGES_URL_PREFIX}${requestedVersion}/assets`,
      )

      // The 2.16 landing page has hrefs missing the version segment.
      if (requestedVersion === '2.16' && req.path === '/en/enterprise/2.16') {
        modifiedBody = modifiedBody.replaceAll('ref="/en/enterprise', 'ref="/en/enterprise/2.16')
      }

      // The empty search results container blocks clicks on page links.
      modifiedBody = modifiedBody.replaceAll('<div id="search-results-container"></div>', '')

      return res.send(modifiedBody)
    }

    // Deep relative asset paths like "../../../../../../assets/" need archive repo prefixes.
    let modifiedBody = body.replaceAll(
      /="(\.\.\/)*assets/g,
      `="${ENTERPRISE_GH_PAGES_URL_PREFIX}${requestedVersion}/assets`,
    )

    // The 2.16 landing page has hrefs missing the version segment.
    if (requestedVersion === '2.16' && req.path === '/en/enterprise/2.16') {
      modifiedBody = modifiedBody.replaceAll('ref="/en/enterprise', 'ref="/en/enterprise/2.16')
    }

    // The empty search results container blocks clicks on page links.
    modifiedBody = modifiedBody.replaceAll('<div id="search-results-container"></div>', '')

    return res.send(modifiedBody)
  }

  // Releases 2.13 through 2.17 need supported-page frontmatter redirects after data loss.
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
      return res.safeRedirect(redirectCode, fallbackRedirect)
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

  // Developer pages keep the developer-site path layout from the archived release.
  if (isDeveloperPage) {
    const enterprisePath = `/enterprise/${requestedVersion}`
    const newReqPath = reqPath.replace(enterprisePath, '')
    return ENTERPRISE_GH_PAGES_URL_PREFIX + requestedVersion + newReqPath
  }

  // Releases 2.18 and later store redirects.json at the repo root and pages at <path>/index.html.
  if (versionSatisfiesRange(requestedVersion, `>${lastVersionWithoutArchivedRedirectsFile}`)) {
    const newReqPath = reqPath.includes('redirects.json') ? `/${reqPath}` : `${reqPath}/index.html`
    return ENTERPRISE_GH_PAGES_URL_PREFIX + requestedVersion + newReqPath
  }

  // Releases 2.13 through 2.17 lack redirects.json files.
  if (versionSatisfiesRange(requestedVersion, `>=2.13`)) {
    return `${ENTERPRISE_GH_PAGES_URL_PREFIX + requestedVersion + reqPath}/index.html`
  }

  // Releases 2.12 and earlier omit the /enterprise/<version> path prefix.
  const enterprisePath = `/enterprise/${requestedVersion}`
  const newReqPath = reqPath.replace(enterprisePath, '')
  return ENTERPRISE_GH_PAGES_URL_PREFIX + requestedVersion + newReqPath
}

// Caches fallback redirect lookups across requests.
const fallbackRedirectLookups = new Map()

// archived-frontmatter-valid-urls.json maps valid destinations to acceptable source URLs.
// getFallbackRedirect inverts that structure once, so lookups avoid scanning every destination.
// Example source /enterprise/2.13/other/old/thing redirects to destination
// /enterprise/2.13/foo/bar.
// The JSON omits language prefixes, so lookups strip the request language and add it back.
function getFallbackRedirect(req: ExtendedRequest) {
  if (!fallbackRedirectLookups.size) {
    for (const [destination, sources] of Object.entries(archivedFrontmatterValidURLS())) {
      for (const source of sources) {
        fallbackRedirectLookups.set(source, destination)
      }
    }
  }

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

// Matches language-like path prefixes, including the old Chinese cn code from archives through 3.2.
const archiveLanguagePrefixRegex = new RegExp(`^/(${Object.keys(allLanguages).join('|')}|cn)(/|$)`)

// Identifies request paths that cannot resolve on upstream GitHub Pages archive repos.
// Returning a reason lets callers log and skip the network request.
function getEarlyNotFoundReason(reqPath: string, version: string): string | null {
  // Double slashes never resolve, such as /about-2fa//index.html.
  if (reqPath.includes('//')) {
    return 'double-slash'
  }

  // Duplicated /developer/developer/ segments come from broken developer.github.com crawler URLs.
  if (reqPath.includes('/developer/developer/')) {
    return 'developer-developer'
  }

  // firstArchivedVersion records when each archive language became available.
  const langMatch = reqPath.match(archiveLanguagePrefixRegex)
  if (langMatch) {
    const lang = langMatch[1]

    // cn was the old Chinese language code; always 404 it as dead archive traffic.
    if (lang === 'cn') {
      return 'language-not-in-version'
    }
    const langDef = allLanguages[lang]
    if (langDef?.firstArchivedVersion) {
      // 404 languages before firstArchivedVersion, such as /zh/ on 3.0 because zh starts in 3.3.
      if (!versionSatisfiesRange(version, `>=${langDef.firstArchivedVersion}`)) {
        return 'language-not-in-version'
      }
    }
  }

  return null
}
