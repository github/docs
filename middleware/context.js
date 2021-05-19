const languages = require('../lib/languages')
const enterpriseServerReleases = require('../lib/enterprise-server-releases')
const allVersions = require('../lib/all-versions')
const { productMap } = require('../lib/all-products')
const activeProducts = Object.values(productMap).filter(product => !product.wip && !product.hidden)
const {
  getVersionStringFromPath,
  getProductStringFromPath,
  getCategoryStringFromPath,
  getPathWithoutLanguage
} = require('../lib/path-utils')
const productNames = require('../lib/product-names')
const warmServer = process.env.FEATURE_NEW_SITETREE ? require('../lib/warm-server2') : require('../lib/warm-server')
const featureFlags = Object.keys(require('../feature-flags'))
const builtAssets = require('../lib/built-asset-urls')
const searchVersions = require('../lib/search/versions')
const nonEnterpriseDefaultVersion = require('../lib/non-enterprise-default-version')

// Supply all route handlers with a baseline `req.context` object
// Note that additional middleware in middleware/index.js adds to this context object
module.exports = async function contextualize (req, res, next) {
  // Ensure that we load some data only once on first request
  const { site, redirects, siteTree, pages: pageMap } = await warmServer()

  req.context = {}

  // make feature flag environment variables accessible in layouts
  req.context.process = { env: {} }
  featureFlags.forEach(featureFlagName => {
    req.context[featureFlagName] = process.env[featureFlagName]
  })

  // define each context property explicitly for code-search friendliness
  // e.g. searches for "req.context.page" will include results from this file
  req.context.currentLanguage = req.language
  req.context.currentVersion = getVersionStringFromPath(req.path)
  req.context.currentProduct = getProductStringFromPath(req.path)
  req.context.currentCategory = getCategoryStringFromPath(req.path)
  req.context.productMap = productMap
  req.context.activeProducts = activeProducts
  req.context.allVersions = allVersions
  req.context.currentPathWithoutLanguage = getPathWithoutLanguage(req.path)
  req.context.currentPath = req.path
  req.context.query = req.query
  req.context.languages = languages
  req.context.productNames = productNames
  req.context.enterpriseServerReleases = enterpriseServerReleases
  req.context.enterpriseServerVersions = Object.keys(allVersions).filter(version => version.startsWith('enterprise-server@'))
  req.context.redirects = redirects
  req.context.site = site[req.language].site
  req.context.siteTree = siteTree
  req.context.pages = pageMap

  // TODO we should create new data directories for these example files instead of using variable files
  if (productMap[req.context.currentProduct]) {
    req.context.productCodeExamples = req.context.site.data.variables[`${productMap[req.context.currentProduct].id}_code_examples`]
    req.context.productCommunityExamples = req.context.site.data.variables[`${productMap[req.context.currentProduct].id}_community_examples`]
    req.context.productUserExamples = req.context.site.data.variables[`${productMap[req.context.currentProduct].id}_user_examples`]
  }

  // JS + CSS asset paths
  req.context.builtAssets = builtAssets

  // Object exposing selected variables to client
  req.context.expose = JSON.stringify({
    // Languages and versions for search
    searchOptions: {
      languages: Object.keys(languages),
      versions: searchVersions,
      nonEnterpriseDefaultVersion
    },
    // `|| undefined` won't show at all for production
    airgap: Boolean(process.env.AIRGAP || req.cookies.AIRGAP) || undefined
  })
  if (process.env.AIRGAP || req.cookies.AIRGAP) req.context.AIRGAP = true

  return next()
}
