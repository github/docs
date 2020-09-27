if (process.env.FEATURE_NEW_VERSIONS) {
  const nonEnterpriseDefaultVersion = Object.values(require('../lib/all-versions'))
    .find(version => version.nonEnterpriseDefault).version

  module.exports = nonEnterpriseDefaultVersion
}
