import { describe, expect, test } from 'vitest'

import patterns from '@/frame/lib/patterns'
import EnterpriseServerReleases from '@/versions/lib/enterprise-server-releases'
const {
  supported,
  deprecated,
  all,
  latest,
  oldestSupported,
  nextDeprecationDate,
  releasesWithOldestDeprecationDate,
} = EnterpriseServerReleases

describe('enterpriseServerReleases module', () => {
  test('includes an array of `supported` versions', async () => {
    expect(Array.isArray(supported)).toBe(true)
    expect(supported.includes(latest)).toBe(true)
    expect(supported.includes(oldestSupported)).toBe(true)
    expect(supported.includes('2.12')).toBe(false)
  })

  test('includes an array of `deprecated` versions', async () => {
    expect(Array.isArray(deprecated)).toBe(true)
    expect(deprecated.includes('2.12')).toBe(true)
    expect(deprecated.includes(latest)).toBe(false)
    expect(deprecated.includes(oldestSupported)).toBe(false)
  })

  test('includes an array of `all` versions', async () => {
    expect(Array.isArray(all)).toBe(true)
    expect(all.length).toBeGreaterThan(10)
    expect(all).toEqual(supported.concat(deprecated))
  })

  test('has a `latest` convenience property', async () => {
    expect(latest).toEqual(supported[0])
  })

  test('has an `oldestSupported` convenience property', async () => {
    expect(oldestSupported).toEqual(supported[supported.length - 1])
  })

  test('has a `nextDeprecationDate` property', async () => {
    expect(nextDeprecationDate).toMatch(patterns.ymd)
  })

  test('has a `releasesWithOldestDeprecationDate` property', async () => {
    expect(Array.isArray(releasesWithOldestDeprecationDate)).toBe(true)
    expect(releasesWithOldestDeprecationDate.length).toBeGreaterThan(0)
    expect(releasesWithOldestDeprecationDate).toContain(oldestSupported)
  })
})
