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

  req.context.secretScanningData = secretScanningData.filter((entry) =>
    getApplicableVersions(entry.versions).includes(currentVersion)
  )

  return next()
}
