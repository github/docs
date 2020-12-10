const path = require('path')
const { supported, latest } = require('./enterprise-server-releases')
const latestNewVersion = `enterprise-server@${latest}`
const patterns = require('./patterns')
const nonEnterpriseDefaultVersion = require('./non-enterprise-default-version')
const oldVersions = ['dotcom'].concat(supported)
const newVersions = Object.keys(require('./all-versions'))

// Utility functions for converting between old version paths and new version paths.
// See lib/path-utils.js for utility functions based on new paths.
// Examples:
// OLD /github/category/article to NEW /free-pro-team@latest/github/category/article
// OLD /enterprise/2.21/user/github/category/article to NEW /enterprise-server@2.21/github/category/article
// OLD /enterprise/user/github/category/article to NEW /enterprise-server@<latest>/github/category/article

// Given a new version like enterprise-server@2.21,
// return an old version like 2.21.
// Fall back to latest GHES version if one can't be found,
// for example, if the new version is private-instances@latest.
function getOldVersionFromNewVersion (newVersion) {
  return newVersion === nonEnterpriseDefaultVersion
    ? 'dotcom'
    : oldVersions.find(oldVersion => newVersion.includes(oldVersion)) || latest
}

// Given an old version like 2.21,
// return a new version like enterprise-server@2.21.
// Fall back to latest GHES version if one can't be found.
function getNewVersionFromOldVersion (oldVersion) {
  return oldVersion === 'dotcom'
    ? nonEnterpriseDefaultVersion
    : newVersions.find(newVersion => newVersion.includes(oldVersion)) || latestNewVersion
}

// Given an old path like /enterprise/2.21/user/github/category/article,
// return an old version like 2.21.
function getOldVersionFromOldPath (oldPath, languageCode) {
  // We should never be calling this function on a path that starts with a new version,
  // so we can assume the path either uses the old /enterprise format or it's dotcom.
  if (!patterns.enterprise.test(oldPath)) return 'dotcom'

  const ghesNumber = oldPath.match(patterns.getEnterpriseVersionNumber)
  return ghesNumber ? ghesNumber[1] : latest
}

// Given an old path like /en/enterprise/2.21/user/github/category/article,
// return a new path like /en/enterprise-server@2.21/github/category/article.
function getNewVersionedPath (oldPath, languageCode = '') {
  // It's possible a new version has been injected into an old path
  // via syntax like: /en/enterprise/{{ currentVersion }}/admin/category/article
  // which could resolve to /en/enterprise/private-instances@latest/admin/category/article,
  // in which case the new version is the `private-instances@latest` segment.
  // Get the second or third segment depending on whether there is a lang code.
  const pathParts = oldPath.split('/')
  const possibleVersion = languageCode ? pathParts[3] : pathParts[2]
  let newVersion = newVersions.includes(possibleVersion) ? possibleVersion : ''

  // If no new version was found, assume path contains an old version, like 2.21
  if (!newVersion) {
    const oldVersion = getOldVersionFromOldPath(oldPath, languageCode)
    newVersion = getNewVersionFromOldVersion(oldVersion)
  }

  // Remove /<lang>?/enterprise?/<version>?/user? if present.
  // This leaves only the part of the string that starts with the product.
  // Example: /github/category/article
  const restOfString = oldPath.replace(patterns.oldEnterprisePath, '')

  // Add the language and new version to the product part of the string
  return path.join('/', languageCode, newVersion, restOfString)
}

module.exports = {
  oldVersions,
  getOldVersionFromOldPath,
  getOldVersionFromNewVersion,
  getNewVersionFromOldVersion,
  getNewVersionedPath
}
