import { beforeAll, describe, expect, test } from 'vitest'

import { get } from '@/tests/helpers/e2etest'

import { allVersionKeys } from '@/versions/lib/all-versions'
import nonEnterpriseDefaultVersion from '@/versions/lib/non-enterprise-default-version'

describe.each(allVersionKeys)('pagelist api for %s', async (versionKey) => {
  beforeAll(() => {
    // If you didn't set the `ROOT` variable, the tests will fail rather
    // cryptically. So as a warning for engineers running these tests,
    // alert in case it was accidentally forgotten.
    if (!process.env.ROOT) {
      console.warn(
        'WARNING: The pagelist tests require the ROOT environment variable to be set to the fixture root',
      )
    }
    // Ditto for fixture-based translations to work
    if (!process.env.TRANSLATIONS_FIXTURE_ROOT) {
      console.warn(
        'WARNING: The pagelist tests require the TRANSLATIONS_FIXTURE_ROOT environment variable to be set',
      )
    }
  })

  // queries the pagelist API for each version
  const res = await get(`/api/pagelist/en/${versionKey}`)

  test('is reachable, returns 200 OK', async () => {
    expect(res.statusCode).toBe(200)
  })

  // there's a large assortment of possible URLs,
  // even "/en" is an acceptable URL, so regexes capture lots
  test('contains valid urls matching the requested version', async () => {
    let expression

    // if we're testing the default version, it may be missing
    // from the url altogether so we need a slightly different regex
    if (versionKey === nonEnterpriseDefaultVersion)
      expression = new RegExp(`/\\w{2}(/${versionKey})?/?.*`)
    else expression = new RegExp(`/\\w{2}/${versionKey}/?.*`)

    res.body
      .trim()
      .split('\n')
      .forEach((permalink: string) => {
        expect(permalink).toMatch(expression)
      })
  })

  test('English requests only returns urls that contain /en', async () => {
    const expression = new RegExp(`^/en(/${nonEnterpriseDefaultVersion})?/?.*`)
    res.body
      .trim()
      .split('\n')
      .forEach((permalink: string) => {
        expect(permalink).toMatch(expression)
      })
  })
})

describe('Redirect Tests', () => {
  test('redirects without version suffix', async () => {
    const res = await get(`/api/pagelist`)
    expect(res.statusCode).toBe(308)
    expect(res.headers.location).toBe(`/api/pagelist/en/${nonEnterpriseDefaultVersion}`)
  })

  test('should redirect to /pagelist/en/:product@:version when URL does not include /en', async () => {
    const res = await get('/api/pagelist/free-pro-team@latest')
    expect(res.statusCode).toBe(308)
    expect(res.headers.location).toBe('/api/pagelist/en/free-pro-team@latest')
  })

  test('should redirect to /pagelist/en/free-pro-team@lateset when URL does not include version', async () => {
    const res = await get('/api/pagelist/en')
    expect(res.statusCode).toBe(308)
    expect(res.headers.location).toBe('/api/pagelist/en/free-pro-team@latest')
  })
})
