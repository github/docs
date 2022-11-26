import warmServer from '../../lib/warm-server.js'
import getApplicableVersions from '../../lib/get-applicable-versions.js'

export default async function features(req, res, next) {
  if (!req.context.page) return next()

  const { site } = await warmServer()

  // Determine whether the currentVersion belongs to the list of versions the feature is available in.
  // Note that we always exclusively use the English `data.features` because
  // we don't want any of these translated (and possibly corrupt).
  Object.keys(site.en.site.data.features).forEach((featureName) => {
    const { versions } = site.en.site.data.features[featureName]
    const applicableVersions = getApplicableVersions(versions, `data/features/${featureName}.yml`)

    // Adding the resulting boolean to the context object gives us the ability to use
    // `{% if featureName ... %}` conditionals in content files.
    const isFeatureAvailableInCurrentVersion = applicableVersions.includes(
      req.context.currentVersion
    )
    req.context[featureName] = isFeatureAvailableInCurrentVersion
  })

  return next()
}
