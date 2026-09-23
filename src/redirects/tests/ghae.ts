// We entirely removed GHAE but we still have to support legacy links.
// The unit tests cover `getRedirect()` directly. These are end-to-end tests
// that span the middleware, which uses `getRedirect()` internally.
//
// They matter because ghae is gone from the `allVersions` config object, so
// these redirects are all that is left of it.

import { describe, expect, test } from 'vitest'

import { head } from '@/tests/helpers/e2etest'

describe('ghae redirects', () => {
  test('ghae home page', async () => {
    const res = await head('/en/github-ae@latest')
    expect(res.statusCode).toBe(301)
    expect(res.headers.location).toMatch('/en/enterprise-cloud@latest')
  })

  test('ghae docset landing page', async () => {
    const res = await head('/en/github-ae@latest/get-started')
    expect(res.statusCode).toBe(301)
    expect(res.headers.location).toMatch('/en/enterprise-cloud@latest/get-started')
  })

  test('search page', async () => {
    const res = await head('/en/github-ae@latest/search?query=git')
    expect(res.statusCode).toBe(301)
    expect(res.headers.location).toMatch('/en/enterprise-cloud@latest/search?query=git')
  })

  test('ghae release notes', async () => {
    const res = await head('/en/github-ae@latest/admin/release-notes')
    expect(res.statusCode).toBe(301)
    // There is not an "equivalent" release notes page for enterprise-cloud
    expect(res.headers.location).toMatch('/en')
  })
})
