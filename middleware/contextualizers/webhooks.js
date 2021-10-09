import { defaults } from 'lodash-es'
import webhookPayloads from '../../lib/webhooks/index.js'
import nonEnterpriseDefaultVersion from '../../lib/non-enterprise-default-version.js'
import { allVersions } from '../../lib/all-versions.js'

export default function webhooksContext(req, res, next) {
  const currentVersionObj = allVersions[req.context.currentVersion]
  // ignore requests to non-webhook reference paths
  // and to versions that don't exist
  if (!req.pagePath.includes('webhook') || !currentVersionObj) {
    return next()
  }

  // Get the name of the dir under lib/webhooks/static
  // For example, free-pro-team@latest corresponds to dotcom,
  // enterprise-server@2.22 corresponds to ghes-2.22,
  // and github-ae@latest corresponds to ghae
  const webhookPayloadDir = currentVersionObj.miscVersionName

  const webhookPayloadsForCurrentVersion = webhookPayloads[webhookPayloadDir]

  // if current version is non-dotcom, include dotcom payloads in object so we can fall back to them if needed
  req.context.webhookPayloadsForCurrentVersion =
    req.context.currentVersion === nonEnterpriseDefaultVersion
      ? webhookPayloadsForCurrentVersion
      : defaults(
          webhookPayloadsForCurrentVersion,
          webhookPayloads[allVersions[nonEnterpriseDefaultVersion].miscVersionName]
        )

  return next()
}
