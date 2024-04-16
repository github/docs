import { describe, expect, test, vi } from 'vitest'

import { get } from '#src/tests/helpers/e2etest.js'

describe('remote ip debugging', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test('basics', async () => {
    const res = await get('/_ip')
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toContain('application/json')
    const kv = JSON.parse(res.body)
    expect('ip' in kv).toBeTruthy()
    expect('x-forwarded-for' in kv).toBeTruthy()
    expect('fastly-client-ip' in kv).toBeTruthy()
  })

  test('carrying the x-forwarded-for header', async () => {
    const res = await get('/_ip', {
      headers: {
        'X-Forwarded-For': '123.123.0.1',
      },
    })
    expect(res.statusCode).toBe(200)
    const kv = JSON.parse(res.body)
    expect(kv['x-forwarded-for']).toBe('123.123.0.1')
  })

  test('req.ip becomes the first value from x-forwarded-for', async () => {
    const xForwardedFor = '100.0.0.1, 100.0.0.2, 100.0.0.3'
    const res = await get('/_ip', {
      headers: {
        'X-Forwarded-For': xForwardedFor,
      },
    })
    expect(res.statusCode).toBe(200)
    const kv = JSON.parse(res.body)
    expect(kv.ip).toBe('100.0.0.1')
    expect(kv['x-forwarded-for']).toBe(xForwardedFor)
  })
})
