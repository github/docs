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

    // TODO until we update all the old /v3 and /v4 links, we need to support redirects
    // from the old /enterprise/<number>/v3 format to the new /enterprise-server@<number/rest format
    // AS WELL AS /enterprise-server@<number/v3 to /enterprise-server@<number/rest.
    // This is because the new format gets created dynamically even when the links point to /v3 or /v4.
    // EXAMPLES:
    // /en/enterprise/2.20/v3/pulls/comments -> /en/enterprise-server@2.20/rest/reference/pulls#comments
    // /en/enterprise-server@2.20/v3/pulls/comments -> /en/enterprise-server@2.20/rest/reference/pulls#comments
    // NOTE: after we update all the /v3 and /v4 links, we can yank the following block
    if (developerRoute.includes('/enterprise/')) {
      const developerRouteWithNewFormat = developerRoute.replace(/\/enterprise\/(\d.\d\d)\//, '/enterprise-server@$1/')
      const developerRouteWithNewFormatWithLanguage = `/en${developerRouteWithNewFormat}`
      allRedirects[developerRouteWithNewFormat] = newPath
      allRedirects[developerRouteWithNewFormatWithLanguage] = newPath
    }
    // TODO ENDYANK

    // although we only support developer Enterprise paths up to 2.21, we make
    // an exception to always redirect versionless paths to the latest version
    if (developerRoute.includes('/2.21/')) {
      const newPathOnLatestVersion = newPath.replace('@2.21/', `@${latest}/`)
      const developerRouteWithoutVersion = developerRoute.replace('/2.21/', '/')
      const developerRouteWithLanguageWithoutVersion = `/en${developerRouteWithoutVersion}`
      allRedirects[developerRouteWithoutVersion] = newPathOnLatestVersion
      allRedirects[developerRouteWithLanguageWithoutVersion] = newPathOnLatestVersion
      // TODO after we update all the /v3 and /v4 links, we can yank the following
      const developerRouteWithoutVersionWithNewFormat = developerRouteWithoutVersion
        .replace('/enterprise/', 'enterprise-server')
      const developerRouteWithoutVersionWithNewFormatWithLanguage = `/en${developerRouteWithoutVersionWithNewFormat}`
      allRedirects[developerRouteWithoutVersionWithNewFormat] = newPathOnLatestVersion
      allRedirects[developerRouteWithoutVersionWithNewFormatWithLanguage] = newPathOnLatestVersion
      // TODO ENDYANK
    }

    // TODO: TEMPORARILY support explicit 2.22 redirects (created on page render by lib/rewrite-local-links)
    // after we update `/v3` and `/v4` links everywhere to `/rest` and `/graphql`, we can
    // yank this entire block because 2.22 never existed on developer site
    if (developerRoute.includes('/2.21/')) {
      const newPath222 = newPath.replace('@2.21/', '@2.22/')
      const developerRoute222 = developerRoute.replace('/2.21/', '/2.22/')
      const developerRouteWithLanguage222 = `/en${developerRoute222}`
      allRedirects[developerRoute222] = newPath222
      allRedirects[developerRouteWithLanguage222] = newPath222

      const developerRouteWithNewFormat222 = developerRoute222
        .replace('/enterprise/2.22/', '/enterprise-server@2.22/')
      const developerRouteWithNewFormatWithLanguage222 = `/en${developerRouteWithNewFormat222}`
      allRedirects[developerRouteWithNewFormat222] = newPath222
      allRedirects[developerRouteWithNewFormatWithLanguage222] = newPath222
    }
    // TODO ENDYANK

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
