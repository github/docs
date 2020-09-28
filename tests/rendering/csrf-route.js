const request = require('supertest')
const app = require('../../server')

describe('GET /csrf', () => {
  jest.setTimeout(60 * 1000)
  // There's a "warmServer" in middleware/context.js
  // that takes about 6-10 seconds to process first time

  it('should render a non-cache include for CSRF token', async () => {
    const res = await request(app).get('/csrf')
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('token')
    expect(res.headers['surrogate-control']).toBe('private, no-store')
    expect(res.headers['cache-control']).toBe('private, no-store')
  })
})
