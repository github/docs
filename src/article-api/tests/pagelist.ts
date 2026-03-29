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

    for (const permalink of res.body.trim().split('\n')) {
      expect(permalink).toMatch(expression)
    }
  })

  test('English requests only returns urls that contain /en', async () => {
    const expression = new RegExp(`^/en(/${nonEnterpriseDefaultVersion})?/?.*`)
    for (const permalink of res.body.trim().split('\n')) {
      expect(permalink).toMatch(expression)
    }
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

describe('Versions API', () => {
  test('returns 200 and JSON with version information', async () => {
    const res = await get('/api/pagelist/versions')
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toMatch(/application\/json/)

    const data = JSON.parse(res.body)

    // Check top-level keys exist
    expect(data).toHaveProperty('versions')
    expect(data).toHaveProperty('ghesVersions')
    expect(data).toHaveProperty('ghesLatest')
    expect(data).toHaveProperty('ghesLatestStable')
    expect(data).toHaveProperty('ghesReleaseCandidate')
    expect(data).toHaveProperty('ghesDeprecated')
    expect(data).toHaveProperty('allVersions')

    // Versions array should contain expected values
    expect(Array.isArray(data.versions)).toBe(true)
    expect(data.versions).toContain('free-pro-team@latest')
    expect(data.versions).toContain('enterprise-cloud@latest')

    // GHES versions should be an array of version strings
    expect(Array.isArray(data.ghesVersions)).toBe(true)
    expect(data.ghesVersions.length).toBeGreaterThan(0)
    expect(data.ghesVersions[0]).toMatch(/^\d+\.\d+$/)

    // ghesLatest should be a valid version string
    expect(data.ghesLatest).toMatch(/^\d+\.\d+$/)

    // allVersions should be an object with version details
    expect(typeof data.allVersions).toBe('object')
    expect(data.allVersions['free-pro-team@latest']).toHaveProperty('version')
    expect(data.allVersions['free-pro-team@latest']).toHaveProperty('versionTitle')
  })
})

describe('Languages API', () => {
  test('returns 200 and JSON with language information', async () => {
    const res = await get('/api/pagelist/languages')
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toMatch(/application\/json/)

    const data = JSON.parse(res.body)

    // Check top-level keys exist
    expect(data).toHaveProperty('languages')
    expect(data).toHaveProperty('allLanguages')

    // Languages array should contain expected values
    expect(Array.isArray(data.languages)).toBe(true)
    expect(data.languages).toContain('en')
    expect(data.languages).toContain('ja')
    expect(data.languages).toContain('es')

    // allLanguages should be an object with language details
    expect(typeof data.allLanguages).toBe('object')
    expect(data.allLanguages.en).toHaveProperty('name')
    expect(data.allLanguages.en).toHaveProperty('code')
    expect(data.allLanguages.en).toHaveProperty('hreflang')
    expect(data.allLanguages.en).toHaveProperty('locale')
    expect(data.allLanguages.en.name).toBe('English')

    // Should not contain redirectPatterns (not JSON serializable)
    expect(data.allLanguages.ja).not.toHaveProperty('redirectPatterns')
  })
})
