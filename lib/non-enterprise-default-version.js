const nonEnterpriseDefaultVersion = Object.values(require('../lib/all-versions'))
  .find(version => version.nonEnterpriseDefault).version

module.exports = nonEnterpriseDefaultVersion
