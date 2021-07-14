const path = require('path')
const slash = require('slash')
const { firstVersionDeprecatedOnNewSite, lastVersionWithoutArchivedRedirectsFile } = require('../lib/enterprise-server-releases')
const patterns = require('../lib/patterns')
const versionSatisfiesRange = require('../lib/version-satisfies-range')
const isArchivedVersion = require('../lib/is-archived-version')
const got = require('got')
const readJsonFile = require('../lib/read-json-file')
const archivedRedirects = readJsonFile('./lib/redirects/static/archived-redirects-from-213-to-217.json')
const archivedFrontmatterFallbacks = readJsonFile('./lib/redirects/static/archived-frontmatter-fallbacks.json')

// This module handles requests for deprecated GitHub Enterprise versions
// by routing them to static content in help-docs-archived-enterprise-versions

module.exports = async function archivedEnterpriseVersions (req, res, next) {
  const { isArchived, requestedVersion } = isArchivedVersion(req)
  if (!isArchived) return next()

  // Skip asset paths
  if (patterns.assetPaths.test(req.path)) return next()

  // redirect language-prefixed URLs like /en/enterprise/2.10 -> /enterprise/2.10
  // (this only applies to versions <2.13)
  if (req.path.startsWith('/en/') && versionSatisfiesRange(requestedVersion, `<${firstVersionDeprecatedOnNewSite}`)) {
    return res.redirect(301, req.baseUrl + req.path.replace(/^\/en/, ''))
  }

  // find redirects for versions between 2.13 and 2.17
  // starting with 2.18, we updated the archival script to create a redirects.json file
  if (versionSatisfiesRange(requestedVersion, `>=${firstVersionDeprecatedOnNewSite}`) &&
    versionSatisfiesRange(requestedVersion, `<=${lastVersionWithoutArchivedRedirectsFile}`)) {
    const redirect = archivedRedirects[req.path]
    if (redirect && redirect !== req.path) {
      return res.redirect(301, redirect)
    }
  }

  if (versionSatisfiesRange(requestedVersion, `>${lastVersionWithoutArchivedRedirectsFile}`)) {
    try {
      const r = await got(getProxyPath('redirects.json', requestedVersion))
      const redirectJson = JSON.parse(r.body)

      // make redirects found via redirects.json redirect with a 301
      if (redirectJson[req.path]) {
        res.set('x-robots-tag', 'noindex')
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
      return res.redirect(301, staticRedirect[1])
    }

    res.set('content-type', r.headers['content-type'])
    return res.send(r.body)
  } catch (err) {
    for (const fallbackRedirect of getFallbackRedirects(req, requestedVersion) || []) {
      try {
        await got(getProxyPath(fallbackRedirect, requestedVersion))
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
function getProxyPath (reqPath, requestedVersion) {
  const proxyPath = versionSatisfiesRange(requestedVersion, `>=${firstVersionDeprecatedOnNewSite}`)
    ? slash(path.join('/', requestedVersion, reqPath))
    : reqPath.replace(/^\/enterprise/, '')

  return `https://github.github.com/help-docs-archived-enterprise-versions${proxyPath}`
}

// from 2.13 to 2.17, we lost access to frontmatter redirects during the archival process
// this workaround finds potentially relevant frontmatter redirects in currently supported pages
function getFallbackRedirects (req, requestedVersion) {
  if (versionSatisfiesRange(requestedVersion, `<${firstVersionDeprecatedOnNewSite}`)) return
  if (versionSatisfiesRange(requestedVersion, `>${lastVersionWithoutArchivedRedirectsFile}`)) return

  return archivedFrontmatterFallbacks.find(arrayOfFallbacks => arrayOfFallbacks.includes(req.path))
}
