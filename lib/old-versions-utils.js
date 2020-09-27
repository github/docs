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
// Fall back to latest version if one can't be found.
function getOldVersionFromNewVersion (newVersion) {
  return newVersion === nonEnterpriseDefaultVersion
    ? 'dotcom'
    : oldVersions.find(oldVersion => newVersion.includes(oldVersion)) || latest
}

// Given an old version like 2.21,
// return a new version like enterprise-server@2.21.
// Fall back to latest version if one can't be found.
function getNewVersionFromOldVersion (oldVersion) {
  return oldVersion === 'dotcom'
    ? nonEnterpriseDefaultVersion
    : newVersions.find(newVersion => newVersion.includes(oldVersion)) || latestNewVersion
}

// Given an old path like /enterprise/2.21/user/github/category/article,
// return an old version like 2.21.
function getOldVersionFromOldPath (oldPath) {
  if (!patterns.enterprise.test(oldPath)) return 'dotcom'
  const ghesNumber = oldPath.match(patterns.getEnterpriseVersionNumber)
  return ghesNumber ? ghesNumber[1] : latest
}

// Given an old path like /en/enterprise/2.21/user/github/category/article,
// return a new path like /en/enterprise-server@2.21/github/category/article.
function getNewVersionedPath (oldPath, languageCode = '') {
  const oldVersion = getOldVersionFromOldPath(oldPath)
  const newVersion = getNewVersionFromOldVersion(oldVersion)

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
