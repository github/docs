const path = require('path')
const { defaults } = require('lodash')
const webhookPayloads = require(path.join(process.cwd(), 'lib/webhooks'))
const nonEnterpriseDefaultVersion = require('../../lib/non-enterprise-default-version')
const allVersions = require('../../lib/all-versions')

module.exports = async (req, res, next) => {
  if (!req.path.includes('webhooks')) return next()

  // Get the name of the dir under lib/webhooks/static
  // For example, free-pro-team@latest corresponds to dotcom,
  // enterprise-server@2.22 corresponds to ghes-2.22,
  // and github-ae@latest corresponds to ghae
  const webhookPayloadDir = allVersions[req.context.currentVersion].miscVersionName

  const webhookPayloadsForCurrentVersion = webhookPayloads[webhookPayloadDir]

  // if current version is non-dotcom, include dotcom payloads in object so we can fall back to them if needed
  req.context.webhookPayloadsForCurrentVersion = req.context.currentVersion === nonEnterpriseDefaultVersion
    ? webhookPayloadsForCurrentVersion
    : defaults(webhookPayloadsForCurrentVersion, webhookPayloads[allVersions[nonEnterpriseDefaultVersion].miscVersionName])

  return next()
}
