import { describe, expect, test } from 'vitest'

import { getAuditLogEvents } from '@/audit-logs/lib'
import { normalizeReferenceLink } from '@/audit-logs/lib/reference-links'

describe('normalizeReferenceLink', () => {
  test('converts absolute docs.github.com URLs to site-relative paths', () => {
    expect(
      normalizeReferenceLink(
        'https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication',
      ),
    ).toBe(
      '/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication',
    )
  })

  test('keeps the anchor of absolute docs.github.com URLs', () => {
    expect(
      normalizeReferenceLink(
        'https://docs.github.com/en/authentication/troubleshooting#some-heading',
      ),
    ).toBe('/authentication/troubleshooting#some-heading')
  })

  test('adds a leading slash to relative paths', () => {
    expect(normalizeReferenceLink('authentication/troubleshooting')).toBe(
      '/authentication/troubleshooting',
    )
  })

  test('leaves site-relative paths unchanged', () => {
    expect(normalizeReferenceLink('/authentication/troubleshooting')).toBe(
      '/authentication/troubleshooting',
    )
  })

  test('leaves URLs on other hosts unchanged', () => {
    expect(normalizeReferenceLink('https://example.com/x')).toBe('https://example.com/x')
  })

  test('no user audit log reference link resolves to an absolute URL path', () => {
    const events = getAuditLogEvents('user', 'free-pro-team@latest')
    const links = events
      .flatMap((event) => (event.docs_reference_links || '').split(/[,\s]+/))
      .filter((link) => link && link !== 'N/A')
      .map(normalizeReferenceLink)
    expect(links.length).toBeGreaterThan(0)
    expect(links.filter((link) => link.startsWith('/http'))).toEqual([])
  })
})
