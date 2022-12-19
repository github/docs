import { describe, expect, jest, test } from '@jest/globals'

import { get } from '../helpers/e2etest.js'

describe('redirects', () => {
  jest.setTimeout(60 * 1000)

  test('any _next/image request should 404', async () => {
    const res = await get('/_next/image?what=ever')
    expect(res.statusCode).toBe(404)
  })
})
