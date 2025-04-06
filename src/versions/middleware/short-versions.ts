// This module creates shortcuts for version comparisons in Liquid conditional strings.
//
// Supported:
// {% if fpt %}
// {% if ghec %}
// {% if ghes %}
//
// For the custom operator handling in statements like {% if ghes > 3.0 %}, see `lib/liquid-tags/if-ver.js`.
import type { ExtendedRequest } from '@/types.js'
import type { Response, NextFunction } from 'express'

export default function shortVersions(
  req: ExtendedRequest,
  res: Response | null,
  next: NextFunction,
): void {
  if (!req.context) throw new Error('No context on request')
  const { currentVersion, currentVersionObj } = req.context
  if (!currentVersionObj) {
    return next()
  }

  // Add the short name to context.
  req.context[currentVersionObj.shortName] = true

  // Add convenience props.
  if (currentVersion) {
    req.context.currentRelease = currentVersion.split('@')[1]
    req.context.currentVersionShortName = currentVersionObj.shortName
  }

  return next()
}
