const getApplicableVersions = require('../../lib/get-applicable-versions')

module.exports = async function features (req, res, next) {
  if (!req.context.page) return next()

  // Determine whether the currentVersion belongs to the list of versions the feature is available in.
  Object.keys(req.context.site.data.features).forEach(featureName => {
    const { versions } = req.context.site.data.features[featureName]
    const applicableVersions = getApplicableVersions(versions, req.path)

    // Adding the resulting boolean to the context object gives us the ability to use
    // `{% if featureName ... %}` conditionals in content files.
    const isFeatureAvailableInCurrentVersion = applicableVersions.includes(req.context.currentVersion)
    req.context[featureName] = isFeatureAvailableInCurrentVersion
  })

  return next()
}
