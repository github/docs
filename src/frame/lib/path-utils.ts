import slash from 'slash'
import path from 'path'
import patterns from './patterns'
import { latest } from '@/versions/lib/enterprise-server-releases'
import { productIds } from '@/products/lib/all-products'
import { allVersions } from '@/versions/lib/all-versions'
import nonEnterpriseDefaultVersion from '@/versions/lib/non-enterprise-default-version'
const supportedVersions = new Set(Object.keys(allVersions))

// Extracts the language code from the path
// if href is '/en/something', returns 'en'
export function getLangFromPath(href: string | undefined): string | null {
  if (!href) return null
  // first remove the version from the path so we don't match, say, `/free-pro-team` as `/fr/`
  const match = getPathWithoutVersion(href).match(patterns.getLanguageCode)
  return match ? match[1] : null
}

// Add the language to the given HREF
// /articles/foo -> /en/articles/foo
export function getPathWithLanguage(href: string | undefined, languageCode: string): string {
  if (!href) return `/${languageCode}`
  return slash(path.posix.join('/', languageCode, getPathWithoutLanguage(href))).replace(
    patterns.trailingSlash,
    '$1',
  )
}

// Remove the language from the given HREF
// /en/articles/foo -> /articles/foo
export function getPathWithoutLanguage(href: string | undefined): string {
  if (!href) return '/'
  return slash(href.replace(patterns.hasLanguageCode, '/'))
}

// Remove the version segment from the path
export function getPathWithoutVersion(href: string | undefined): string {
  if (!href) return '/'
  const versionFromPath = getVersionStringFromPath(href)

  // If the derived version is not found in the list of all versions, just return the HREF
  return allVersions[versionFromPath]
    ? href.replace(`/${getVersionStringFromPath(href)}`, '')
    : href
}

// Return the version segment in a path
export function getVersionStringFromPath(
  href: string | undefined,
  supportedOnly: true,
): string | undefined
export function getVersionStringFromPath(href: string | undefined, supportedOnly?: false): string
export function getVersionStringFromPath(
  href: string | undefined,
  supportedOnly = false,
): string | undefined {
  if (!href) return nonEnterpriseDefaultVersion
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
  // For example, in lib/redirects/permalinks.ts it needs to know if the
  // URL didn't contain a valid version.
  if (supportedOnly) {
    return
  }

  // Otherwise, return the first segment as-is, which may not be a real supported version,
  // but additional checks are done on this segment in getVersionedPathWithoutLanguage
  return versionFromPath
}

// Return the corresponding object for the version segment in a path
export function getVersionObjectFromPath(href: string | undefined) {
  const versionFromPath = getVersionStringFromPath(href, false)

  return allVersions[versionFromPath]
}

// Return the product segment from the path
// Extracts the product identifier from various URL patterns including versioned paths
export function getProductStringFromPath(href: string | undefined): string {
  // Handle empty or undefined paths
  if (!href) return 'homepage'

  const normalizedHref = getPathWithoutLanguage(href)
  if (normalizedHref === '/') return 'homepage'

  // Split path into segments (first segment is always empty string)
  const pathParts = normalizedHref.split('/')

  // Handle special product paths that appear anywhere in the URL
  if (pathParts.includes('early-access')) return 'early-access'

  // Handle special products that always appear as the first segment
  // These products use custom sidebars and need explicit handling
  const specialProducts = ['rest', 'copilot', 'get-started']
  if (specialProducts.includes(pathParts[1])) {
    return pathParts[1]
  }

  // Determine if first segment is a version (e.g., 'enterprise-server@3.9')
  // If yes, product is in pathParts[2], otherwise it's in pathParts[1]
  // Examples:
  //   /enterprise-server@3.9/admin -> product is 'admin'
  //   /github/getting-started -> product is 'github'
  //   /enterprise-server@3.9 -> product is 'enterprise-server@3.9' (enterprise landing)
  const hasVersionPrefix = supportedVersions.has(pathParts[1])
  const productString = hasVersionPrefix && pathParts[2] ? pathParts[2] : pathParts[1]

  return productString
}

export function getCategoryStringFromPath(href: string | undefined): string | undefined {
  if (!href) return undefined
  href = getPathWithoutLanguage(href)

  if (href === '/') return undefined

  const pathParts = href.split('/')

  if (pathParts.includes('early-access')) return undefined

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
