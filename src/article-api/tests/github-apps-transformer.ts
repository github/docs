import { beforeAll, describe, expect, test } from 'vitest'

import { get } from '@/tests/helpers/e2etest'

const makeURL = (pathname: string, apiVersion?: string): string => {
  const params = new URLSearchParams({ pathname })
  if (apiVersion) {
    params.set('apiVersion', apiVersion)
  }
  return `/api/article/body?${params}`
}

describe('GitHub Apps transformer', () => {
  beforeAll(() => {
    if (!process.env.ROOT) {
      console.warn(
        'WARNING: The GitHub Apps transformer tests require the ROOT environment variable to be set to the fixture root',
      )
    }
  })

  describe('Endpoints pages (list format)', () => {
    test('server-to-server-rest page renders with markdown structure', async () => {
      const res = await get(
        makeURL(
          '/en/rest/authentication/endpoints-available-for-github-app-installation-access-tokens',
        ),
      )
      expect(res.statusCode).toBe(200)
      expect(res.headers['content-type']).toContain('text/markdown')

      // Check for the main heading
      expect(res.body).toContain('# Endpoints available for GitHub App installation access tokens')

      // Should have category headings as h2
      expect(res.body).toMatch(/^## /m)

      // Should not contain HTML comments
      expect(res.body).not.toMatch(/<!--.*?-->/)
    })

    test('user-to-server-rest page renders with markdown structure', async () => {
      const res = await get(
        makeURL('/en/rest/authentication/endpoints-available-for-github-app-user-access-tokens'),
      )
      expect(res.statusCode).toBe(200)
      expect(res.headers['content-type']).toContain('text/markdown')

      // Check for the main heading
      expect(res.body).toContain('# Endpoints available for GitHub App user access tokens')

      // Should have category headings as h2
      expect(res.body).toMatch(/^## /m)
    })

    test('fine-grained-pat page renders with markdown structure', async () => {
      const res = await get(
        makeURL(
          '/en/rest/authentication/endpoints-available-for-fine-grained-personal-access-tokens',
        ),
      )
      expect(res.statusCode).toBe(200)
      expect(res.headers['content-type']).toContain('text/markdown')

      // Check for the main heading
      expect(res.body).toContain('# Endpoints available for fine-grained personal access tokens')

      // Should have category headings as h2
      expect(res.body).toMatch(/^## /m)
    })

    test('endpoints are formatted as bullet lists', async () => {
      const DEBUG = process.env.RUNNER_DEBUG === '1' || process.env.DEBUG === '1'
      const url = makeURL(
        '/en/rest/authentication/endpoints-available-for-github-app-installation-access-tokens',
      )
      const startTime = DEBUG ? Date.now() : 0
      if (DEBUG) console.log(`[DEBUG] Test sending request to ${url}`)
      const res = await get(url)
      if (DEBUG)
        console.log(`[DEBUG] Test response: ${res.statusCode} in ${Date.now() - startTime}ms`)
      expect(res.statusCode).toBe(200)

      // Check for bullet list items with asterisks (per content guidelines)
      expect(res.body).toContain('*')
      expect(res.body).toMatch(/\* \[`[A-Z]+ \//)
    })

    test('endpoints have correct HTTP verbs', async () => {
      const res = await get(
        makeURL(
          '/en/rest/authentication/endpoints-available-for-github-app-installation-access-tokens',
        ),
      )
      expect(res.statusCode).toBe(200)

      // Check for common HTTP verbs
      expect(res.body).toMatch(/`GET \//)
      // May also have POST, PUT, PATCH, DELETE depending on data
    })

    test('endpoints link to REST API documentation', async () => {
      const res = await get(
        makeURL(
          '/en/rest/authentication/endpoints-available-for-github-app-installation-access-tokens',
        ),
      )
      expect(res.statusCode).toBe(200)

      // Links should point to /en/rest/ paths with anchors
      expect(res.body).toMatch(/\(\/en\/rest\/[^)]+#[^)]+\)/)
    })
  })

  describe('Permissions pages (table format)', () => {
    test('server-to-server-permissions page renders with markdown structure', async () => {
      const res = await get(makeURL('/en/rest/authentication/permissions-required-for-github-apps'))
      expect(res.statusCode).toBe(200)
      expect(res.headers['content-type']).toContain('text/markdown')

      // Check for the main heading
      expect(res.body).toContain('# Permissions required for GitHub Apps')

      // Should have permission group headings as h2
      expect(res.body).toMatch(/^## /m)
    })

    test('fine-grained-pat-permissions page renders with markdown structure', async () => {
      const res = await get(
        makeURL(
          '/en/rest/authentication/permissions-required-for-fine-grained-personal-access-tokens',
        ),
      )
      expect(res.statusCode).toBe(200)
      expect(res.headers['content-type']).toContain('text/markdown')

      // Check for the main heading
      expect(res.body).toContain('# Permissions required for fine-grained personal access tokens')

      // Should have permission group headings as h2
      expect(res.body).toMatch(/^## /m)
    })

    test('permissions are formatted as markdown tables', async () => {
      const res = await get(makeURL('/en/rest/authentication/permissions-required-for-github-apps'))
      expect(res.statusCode).toBe(200)

      // Check for table structure
      expect(res.body).toContain('| Endpoint | Access | Tokens | Additional Permissions |')
      expect(res.body).toContain('|----------|--------|--------|------------------------|')
    })

    test('table includes access levels', async () => {
      const res = await get(makeURL('/en/rest/authentication/permissions-required-for-github-apps'))
      expect(res.statusCode).toBe(200)

      // Check for access levels in table cells
      expect(res.body).toMatch(/\| read \|/)
      expect(res.body).toMatch(/\| write \|/)
      // May also have admin depending on data
    })

    test('table includes token types (IAT/UAT)', async () => {
      const res = await get(makeURL('/en/rest/authentication/permissions-required-for-github-apps'))
      expect(res.statusCode).toBe(200)

      // Check for IAT and UAT links in Tokens column
      expect(res.body).toMatch(/\[IAT\]\(\/en\/apps\/creating-github-apps\//)
      expect(res.body).toMatch(/\[UAT\]\(\/en\/apps\/creating-github-apps\//)
    })

    test('table shows additional permissions with checkmark/cross', async () => {
      const res = await get(makeURL('/en/rest/authentication/permissions-required-for-github-apps'))
      expect(res.statusCode).toBe(200)

      // Check for checkmark (✓) or cross (✗) symbols in Additional Permissions column
      expect(res.body).toMatch(/\| [✓✗] \|/)
    })

    test('permissions are grouped by permission name', async () => {
      const res = await get(makeURL('/en/rest/authentication/permissions-required-for-github-apps'))
      expect(res.statusCode).toBe(200)

      // Should have multiple permission group headings
      const headings = res.body.match(/^## .* permissions for .*/gm)
      expect(headings).toBeTruthy()
      if (headings) {
        expect(headings.length).toBeGreaterThan(1)
      }
    })
  })

  describe('Common functionality', () => {
    test('manual content is included', async () => {
      const res = await get(makeURL('/en/rest/authentication/permissions-required-for-github-apps'))
      expect(res.statusCode).toBe(200)

      // Check for manual content that should be in the markdown
      expect(res.body).toContain('GitHub Apps are created with a set of permissions')
    })

    test('intro is rendered', async () => {
      const res = await get(makeURL('/en/rest/authentication/permissions-required-for-github-apps'))
      expect(res.statusCode).toBe(200)

      // The intro should be present (check frontmatter intro)
      expect(res.body).toMatch(/For each permission granted/)
    })

    test('Liquid tags are rendered in content', async () => {
      const res = await get(makeURL('/en/rest/authentication/permissions-required-for-github-apps'))
      expect(res.statusCode).toBe(200)

      // Liquid tags should be rendered (fixture might use simplified names)
      expect(res.body).not.toContain('{% data variables.product.prodname_github_app %}')
    })

    test('AUTOTITLE links are resolved', async () => {
      const res = await get(makeURL('/en/rest/authentication/permissions-required-for-github-apps'))
      expect(res.statusCode).toBe(200)

      // Check that AUTOTITLE has been resolved
      expect(res.body).not.toContain('[AUTOTITLE]')
      // Should have actual link text
      expect(res.body).toMatch(/\[.*?\]\(\/en\/apps\//)
    })

    test('API version parameter is supported', async () => {
      const res = await get(
        makeURL('/en/rest/authentication/permissions-required-for-github-apps', '2022-11-28'),
      )
      expect(res.statusCode).toBe(200)
      expect(res.headers['content-type']).toContain('text/markdown')
    })

    test('Invalid apiVersion returns 400 error', async () => {
      const res = await get(
        makeURL('/en/rest/authentication/permissions-required-for-github-apps', 'invalid-version'),
      )

      expect(res.statusCode).toBe(400)
      const parsed = JSON.parse(res.body)
      expect(parsed.error).toContain("Invalid apiVersion 'invalid-version'")
    })

    test('Missing apiVersion defaults to latest', async () => {
      const res = await get(makeURL('/en/rest/authentication/permissions-required-for-github-apps'))
      expect(res.statusCode).toBe(200)
      // Should work without explicit apiVersion
    })

    test('Non-GitHub Apps pages are not transformed', async () => {
      const res = await get(makeURL('/en/get-started/start-your-journey/hello-world'))
      expect(res.statusCode).toBe(200)

      // Regular article pages should still work, they just won't use the GitHub Apps transformer
      expect(res.body).toContain('## Introduction')
    })
  })
})
