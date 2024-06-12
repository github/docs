/**
 * We entirely removed GHAE but we have to support legacy links.
 * We have some unit tests for this that tests the `getRedirect()` function.
 * These tests here are more end-to-end tests that spans middleware
 * (which internally uses `getRedirect()`).
 *
 * These tests are important to have because we intend (not done at the
 * time of authoring this test suite) entirely remove ghae from
 * the `allVersions` config object. When we do, we want to be certain that
 * legacy redirects still work.
 */

import { describe, expect, test } from 'vitest'

import { head } from '#src/tests/helpers/e2etest.js'

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
