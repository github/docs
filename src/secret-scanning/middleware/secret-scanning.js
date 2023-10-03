import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

import getApplicableVersions from '#src/versions/lib/get-applicable-versions.js'
import { liquid } from '#src/content-render/index.js'

const secretScanningPath = path.join('data/secret-scanning.yml')

export default async function secretScanning(req, res, next) {
  if (!req.pagePath.endsWith('code-security/secret-scanning/secret-scanning-patterns'))
    return next()

  const secretScanningData = yaml.load(fs.readFileSync(secretScanningPath, 'utf-8'))

  const { currentVersion } = req.context

  req.context.secretScanningData = secretScanningData.filter((entry) =>
    getApplicableVersions(entry.versions).includes(currentVersion),
  )

  // Some entries might use Liquid syntax, so we need
  // to execute that Liquid to get the actual value.
  req.context.secretScanningData.forEach(async (entry, i) => {
    for (const [key, value] of Object.entries(entry)) {
      if (typeof value === 'string' && value.includes('{%')) {
        const evaluated = yaml.load(await liquid.parseAndRender(value, req.context))
        entry[key] = evaluated
      }
    }
  })

  return next()
}
