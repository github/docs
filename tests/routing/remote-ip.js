import { get } from '../helpers/supertest.js'
import { expect, jest } from '@jest/globals'

describe('remote ip debugging', () => {
  jest.setTimeout(5 * 60 * 1000)

  test('basics', async () => {
    const res = await get('/_ip')
    expect(res.statusCode).toBe(200)
    const kv = res.text.trim().split(/\s/g)
    expect(kv[0].startsWith('ip=')).toBeTruthy()
    expect(kv[1].startsWith('x-forwarded-for=')).toBeTruthy()
    expect(kv[2].startsWith('fastly-client-ip=')).toBeTruthy()
  })

  test('carrying the x-forwarded-for header', async () => {
    const res = await get('/_ip', {
      headers: {
        'X-Forwarded-For': '123.123.0.1',
      },
    })
    expect(res.statusCode).toBe(200)
    expect(res.text.includes('x-forwarded-for=123.123.0.1')).toBeTruthy()
  })
})
