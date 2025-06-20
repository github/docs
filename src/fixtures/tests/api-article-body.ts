import { beforeAll, describe, expect, test } from 'vitest'

import { get } from '@/tests/helpers/e2etest.js'

const makeURL = (pathname: string) => `/api/article/body?${new URLSearchParams({ pathname })}`

describe('article body api', () => {
  beforeAll(() => {
    // If you didn't set the `ROOT` variable, the tests will fail rather
    // cryptically. So as a warning for engineers running these tests,
    // alert in case it was accidentally forgotten.
    if (!process.env.ROOT) {
      console.warn(
        'WARNING: The articlebody tests require the ROOT environment variable to be set to the fixture root',
      )
    }
    // Ditto for fixture-based translations to work
    if (!process.env.TRANSLATIONS_FIXTURE_ROOT) {
      console.warn(
        'WARNING: The articlebody tests require the TRANSLATIONS_FIXTURE_ROOT environment variable to be set',
      )
    }
  })

  test('happy path', async () => {
    const res = await get(makeURL('/en/get-started/start-your-journey/api-article-body-test-page'))
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toContain('text/markdown')
    expect(res.body).toContain('## About GitHub')
    expect(res.body).toContain('## About Git')
    expect(res.body).toMatch(/^#+\s+\w+/m) // Check for any markdown heading pattern

    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-control']).toContain('public')
    expect(res.headers['surrogate-control']).toMatch(/max-age=[1-9]/)
  })

  test('a pathname that does not exist', async () => {
    const res = await get(makeURL('/en/never/heard/of'))
    expect(res.statusCode).toBe(404)
    const { error } = JSON.parse(res.body)
    expect(error).toBe("No page found for '/en/never/heard/of'")
  })

  test("no 'pathname' query string at all", async () => {
    const res = await get('/api/article/body')
    expect(res.statusCode).toBe(400)
    const { error } = JSON.parse(res.body)
    expect(error).toBe("No 'pathname' query")
  })

  test('has proper markdown structure with frontmatter removed', async () => {
    const res = await get(makeURL('/en/get-started/start-your-journey/api-article-body-test-page'))

    expect(res.statusCode).toBe(200)
    // Should not contain frontmatter
    expect(res.body).not.toMatch(/^---/)
    // Should have at least one heading
    expect(res.body).toMatch(/^#{1,6}\s+\w+/m)
  })

  test("empty 'pathname' query string", async () => {
    const res = await get('/api/article/body?pathname=%20')
    expect(res.statusCode).toBe(400)
    const { error } = JSON.parse(res.body)
    expect(error).toBe("'pathname' query empty")
  })

  test('repeated pathname query string key', async () => {
    const res = await get('/api/article/body?pathname=a&pathname=b')
    expect(res.statusCode).toBe(400)
    const { error } = JSON.parse(res.body)
    expect(error).toBe("Multiple 'pathname' keys")
  })
})
