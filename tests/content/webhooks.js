import { difference } from 'lodash-es'
import { getJSON } from '../helpers/supertest.js'
import { latest } from '../../lib/enterprise-server-releases.js'
import { allVersions } from '../../lib/all-versions.js'
import webhookPayloads from '../../lib/webhooks'
import { jest } from '@jest/globals'

const allVersionValues = Object.values(allVersions)

const payloadVersions = allVersionValues.map((v) => v.miscVersionName)

// grab some values for testing
const nonEnterpriseDefaultPayloadVersion = allVersionValues.find(
  (version) => version.nonEnterpriseDefault
).miscVersionName

const latestGhesPayloadVersion = allVersionValues.find(
  (version) => version.currentRelease === latest
).miscVersionName

const ghaePayloadVersion = allVersionValues.find(
  (version) => version.plan === 'github-ae'
).miscVersionName

describe('webhook payloads', () => {
  jest.setTimeout(3 * 60 * 1000)

  test('have expected top-level keys', () => {
    payloadVersions.forEach((version) => {
      expect(version in webhookPayloads).toBe(true)
    })
  })

  test('have a reasonable number of payloads per version', () => {
    payloadVersions.forEach((version) => {
      const payloadsPerVersion = Object.keys(webhookPayloads[version])
      expect(payloadsPerVersion.length).toBeGreaterThan(20)
    })
  })

  test('have payloads that are JSON strings, not objects', () => {
    // use the first one found for testing purposes
    const firstKey = Object.keys(webhookPayloads[nonEnterpriseDefaultPayloadVersion])[0]
    const firstValue = webhookPayloads[nonEnterpriseDefaultPayloadVersion][firstKey]
    const payloadString = getPayloadString(firstValue)
    const payloadLines = payloadString.split('\n')

    expect(payloadLines.length).toBeGreaterThan(5)
    expect(payloadLines[2].trim()).toBe('```json')
    expect(payloadLines[3].trim()).toBe('{')
    expect(payloadLines[payloadLines.length - 3].trim()).toBe('```')
  })

  test('on non-dotcom versions, dotcom-only payloads fall back to dotcom', async () => {
    const ghesPayloads = webhookPayloads[latestGhesPayloadVersion]
    const ghaePayloads = webhookPayloads[ghaePayloadVersion]
    const dotcomOnlyPayloads = difference(
      Object.keys(webhookPayloads[nonEnterpriseDefaultPayloadVersion]),
      Object.keys(ghesPayloads)
    )
    // use the first one found for testing purposes
    const dotcomOnlyPayload = dotcomOnlyPayloads[0]
    expect(ghesPayloads[dotcomOnlyPayload]).toBeUndefined()
    expect(ghaePayloads[dotcomOnlyPayload]).toBeUndefined()

    // fallback handling is in middleware/contextualizers/webhooks.js
    const ghesPayloadsWithFallbacks = await getJSON(
      `/en/enterprise-server@${latest}/developers/webhooks-and-events?json=webhookPayloadsForCurrentVersion`
    )
    const ghaePayloadsWithFallbacks = await getJSON(
      '/en/github-ae@latest/developers/webhooks-and-events?json=webhookPayloadsForCurrentVersion'
    )
    expect(ghesPayloadsWithFallbacks[dotcomOnlyPayload]).toBeDefined()
    expect(ghaePayloadsWithFallbacks[dotcomOnlyPayload]).toBeDefined()

    const ghesPayloadString = getPayloadString(ghesPayloadsWithFallbacks[dotcomOnlyPayload])
    const ghaePayloadString = getPayloadString(ghaePayloadsWithFallbacks[dotcomOnlyPayload])
    expect(ghesPayloadString.includes('```json')).toBe(true)
    expect(ghaePayloadString.includes('```json')).toBe(true)
  })
})

// accommodate two possible payload string locations
// value of top-level key: `create` (in create.payload.json)
// value of second-level key: `issues.opened` (in issues.opened.payload.json)
function getPayloadString(payload) {
  return typeof payload === 'string' ? payload : payload[Object.keys(payload)[0]]
}
