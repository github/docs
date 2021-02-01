const { latest } = require('../enterprise-server-releases')
const getDocsPathFromDevPath = require('../redirects/get-docs-path-from-developer-path')
const DEVELOPER_ROUTES = require('../redirects/static/developer-docs-routes-for-supported-versions')

// This function runs at server warmup and precompiles possible redirect routes.
// It outputs them in key-value pairs within a neat Javascript object: { oldPath: newPath }
module.exports = function precompileRedirects (pageList, pageMap) {
  const allRedirects = {}

  // 1. CURRENT PAGES PERMALINKS AND FRONTMATTER
  // create backwards-compatible old paths for page permalinks and frontmatter redirects
  pageList.forEach(page => Object.assign(allRedirects, page.buildRedirects()))

  // 2. DEVELOPER ROUTES FOR CURRENTLY SUPPORTED VERSIONS
  // From the list of developer docs routes, create new docs.github.com-style paths.
  // Note that the list only includes supported enterprise paths up to 2.21, which is
  // the last version that was available on developer.github.com before the migration.
  DEVELOPER_ROUTES.forEach(developerRoute => {
    const newPath = getDocsPathFromDevPath(developerRoute, allRedirects, pageMap)

    // add the redirect to the object
    allRedirects[developerRoute] = newPath

    // also add a variation with language code
    const developerRouteWithLanguage = `/en${developerRoute}`
    allRedirects[developerRouteWithLanguage] = newPath

    // although we only support developer Enterprise paths up to 2.21, we make
    // an exception to always redirect versionless paths to the latest version
    if (developerRoute.includes('/2.21/')) {
      const newPathOnLatestVersion = newPath.replace('@2.21/', `@${latest}/`)
      const developerRouteWithoutVersion = developerRoute.replace('/2.21/', '/')
      const developerRouteWithLanguageWithoutVersion = `/en${developerRouteWithoutVersion}`
      allRedirects[developerRouteWithoutVersion] = newPathOnLatestVersion
      allRedirects[developerRouteWithLanguageWithoutVersion] = newPathOnLatestVersion
    }
  })

  return allRedirects
}
