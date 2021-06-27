const slash = require('slash')
const path = require('path')
const patterns = require('./patterns')
const { latest } = require('./enterprise-server-releases')
const { productIds } = require('./all-products')
const allVersions = require('./all-versions')
const supportedVersions = new Set(Object.keys(allVersions))
const nonEnterpriseDefaultVersion = require('./non-enterprise-default-version')

// Add the language to the given HREF
// /articles/foo -> /en/articles/foo
function getPathWithLanguage (href, languageCode) {
  return slash(path.posix.join('/', languageCode, getPathWithoutLanguage(href)))
    .replace(patterns.trailingSlash, '$1')
}

// Remove the language from the given HREF
// /en/articles/foo -> /articles/foo
function getPathWithoutLanguage (href) {
  return slash(href.replace(patterns.hasLanguageCode, '/'))
}

// Remove the version segment from the path
function getPathWithoutVersion (href) {
  const versionFromPath = getVersionStringFromPath(href)

  // If the derived version is not found in the list of all versions, just return the HREF
  return allVersions[versionFromPath]
    ? href.replace(`/${getVersionStringFromPath(href)}`, '')
    : href
}

// Return the version segment in a path
function getVersionStringFromPath (href) {
  href = getPathWithoutLanguage(href)

  // Return immediately if this is a link to the homepage
  if (href === '/') {
    return nonEnterpriseDefaultVersion
  }

  // Get the first segment
  const versionFromPath = href.split('/')[1]

  // If the first segment is a supported product, assume this is FPT
  if (productIds.includes(versionFromPath)) {
    return nonEnterpriseDefaultVersion
  }

  // Otherwise, check if it's a supported version
  if (supportedVersions.has(versionFromPath)) {
    return versionFromPath
  }

  // If the version segment is the latest enterprise-server release, return the latest release
  if (versionFromPath === 'enterprise-server@latest') {
    return `enterprise-server@${latest}`
  }

  // If it's just a plan with no @release (e.g., `enterprise-server`), return the latest release
  const planObject = Object.values(allVersions).find(v => v.plan === versionFromPath)
  if (planObject) {
    return allVersions[planObject.latestVersion].version
  }

  // Otherwise, return the first segment as-is, which may not be a real supported version,
  // but additional checks are done on this segment in getVersionedPathWithoutLanguage
  return versionFromPath
}

// Return the corresponding object for the version segment in a path
function getVersionObjectFromPath (href) {
  const versionFromPath = getVersionStringFromPath(href)

  return allVersions[versionFromPath]
}

// Return the product segment from the path
function getProductStringFromPath (href) {
  href = getPathWithoutLanguage(href)

  if (href === '/') return 'homepage'

  const pathParts = href.split('/')

  if (pathParts.includes('early-access')) return 'early-access'

  return productIds.includes(pathParts[2])
    ? pathParts[2]
    : pathParts[1]
}

function getCategoryStringFromPath (href) {
  href = getPathWithoutLanguage(href)

  if (href === '/') return null

  const pathParts = href.split('/')

  if (pathParts.includes('early-access')) return null

  const productIndex = productIds.includes(pathParts[2])
    ? 2
    : 1

  return pathParts[productIndex + 1]
}

module.exports = {
  getPathWithLanguage,
  getPathWithoutLanguage,
  getPathWithoutVersion,
  getVersionStringFromPath,
  getVersionObjectFromPath,
  getProductStringFromPath,
  getCategoryStringFromPath
}
