import slash from 'slash'
import path from 'path'
import patterns from './patterns.js'
import { latest } from '#src/versions/lib/enterprise-server-releases.js'
import { productIds } from './all-products.js'
import { allVersions } from '#src/versions/lib/all-versions.js'
import nonEnterpriseDefaultVersion from '#src/versions/lib/non-enterprise-default-version.js'
const supportedVersions = new Set(Object.keys(allVersions))

// Add the language to the given HREF
// /articles/foo -> /en/articles/foo
export function getPathWithLanguage(href, languageCode) {
  return slash(path.posix.join('/', languageCode, getPathWithoutLanguage(href))).replace(
    patterns.trailingSlash,
    '$1',
  )
}

// Remove the language from the given HREF
// /en/articles/foo -> /articles/foo
export function getPathWithoutLanguage(href) {
  return slash(href.replace(patterns.hasLanguageCode, '/'))
}

// Remove the version segment from the path
export function getPathWithoutVersion(href) {
  const versionFromPath = getVersionStringFromPath(href)

  // If the derived version is not found in the list of all versions, just return the HREF
  return allVersions[versionFromPath]
    ? href.replace(`/${getVersionStringFromPath(href)}`, '')
    : href
}

// Return the version segment in a path
export function getVersionStringFromPath(href, supportedOnly = false) {
  href = getPathWithoutLanguage(href)

  // Some URLs don't ever have a version in the URL and it won't be found
  // if you continue digging deeper. So exit early with the default on these.
  if (['/', '/categories.json'].includes(href)) {
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
  const planObject = Object.values(allVersions).find((v) => v.plan === versionFromPath)
  if (planObject) {
    return allVersions[planObject.latestVersion].version
  }

  // If the caller of this function explicitly wants to know if the
  // version part is *not* supported, they get back `undefined`.
  // But this function is used in many other places where it potentially
  // doesn't care if the version is supported.
  // For example, in lib/redirects/permalinks.js it needs to know if the
  // URL didn't contain a valid version.
  if (supportedOnly) {
    return
  }

  // Otherwise, return the first segment as-is, which may not be a real supported version,
  // but additional checks are done on this segment in getVersionedPathWithoutLanguage
  return versionFromPath
}

// Return the corresponding object for the version segment in a path
export function getVersionObjectFromPath(href) {
  const versionFromPath = getVersionStringFromPath(href)

  return allVersions[versionFromPath]
}

// Return the product segment from the path
export function getProductStringFromPath(href) {
  href = getPathWithoutLanguage(href)

  if (href === '/') return 'homepage'

  const pathParts = href.split('/')

  if (pathParts.includes('early-access')) return 'early-access'

  // For rest pages the currentProduct should be rest
  // We use this to show SidebarRest, which is a different sidebar than the rest of the site
  if (pathParts[1] === 'rest') return 'rest'

  return productIds.includes(pathParts[2]) ? pathParts[2] : pathParts[1]
}

export function getCategoryStringFromPath(href) {
  href = getPathWithoutLanguage(href)

  if (href === '/') return null

  const pathParts = href.split('/')

  if (pathParts.includes('early-access')) return null

  const productIndex = productIds.includes(pathParts[2]) ? 2 : 1

  return pathParts[productIndex + 1]
}

export default {
  getPathWithLanguage,
  getPathWithoutLanguage,
  getPathWithoutVersion,
  getVersionStringFromPath,
  getVersionObjectFromPath,
  getProductStringFromPath,
  getCategoryStringFromPath,
}
