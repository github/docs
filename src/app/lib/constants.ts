/**
 * App Router compatible constants
 * These can be safely imported by both server and client components
 */

export const DEFAULT_VERSION = 'free-pro-team@latest'

// Version utility functions that don't use router hooks
export function getVersionInfo(currentVersion: string = DEFAULT_VERSION) {
  return {
    currentVersion,
    isEnterprise: currentVersion.includes('enterprise'),
    isEnterpriseCloud: currentVersion.includes('cloud'),
    isEnterpriseServer: currentVersion.includes('enterprise-server'),
  }
}

export type VersionInfo = ReturnType<typeof getVersionInfo>
