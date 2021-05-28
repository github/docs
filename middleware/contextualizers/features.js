const getApplicableVersions = require('../../lib/get-applicable-versions')

module.exports = async function features (req, res, next) {
  if (!req.context.page) return next()

  // Determine whether the currentVersion belongs to the list of versions the feature is available in.
  Object.keys(req.context.site.data.features).forEach(featureName => {
    const { versions } = req.context.site.data.features[featureName]
    const applicableVersions = getApplicableVersions(versions, req.path)
    // Adding this to the context object gives us the ability to use `{% if foo %}` conditionals in content files.
    req.context[featureName] = applicableVersions.includes(req.context.currentVersion)
  })

  return next()
}
