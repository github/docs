import languages from '../lib/languages.js'
import enterpriseServerReleases from '../lib/enterprise-server-releases.js'
import { allVersions } from '../lib/all-versions.js'
import { productMap } from '../lib/all-products.js'
import pathUtils from '../lib/path-utils.js'
import productNames from '../lib/product-names.js'
import warmServer from '../lib/warm-server.js'
import readJsonFile from '../lib/read-json-file.js'
import searchVersions from '../lib/search/versions.js'
import nonEnterpriseDefaultVersion from '../lib/non-enterprise-default-version.js'
const activeProducts = Object.values(productMap).filter(
  (product) => !product.wip && !product.hidden
)
const {
  getVersionStringFromPath,
  getProductStringFromPath,
  getCategoryStringFromPath,
  getPathWithoutLanguage,
} = pathUtils
const featureFlags = Object.keys(readJsonFile('./feature-flags.json'))

// Supply all route handlers with a baseline `req.context` object
// Note that additional middleware in middleware/index.js adds to this context object
export default async function contextualize(req, res, next) {
  // Ensure that we load some data only once on first request
  const { site, redirects, siteTree, pages: pageMap } = await warmServer()

  req.context = {}

  // make feature flag environment variables accessible in layouts
  req.context.process = { env: {} }
  featureFlags.forEach((featureFlagName) => {
    req.context[featureFlagName] = process.env[featureFlagName]
  })

  // define each context property explicitly for code-search friendliness
  // e.g. searches for "req.context.page" will include results from this file
  req.context.currentLanguage = req.language
  req.context.userLanguage = req.userLanguage
  req.context.currentVersion = getVersionStringFromPath(req.pagePath)
  req.context.currentProduct = getProductStringFromPath(req.pagePath)
  req.context.currentCategory = getCategoryStringFromPath(req.pagePath)
  req.context.productMap = productMap
  req.context.activeProducts = activeProducts
  req.context.allVersions = allVersions
  req.context.currentPathWithoutLanguage = getPathWithoutLanguage(req.pagePath)
  req.context.currentPath = req.pagePath
  req.context.query = req.query
  req.context.languages = languages
  req.context.productNames = productNames
  req.context.enterpriseServerReleases = enterpriseServerReleases
  req.context.enterpriseServerVersions = Object.keys(allVersions).filter((version) =>
    version.startsWith('enterprise-server@')
  )
  req.context.redirects = redirects
  req.context.site = site[req.language].site
  req.context.siteTree = siteTree
  req.context.pages = pageMap

  // Object exposing selected variables to client
  req.context.expose = JSON.stringify({
    // Languages and versions for search
    searchOptions: {
      languages: Object.keys(languages),
      versions: searchVersions,
      nonEnterpriseDefaultVersion,
    },
    // `|| undefined` won't show at all for production
    airgap: Boolean(process.env.AIRGAP || req.cookies.AIRGAP) || undefined,
  })
  if (process.env.AIRGAP || req.cookies.AIRGAP) req.context.AIRGAP = true
  req.context.searchVersions = searchVersions
  req.context.nonEnterpriseDefaultVersion = nonEnterpriseDefaultVersion

  return next()
}
