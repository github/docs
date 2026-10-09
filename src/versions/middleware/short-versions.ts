// Liquid conditionals use these shortcuts: {% if fpt %}, {% if ghec %}, and {% if ghes %}.
// Release comparisons use the custom ifversion tag, such as {% ifversion ghes > 3.XX %}.
import type { ExtendedRequest } from '@/types'
import type { Response, NextFunction } from 'express'

export default async function shortVersions(
  req: ExtendedRequest,
  res: Response | null,
  next: NextFunction,
): Promise<void> {
  if (!req.context) throw new Error('No context on request')
  const { currentVersion, currentVersionObj } = req.context
  if (!currentVersionObj) {
    return next()
  }

  req.context[currentVersionObj.shortName] = true

  if (currentVersion) {
    req.context.currentRelease = currentVersion.split('@')[1]
    req.context.currentVersionShortName = currentVersionObj.shortName
  }

  return next()
}
