import patterns from '@/frame/lib/patterns'
import { deprecated } from '@/versions/lib/enterprise-server-releases'
import type { ExtendedRequest } from '@/types'

type IsArchivedInfo = {
  isArchived?: boolean
  requestedVersion?: string
}

export function isArchivedVersion(req: ExtendedRequest): IsArchivedInfo {
  // Asset requests carry the archive version in the Referrer, not req.path.
  const pathToCheck = patterns.assetPaths.test(req.path) ? req.get('referrer') : req.path
  return isArchivedVersionByPath(pathToCheck || '')
}

export function isArchivedVersionByPath(pathToCheck: string): IsArchivedInfo {
  if (
    !(
      patterns.getEnterpriseVersionNumber.test(pathToCheck) ||
      patterns.getEnterpriseServerNumber.test(pathToCheck)
    )
  ) {
    return {}
  }

  const requestedVersion = pathToCheck.includes('enterprise-server@')
    ? pathToCheck.match(patterns.getEnterpriseServerNumber)?.[1]
    : pathToCheck.match(patterns.getEnterpriseVersionNumber)?.[1]

  if (!requestedVersion || !deprecated.includes(requestedVersion)) {
    return {}
  }

  return { isArchived: true, requestedVersion }
}
