const path = require('path')
const { defaults } = require('lodash')
const webhookPayloads = require(path.join(process.cwd(), 'lib/webhooks'))
const { getOldVersionFromNewVersion } = require('../../lib/old-versions-utils')

module.exports = async (req, res, next) => {
  // TODO need to update this to the new versions in coordination with the updater scripts
  const currentOldVersion = process.env.FEATURE_NEW_VERSIONS
    ? getOldVersionFromNewVersion(req.context.currentVersion)
    : req.context.currentVersion

  const webhookPayloadsForCurrentVersion = webhookPayloads[currentOldVersion]

  // if current version is GHE, include dotcom payloads in object so we can fall back to them if needed
  req.context.webhookPayloadsForCurrentVersion = currentOldVersion === 'dotcom'
    ? webhookPayloadsForCurrentVersion
    : defaults(webhookPayloadsForCurrentVersion, webhookPayloads.dotcom)

  return next()
}
