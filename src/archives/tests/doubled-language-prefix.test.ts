import { describe, expect, test } from 'vitest'

import { getDoubledLanguagePrefixRedirect } from '@/archives/lib/doubled-language-prefix'

describe('getDoubledLanguagePrefixRedirect', () => {
  test('drops the stale leading language from archived enterprise paths', () => {
    expect(getDoubledLanguagePrefixRedirect('/es/ja/enterprise-server@3.17/get-started')).toBe(
      '/ja/enterprise-server@3.17/get-started',
    )
    expect(getDoubledLanguagePrefixRedirect('/ja/en/enterprise-server@3.17')).toBe(
      '/en/enterprise-server@3.17',
    )
    expect(getDoubledLanguagePrefixRedirect('/pt/zh/enterprise/2.20/admin')).toBe(
      '/zh/enterprise/2.20/admin',
    )
  })

  test('ignores paths without two known language prefixes before an enterprise path', () => {
    expect(getDoubledLanguagePrefixRedirect('/ja/enterprise-server@3.17/get-started')).toBeNull()
    expect(getDoubledLanguagePrefixRedirect('/es/xx/enterprise-server@3.17/get-started')).toBeNull()
    expect(getDoubledLanguagePrefixRedirect('/xx/ja/enterprise-server@3.17/get-started')).toBeNull()
    expect(getDoubledLanguagePrefixRedirect('/es/ja/get-started/enterprise-server@3.17')).toBeNull()
    expect(getDoubledLanguagePrefixRedirect('/es/japan/enterprise-server@3.17')).toBeNull()
  })
})
