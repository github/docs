import type { Response, NextFunction } from 'express'

import { USER_VERSION_COOKIE_NAME } from '@/frame/lib/constants'
import { allVersionKeys } from '@/versions/lib/all-versions'
import { updateLoggerContext } from '@/observability/logger/lib/logger-context'
import type { ExtendedRequest } from '@/types'

function isValidVersion(version: string): boolean {
  return allVersionKeys.includes(version)
}

export function getUserVersionFromCookie(req: ExtendedRequest): string | undefined {
  const value = req.cookies?.[USER_VERSION_COOKIE_NAME]
  if (value && isValidVersion(value)) {
    return value
  }
  return undefined
}

export default function detectVersion(req: ExtendedRequest, res: Response, next: NextFunction) {
  req.userVersion = getUserVersionFromCookie(req)
  updateLoggerContext({
    userVersion: req.userVersion,
  })
  return next()
}
