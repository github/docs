import path from 'path'
import type { Response, NextFunction } from 'express'

import type { ExtendedRequest, FrontmatterVersions } from '@/types'
import { ROOT } from '@/frame/lib/constants.js'
import getApplicableVersions from '@/versions/lib/get-applicable-versions.js'
import { getDeepDataByLanguage } from '@/data-directory/lib/get-data.js'

export default function features(req: ExtendedRequest, res: Response, next: NextFunction) {
  if (!req.context) throw new Error('request is not contextualized')
  if (!req.context.page) return next()

  if (!req.context.currentVersion) throw new Error('currentVersion is not contextualized')
  Object.entries(getFeaturesByVersion(req.context.currentVersion)).forEach(
    ([featureName, isFeatureAvailableInCurrentVersion]) => {
      if (!req.context) throw new Error('request is not contextualized')
      req.context[featureName] = isFeatureAvailableInCurrentVersion
    },
  )

  return next()
}

type FeatureVersions = {
  versions: FrontmatterVersions
}

let allFeatures: Record<string, FeatureVersions>

const cache = new Map()
function getFeaturesByVersion(currentVersion: string): Record<string, boolean> {
  if (!cache.has(currentVersion)) {
    if (!allFeatures) {
      // As of Oct 2022, the `data/features/**` reading is *not* JIT.
      // The `data/features` is deliberately not ignored in nodemon.json.
      // See internal issue #2389
      allFeatures = getDeepDataByLanguage('features', 'en') as Record<string, FeatureVersions>
    }

    const features: {
      [feature: string]: boolean
    } = {}
    // Determine whether the currentVersion belongs to the list of versions the feature is available in.
    for (const [featureName, feature] of Object.entries(allFeatures)) {
      const { versions } = feature
      const applicableVersions = getApplicableVersions(
        versions,
        path.join(ROOT, `data/features/${featureName}.yml`),
      )

      // Adding the resulting boolean to the context object gives us the ability to use
      // `{% if featureName ... %}` conditionals in content files.
      const isFeatureAvailableInCurrentVersion = applicableVersions.includes(currentVersion)
      features[featureName] = isFeatureAvailableInCurrentVersion
    }
    cache.set(currentVersion, features)
  }

  return cache.get(currentVersion)
}
