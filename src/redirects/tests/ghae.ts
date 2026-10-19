// GitHub AE legacy links redirect through middleware; github-ae is absent from allVersions.
// These end-to-end tests cover the middleware path; unit tests cover getRedirect directly.

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
    // No enterprise-cloud release notes equivalent exists.
    expect(res.headers.location).toMatch('/en')
  })
})
