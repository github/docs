import fs from 'fs'
import path from 'path'
import { describe, expect, test } from '@jest/globals'

import { allVersions } from '../../lib/all-versions.js'
import getApplicableVersions from '../../lib/get-applicable-versions.js'

describe('Versions frontmatter', () => {
  test('wildcard', async () => {
    const versions = {
      fpt: '*',
      ghae: '*',
    }
    const applicableVersions = getApplicableVersions(versions)
    expect(applicableVersions.includes('github-ae@latest')).toBe(true)
  })

  test('greater than', async () => {
    const versions = {
      fpt: '*',
      ghae: '>3.2',
    }
    const applicableVersions = getApplicableVersions(versions)
    expect(applicableVersions.includes('github-ae@latest')).toBe(true)
  })

  test('less than', async () => {
    const versions = {
      fpt: '*',
      ghae: '<3.2',
    }
    const applicableVersions = getApplicableVersions(versions)
    expect(applicableVersions.includes('github-ae@latest')).toBe(false)
  })
})

describe('general cases', () => {
  test('simply a wildcard', () => {
    const applicableVersions = getApplicableVersions('*')
    expect(applicableVersions.length).toBe(Object.keys(allVersions).length)
    expect(Object.keys(allVersions).every((v) => applicableVersions.includes(v)))
  })
  test("using 'features'", () => {
    const possibleFeatures = fs
      .readdirSync('data/features')
      .filter((name) => name !== 'README.md')
      .map((name) => path.basename(name, '.yml'))
    for (const possibleFeature of possibleFeatures) {
      const versions = { feature: possibleFeature }
      const applicableVersions = getApplicableVersions(versions)
      expect(applicableVersions.every((v) => Object.keys(allVersions).includes(v)))
    }
    // Same thing but as an array each time
    for (const possibleFeature of possibleFeatures) {
      const versions = { feature: [possibleFeature] }
      const applicableVersions = getApplicableVersions(versions)
      expect(applicableVersions.every((v) => Object.keys(allVersions).includes(v)))
    }
  })
})

describe('invalid versions', () => {
  test('invalid versions', () => {
    expect(() => {
      getApplicableVersions(undefined, 'foo.md')
    }).toThrow('No `versions` frontmatter found in foo.md')
  })

  test('no valid versions found at all', () => {
    const versions = {
      never: '*',
      heard: 'of',
    }
    expect(() => {
      getApplicableVersions(versions, 'foo.md')
    }).toThrow(
      'foo.md is not available in any currently supported version. Make sure the `versions` property includes at least one supported version.',
    )
  })
})
