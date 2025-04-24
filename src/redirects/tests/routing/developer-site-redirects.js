import path from 'path'

import { beforeAll, describe, expect, test, vi } from 'vitest'

import enterpriseServerReleases from '#src/versions/lib/enterprise-server-releases.js'
import { get } from '#src/tests/helpers/e2etest.js'
import readJsonFile from '#src/frame/lib/read-json-file.js'

describe('developer redirects', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  beforeAll(async () => {
    // The first page load takes a long time so let's get it out of the way in
    // advance to call out that problem specifically rather than misleadingly
    // attributing it to the first test
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
      const sclarResFinalPath = '/en/graphql/reference/scalars#boolean'
      expect(sclarRes.headers.location).toBe(sclarResFinalPath)

      const enumRes = await get('/en/v4/enum/searchtype')
      expect(enumRes.statusCode).toBe(301)
      const enumResFinalPath = '/en/graphql/reference/enums#searchtype'
      expect(enumRes.headers.location).toBe(enumResFinalPath)
    })
  })

  test('redirects /v3 requests to /rest', async () => {
    let expectedFinalPath
    let res = await get('/v3')
    expect(res.statusCode).toBe(302)
    expectedFinalPath = '/en/rest'
    expect(res.headers.location).toBe(expectedFinalPath)

    // REST subresources like activity notifications don't have their own page
    // anymore, so redirect to an anchor on the resource page
    res = await get('/en/v3/activity')
    expect(res.statusCode).toBe(301)
    expectedFinalPath = '/en/rest/activity'
    expect(res.headers.location).toBe(expectedFinalPath)

    // REST subresources like activity notifications don't have their own page
    // anymore, so redirect to an anchor on the resource page
    res = await get('/en/v3/activity/notifications')
    expect(res.statusCode).toBe(301)
    expectedFinalPath = '/en/rest/activity/notifications'
    expect(res.headers.location).toBe(expectedFinalPath)

    // trailing slashes are handled separately by the `slashes` module;
    // any request to a /v3 URL with a trailing slash will be redirected twice
    res = await get('/en/v3/activity/notifications/')
    expect(res.statusCode).toBe(301)
    expect(res.headers.location).toBe('/en/v3/activity/notifications')

    // non-reference redirects (e.g. guides)
    res = await get('/en/v3/guides/basics-of-authentication')
    expect(res.statusCode).toBe(301)
    expectedFinalPath =
      '/en/apps/oauth-apps/building-oauth-apps/authenticating-to-the-rest-api-with-an-oauth-app'
    expect(res.headers.location).toBe(expectedFinalPath)
  })

  describe('fixtures', () => {
    test.each(['developer', 'rest', 'graphql'])('%s redirects', async (label) => {
      const FIXTURES = {
        developer: './src/fixtures/fixtures/developer-redirects.json',
        rest: './src/fixtures/fixtures/rest-redirects.json',
        graphql: './src/fixtures/fixtures/graphql-redirects.json',
      }
      if (!(label in FIXTURES)) throw new Error('unrecognized label')
      const fixtures = readJsonFile(FIXTURES[label])
      // Don't use a `Promise.all()` because it's actually slower
      // because of all the eventloop context switching.
      for (let [oldPath, newPath] of Object.entries(fixtures)) {
        // REST and GraphQL developer Enterprise paths with a version are only supported up to 2.21.
        // We make an exception to always redirect versionless paths to the latest version.
        newPath = newPath.replace(
          '/enterprise-server/',
          `/enterprise-server@${enterpriseServerReleases.latest}/`,
        )
        const res = await get(oldPath)
        const sameFirstPrefix = oldPath.split('/')[1] === newPath.split('/')[1]
        expect(res.statusCode, `${oldPath} did not redirect to ${newPath}`).toBe(
          sameFirstPrefix ? 301 : 302,
        )
        expect(res.headers.location).toBe(newPath)
      }
    })
  })
})
