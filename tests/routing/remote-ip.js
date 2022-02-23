import { get } from '../helpers/supertest.js'
import { expect, jest } from '@jest/globals'

describe('remote ip debugging', () => {
  jest.setTimeout(5 * 60 * 1000)

  test('basics', async () => {
    const res = await get('/_ip')
    expect(res.statusCode).toBe(200)
    expect(res.header['content-type']).toContain('application/json')
    const kv = JSON.parse(res.text)
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
    const kv = JSON.parse(res.text)
    expect(kv['x-forwarded-for']).toBe('123.123.0.1')
  })
})
