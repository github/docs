import { describe, expect, test } from 'vitest'

import { getIntroLinksForVersion } from '@/landings/lib/intro-links'
import { allVersions } from '@/versions/lib/all-versions'
import { latest } from '@/versions/lib/enterprise-server-releases'
import nonEnterpriseDefaultVersion from '@/versions/lib/non-enterprise-default-version'
import type { Context } from '@/types'

const introLinks = {
  overview: 'https://github.com',
  'custom link!': 'https://github.com/features',
  quickstart: '/get-started/quickstart',
  reference: '/get-started/reference',
  missing: '/get-started/missing',
}

const pages = {
  '/en/get-started/quickstart': {
    applicableVersions: [nonEnterpriseDefaultVersion, 'enterprise-cloud@latest'],
  },
  '/en/get-started/reference': { applicableVersions: Object.keys(allVersions) },
} as unknown as Context['pages']

const context = { currentLanguage: 'ja', pages, redirects: {} }

describe('getIntroLinksForVersion', () => {
  test('drops internal links whose target page is not in the current version', () => {
    const result = getIntroLinksForVersion(introLinks, {
      ...context,
      currentVersion: `enterprise-server@${latest}`,
    })
    expect(Object.keys(result)).toEqual(['overview', 'custom link!', 'reference', 'missing'])
  })

  test('keeps links whose target page is in the current version', () => {
    const result = getIntroLinksForVersion(introLinks, {
      ...context,
      currentVersion: 'enterprise-cloud@latest',
    })
    expect(result).toEqual(introLinks)
  })

  test('keeps every link on the default version', () => {
    const result = getIntroLinksForVersion(introLinks, {
      ...context,
      currentVersion: nonEnterpriseDefaultVersion,
    })
    expect(result).toBe(introLinks)
  })

  test('does not change the input map', () => {
    const input = { ...introLinks }
    getIntroLinksForVersion(input, { ...context, currentVersion: `enterprise-server@${latest}` })
    expect(input).toEqual(introLinks)
  })
})
