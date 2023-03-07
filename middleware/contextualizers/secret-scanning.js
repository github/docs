import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import getApplicableVersions from '../../lib/get-applicable-versions.js'

const secretScanningPath = path.join('data/secret-scanning.yml')

export default async function secretScanning(req, res, next) {
  if (!req.pagePath.endsWith('code-security/secret-scanning/secret-scanning-patterns'))
    return next()

  const secretScanningData = yaml.load(fs.readFileSync(secretScanningPath, 'utf-8'))

  const { currentVersion } = req.context

  // Create separate properties for each table for now - this keeps things simpler in the Markdown.
  // In the future if we combine the tables into a single table or some other format, we
  // can just add the entire secretScanning array to the context here.
  const currentVersionData = secretScanningData.filter((entry) =>
    getApplicableVersions(entry.versions).includes(currentVersion)
  )
  req.context.secretScanning = {
    isPublic: currentVersionData.filter((entry) => entry.isPublic),
    isPrivateWithGhas: currentVersionData.filter((entry) => entry.isPrivateWithGhas),
    hasPushProtection: currentVersionData.filter((entry) => entry.hasPushProtection),
  }

  return next()
}
