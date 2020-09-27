const slash = require('slash')
const path = require('path')
const patterns = require('./patterns')
const { latest, deprecated } = require('./enterprise-server-releases')
const internalProducts = Object.values(require('./all-products'))
  .filter(prod => !prod.external)
const allProducts = require('./all-products')
const allVersions = require('./all-versions')
const { getNewVersionedPath } = require('./old-versions-utils')

let pathsThatHaveEnterpriseUserVersions, pathsThatDoNotHaveEnterpriseUserVersions
if (!process.env.FEATURE_NEW_VERSIONS) {
  pathsThatHaveEnterpriseUserVersions = internalProducts
    .filter(prod => prod.hasEnterpriseUserVersions)
    .map(prod => prod.href)
    .concat(['/articles', '/categories'])

  pathsThatDoNotHaveEnterpriseUserVersions = internalProducts
    .filter(prod => !prod.hasEnterpriseUserVersions)
    .map(prod => prod.href)
    .concat(['/enterprise'])
}

// construct appropriate versioned path for any given HREF
function getVersionedPathWithoutLanguage (href, version) {
  // start clean without language code or trailing slash
  href = getPathWithoutLanguage(href.replace(patterns.trailingSlash, '$1'))

  if (!process.env.FEATURE_NEW_VERSIONS) {
    // does href need an enterprise user path?
    // e.g., /articles/foo -> /en/enterprise/2.15/user/articles/foo
    // also redirects like /common-issues-and-questions
    // but NOT /actions, /desktop, /enterprise, etc.
    const needsEnterpriseUserPath = (
      pathsThatHaveEnterpriseUserVersions.some(path => href.startsWith(path)) ||
      !pathsThatDoNotHaveEnterpriseUserVersions.some(path => href.startsWith(path))
    )

    // construct enterprise user path
    if (needsEnterpriseUserPath && version !== 'dotcom') {
      href = `/enterprise/${version}/user/${href}`
    }

    // hack fix for double slash bug
    href = href.replace('//', '/')

    // does href need an enterprise version added to path?
    const needsEnterpriseVersion = (
      href.match(patterns.enterprise) &&
      href.match(patterns.getEnterpriseVersionNumber) === null
    )

    // add the enterprise version
    if (needsEnterpriseVersion) {
      // if current page version is dotcom, use the latest version of enterprise
      href = version === 'dotcom'
        ? href.replace(/(\/enterprise)/, `$1/${latest}`)
        : href.replace(/(\/enterprise)/, `$1/${version}`)
    }

    // is this an enterprise user path on dotcom?
    const isEnterpriseUsePath = href.match(patterns.enterprise) && !href.match(patterns.admin)

    // if so, replace enterprise user part of path with /github/
    if (isEnterpriseUsePath && version === 'dotcom') {
      href = href.replace(/\/enterprise\/.+?\/user\//, '')
    }

    return slash(href.replace(patterns.trailingSlash, '$1'))
  }

  if (process.env.FEATURE_NEW_VERSIONS) {
    // if this is an old versioned path that includes a deprecated version, do not change!
    // example: /enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release
    const oldEnterpriseVersionNumber = href.match(patterns.getEnterpriseVersionNumber)
    if (oldEnterpriseVersionNumber && deprecated.includes(oldEnterpriseVersionNumber[1])) {
      return href
    }

    // try to derive the current version from the path
    // example: enterprise-server@2.22 or free-pro-team@latest
    let versionFromPath = getVersionStringFromPath(href)

    // if this is an old versioned path, convert to new versioned path
    // OLD: /enterprise/2.22/admin/installation or /enterprise/admin/installation
    // NEW: /enterprise-server@2.22/admin/installation
    // OLD: /desktop/installing-and-configuring-github-desktop
    // NEW: /free-pro-team@latest/desktop/installing-and-configuring-github-desktop
    if (!Object.keys(allVersions).includes(versionFromPath)) {
      href = getNewVersionedPath(href)
      versionFromPath = getVersionStringFromPath(href)
    }

    // derive the product from the path (e.g., github or admin) and get corresponding object
    const productObjectFromPath = getProductObjectFromPath(href)

    // if the product's versions don't include the specified version, nothing to change!
    if (productObjectFromPath && !productObjectFromPath.versions.includes(version)) {
      return slash(href)
    }

    // update the version
    return slash(href.replace(versionFromPath, version))
  }
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

function getPathWithoutVersion (href) {
  if (!process.env.FEATURE_NEW_VERSIONS) {
    const number = href.match(patterns.getEnterpriseVersionNumber)
    if (!number) return href

    return slash(href.replace('/' + number[1], ''))
  }

  if (process.env.FEATURE_NEW_VERSIONS) {
    return href.replace(`/${getVersionStringFromPath(href)}`, '')
  }
}

function getVersionStringFromPath (href) {
  href = getPathWithoutLanguage(href)
  const versionString = href.split('/')[1]

  return versionString || 'homepage'
}

function getVersionObjectFromPath (href) {
  const versionId = getVersionStringFromPath(href)
  const version = allVersions[versionId]

  if (!version) throw new Error(`No version found for ${href}`)

  return version
}

function getProductStringFromPath (href) {
  href = getPathWithoutLanguage(href)
  const productString = href.split('/')[2]

  return productString || 'homepage'
}

function getProductObjectFromPath (href) {
  const productId = getProductStringFromPath(href)
  // Return undefined if product id derived from path can't be found in allProducts
  return allProducts[productId]
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
