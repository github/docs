import type { ExtendedRequest } from '@/types'

type IsArchivedInfo = {
  isArchived?: boolean
  requestedVersion?: string
}

export declare function isArchivedVersion(req: ExtendedRequest): IsArchivedInfo
export declare function isArchivedVersionByPath(pathToCheck: string): IsArchivedInfo
