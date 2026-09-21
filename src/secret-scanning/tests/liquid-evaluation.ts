import { describe, expect, test, vi, beforeEach } from 'vitest'
import { readFileSync } from 'fs'
import type { Response } from 'express'

import secretScanning from '@/secret-scanning/middleware/secret-scanning'
import shortVersionsMiddleware from '@/versions/middleware/short-versions'
import { allVersions } from '@/versions/lib/all-versions'
import enterpriseServerReleases from '@/versions/lib/enterprise-server-releases'
import { getSecretScanningData } from '@/secret-scanning/lib/get-secret-scanning-data'
import type { Context, ExtendedRequest, SecretScanningData } from '@/types'

vi.mock('@/secret-scanning/lib/get-secret-scanning-data')

const { targetFilename } = JSON.parse(
  readFileSync('src/secret-scanning/lib/config.json', 'utf8'),
) as { targetFilename: string }

// Both hasValidityCheck and hasExtendedMetadata can be emitted by token-scanning-service
// as a Liquid conditional that resolves to false on GHES and true elsewhere.
const ghesConditional = '{% ifversion ghes %}false{% else %}true{% endif %}'

const makeEntry = (): SecretScanningData =>
  ({
    provider: 'Example',
    supportedSecret: 'Example Token',
    secretType: 'example_token',
    versions: {},
    isPublic: true,
    isPrivateWithGhas: true,
    hasPushProtection: true,
    hasValidityCheck: ghesConditional,
    hasExtendedMetadata: ghesConditional,
    base64Supported: false,
    isduplicate: false,
  }) as SecretScanningData

const runMiddleware = async (currentVersion: string): Promise<SecretScanningData> => {
  vi.mocked(getSecretScanningData).mockResolvedValue([makeEntry()])

  const req = { language: 'en', query: {}, pagePath: `/en/${targetFilename}` } as ExtendedRequest
  req.context = { currentVersion, allVersions, enterpriseServerReleases } as Context
  req.context.currentVersionObj = allVersions[currentVersion]
  await shortVersionsMiddleware(req, null, () => {})

  await secretScanning(req, {} as Response, () => {})
  return req.context.secretScanningData![0]
}

describe('secret-scanning middleware Liquid evaluation', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const oldestSupportedGhes = enterpriseServerReleases.oldestSupported

  test('resolves GHES conditionals to false on enterprise-server', async () => {
    const entry = await runMiddleware(`enterprise-server@${oldestSupportedGhes}`)
    expect(entry.hasValidityCheck).toBe(false)
    expect(entry.hasExtendedMetadata).toBe(false)
  })

  test('resolves GHES conditionals to true on free-pro-team', async () => {
    const entry = await runMiddleware('free-pro-team@latest')
    expect(entry.hasValidityCheck).toBe(true)
    expect(entry.hasExtendedMetadata).toBe(true)
  })
})
