const languages = require('../lib/languages')
const enterpriseServerReleases = require('../lib/enterprise-server-releases')
const allVersions = require('../lib/all-versions')
const allProducts = require('../lib/all-products')
const activeProducts = Object.values(allProducts).filter(product => !product.wip)
const { getVersionStringFromPath, getProductStringFromPath, getPathWithoutLanguage } = require('../lib/path-utils')
const productNames = require('../lib/product-names')
const patterns = require('../lib/patterns')
const warmServer = require('../lib/warm-server')
const featureFlags = Object.keys(require('../feature-flags'))

// Supply all route handlers with a baseline `req.context` object
// Note that additional middleware in middleware/index.js adds to this context object
module.exports = async function contextualize (req, res, next) {
  // Ensure that we load some data only once on first request
  const { site, redirects, pages, siteTree, earlyAccessPaths } = await warmServer()
  req.context = {}

  // make feature flag environment variables accessible in layouts
  req.context.process = { env: {} }
  featureFlags.forEach(featureFlagName => {
    req.context.process.env[featureFlagName] = process.env[featureFlagName]
  })

  // define each context property explicitly for code-search friendliness
  // e.g. searches for "req.context.page" will include results from this file
  req.context.currentLanguage = req.language
  if (process.env.FEATURE_NEW_VERSIONS) {
    req.context.currentVersion = getVersionStringFromPath(req.path)
    req.context.currentProduct = getProductStringFromPath(req.path)
    req.context.allProducts = allProducts
    req.context.activeProducts = activeProducts
    req.context.allVersions = allVersions
    req.context.currentPathWithoutLanguage = getPathWithoutLanguage(req.path)
  }
  if (!process.env.FEATURE_NEW_VERSIONS) {
    req.context.currentVersion = getVersion(req.path)
    req.context.currentPathWithoutLanguage = getPathWithoutLanguage(req.path).replace(patterns.getEnterpriseVersionlessPath, '$1/')
  }
  req.context.currentPath = req.path
  req.context.query = req.query
  req.context.languages = languages
  req.context.earlyAccessPaths = earlyAccessPaths
  req.context.enterpriseVersions = enterpriseServerReleases
  req.context.productNames = productNames
  if (process.env.FEATURE_NEW_VERSIONS) {
    req.context.enterpriseServerReleases = enterpriseServerReleases
  }
  if (!process.env.FEATURE_NEW_VERSIONS) {
    req.context.enterpriseVersions = enterpriseServerReleases
    req.context.productNames = productNames
  }
  req.context.redirects = redirects
  req.context.site = site[req.language].site
  req.context.siteTree = siteTree
  req.context.pages = pages

<<<<<<< HEAD
  // To securely accept data from end users,
  // we need to validate that they were actually on a docs page first.
  // We'll put this token in the <head> and call on it when we send user data
  // to the docs server, so we know the request came from someone on the page.
  req.context.csrfToken = req.csrfToken()
  req.context.fastlyEnabled = process.env.NODE_ENV === 'production' &&
    req.hostname === 'docs.github.com'

=======
>>>>>>> origin/main
  return next()
}

// infer the version from the request path
// /en/articles/foo                          -> dotcom
// /en/enterprise/2.14/user/articles/foo     -> 2.14
// /en/enterprise/user/articles/foo          -> latest GHES version
function getVersion (requestPath) {
  const versionNumber = requestPath.match(patterns.getEnterpriseVersionNumber)

  return patterns.enterprise.test(requestPath)
    ? versionNumber ? versionNumber[1] : enterpriseServerReleases.latest
    : 'dotcom'
}
