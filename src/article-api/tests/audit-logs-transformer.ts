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

    // Check for the main heading
    expect(res.body).toContain('# Security log events')

    // Check for intro
    expect(res.body).toContain(
      'Learn about security log events recorded for your personal account.',
    )

    // Check for manual content section heading
    expect(res.body).toContain('## About security log events')

    // Check for new main heading
    expect(res.body).toContain('## Audit log events')

    // Check for category heading
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

    // Check for event action header
    // #### `action.name`
    expect(res.body).toMatch(/#### `[\w.]+`/)

    // Check for fields section
    expect(res.body).toContain('**Fields:**')

    // Check for reference section
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
