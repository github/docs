import { describe, expect, test, vi } from 'vitest'

import { get } from '@/tests/helpers/e2etest.js'

describe('bad requests', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test('any _next/image request should 404', async () => {
    const res = await get('/_next/image?what=ever')
    expect(res.statusCode).toBe(404)
    expect(res.headers['content-type']).toMatch('text/plain')
  })

  test('any _next.* request should 404', async () => {
    const res = await get('/_next.php.hack.junk')
    expect(res.statusCode).toBe(404)
    expect(res.headers['content-type']).toMatch('text/plain')
  })
})
