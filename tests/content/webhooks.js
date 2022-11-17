import { difference } from 'lodash-es'
import { get, getJSON } from '../helpers/e2etest.js'
import { SURROGATE_ENUMS } from '../../middleware/set-fastly-surrogate-key.js'
import { latest } from '../../lib/enterprise-server-releases.js'
import { allVersions } from '../../lib/all-versions.js'
import getWebhookPayloads from '../../lib/webhooks'
import { describe, expect, jest } from '@jest/globals'

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

describe('webhooks middleware', () => {
  test('basic get webhook', async () => {
    const sp = new URLSearchParams()
    // Based on live data which isn't ideal but it should rarely change at least.
    // Just check that we find the webhook and that the result has the `category`
    // field which all webhook types should have.
    sp.set('category', 'branch_protection_rule')
    sp.set('version', 'free-pro-team@latest')
    const res = await get('/api/webhooks/v1?' + sp)
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.text)
    const actionTypes = Object.keys(results)
    expect(actionTypes.length).toBeGreaterThan(2)
    expect(Object.keys(results[actionTypes[0]]).includes('category')).toBeTruthy()

    // Check that it can be cached at the CDN
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-control']).toContain('public')
    expect(res.headers['surrogate-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-key']).toBe(SURROGATE_ENUMS.DEFAULT)
  })

  test('get non-fpt version webhook', async () => {
    const sp = new URLSearchParams()
    sp.set('category', 'branch_protection_rule')
    sp.set('version', 'enterprise-cloud@latest')
    const res = await get('/api/webhooks/v1?' + sp)
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.text)
    const actionTypes = Object.keys(results)
    expect(actionTypes.length).toBeGreaterThan(2)
    expect(Object.keys(results[actionTypes[0]]).includes('category')).toBeTruthy()

    expect(res.statusCode).toBe(200)
  })

  test('unknown webhook category', async () => {
    const sp = new URLSearchParams()
    sp.set('category', 'no-such-category')
    sp.set('version', 'free-pro-team@latest')
    const res = await get('/api/webhooks/v1?' + sp)

    expect(res.statusCode).toBe(404)
    expect(JSON.parse(res.text).error).toBeTruthy()
  })

  test('unknown version', async () => {
    const sp = new URLSearchParams()
    sp.set('category', 'branch_protection_rule')
    sp.set('version', 'no-such-version')
    const res = await get('/api/webhooks/v1?' + sp)

    expect(res.statusCode).toBe(404)
    expect(JSON.parse(res.text).error).toBeTruthy()
  })
})

// TODO: docs-eng#1937: delete this test suite
describe('webhook payloads', () => {
  jest.setTimeout(3 * 60 * 1000)

  const webhookPayloads = getWebhookPayloads()

  test('have expected top-level keys', () => {
    payloadVersions.forEach((version) => {
      // todo: remove if check once we have API/webhook versions for ghec
      // Docs Engineering issue: 979
      if (version !== 'ghec') {
        expect(version in webhookPayloads).toBe(true)
      }
    })
  })

  test('have a reasonable number of payloads per version', () => {
    payloadVersions.forEach((version) => {
      // todo: remove if check once we have API/webhook versions for ghec
      if (version !== 'ghec') {
        const payloadsPerVersion = Object.keys(webhookPayloads[version])
        expect(payloadsPerVersion.length).toBeGreaterThan(20)
      }
    })
  })

  test('have payloads that are JSON strings, not objects', () => {
    // use the first one found for testing purposes
    const firstKey = Object.keys(webhookPayloads[nonEnterpriseDefaultPayloadVersion])[0]
    const firstValue = webhookPayloads[nonEnterpriseDefaultPayloadVersion][firstKey]
    const payloadString = getPayloadString(firstValue)
    const payloadLines = payloadString.split('\n')

    expect(payloadLines.length).toBeGreaterThan(5)
    expect(payloadLines[0].includes('data-highlight="json"')).toBe(true)
    expect(payloadLines[2].trim()).toBe('```')
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
    expect(ghesPayloadString.includes('data-highlight="json"')).toBe(true)
    expect(ghaePayloadString.includes('data-highlight="json"')).toBe(true)
  })
})

// accommodate two possible payload string locations
// value of top-level key: `create` (in create.payload.json)
// value of second-level key: `issues.opened` (in issues.opened.payload.json)
function getPayloadString(payload) {
  return typeof payload === 'string' ? payload : payload[Object.keys(payload)[0]]
}
