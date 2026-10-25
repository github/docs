import { describe, expect, test } from 'vitest'

import { isRestPath } from '@/rest/lib/is-rest-path'

describe('isRestPath', () => {
  test('matches unversioned REST paths', () => {
    expect(isRestPath('/rest')).toBe(true)
    expect(isRestPath('/rest#statuses')).toBe(true)
    expect(isRestPath('/rest/repos#statuses')).toBe(true)
    expect(isRestPath('/rest/repos?apiVersion=2022-11-28#statuses')).toBe(true)
  })

  test('matches versioned REST paths', () => {
    expect(
      isRestPath('/enterprise-cloud@latest/rest/enterprise-admin#code-security-and-analysis'),
    ).toBe(true)
    expect(isRestPath('/enterprise-server@3.18/rest/repos#statuses')).toBe(true)
    expect(isRestPath('/free-pro-team@latest/rest/repos#deploy-keys')).toBe(true)
  })

  test('does not match non-REST paths', () => {
    expect(isRestPath('/')).toBe(false)
    expect(isRestPath('/enterprise-cloud@latest/admin#x')).toBe(false)
    expect(isRestPath('/restricted#x')).toBe(false)
    expect(isRestPath('/enterprise-server@3.18/restricted#x')).toBe(false)
    expect(isRestPath('/graphql/rest#x')).toBe(false)
  })
})
