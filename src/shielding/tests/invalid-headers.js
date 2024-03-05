import { get } from '#src/tests/helpers/e2etest.js'

describe('invalid headers', () => {
  test('400 if containing x-invoke-status (instead of redirecting)', async () => {
    const res = await get('/', { headers: { 'x-invoke-status': '203' } })
    expect(res.statusCode).toBe(400)
    expect(res.headers['cache-control']).toMatch('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
  })
  test('400 if containing x-invoke-status (instead of 200)', async () => {
    const res = await get('/en', { headers: { 'x-invoke-status': '203' } })
    expect(res.statusCode).toBe(400)
    expect(res.headers['cache-control']).toMatch('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
  })
})
