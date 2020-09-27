require('../../lib/feature-flags')
const { difference } = require('lodash')
const { getJSON } = require('../helpers')
const { latest } = require('../../lib/enterprise-server-releases')
const allVersions = require('../../lib/all-versions')
const { oldVersions } = require('../../lib/old-versions-utils')
const webhookPayloads = require('../../lib/webhooks')

const testFeatureNewVersions = process.env.FEATURE_NEW_VERSIONS ? test : test.skip
const testFeatureOldVersions = process.env.FEATURE_NEW_VERSIONS ? test.skip : test

describe('webhook payloads', () => {
  jest.setTimeout(3 * 60 * 1000)

  // TODO update this test when we update the webhook payload filepaths
  testFeatureNewVersions('have old versions as top-level keys', () => {
    oldVersions.forEach(version => {
      expect(version in webhookPayloads).toBe(true)
    })
  })

  testFeatureOldVersions('have current versions as top-level keys', () => {
    allVersions.forEach(version => {
      expect(version in webhookPayloads).toBe(true)
    })
  })

  // TODO update this test when we update the webhook payload filepaths
  testFeatureNewVersions('have a reasonable number of payloads per version', () => {
    oldVersions.forEach(version => {
      const payloadsPerVersion = Object.keys(webhookPayloads[version])
      expect(payloadsPerVersion.length).toBeGreaterThan(20)
    })
  })

  testFeatureOldVersions('have a reasonable number of payloads per version', () => {
    allVersions.forEach(version => {
      const payloadsPerVersion = Object.keys(webhookPayloads[version])
      expect(payloadsPerVersion.length).toBeGreaterThan(20)
    })
  })

  test('have payloads that are JSON strings, not objects', () => {
    // use the first one found for testing purposes
    const firstKey = Object.keys(webhookPayloads.dotcom)[0]
    const firstValue = webhookPayloads.dotcom[firstKey]
    const payloadString = getPayloadString(firstValue)
    const payloadLines = payloadString.split('\n')

    expect(payloadLines.length).toBeGreaterThan(5)
    expect(payloadLines[2].trim()).toBe('```json')
    expect(payloadLines[3].trim()).toBe('{')
    expect(payloadLines[payloadLines.length - 3].trim()).toBe('```')
  })

  test('on GHE, dotcom-only payloads fall back to dotcom', async () => {
    const ghePayloads = webhookPayloads[latest]
    const dotcomOnlyPayloads = difference(Object.keys(webhookPayloads.dotcom), Object.keys(ghePayloads))
    // use the first one found for testing purposes
    const dotcomOnlyPayload = dotcomOnlyPayloads[0]
    expect(ghePayloads[dotcomOnlyPayload]).toBeUndefined()

    // fallback handling is in middleware/contexturalizers/webhooks.js
    const ghePayloadsWithFallbacks = await getJSON(`/en/enterprise/${latest}/user/developers?json=webhookPayloadsForCurrentVersion`)
    expect(ghePayloadsWithFallbacks[dotcomOnlyPayload]).toBeDefined()

    const payloadString = getPayloadString(ghePayloadsWithFallbacks[dotcomOnlyPayload])
    expect(payloadString.includes('```json')).toBe(true)
  })
})

// accommodate two possible payload string locations
// value of top-level key: `create` (in create.payload.json)
// value of second-level key: `issues.opened` (in issues.opened.payload.json)
function getPayloadString (payload) {
  return typeof payload === 'string'
    ? payload
    : payload[Object.keys(payload)[0]]
}
