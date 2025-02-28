import patterns from '@/frame/lib/patterns.js'
import { deprecated } from '@/versions/lib/enterprise-server-releases.js'
import type { ExtendedRequest } from '@/types'

type IsArchivedInfo = {
  isArchived?: boolean
  requestedVersion?: string
}

export function isArchivedVersion(req: ExtendedRequest): IsArchivedInfo {
  // if this is an assets path, use the referrer
  // if this is a docs path, use the req.path
  const pathToCheck = patterns.assetPaths.test(req.path) ? req.get('referrer') : req.path
  return isArchivedVersionByPath(pathToCheck || '')
}

export function isArchivedVersionByPath(pathToCheck: string): IsArchivedInfo {
  // ignore paths that don't have an enterprise version number
  if (
    !(
      patterns.getEnterpriseVersionNumber.test(pathToCheck) ||
      patterns.getEnterpriseServerNumber.test(pathToCheck)
    )
  ) {
    return {}
  }

  // extract enterprise version from path, e.g. 2.16
  const requestedVersion = pathToCheck.includes('enterprise-server@')
    ? pathToCheck.match(patterns.getEnterpriseServerNumber)?.[1]
    : pathToCheck.match(patterns.getEnterpriseVersionNumber)?.[1]

  // bail if the request version is not deprecated
  if (!requestedVersion || !deprecated.includes(requestedVersion)) {
    return {}
  }

  return { isArchived: true, requestedVersion }
}
