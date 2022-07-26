import { jest } from '@jest/globals'
import { get } from '../helpers/e2etest.js'

describe('GET /api/session', () => {
  jest.setTimeout(60 * 1000)
  // There's a "warmServer" in middleware/context.js
  // that takes about 6-10 seconds to process first time

  it('should render a non-cache include for CSRF token', async () => {
    const res = await get('/api/session')
    expect(res.status).toBe(200)
    expect(JSON.parse(res.text).csrfToken).toBeTruthy()
    expect(res.headers['cache-control']).toBe('private, no-store')
  })
})
