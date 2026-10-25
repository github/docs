import { describe, expect, test } from 'vitest'

import { createHasPage, versionReferenceLinks } from '@/audit-logs/lib/version-reference-links'
import type { Context } from '@/types'

const ghesPages = new Set([
  '/en/enterprise-server@3.18/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise',
  '/en/enterprise-server@3.18/organizations/managing-organization-settings/renaming-an-organization',
])

function hasPage(href: string) {
  return ghesPages.has(href)
}

const ghesOptions = { language: 'en', currentVersion: 'enterprise-server@3.18', hasPage }

describe('versionReferenceLinks', () => {
  test('adds language and version when the page exists in the current version', () => {
    expect(
      versionReferenceLinks(
        '/organizations/managing-organization-settings/renaming-an-organization#about-renaming',
        ghesOptions,
      ),
    ).toBe(
      '/en/enterprise-server@3.18/organizations/managing-organization-settings/renaming-an-organization#about-renaming',
    )
  })

  test('adds a leading slash to links that have none', () => {
    expect(
      versionReferenceLinks(
        'admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise',
        ghesOptions,
      ),
    ).toBe(
      '/en/enterprise-server@3.18/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise',
    )
  })

  test('keeps the original link when the page is missing from the current version', () => {
    const link = '/billing/managing-the-plan-for-your-github-account/about-billing-for-plans'
    expect(versionReferenceLinks(link, ghesOptions)).toBe(link)
  })

  test('rewrites each link in a list and keeps the separators', () => {
    expect(
      versionReferenceLinks(
        '/organizations/managing-organization-settings/renaming-an-organization, /billing/managing-the-plan-for-your-github-account/about-billing-for-plans',
        ghesOptions,
      ),
    ).toBe(
      '/en/enterprise-server@3.18/organizations/managing-organization-settings/renaming-an-organization, /billing/managing-the-plan-for-your-github-account/about-billing-for-plans',
    )
  })

  test('leaves links unchanged for the default version', () => {
    const link = '/organizations/managing-organization-settings/renaming-an-organization'
    expect(
      versionReferenceLinks(link, {
        language: 'en',
        currentVersion: 'free-pro-team@latest',
        hasPage: () => true,
      }),
    ).toBe(link)
  })

  test('leaves absolute URLs unchanged', () => {
    const link =
      'https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication'
    expect(versionReferenceLinks(link, { ...ghesOptions, hasPage: () => true })).toBe(link)
  })
})

describe('createHasPage', () => {
  const actionsPolicies =
    '/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise'
  const actionsPoliciesAlias =
    '/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise'
  const renaming = '/organizations/managing-organization-settings/renaming-an-organization'
  const cloudOnly = '/admin/managing-your-enterprise-account/cloud-only-article'
  const brokenAlias = '/admin/old/redirect-to-missing-page'

  const context = {
    userLanguage: 'en',
    pages: {
      [`/en/enterprise-server@3.18${actionsPolicies}`]: {},
      [`/en/enterprise-server@3.18${renaming}`]: {},
      [`/en/enterprise-cloud@latest${cloudOnly}`]: {},
    },
    redirects: {
      [`/enterprise-server@3.18${actionsPoliciesAlias}`]: `/enterprise-server@3.18${actionsPolicies}`,
      [`/enterprise-server@3.18${cloudOnly}`]: `/enterprise-cloud@latest${cloudOnly}`,
      [`/enterprise-server@3.18${brokenAlias}`]: '/enterprise-server@3.18/admin/missing-page',
    },
  } as unknown as Context
  const options = {
    language: 'en',
    currentVersion: 'enterprise-server@3.18',
    hasPage: createHasPage(context, 'en', 'enterprise-server@3.18'),
  }

  test('adds the current version to links for pages in that version', () => {
    expect(versionReferenceLinks(renaming, options)).toBe(`/en/enterprise-server@3.18${renaming}`)
  })

  test('adds the current version to redirect aliases that stay in that version', () => {
    expect(versionReferenceLinks(actionsPoliciesAlias, options)).toBe(
      `/en/enterprise-server@3.18${actionsPoliciesAlias}`,
    )
  })

  test('keeps links whose redirect leaves the current version', () => {
    expect(versionReferenceLinks(cloudOnly, options)).toBe(cloudOnly)
  })

  test('keeps links whose redirect target is not a page', () => {
    expect(versionReferenceLinks(brokenAlias, options)).toBe(brokenAlias)
  })

  test('keeps links with no page and no redirect', () => {
    const link = '/billing/managing-the-plan-for-your-github-account/about-billing-for-plans'
    expect(versionReferenceLinks(link, options)).toBe(link)
  })
})
