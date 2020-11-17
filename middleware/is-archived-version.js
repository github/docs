const patterns = require('../lib/patterns')
const { deprecated } = require('../lib/enterprise-server-releases')

module.exports = async (req, res, next) => {
  // ignore paths that don't have an enterprise version number
  if (!(patterns.getEnterpriseVersionNumber.test(req.path) || patterns.getEnterpriseServerNumber.test(req.path))) return next()

  // extract enterprise version from path, e.g. 2.16
  const requestedVersion = req.path.includes('enterprise-server@')
    ? req.path.match(patterns.getEnterpriseServerNumber)[1]
    : req.path.match(patterns.getEnterpriseVersionNumber)[1]

  // bail if the request version is not deprecated
  if (!deprecated.includes(requestedVersion)) return next()

  // bail if the request version is not deprecated
  if (!deprecated.includes(requestedVersion)) return next()

  // attach convenience props
  req.isArchivedVersion = true
  req.requestedVersion = requestedVersion

  return next()
}
