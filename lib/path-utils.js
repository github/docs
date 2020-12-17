const slash = require('slash')
const path = require('path')
const patterns = require('./patterns')
const { deprecated } = require('./enterprise-server-releases')
const allProducts = require('./all-products')
const allVersions = require('./all-versions')
const supportedVersions = Object.keys(allVersions)
const supportedPlans = Object.values(allVersions).map(v => v.plan)
const { getNewVersionedPath } = require('./old-versions-utils')

// construct appropriate versioned path for any given HREF
function getVersionedPathWithoutLanguage (href, version) {
  // start clean without language code or trailing slash
  href = getPathWithoutLanguage(href.replace(patterns.trailingSlash, '$1'))

  // if this is an old versioned path that includes a deprecated version, do not change!
  // example: /enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release
  const oldEnterpriseVersionNumber = href.match(patterns.getEnterpriseVersionNumber)
  if (oldEnterpriseVersionNumber && deprecated.includes(oldEnterpriseVersionNumber[1])) {
    return href
  }

  // try to derive the current version from the path
  // example: enterprise-server@2.22 or free-pro-team@latest
  let versionFromPath = getVersionStringFromPath(href)

  // update the path with the full version so we can go through the rest of the checks
  href = href.replace(href.split('/')[1], versionFromPath)

  // if the version found is NOT a currently supported version...
  let productObjectFromPath
  if (![...supportedPlans, ...supportedVersions, 'enterprise-server@latest'].includes(versionFromPath)) {
  // first check if the first segment is instead a current product;
    // example: /admin/foo or /desktop/foo
    productObjectFromPath = allProducts[versionFromPath]

    // if so, add the first supported version for that product to the href
    if (productObjectFromPath) {
      href = path.join('/', productObjectFromPath.versions[0], href)
      versionFromPath = productObjectFromPath.versions[0]
    } else {
      // otherwise, this may be an old path that should be converted to new path;
      // OLD: /enterprise/2.22/admin/installation OR /enterprise/admin/installation
      // NEW: /enterprise-server@2.22/admin/installation
      href = getNewVersionedPath(href)
      versionFromPath = getVersionStringFromPath(href)
    }
  }

  // if not previously found, derive the product object from the path (e.g., github or admin)
  if (!productObjectFromPath) {
    productObjectFromPath = getProductObjectFromPath(href)
  }

  // if the product's versions don't include the specified version, nothing to change!
  if (productObjectFromPath && !productObjectFromPath.versions.includes(version)) {
    return slash(href)
  }

  // update the version
  return slash(href.replace(versionFromPath, version))
}

// add language code
function getVersionedPathWithLanguage (href, version, languageCode) {
  return getPathWithLanguage(getVersionedPathWithoutLanguage(href, version), languageCode)
}

// add the language to the given HREF
// /en/articles/foo -> /articles/foo
function getPathWithLanguage (href, languageCode) {
  return slash(path.posix.join('/', languageCode, getPathWithoutLanguage(href)))
    .replace(patterns.trailingSlash, '$1')
}

// remove the language from the given HREF
// /articles/foo -> /en/articles/foo
function getPathWithoutLanguage (href) {
  const newHref = href.match(patterns.hasLanguageCode)
    ? '/' + href.split('/').slice(2).join('/')
    : href

  return slash(newHref)
}

// Remove the version segment from the path
function getPathWithoutVersion (href) {
  return href.replace(`/${getVersionStringFromPath(href)}`, '')
}

// Return the version segment in a path
function getVersionStringFromPath (href) {
  href = getPathWithoutLanguage(href)

  const versionFromPath = href.split('/')[1]

  // return checkVersionFromPath(href.split('/')[1], href)
  if (allVersions[versionFromPath]) {
    return versionFromPath
  }

  // if the version segment is the latest enterprise-server release, return the latest release
  if (versionFromPath === 'enterprise-server@latest') {
    const enterpriseServerObject = Object.values(allVersions).find(v => v.plan === 'enterprise-server')
    return allVersions[enterpriseServerObject.latestVersion].version
  }

  // if it's just a plan with no @release, find the plan's latest release
  const planObject = Object.values(allVersions).find(v => v.plan === versionFromPath)
  if (planObject) {
    return allVersions[planObject.latestVersion].version
  }

  return versionFromPath || 'homepage'
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
