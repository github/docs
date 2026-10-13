import slash from 'slash'
import path from 'path'
import patterns from './patterns'
import { latest } from '@/versions/lib/enterprise-server-releases'
import { productIds } from '@/products/lib/all-products'
import { allVersions } from '@/versions/lib/all-versions'
import nonEnterpriseDefaultVersion from '@/versions/lib/non-enterprise-default-version'
const supportedVersions = new Set(Object.keys(allVersions))

// Example: /en/something returns en.
export function getLangFromPath(href: string | undefined): string | null {
  if (!href) return null
  // Strip full version keys first so /free-pro-team@latest does not match /fr/.
  const match = getPathWithoutVersion(href).match(patterns.getLanguageCode)
  return match ? match[1] : null
}

// Example: /articles/foo becomes /en/articles/foo.
export function getPathWithLanguage(href: string | undefined, languageCode: string): string {
  if (!href) return `/${languageCode}`
  return slash(path.posix.join('/', languageCode, getPathWithoutLanguage(href))).replace(
    patterns.trailingSlash,
    '$1',
  )
}

// Example: /en/articles/foo becomes /articles/foo.
export function getPathWithoutLanguage(href: string | undefined): string {
  if (!href) return '/'
  return slash(href.replace(patterns.hasLanguageCode, '/'))
}

export function getPathWithoutVersion(href: string | undefined): string {
  if (!href) return '/'
  const versionFromPath = getVersionStringFromPath(href)

  // Unsupported version-like segments stay in the href.
  return allVersions[versionFromPath]
    ? href.replace(`/${getVersionStringFromPath(href)}`, '')
    : href
}

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

  // Some root URLs never carry versions, so they use the default.
  if (['/', '/categories.json'].includes(href)) {
    return nonEnterpriseDefaultVersion
  }

  const versionFromPath = href.split('/')[1]

  // Product-first URLs use the non-enterprise default version.
  if (productIds.includes(versionFromPath)) {
    return nonEnterpriseDefaultVersion
  }

  // Supported version segments identify the current version.
  if (supportedVersions.has(versionFromPath)) {
    return versionFromPath
  }

  // enterprise-server@latest resolves to the current latest release.
  if (versionFromPath === 'enterprise-server@latest') {
    return `enterprise-server@${latest}`
  }

  // Plan-only paths such as /enterprise-server/admin resolve to that plan's latest version.
  const planObject = Object.values(allVersions).find((v) => v.plan === versionFromPath)
  if (planObject) {
    return allVersions[planObject.latestVersion].version
  }

  // supportedOnly returns undefined so callers can detect unsupported version segments.
  if (supportedOnly) {
    return
  }

  // Callers without supportedOnly get the raw first segment even when it is unsupported.
  return versionFromPath
}

export function getVersionObjectFromPath(href: string | undefined) {
  const versionFromPath = getVersionStringFromPath(href, false)

  return allVersions[versionFromPath]
}

// Examples: /enterprise-cloud@latest/admin returns admin, and /github/getting-started returns github.
// A bare supported-version path such as /enterprise-cloud@latest returns enterprise-cloud@latest.
export function getProductStringFromPath(href: string | undefined): string {
  // Empty paths resolve to the homepage product.
  if (!href) return 'homepage'

  const normalizedHref = getPathWithoutLanguage(href)
  if (normalizedHref === '/') return 'homepage'

  const pathParts = normalizedHref.split('/')

  // early-access keeps custom routing no matter where it appears.
  if (pathParts.includes('early-access')) return 'early-access'

  // Custom-sidebar products always appear as the first segment.
  const specialProducts = ['rest', 'copilot', 'get-started']
  if (specialProducts.includes(pathParts[1])) {
    return pathParts[1]
  }

  // Supported version prefixes use the next segment; bare supported-version paths return that version.
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
