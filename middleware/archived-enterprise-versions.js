const path = require('path')
const slash = require('slash')
const { latest, deprecated, firstVersionDeprecatedOnNewSite, lastVersionWithoutStubbedRedirectFiles } = require('../lib/enterprise-server-releases')
const patterns = require('../lib/patterns')
const versionSatisfiesRange = require('../lib/version-satisfies-range')
const got = require('got')
const findPage = require('../lib/find-page')

// This module handles requests for deprecated GitHub Enterprise versions
// by routing them to static content in
// https://github.com/github/help-docs-archived-enterprise-versions

module.exports = async (req, res, next) => {
  // Skip asset paths
  if (patterns.assetPaths.test(req.path)) return next()

  if (req.context.page) return next()

  // ignore paths that don't have an enterprise version number
  if (!patterns.getEnterpriseVersionNumber.test(req.path)) return next()

  // extract enterprise version from path, e.g. 2.16
  const requestedVersion = req.path.match(patterns.getEnterpriseVersionNumber)[1]

  // bail if the request version is not deprecated
  if (!deprecated.includes(requestedVersion)) return next()

  // redirect language-prefixed URLs like /en/enterprise/2.10 -> /enterprise/2.10
  // (this only applies to versions <2.13)
  if (req.path.startsWith('/en/') && versionSatisfiesRange(requestedVersion, `<${firstVersionDeprecatedOnNewSite}`)) {
    return res.redirect(301, req.baseUrl + req.path.replace(/^\/en/, ''))
  }

  // find redirects for versions between 2.13 and 2.17
  // starting with 2.18, we updated the archival script to create stubbed HTML redirect files
  if (versionSatisfiesRange(requestedVersion, `>=${firstVersionDeprecatedOnNewSite}`) &&
    versionSatisfiesRange(requestedVersion, `<=${lastVersionWithoutStubbedRedirectFiles}`)) {
    const redirect = req.context.redirects[req.path]
    if (redirect && redirect !== req.path) {
      return res.redirect(301, redirect)
    }
  }

  try {
    const r = await got(getProxyPath(req.path, requestedVersion))
    res.set('content-type', r.headers['content-type'])
    res.set('x-robots-tag', 'none')

    // make the stubbed redirect files added in >=2.18 return 301 instead of 200
    const staticRedirect = r.body.match(patterns.staticRedirect)
    if (staticRedirect) {
      res.status(301)
      res.set('location', staticRedirect[1])
    }

    res.send(r.body)
  } catch (err) {
    for (const fallbackRedirect of getFallbackRedirects(req, requestedVersion) || []) {
      try {
        await got(getProxyPath(fallbackRedirect, requestedVersion))
        return res.redirect(301, fallbackRedirect)
      } catch (err) { } // noop
    }
    next()
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
  if (versionSatisfiesRange(requestedVersion, `>${lastVersionWithoutStubbedRedirectFiles}`)) return

  const pathWithNewVersion = req.path.replace(requestedVersion, latest)

  // look for a page with the same path on a currently supported version
  const currentlySupportedPage = findPage(pathWithNewVersion, req.context.pages, req.context.redirects)
  if (!currentlySupportedPage) return

  // get an array of viable old paths
  return Object.keys(currentlySupportedPage.redirects)
    // filter for just languageless and versionless enterprise old paths
    // example: [
    //   '/enterprise/user/articles/viewing-contributions',
    //   '/enterprise/user/articles/viewing-contributions-on-your-profile-page',
    //   '/enterprise/user/articles/viewing-contributions-on-your-profile'
    // ]
    .filter(oldPath => oldPath.startsWith('/enterprise') && patterns.enterpriseNoVersion.test(oldPath))
    // add in the current language and version
    .map(oldPath => slash(path.join('/', req.context.currentLanguage, oldPath.replace('/enterprise/', `/enterprise/${requestedVersion}/`))))
    // ignore paths that match the requested path
    .filter(oldPath => oldPath !== req.path)
}
