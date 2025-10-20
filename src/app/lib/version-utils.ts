import { DEFAULT_VERSION, getVersionInfo } from '@/app/lib/constants'

/**
 * Extract version from pathname (works in both server and client)
 */
export function extractVersionFromPath(pathname: string): string {
  const pathSegments = pathname.split('/').filter(Boolean)

  const versionSegment = pathSegments.find(
    (segment) =>
      segment.includes('enterprise-server') ||
      segment.includes('enterprise-cloud') ||
      segment === 'enterprise' ||
      segment === 'free-pro-team@latest',
  )

  return versionSegment || DEFAULT_VERSION
}

/**
 * Get version info from pathname (works in both server and client)
 */
export function getVersionInfoFromPath(pathname: string) {
  const currentVersion = extractVersionFromPath(pathname)
  return getVersionInfo(currentVersion)
}
