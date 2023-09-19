import path from 'path'

import { ROOT } from '../../../lib/constants.js'
import getApplicableVersions from '#src/versions/lib/get-applicable-versions.js'
import { getDeepDataByLanguage } from '../../../lib/get-data.js'

export default function features(req, res, next) {
  if (!req.context.page) return next()

  Object.entries(getFeaturesByVersion(req.context.currentVersion)).forEach(
    ([featureName, isFeatureAvailableInCurrentVersion]) => {
      req.context[featureName] = isFeatureAvailableInCurrentVersion
    },
  )

  return next()
}

let allFeatures

const cache = new Map()
function getFeaturesByVersion(currentVersion) {
  if (!cache.has(currentVersion)) {
    if (!allFeatures) {
      // As of Oct 2022, the `data/features/**` reading is *not* JIT.
      // The `data/features` is deliberately not ignored in nodemon.json.
      // See internal issue #2389
      allFeatures = getDeepDataByLanguage('features', 'en')
    }

    const features = {}
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
