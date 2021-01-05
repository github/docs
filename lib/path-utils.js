const slash = require('slash')
const path = require('path')
const patterns = require('./patterns')
const { deprecated, latest } = require('./enterprise-server-releases')
const allProducts = require('./all-products')
const allVersions = require('./all-versions')
const supportedVersions = new Set(Object.keys(allVersions))
const { getNewVersionedPath } = require('./old-versions-utils')

// This function constructs an appropriate versioned path for any given HREF.
// NOTE: this gets called by findPage and various other functions, and
// has to return a proper versioned link given a wide variety of incoming
// modern or legacy-formatted links, so it is somewhat overloaded. At some point
// this could probably be broken up into separate functions to handle different incoming
// paths. But it is currently optimized to handle lots of edge cases.
function getVersionedPathWithoutLanguage (href, version) {
  // Start clean without language code or trailing slash
  href = getPathWithoutLanguage(href.replace(patterns.trailingSlash, '$1'))

  // If this is an old versioned path that includes a deprecated version, do not change!
  // example: /enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release
  const oldEnterpriseVersionNumber = href.match(patterns.getEnterpriseVersionNumber)
  if (oldEnterpriseVersionNumber && deprecated.includes(oldEnterpriseVersionNumber[1])) {
    return href
  }

  // Try to derive the current version from the path
  // example: enterprise-server@2.22 or free-pro-team@latest
  let versionFromPath = getVersionStringFromPath(href)

  // If a supported version was found, add it to the path so we can go through the rest of the checks
  if (supportedVersions.has(versionFromPath)) {
    href = href.replace(href.split('/')[1], versionFromPath)
  }

  // If a currently supported version was NOT found...
  let productObjectFromPath
  if (!supportedVersions.has(versionFromPath)) {
    // First check if the segment is instead a current product;
    // example: /admin/foo or /desktop/foo
    productObjectFromPath = allProducts[versionFromPath]

    // If so, add the first supported version for that product to the href
    // (this is just to get a path with all the expected segments; the version will be updated later if needed)
    if (productObjectFromPath) {
      href = path.join('/', productObjectFromPath.versions[0], href)
      versionFromPath = productObjectFromPath.versions[0]
    } else {
      // Otherwise, this may be an old path that should be converted to new path;
      // OLD: /enterprise/2.22/admin/installation OR /enterprise/admin/installation
      // NEW: /enterprise-server@2.22/admin/installation
      href = getNewVersionedPath(href)
      versionFromPath = getVersionStringFromPath(href)
    }
  }

  // If not previously found, derive the product object from the path (e.g., github or admin)
  if (!productObjectFromPath) {
    productObjectFromPath = getProductObjectFromPath(href)
  }

  // If the product's versions don't include the specified version, nothing to change!
  if (productObjectFromPath && !productObjectFromPath.versions.includes(version)) {
    return slash(href)
  }

  // Update the version and return the path
  return slash(href.replace(versionFromPath, version))
}

// Add language code to a versioned path
function getVersionedPathWithLanguage (href, version, languageCode) {
  return getPathWithLanguage(getVersionedPathWithoutLanguage(href, version), languageCode)
}

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
  return href.replace(`/${getVersionStringFromPath(href)}`, '')
}

// Return the version segment in a path
function getVersionStringFromPath (href) {
  href = getPathWithoutLanguage(href)

  // Return immediately if this is a link to the homepage
  if (href === '/') {
    return 'homepage'
  }

  // Check if the first segment is a supported version
  const versionFromPath = href.split('/')[1]

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
  const productString = href.split('/')[2]

  return productString || 'homepage'
}

// Return the corresponding object for the product segment in a path
function getProductObjectFromPath (href) {
  const productFromPath = getProductStringFromPath(href)

  return allProducts[productFromPath]
}

module.exports = {
  getVersionedPathWithLanguage,
  getVersionedPathWithoutLanguage,
  getPathWithLanguage,
  getPathWithoutLanguage,
  getPathWithoutVersion,
  getVersionStringFromPath,
  getVersionObjectFromPath,
  getProductStringFromPath,
  getProductObjectFromPath
}
