const patterns = require('../patterns')
const { latest } = require('../enterprise-server-releases')
const getOldPathsFromPermalink = require('../redirects/get-old-paths-from-permalink')
const getDocsPathFromDevPath = require('../redirects/get-docs-path-from-developer-path')
const DEVELOPER_ROUTES = require('../redirects/static/developer-docs-routes-for-supported-versions')
const ARCHIVED_ROUTES = require('../redirects/static/archived-routes-from-213-to-217')

// This function runs at server warmup and precompiles possible redirect routes.
// It outputs them in key-value pairs within a neat Javascript object: { oldPath: newPath }
module.exports = function precompileRedirects (pageList, pageMap) {
  const allRedirects = {}

  // 1. CURRENT PAGES PERMALINKS AND FRONTMATTER
  // create backwards-compatible old paths for page permalinks and frontmatter redirects
  pageList.forEach(page => Object.assign(allRedirects, page.buildRedirects()))

  // 2. REDIRECTS FOR ARCHIVED ROUTES FROM 2.13 TO 2.17
  // Starting with 2.18, we updated the archival script to create stubbed HTML redirect files,
  // so those files do the heavy lifting. The handling here is only for blanket redirects
  // (like /articles -> /github) between 2.13 and 2.17. This works by creating possible
  // old/incoming paths from the archived routes JSON. Frontmatter redirects were lost
  // for 2.13-2.17, but the archived middleware tries to find fallbacks.
  ARCHIVED_ROUTES.forEach(archivedRoute => {
    const languageFromPath = archivedRoute.match(patterns.getLanguageCode)[1]
    const versionFromPath = archivedRoute.match(patterns.getEnterpriseVersionNumber)[1]

    // get an array of possible old paths, e.g., /desktop/guides/ from /desktop/
    const possibleOldPaths = getOldPathsFromPermalink(archivedRoute, languageFromPath, versionFromPath)

    // for each old path, add a redirect to the current route
    possibleOldPaths.forEach(oldPath => {
      allRedirects[oldPath] = archivedRoute
    })
  })

  // 3. DEVELOPER ROUTES FOR CURRENTLY SUPPORTED VERSIONS
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
