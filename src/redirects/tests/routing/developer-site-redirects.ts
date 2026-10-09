import path from 'path'

import { beforeAll, describe, expect, test, vi } from 'vitest'

import enterpriseServerReleases from '@/versions/lib/enterprise-server-releases'
import { get } from '@/tests/helpers/e2etest'
import readJsonFile from '@/frame/lib/read-json-file'

describe('developer redirects', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  beforeAll(async () => {
    // Warm up the first page load so later failures point to the redirect under test.
    await get('/v4')
  })

  describe('redirects /v4 requests to /graphql', () => {
    test('graphql homepage', async () => {
      const res = await get('/v4')
      expect(res.statusCode).toBe(302)
      const expectedFinalPath = '/en/graphql'
      expect(res.headers.location).toBe(expectedFinalPath)
    })

    test('graphql enterprise homepage', async () => {
      const res = await get('/enterprise/v4', { followAllRedirects: true })
      expect(res.statusCode).toBe(200)
      const finalPath = new URL(res.url).pathname
      const expectedFinalPath = `/en/enterprise-server@${enterpriseServerReleases.latest}/graphql`
      expect(finalPath).toBe(expectedFinalPath)
    })

    test('graphql overview paths', async () => {
      const oldPath = '/v4/breaking_changes'
      const newPath = '/graphql/overview/breaking-changes'
      const res = await get(oldPath)
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe(`/en${newPath}`)

      const enterpriseRes = await get(`/enterprise${oldPath}`, { followAllRedirects: true })
      expect(enterpriseRes.statusCode).toBe(200)
      const finalPath = new URL(enterpriseRes.url).pathname
      const expectedFinalPath = path.join(
        '/',
        `enterprise-server@${enterpriseServerReleases.latest}`,
        newPath,
      )
      expect(finalPath).toBe(`/en${expectedFinalPath}`)
    })

    test('graphql reference paths with child pages', async () => {
      const sclarRes = await get('/en/v4/scalar/boolean')
      expect(sclarRes.statusCode).toBe(301)
      const sclarResFinalPath = '/en/graphql/reference/other#scalar-boolean'
      expect(sclarRes.headers.location).toBe(sclarResFinalPath)

      const enumRes = await get('/en/v4/enum/searchtype')
      expect(enumRes.statusCode).toBe(301)
      const enumResFinalPath = '/en/graphql/reference/search#enum-searchtype'
      expect(enumRes.headers.location).toBe(enumResFinalPath)
    })
  })

  test('redirects /v3 requests to /rest', async () => {
    let expectedFinalPath
    let res = await get('/v3')
    expect(res.statusCode).toBe(302)
    expectedFinalPath = '/en/rest'
    expect(res.headers.location).toBe(expectedFinalPath)

    // REST subresource paths like activity notifications resolve under the resource page.
    res = await get('/en/v3/activity')
    expect(res.statusCode).toBe(301)
    expectedFinalPath = '/en/rest/activity'
    expect(res.headers.location).toBe(expectedFinalPath)

    // REST subresource paths like activity notifications resolve under the resource page.
    res = await get('/en/v3/activity/notifications')
    expect(res.statusCode).toBe(301)
    expectedFinalPath = '/en/rest/activity/notifications'
    expect(res.headers.location).toBe(expectedFinalPath)

    // The slashes middleware removes trailing slash first, causing two redirects for /v3 URLs.
    res = await get('/en/v3/activity/notifications/')
    expect(res.statusCode).toBe(301)
    expect(res.headers.location).toBe('/en/v3/activity/notifications')

    res = await get('/en/v3/guides/basics-of-authentication')
    expect(res.statusCode).toBe(301)
    expectedFinalPath =
      '/en/apps/oauth-apps/building-oauth-apps/authenticating-to-the-rest-api-with-an-oauth-app'
    expect(res.headers.location).toBe(expectedFinalPath)
  })

  describe('fixtures', () => {
    const FIXTURES = {
      developer: './src/fixtures/fixtures/developer-redirects.json',
      rest: './src/fixtures/fixtures/rest-redirects.json',
      graphql: './src/fixtures/fixtures/graphql-redirects.json',
    }
    for (const [label, file] of Object.entries(FIXTURES)) {
      const fixtures = readJsonFile(file) as Record<string, string>
      // Versioned developer Enterprise paths support up to 2.21; versionless paths use latest.
      const cases = Object.entries(fixtures).map(([oldPath, newPath]) => [
        oldPath,
        newPath.replace(
          '/enterprise-server/',
          `/enterprise-server@${enterpriseServerReleases.latest}/`,
        ),
      ])
      describe(`${label} redirects`, () => {
        test.each(cases)('%s', async (oldPath, newPath) => {
          const res = await get(oldPath)
          const sameFirstPrefix = oldPath.split('/')[1] === newPath.split('/')[1]
          expect(res.statusCode, `${oldPath} did not redirect to ${newPath}`).toBe(
            sameFirstPrefix ? 301 : 302,
          )
          expect(res.headers.location).toBe(newPath)
        })
      })
    }
  })
})
