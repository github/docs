import { beforeAll, describe, expect, test } from 'vitest'

import { get } from '@/tests/helpers/e2etest'

const makeURL = (pathname: string): string => {
  const params = new URLSearchParams({ pathname })
  return `/api/article/body?${params}`
}

describe('Audit Logs transformer', () => {
  beforeAll(() => {
    if (!process.env.ROOT) {
      console.warn(
        'WARNING: The Audit Logs transformer tests require the ROOT environment variable to be set to the fixture root',
      )
    }
  })

  test('Security log events page renders with markdown structure', async () => {
    const res = await get(
      makeURL('/en/authentication/keeping-your-account-and-data-secure/security-log-events'),
    )
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toContain('text/markdown')

    expect(res.body).toContain('# Security log events')

    expect(res.body).toContain(
      'Learn about security log events recorded for your personal account.',
    )

    expect(res.body).toContain('## About security log events')

    expect(res.body).toContain('## Audit log events')

    // The template renders "### Category"
    expect(res.body).toMatch(/### \w+/)
  })

  test('Enterprise audit log events page renders with markdown structure', async () => {
    const res = await get(
      makeURL(
        '/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise',
      ),
    )
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toContain('text/markdown')

    expect(res.body).toContain('# Audit log events for your enterprise')
  })

  test('Organization audit log events page renders with markdown structure', async () => {
    const res = await get(
      makeURL(
        '/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization',
      ),
    )
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toContain('text/markdown')

    expect(res.body).toContain('# Audit log events for your organization')
  })

  test('Events are formatted correctly', async () => {
    const res = await get(
      makeURL('/en/authentication/keeping-your-account-and-data-secure/security-log-events'),
    )
    expect(res.statusCode).toBe(200)

    // #### `action.name`
    expect(res.body).toMatch(/#### `[\w.]+`/)

    const body = res.body
    const hasCommonFields = body.includes('### Common fields')
    const hasAdditionalFields = body.includes('**Additional fields:**')
    expect(hasCommonFields || hasAdditionalFields).toBe(true)

    if (hasCommonFields) {
      const commonFieldsIndex = body.indexOf('### Common fields')
      const commonFieldsSection = body.slice(
        commonFieldsIndex,
        body.indexOf('\n###', commonFieldsIndex + 1),
      )
      expect(commonFieldsSection).toContain('`action`')
    }

    // Common fields are listed once in their own section, never repeated per event.
    if (hasAdditionalFields) {
      const additionalSections = body.split('**Additional fields:**').slice(1)
      for (const section of additionalSections) {
        const fieldsLine = section.split('\n')[0]
        expect(fieldsLine).not.toContain('`action`')
      }
    }

    expect(res.body).toContain('**Reference:**')
  })

  test('Manual content is preserved', async () => {
    const res = await get(
      makeURL('/en/authentication/keeping-your-account-and-data-secure/security-log-events'),
    )
    expect(res.statusCode).toBe(200)

    // The source file has manual content before the marker
    expect(res.body).toContain('## About security log events')
  })
})
