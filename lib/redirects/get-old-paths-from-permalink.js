const { latest, lastReleaseWithLegacyFormat } = require('../enterprise-server-releases')
const { getPathWithoutLanguage, getPathWithLanguage } = require('../path-utils')
const patterns = require('../patterns')
const versionSatisfiesRange = require('../version-satisfies-range')
const currentlySupportedVersions = Object.keys(require('../all-versions'))
const nonEnterpriseDefaultVersion = require('../non-enterprise-default-version')

// This function takes a current path, applies what we know about historically
// supported paths, and returns an array of ALL possible associated old
// paths that users might try to hit.
module.exports = function getOldPathsFromPath (currentPath, languageCode, currentVersion) {
  const oldPaths = new Set()

  // ------ BEGIN LEGACY VERSION FORMAT REPLACEMENTS ------//
  // These remain relevant to handle legacy-formatted frontmatter redirects
  // and archived versions paths.

  // create old path /insights from current path /enterprise/version/insights
  oldPaths.add(currentPath
    .replace(`/${languageCode}/enterprise/${latest}/user/insights`, '/insights'))

  // create old path /desktop/guides from current path /desktop
  if (!currentPath.includes('/guides')) {
    oldPaths.add(currentPath
      .replace('/desktop', '/desktop/guides'))
  }

  // create old path /admin/guides from current path /admin
  if (!currentPath.includes('/guides')) {
    oldPaths.add(currentPath
      .replace('/admin', '/admin/guides'))
  }

  // create old path /user from current path /user/github on 2.16+ only
  if (currentlySupportedVersions.includes(currentVersion) || versionSatisfiesRange(currentVersion, '>2.15')) {
    oldPaths.add(currentPath
      .replace('/user/github', '/user'))
  }

  // create old path /enterprise from current path /enterprise/latest
  oldPaths.add(currentPath
    .replace(`/enterprise/${latest}`, '/enterprise'))

  // create old path /enterprise/foo from current path /enterprise/user/foo
  // this supports old developer paths like /enteprise/webhooks with no /user in them
  if (currentPath.includes('/enterprise/')) {
    oldPaths.add(currentPath
      .replace('/user/', '/'))
  }

  // create old path /enterprise/foo from current path /enterprise/latest/user/foo
  oldPaths.add(currentPath
    .replace(`/enterprise/${latest}/user/`, '/enterprise/'))

  // ------ END LEGACY VERSION FORMAT REPLACEMENTS ------//

  // ------ BEGIN MODERN VERSION FORMAT REPLACEMENTS ------//
  if (currentlySupportedVersions.includes(currentVersion) || versionSatisfiesRange(currentVersion, `>${lastReleaseWithLegacyFormat}`)) {
    oldPaths.forEach(oldPath => {
      // create old path /github from new path /free-pro-team@latest/github
      oldPaths.add(oldPath
        .replace(`/${nonEnterpriseDefaultVersion}`, ''))

      // create old path /free-pro-team/github from new path /free-pro-team@latest/github
      oldPaths.add(oldPath
        .replace('@latest', ''))

      // create old path /enterprise/<version> from new path /enterprise-server@<version>
      oldPaths.add(oldPath
        .replace(/\/enterprise-server@(\d)/, '/enterprise/$1'))

      // create old path /enterprise/<version>/user from new path /enterprise-server@<version>/github
      oldPaths.add(oldPath
        .replace(/\/enterprise-server@(\d.+?)\/github/, '/enterprise/$1/user'))

      // create old path /insights from new path /enterprise-server@<latest>/insights
      oldPaths.add(oldPath
        .replace(`/enterprise-server@${latest}/insights`, '/insights'))

      // create old path /admin from new path /enterprise-server@<latest>/admin
      oldPaths.add(oldPath
        .replace(`/enterprise-server@${latest}/admin`, '/admin'))

      // create old path /enterprise from new path /enterprise-server@<latest>
      oldPaths.add(oldPath
        .replace(`/enterprise-server@${latest}`, '/enterprise'))

      // create old path /enterprise-server from new path /enterprise-server@<latest>
      oldPaths.add(oldPath
        .replace(`/enterprise-server@${latest}`, '/enterprise-server'))

      // create old path /enterprise-server@latest from new path /enterprise-server@<latest>
      oldPaths.add(oldPath
        .replace(`/enterprise-server@${latest}`, '/enterprise-server@latest'))

      if (!patterns.adminProduct.test(oldPath)) {
        // create old path /enterprise/<version>/user/foo from new path /enterprise-server@<version>/foo
        oldPaths.add(currentPath
          .replace(/\/enterprise-server@(\d.+?)\//, '/enterprise/$1/user/'))

        // create old path /enterprise/user/foo from new path /enterprise-server@<latest>/foo
        oldPaths.add(currentPath
          .replace(`/enterprise-server@${latest}/`, '/enterprise/user/'))
      }
    })
  }
  // ------ END MODERN VERSION FORMAT REPLACEMENTS ------//

  // For each old path added to the set above, do the following...

  // add language code
  oldPaths.forEach(oldPath => oldPaths.add(getPathWithLanguage(oldPath, languageCode)))

  // for English only, remove language code
  if (languageCode === 'en') {
    oldPaths.forEach(oldPath => oldPaths.add(getPathWithoutLanguage(oldPath)))
  }

  // create /enterprise from /enterprise/latest
  oldPaths.forEach(oldPath => oldPaths.add(oldPath.replace(`/enterprise/${latest}`, '/enterprise')))

  return Array.from(oldPaths)
    // exclude any empty old paths that may have been derived
    .filter(oldPath => oldPath !== '' && oldPath !== '/')
}
