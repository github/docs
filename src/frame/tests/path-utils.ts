import { describe, expect, test } from 'vitest'

import { getLangFromPath, getProductStringFromPath } from '@/frame/lib/path-utils'

describe('getLangFromPath', () => {
  test('returns null when the first segment is not a language code', () => {
    expect(getLangFromPath('/free-pro-team')).toBeNull()
    expect(getLangFromPath('/free-pro-team@latest')).toBeNull()
    expect(getLangFromPath('/enterprise-cloud')).toBeNull()
    expect(getLangFromPath('/enterprise-server')).toBeNull()
    expect(getLangFromPath('/github/foo')).toBeNull()
  })

  test('returns the language code from the first segment', () => {
    expect(getLangFromPath('/en')).toBe('en')
    expect(getLangFromPath('/fr')).toBe('fr')
    expect(getLangFromPath('/en?x=1')).toBe('en')
    expect(getLangFromPath('/fr/free-pro-team')).toBe('fr')
    expect(getLangFromPath('/fr/free-pro-team@latest')).toBe('fr')
    expect(getLangFromPath('/ja/enterprise-server@3.19')).toBe('ja')
  })
})

describe('getProductStringFromPath', () => {
  test('returns "homepage" for root paths', () => {
    expect(getProductStringFromPath('/')).toBe('homepage')
    expect(getProductStringFromPath('/en')).toBe('homepage')
    expect(getProductStringFromPath(undefined)).toBe('homepage')
  })

  test('handles early-access product', () => {
    expect(getProductStringFromPath('/en/early-access/github/overview')).toBe('early-access')
    expect(getProductStringFromPath('/early-access/admin/guides')).toBe('early-access')
  })

  test('handles special products (rest, copilot, get-started)', () => {
    expect(getProductStringFromPath('/en/rest/overview')).toBe('rest')
    expect(getProductStringFromPath('/rest/reference/repos')).toBe('rest')
    expect(getProductStringFromPath('/en/copilot/using-copilot')).toBe('copilot')
    expect(getProductStringFromPath('/copilot/features')).toBe('copilot')
    expect(getProductStringFromPath('/en/get-started/quickstart')).toBe('get-started')
    expect(getProductStringFromPath('/get-started/onboarding')).toBe('get-started')
  })

  test('extracts product from non-versioned paths', () => {
    expect(getProductStringFromPath('/en/github/getting-started')).toBe('github')
    expect(getProductStringFromPath('/actions/quickstart')).toBe('actions')
    expect(getProductStringFromPath('/en/admin/installation')).toBe('admin')
    expect(getProductStringFromPath('/code-security/overview')).toBe('code-security')
  })

  test('extracts product from versioned paths', () => {
    // free-pro-team@latest is a supported version for these paths.
    expect(getProductStringFromPath('/en/free-pro-team@latest/admin/installation')).toBe('admin')
    expect(getProductStringFromPath('/free-pro-team@latest/actions/quickstart')).toBe('actions')
    expect(getProductStringFromPath('/en/free-pro-team@latest/github/getting-started')).toBe(
      'github',
    )
  })

  test('handles enterprise landing pages (version without product)', () => {
    // A version without a product segment resolves to the version string.
    expect(getProductStringFromPath('/en/free-pro-team@latest')).toBe('free-pro-team@latest')
    expect(getProductStringFromPath('/enterprise-server@latest')).toBe('enterprise-server@latest')
  })
})
