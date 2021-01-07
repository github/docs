const slash = require('slash')
const patterns = require('./patterns')
const nonEnterpriseDefaultVersion = require('./non-enterprise-default-version')

module.exports = function removeFPTFromPath (path) {
  path = process.env.FEATURE_REMOVE_FPT
    ? slash(path.replace(`/${nonEnterpriseDefaultVersion}`, ''))
    : path

  return path.replace(patterns.trailingSlash, '$1')
}
