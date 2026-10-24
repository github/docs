import path from 'path'
import type { Response, NextFunction } from 'express'

import type { ExtendedRequest, FrontmatterVersions } from '@/types'
import { ROOT } from '@/frame/lib/constants'
import getApplicableVersions from '@/versions/lib/get-applicable-versions'
import { getDeepDataByLanguage } from '@/data-directory/lib/get-data'

export default function features(req: ExtendedRequest, res: Response, next: NextFunction) {
  if (!req.context) throw new Error('request is not contextualized')
  if (!req.context.page) return next()

  if (!req.context.currentVersion) throw new Error('currentVersion is not contextualized')
  const featureEntries = Object.entries(getFeaturesByVersion(req.context.currentVersion))
  for (const [featureName, isFeatureAvailableInCurrentVersion] of featureEntries) {
    if (!req.context) throw new Error('request is not contextualized')
    req.context[featureName] = isFeatureAvailableInCurrentVersion
  }

  return next()
}

type FeatureVersions = {
  versions: FrontmatterVersions
}

let allFeatures: Record<string, FeatureVersions>

const cache = new Map<string, Record<string, boolean>>()
export function getFeaturesByVersion(currentVersion: string): Record<string, boolean> {
  if (!cache.has(currentVersion)) {
    if (!allFeatures) {
      // data/features loads outside JIT, so nodemon watches it instead of ignoring it.
      allFeatures = getDeepDataByLanguage('features', 'en') as Record<string, FeatureVersions>
    }

    const featureFlags: {
      [feature: string]: boolean
    } = {}
    for (const [featureName, feature] of Object.entries(allFeatures)) {
      const { versions } = feature
      const applicableVersions = getApplicableVersions(
        versions,
        path.join(ROOT, `data/features/${featureName}.yml`),
      )

      // Context booleans let content use Liquid conditionals such as {% if featureName ... %}.
      const isFeatureAvailableInCurrentVersion = applicableVersions.includes(currentVersion)
      featureFlags[featureName] = isFeatureAvailableInCurrentVersion
    }
    cache.set(currentVersion, featureFlags)
  }

  return cache.get(currentVersion) as Record<string, boolean>
}
