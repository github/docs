import languages from '../lib/languages.js'
import enterpriseServerReleases from '../lib/enterprise-server-releases.js'
import { allVersions } from '../lib/all-versions.js'
import { productMap } from '../lib/all-products.js'
import pathUtils from '../lib/path-utils.js'
import productNames from '../lib/product-names.js'
import warmServer from '../lib/warm-server.js'
import searchVersions from '../lib/search/versions.js'
import nonEnterpriseDefaultVersion from '../lib/non-enterprise-default-version.js'
import { getDataByLanguage, getUIDataMerged } from '../lib/get-data.js'
const activeProducts = Object.values(productMap).filter(
  (product) => !product.wip && !product.hidden
)
const {
  getVersionStringFromPath,
  getProductStringFromPath,
  getCategoryStringFromPath,
  getPathWithoutLanguage,
} = pathUtils

// This doesn't change just because the request changes, so compute it once.
const enterpriseServerVersions = Object.keys(allVersions).filter((version) =>
  version.startsWith('enterprise-server@')
)

// Supply all route handlers with a baseline `req.context` object
// Note that additional middleware in middleware/index.js adds to this context object
export default async function contextualize(req, res, next) {
  // Ensure that we load some data only once on first request
  const { redirects, siteTree, pages: pageMap } = await warmServer()

  req.context = {}
  req.context.process = { env: {} }

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
  req.context.enterpriseServerVersions = enterpriseServerVersions
  req.context.redirects = redirects
  req.context.site = {
    data: {
      ui: getUIDataMerged(req.language),
    },
  }
  req.context.getDottedData = (dottedPath) => getDataByLanguage(dottedPath, req.language)
  req.context.siteTree = siteTree
  req.context.pages = pageMap
  req.context.searchVersions = searchVersions
  req.context.nonEnterpriseDefaultVersion = nonEnterpriseDefaultVersion

  return next()
}
