import { get } from '../../../tests/helpers/e2etest.js'
import {
  SURROGATE_ENUMS,
  makeLanguageSurrogateKey,
} from '../../../middleware/set-fastly-surrogate-key.js'
import { describe, expect } from '@jest/globals'

describe('webhooks v1 middleware', () => {
  test('basic get webhook', async () => {
    const sp = new URLSearchParams()
    // Based on live data which isn't ideal but it should rarely change at least.
    // Just check that we find the webhook and that the result has the `category`
    // field which all webhook types should have.
    sp.set('category', 'branch_protection_rule')
    sp.set('version', 'free-pro-team@latest')
    const res = await get('/api/webhooks/v1?' + sp)
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.body)
    const actionTypes = Object.keys(results)
    expect(actionTypes.length).toBeGreaterThan(2)
    expect(Object.keys(results[actionTypes[0]]).includes('category')).toBeTruthy()

    // Check that it can be cached at the CDN
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-control']).toContain('public')
    expect(res.headers['surrogate-control']).toMatch(/max-age=[1-9]/)
    const surrogateKeySplit = res.headers['surrogate-key'].split(/\s/g)
    expect(surrogateKeySplit.includes(SURROGATE_ENUMS.DEFAULT)).toBeTruthy()
    expect(surrogateKeySplit.includes(makeLanguageSurrogateKey())).toBeTruthy()
  })

  test('get non-fpt version webhook', async () => {
    const sp = new URLSearchParams()
    sp.set('category', 'branch_protection_rule')
    sp.set('version', 'enterprise-cloud@latest')
    const res = await get('/api/webhooks/v1?' + sp)
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.body)
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
    expect(JSON.parse(res.body).error).toBeTruthy()
  })

  test('unknown version', async () => {
    const sp = new URLSearchParams()
    sp.set('category', 'branch_protection_rule')
    sp.set('version', 'no-such-version')
    const res = await get('/api/webhooks/v1?' + sp)

    expect(res.statusCode).toBe(404)
    expect(JSON.parse(res.body).error).toBeTruthy()
  })
})
