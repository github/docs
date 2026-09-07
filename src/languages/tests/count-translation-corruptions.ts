import { describe, expect, test } from 'vitest'

import { allVersions } from '@/versions/lib/all-versions'
import { resolveRequestedVersions } from '@/languages/scripts/count-translation-corruptions'

// Pick a real GHES key at runtime rather than hard-coding one — allVersions
// only contains currently-supported releases, so a literal like
// `enterprise-server@3.16` would start failing once it rolls off support.
const someGhesVersion = Object.keys(allVersions).find((v) => v.startsWith('enterprise-server@'))!

describe('resolveRequestedVersions', () => {
  test('defaults to every version when no option is passed', () => {
    expect(resolveRequestedVersions()).toEqual(Object.keys(allVersions))
    expect(resolveRequestedVersions('')).toEqual(Object.keys(allVersions))
  })

  test('parses a comma-separated list and trims whitespace', () => {
    expect(resolveRequestedVersions(`free-pro-team@latest, ${someGhesVersion}`)).toEqual([
      'free-pro-team@latest',
      someGhesVersion,
    ])
  })

  test('dedupes repeated versions, preserving first-seen order', () => {
    expect(
      resolveRequestedVersions(`free-pro-team@latest, ${someGhesVersion}, free-pro-team@latest`),
    ).toEqual(['free-pro-team@latest', someGhesVersion])
  })

  test('rejects versions that are not real allVersions keys', () => {
    // `enterprise-server@latest` is a common mistake — it is not a real key.
    expect(() => resolveRequestedVersions('enterprise-server@latest')).toThrow(
      /Invalid version\(s\): enterprise-server@latest/,
    )
    expect(() => resolveRequestedVersions('free-pro-team@latest,nope')).toThrow(/nope/)
  })
})
