import fs from 'fs'

import yaml from 'js-yaml'
import type { NextFunction, Response } from 'express'

import getApplicableVersions from '@/versions/lib/get-applicable-versions.js'
import { liquid } from '@/content-render/index.js'
import { ExtendedRequest, SecretScanningData } from '@/types'

const secretScanningPath = 'src/secret-scanning/data/public-docs.yml'

export default async function secretScanning(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  if (
    !req.pagePath!.endsWith(
      'code-security/secret-scanning/introduction/supported-secret-scanning-patterns',
    )
  )
    return next()

  const secretScanningData = yaml.load(
    fs.readFileSync(secretScanningPath, 'utf-8'),
  ) as SecretScanningData[]

  if (!req.context) throw new Error('request not contextualized')
  const { currentVersion } = req.context

  req.context.secretScanningData = secretScanningData.filter((entry) =>
    getApplicableVersions(entry.versions).includes(currentVersion),
  )

  // Some entries might use Liquid syntax, so we need
  // to execute that Liquid to get the actual value.
  req.context.secretScanningData.forEach(async (entry) => {
    for (const [key, value] of Object.entries(entry)) {
      if (key === 'hasValidityCheck' && typeof value === 'string' && value.includes('{%')) {
        const evaluated = yaml.load(await liquid.parseAndRender(value, req.context))
        entry[key] = evaluated as string
      }
    }
  })

  return next()
}
