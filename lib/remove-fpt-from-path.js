const slash = require('slash')
const nonEnterpriseDefaultVersion = require('./non-enterprise-default-version')

// This is a convenience function to remove free-pro-team@latest from all
// **user-facing** aspects of the site (particularly URLs) while continuing to support
// free-pro-team@latest as a version both in the codebase and in content/data files.
module.exports = function removeFPTFromPath (path) {
  return slash(path.replace(`/${nonEnterpriseDefaultVersion}`, ''))
}
