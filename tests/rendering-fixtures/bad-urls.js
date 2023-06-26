import { head } from '../helpers/e2etest.js'

describe('bad URLs', () => {
  test('any URL with /index.md suffix redirects to be without suffix', async () => {
    const URLs = ['/index.md', '/en/index.md', '/en/actions/index.md']
    for (const url of URLs) {
      const res = await head(url)
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe(url.replace(/\/index\.md$/, ''))
      expect(res.headers['cache-control']).toContain('public')
      expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
    }
  })
})
