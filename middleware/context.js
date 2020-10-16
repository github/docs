const languages = require('../lib/languages')
const enterpriseServerReleases = require('../lib/enterprise-server-releases')
const allVersions = require('../lib/all-versions')
const allProducts = require('../lib/all-products')
const activeProducts = Object.values(allProducts).filter(product => !product.wip)
const { getVersionStringFromPath, getProductStringFromPath, getPathWithoutLanguage } = require('../lib/path-utils')
const productNames = require('../lib/product-names')
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
  req.context.currentVersion = getVersionStringFromPath(req.path)
  req.context.currentProduct = getProductStringFromPath(req.path)
  req.context.allProducts = allProducts
  req.context.activeProducts = activeProducts
  req.context.allVersions = allVersions
  req.context.currentPathWithoutLanguage = getPathWithoutLanguage(req.path)
  req.context.currentPath = req.path
  req.context.query = req.query
  req.context.languages = languages
  req.context.earlyAccessPaths = earlyAccessPaths
  req.context.productNames = productNames
  req.context.enterpriseServerReleases = enterpriseServerReleases
  req.context.enterpriseServerVersions = Object.keys(allVersions).filter(version => version.startsWith('enterprise-server@'))
  req.context.redirects = redirects
  req.context.site = site[req.language].site
  req.context.siteTree = siteTree
  req.context.pages = pages

  return next()
}
