const getApplicableVersions = require('../../lib/get-applicable-versions')

module.exports = async function breadcrumbs (req, res, next) {
  if (!req.context.page) return next()

  Object.keys(req.context.site.data.features).forEach(featureName => {
    const { versions } = req.context.site.data.features[featureName]
    const applicableVersions = getApplicableVersions(versions, req.path)
    req.context[featureName] = applicableVersions.includes(req.context.currentVersion)
  })

  return next()
}
