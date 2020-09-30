const path = require('path')
const versionSatisfiesRange = require('../lib/version-satisfies-range')
const enterpriseServerReleases = require('../lib/enterprise-server-releases')
const patterns = require('../lib/patterns')
const firstVersionDeprecatedOnNewSite = '2.13'
const got = require('got')

// This module handles requests for the CSS and JS assets for
// deprecated GitHub Enterprise versions by routing them to static content in
// https://github.com/github/help-docs-archived-enterprise-versions
//
// See also ./archived-enterprise-versions.js for non-CSS/JS paths

module.exports = async (req, res, next) => {
  // Only match asset paths
  if (!patterns.assetPaths.test(req.path)) return next()

  // Get the referrer, which may contain an enterprise version
  const referrer = req.get('referrer')

  // ignore paths that don't have an enterprise version number
  if (!patterns.getEnterpriseVersionNumber.test(referrer)) return next()

  // extract enterprise version from path, e.g. 2.16
  const requestedVersion = referrer.match(patterns.getEnterpriseVersionNumber)[1]

  // bail if the request version is not deprecated
  if (!enterpriseServerReleases.deprecated.includes(requestedVersion)) return next()

  // get /dist/index.js and /dist/index.css paths from enterprisified paths
  const assetPath = req.path.replace(`/enterprise/${requestedVersion}`, '')

  // paths are slightly different depending on the enterprise version
  let proxyPath
  if (versionSatisfiesRange(requestedVersion, `>=${firstVersionDeprecatedOnNewSite}`)) {
    // routing for >=2.13
    proxyPath = path.join('/', requestedVersion, assetPath)
  } else if (versionSatisfiesRange(requestedVersion, `<${firstVersionDeprecatedOnNewSite}`)) {
    // routing for <2.13
    proxyPath = path.join('/', requestedVersion, 'assets', assetPath)
  }

  try {
    const r = await got(`https://github.github.com/help-docs-archived-enterprise-versions${proxyPath}`)
    res.set('accept-ranges', 'bytes')
    res.set('content-type', r.headers['content-type'])
    res.set('content-length', r.headers['content-length'])
    res.set('x-is-archived', 'true')
    res.set('x-robots-tag', 'none')
    res.send(r.body)
  } catch (err) {
    next()
  }
}
