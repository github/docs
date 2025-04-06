import { beforeAll, describe, expect, test } from 'vitest'

import { get } from '#src/tests/helpers/e2etest.js'

import { allVersionKeys } from '#src/versions/lib/all-versions.js'
import nonEnterpriseDefaultVersion from '#src/versions/lib/non-enterprise-default-version.js'
import { latest } from '#src/versions/lib/enterprise-server-releases.js'

test('redirects without version suffix', async () => {
  const res = await get(`/api/pagelist`)
  expect(res.statusCode).toBe(307)
  expect(res.headers.location).toBe(`/api/pagelist/v1/${nonEnterpriseDefaultVersion}`)
})

test('redirects for ghes@latest', async () => {
  const res = await get(`/api/pagelist/v1/enterprise-server@latest`)
  expect(res.statusCode).toBe(307)
  expect(res.headers.location).toBe(`/api/pagelist/v1/enterprise-server@${latest}`)
})

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
  const res = await get(`/api/pagelist/v1/${versionKey}`)

  test('is reachable, returns 200 OK', async () => {
    expect(res.statusCode).toBe(200)
  })

  // there's a large assortment of possible URLs,
  // even "/en" is an acceptable URL, so regexes capture lots
  test('contains valid urls', async () => {
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

  test('only returns urls that contain /en', async () => {
    const expression = new RegExp(`^/en(/${nonEnterpriseDefaultVersion})?/?.*`)
    res.body
      .trim()
      .split('\n')
      .forEach((permalink: string) => {
        expect(permalink).toMatch(expression)
      })
  })
})
