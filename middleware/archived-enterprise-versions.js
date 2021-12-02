import fs from 'fs'
import path from 'path'
import slash from 'slash'
import {
  firstVersionDeprecatedOnNewSite,
  lastVersionWithoutArchivedRedirectsFile,
} from '../lib/enterprise-server-releases.js'
import patterns from '../lib/patterns.js'
import versionSatisfiesRange from '../lib/version-satisfies-range.js'
import isArchivedVersion from '../lib/is-archived-version.js'
import got from 'got'
import { readCompressedJsonFileFallback } from '../lib/read-json-file.js'
import { cacheControlFactory } from './cache-control.js'

function readJsonFileLazily(xpath) {
  const cache = new Map()
  // This will throw if the file isn't accessible at all, e.g. ENOENT
  // But, the file might have been replaced by one called `SAMENAME.json.br`
  // because in staging, we ship these files compressed to make the
  // deployment faster. So, in our file-presence check, we need to
  // account for that.
  try {
    fs.accessSync(xpath)
  } catch (err) {
    if (err.code === 'ENOENT') {
      try {
        fs.accessSync(xpath + '.br')
      } catch (err) {
        if (err.code === 'ENOENT') {
          throw new Error(`Neither ${xpath} nor ${xpath}.br is accessible`)
        }
        throw err
      }
    } else {
      throw err
    }
  }
  return () => {
    if (!cache.has(xpath)) cache.set(xpath, readCompressedJsonFileFallback(xpath))
    return cache.get(xpath)
  }
}

// These files are huge so lazy-load them. But note that the
// `readJsonFileLazily()` function will, at import-time, check that
// the path does exist.
const archivedRedirects = readJsonFileLazily(
  './lib/redirects/static/archived-redirects-from-213-to-217.json'
)
const archivedFrontmatterFallbacks = readJsonFileLazily(
  './lib/redirects/static/archived-frontmatter-fallbacks.json'
)

const cacheControl = cacheControlFactory(60 * 60 * 24 * 365)

async function getRemoteJSON(url) {
  if (_getRemoteJSONCache.has(url)) {
    return _getRemoteJSONCache.get(url)
  }
  const body = await got(url).json()
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

  // redirect language-prefixed URLs like /en/enterprise/2.10 -> /enterprise/2.10
  // (this only applies to versions <2.13)
  if (
    req.path.startsWith('/en/') &&
    versionSatisfiesRange(requestedVersion, `<${firstVersionDeprecatedOnNewSite}`)
  ) {
    cacheControl(res)
    return res.redirect(301, req.baseUrl + req.path.replace(/^\/en/, ''))
  }

  // find redirects for versions between 2.13 and 2.17
  // starting with 2.18, we updated the archival script to create a redirects.json file
  if (
    versionSatisfiesRange(requestedVersion, `>=${firstVersionDeprecatedOnNewSite}`) &&
    versionSatisfiesRange(requestedVersion, `<=${lastVersionWithoutArchivedRedirectsFile}`)
  ) {
    // `archivedRedirects` is a callable because it's a lazy function
    // and memoized so calling it is cheap.
    const redirect = archivedRedirects()[req.path]
    if (redirect && redirect !== req.path) {
      cacheControl(res)
      return res.redirect(301, redirect)
    }
  }

  if (versionSatisfiesRange(requestedVersion, `>${lastVersionWithoutArchivedRedirectsFile}`)) {
    try {
      const redirectJson = await getRemoteJSON(getProxyPath('redirects.json', requestedVersion))

      // make redirects found via redirects.json redirect with a 301
      if (redirectJson[req.path]) {
        res.set('x-robots-tag', 'noindex')
        cacheControl(res)
        return res.redirect(301, redirectJson[req.path])
      }
    } catch (err) {
      // noop
    }
  }

  try {
    const r = await got(getProxyPath(req.path, requestedVersion))
    res.set('x-robots-tag', 'noindex')

    // make stubbed redirect files (which exist in versions <2.13) redirect with a 301
    const staticRedirect = r.body.match(patterns.staticRedirect)
    if (staticRedirect) {
      cacheControl(res)
      return res.redirect(301, staticRedirect[1])
    }

    res.set('content-type', r.headers['content-type'])
    return res.send(r.body)
  } catch (err) {
    for (const fallbackRedirect of getFallbackRedirects(req, requestedVersion) || []) {
      try {
        await got(getProxyPath(fallbackRedirect, requestedVersion))
        cacheControl(res)
        return res.redirect(301, fallbackRedirect)
      } catch (err) {
        // noop
      }
    }

    return next()
  }
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

// from 2.13 to 2.17, we lost access to frontmatter redirects during the archival process
// this workaround finds potentially relevant frontmatter redirects in currently supported pages
function getFallbackRedirects(req, requestedVersion) {
  if (versionSatisfiesRange(requestedVersion, `<${firstVersionDeprecatedOnNewSite}`)) return
  if (versionSatisfiesRange(requestedVersion, `>${lastVersionWithoutArchivedRedirectsFile}`)) return

  // `archivedFrontmatterFallbacks` is a callable because it's a lazy function
  // and memoized so calling it is cheap.
  return archivedFrontmatterFallbacks().find((arrayOfFallbacks) =>
    arrayOfFallbacks.includes(req.path)
  )
}
