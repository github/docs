const path = require('path')
const versionSatisfiesRange = require('../lib/version-satisfies-range')
const patterns = require('../lib/patterns')
const firstVersionDeprecatedOnNewSite = '2.13'
const got = require('got')

// This module handles requests for the CSS and JS assets for
// deprecated GitHub Enterprise versions by routing them to static content in
// https://github.com/github/help-docs-archived-enterprise-versions
//
// See also ./archived-enterprise-versions.js for non-CSS/JS paths

module.exports = async (req, res, next) => {
  if (!req.isArchivedVersion) return next()
  const requestedVersion = req.requestedVersion

  // Only match asset paths
  if (!patterns.assetPaths.test(req.path)) return next()

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
