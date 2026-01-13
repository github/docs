import { beforeAll, describe, expect, test } from 'vitest'

import { get } from '@/tests/helpers/e2etest'

const makeURL = (pathname: string): string =>
  `/api/article/body?${new URLSearchParams({ pathname })}`

describe('article body api', () => {
  beforeAll(() => {
    // If you didn't set the `ROOT` variable, the tests will fail rather
    // cryptically. So as a warning for engineers running these tests,
    // alert in case it was accidentally forgotten.
    if (!process.env.ROOT) {
      console.warn(
        'WARNING: The article body tests require the ROOT environment variable to be set to the fixture root',
      )
    }
  })

  test('happy path', async () => {
    const res = await get(makeURL('/en/get-started/start-your-journey/hello-world'))
    expect(res.statusCode).toBe(200)
    expect(res.body).toContain('## Introduction')
    expect(res.body).toContain('This is just a test.')
    expect(res.headers['content-type']).toContain('text/markdown')
  })

  test('body includes title and intro', async () => {
    const res = await get(makeURL('/en/get-started/start-your-journey/hello-world'))
    expect(res.statusCode).toBe(200)
    // Body should start with the page title as H1
    expect(res.body).toMatch(/^# Hello World/)
    // Body should include the intro after the title
    expect(res.body).toContain('Follow this Hello World exercise to get started with')
  })

  test('octicons auto-generate aria-labels', async () => {
    const res = await get(makeURL('/en/get-started/start-your-journey/hello-world'))
    expect(res.statusCode).toBe(200)

    // Check that octicons without aria-label get auto-generated ones
    expect(res.body).toContain('aria-label="check icon"')
    expect(res.body).toContain('aria-label="git branch icon"')
  })

  test('octicons with custom aria-labels use the custom value', async () => {
    const res = await get(makeURL('/en/get-started/start-your-journey/hello-world'))
    expect(res.statusCode).toBe(200)

    // Check that custom aria-labels are preserved
    expect(res.body).toContain('aria-label="Supported"')
    expect(res.body).toContain('aria-label="Not supported"')
  })

  test('octicons with other attributes still get auto-generated aria-labels', async () => {
    const res = await get(makeURL('/en/get-started/start-your-journey/hello-world'))
    expect(res.statusCode).toBe(200)

    // Check that octicons with width attribute still get aria-labels
    expect(res.body).toContain('aria-label="rocket icon"')
    expect(res.body).toContain('width="32"')
  })

  test('a pathname that does not exist', async () => {
    const res = await get(makeURL('/en/never/heard/of'))
    expect(res.statusCode).toBe(404)
    const { error } = JSON.parse(res.body)
    expect(error).toBe("No page found for '/en/never/heard/of'")
  })

  // Removed: non-article pages test - landing pages are now supported via transformers

  test('invalid Referer header does not crash', async () => {
    const res = await get(makeURL('/en/get-started/start-your-journey/hello-world'), {
      headers: {
        Referer: 'invalid-url',
      },
    })
    expect(res.statusCode).toBe(200)
  })
})
