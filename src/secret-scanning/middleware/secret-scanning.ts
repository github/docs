import fs from 'fs'

import yaml from 'js-yaml'
import type { NextFunction, Response } from 'express'

import { liquid } from '@/content-render/index'
import { ExtendedRequest, SecretScanningData } from '@/types'
import { allVersions } from '@/versions/lib/all-versions'
import { getVersionInfo } from '@/app/lib/constants'

const secretScanningDir = 'src/secret-scanning/data/pattern-docs'

// This is the path to the file that contains the secret scanning data.
// Currently it's:
// code-security/secret-scanning/introduction/supported-secret-scanning-pattern
const { targetFilename } = JSON.parse(
  fs.readFileSync('src/secret-scanning/lib/config.json', 'utf-8'),
)

export default async function secretScanning(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  if (!req.pagePath!.endsWith(targetFilename)) return next()

  if (!req.context) throw new Error('request not contextualized')
  const { currentVersion } = req.context
  if (!currentVersion) throw new Error('currentVersion not set in context')

  const { isEnterpriseCloud, isEnterpriseServer } = getVersionInfo(currentVersion)

  const versionPath = isEnterpriseCloud
    ? 'ghec'
    : isEnterpriseServer
      ? `ghes-${allVersions[currentVersion].currentRelease}`
      : 'fpt'
  const filepath = `${secretScanningDir}/${versionPath}/public-docs.yml`

  req.context.secretScanningData = yaml.load(
    fs.readFileSync(filepath, 'utf-8'),
  ) as SecretScanningData[]

  // Some entries might use Liquid syntax, so we need
  // to execute that Liquid to get the actual value.
  for (const entry of req.context.secretScanningData) {
    for (const [key, value] of Object.entries(entry)) {
      if (key === 'hasValidityCheck' && typeof value === 'string' && value.includes('{%')) {
        const evaluated = yaml.load(await liquid.parseAndRender(value, req.context))
        entry[key] = evaluated as string
      }
    }
    if (entry.isduplicate) {
      entry.secretType += ' <br/><a href="#token-versions">Token versions</a>'
    }
    if (entry.ismultipart) {
      entry.secretType += ' <br/><a href="#multi-part-secrets">Multi-part secrets</a>'
    }
  }

  return next()
}
