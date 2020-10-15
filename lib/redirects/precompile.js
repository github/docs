const path = require('path')
const slash = require('slash')
const patterns = require('../patterns')
const { latest } = require('../enterprise-server-releases')
const getOldPathsFromPermalink = require('../redirects/get-old-paths-from-permalink')
const getDocsPathFromDevPath = require('../redirects/get-docs-path-from-developer-path')
const DEVELOPER_ROUTES = require('../redirects/static/developer-docs-routes-for-supported-versions')
const ARCHIVED_ROUTES = require('../redirects/static/archived-routes-from-213-to-217')
const nonEnterpriseDefaultVersion = require('../non-enterprise-default-version')

// This function runs at server warmup and precompiles possible redirect routes.
// It outputs them in key-value pairs within a neat Javascript object: { oldPath: newPath }
module.exports = async function precompileRedirects (pages) {
  const allRedirects = {}

  // 1. CURRENT PAGES PERMALINKS AND FRONTMATTER
  // These redirects are created in lib/page.js via lib/redirects/permalinks.js
  pages.forEach(page => Object.assign(allRedirects, page.redirects))

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
    const newPath = getDocsPathFromDevPath(developerRoute, allRedirects, pages)

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

    // TODO: TEMPORARILY support explicit 2.22 redirects (created on page render by lib/rewrite-local-links)
    // we should eventually yank this block because 2.22 never existed on developer site
    // the better solution is to change `/v3` and `/v4` links in content to `/rest` and `/graphql`
    if (developerRoute.includes('/2.21/')) {
      const newPath222 = newPath.replace('@2.21/', '@2.22/')
      const developerRoute222 = developerRoute.replace('/2.21/', '/2.22/')
      const developerRouteWithLanguage222 = `/en${developerRoute222}`
      allRedirects[developerRoute222] = newPath222
      allRedirects[developerRouteWithLanguage222] = newPath222
    }

    // given a developer route like `/enterprise/2.19/v3/activity`,
    // add a veriation like `/enterprise/2.19/user/v3/activity`;
    // we need to do this because all links in content get rewritten
    // by lib/rewrite-local-links to include `/user`
    if (developerRoute.includes('/enterprise/')) {
      const developerRouteWithUserPath = developerRoute.replace(/\/(v[34])/, '/user/$1')
      const developerRouteWithUserPathAndLanguage = `/en${developerRouteWithUserPath}`
      allRedirects[developerRouteWithUserPath] = newPath
      allRedirects[developerRouteWithUserPathAndLanguage] = newPath
    }

    // given a developer route like `/v3/gists/comments`,
    // add a veriation like `/free-pro-team@latest/v3/gists/comments`;
    // again, we need to do this because all links in content get rewritten
    if (!developerRoute.startsWith('/enterprise/')) {
      const developerRouteWithVersion = slash(path.join(nonEnterpriseDefaultVersion, developerRoute))
      const developerRouteWithVersionAndLanguage = `/en/${developerRouteWithVersion}`
      allRedirects[developerRouteWithVersion] = newPath
      allRedirects[developerRouteWithVersionAndLanguage] = newPath
    }
  })

  return allRedirects
}
