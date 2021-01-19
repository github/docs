const { latest } = require('../enterprise-server-releases')
const { getPathWithoutLanguage, getPathWithLanguage, getVersionStringFromPath } = require('../path-utils')
const currentlySupportedVersions = Object.keys(require('../all-versions'))
const nonEnterpriseDefaultVersion = require('../non-enterprise-default-version')

// This function takes a current path, applies what we know about historically
// supported paths, and returns an array of ALL possible associated old
// paths that users might try to hit.
module.exports = function getOldPathsFromPath (currentPath, languageCode) {
  const oldPaths = new Set()

  const versionFromPath = getVersionStringFromPath(currentPath)

  // The following only applies to Dotcom paths.
  // Create old path /free-pro-team@latest/github from new path /github (or from a frontmatter `redirect_from` path like /articles)
  if (versionFromPath === 'homepage' || !currentlySupportedVersions.includes(versionFromPath) || (versionFromPath === nonEnterpriseDefaultVersion && !currentPath.includes(nonEnterpriseDefaultVersion))) {
    oldPaths.add(currentPath
      .replace(`/${languageCode}`, `/${languageCode}/${nonEnterpriseDefaultVersion}`))
  }

  oldPaths.add(currentPath
    .replace(/\/enterprise-server@(\d)/, '/enterprise/$1'))

  // create old path /enterprise/<version>/user from new path /enterprise-server@<version>/github
  oldPaths.add(currentPath
    .replace(/\/enterprise-server@(\d.+?)\/github/, '/enterprise/$1/user'))

  // create old path /insights from new path /enterprise-server@<latest>/insights
  oldPaths.add(currentPath
    .replace(`/enterprise-server@${latest}/insights`, '/insights'))

  // create old path /admin from new path /enterprise-server@<latest>/admin
  oldPaths.add(currentPath
    .replace(`/enterprise-server@${latest}/admin`, '/admin'))

  // create old path /enterprise from new path /enterprise-server@<latest>
  oldPaths.add(currentPath
    .replace(`/enterprise-server@${latest}`, '/enterprise'))

  // For each old path added to the set above, do the following...
  oldPaths.forEach(oldPath => {
    // for English only, remove language code
    if (languageCode === 'en') {
      oldPaths.add(getPathWithoutLanguage(oldPath))
    }

    // add language code
    oldPaths.add(getPathWithLanguage(oldPath, languageCode))
  })

  // exclude any empty old paths that may have been derived
  oldPaths.delete('')
  oldPaths.delete('/')

  return oldPaths
}
