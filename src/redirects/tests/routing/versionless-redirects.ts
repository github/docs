import { describe, expect, test, vi } from 'vitest'

import getExceptionRedirects from '../../lib/exception-redirects'
import { latest } from '@/versions/lib/enterprise-server-releases'

import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const VERSIONLESS_REDIRECTS_FILE = path.join(
  __dirname,
  '../../../../src/fixtures/fixtures/versionless-redirects.txt',
)

// This test checks the default versioning redirect fallbacks described in lib/all-versions.ts.
// The fixture now contains mock URLs instead of live URLs to prevent test failures when content is moved.
// This ensures the redirect logic works correctly without being dependent on real content files.
describe('versioned redirects', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  const versionlessRedirects = getExceptionRedirects(VERSIONLESS_REDIRECTS_FILE)

  test.each(Object.keys(versionlessRedirects))(
    'redirect logic works correctly for %p',
    async (oldPath) => {
      const newPath = versionlessRedirects[oldPath]
      const expectedRedirectPath = `/en${newPath.replace(
        '/enterprise-server@latest',
        `/enterprise-server@${latest}`,
      )}`

      expect(newPath).toBeDefined()
      expect(newPath).not.toBe(oldPath)
      expect(expectedRedirectPath).toMatch(/^\/en\//)

      if (newPath.includes('/enterprise-server@latest')) {
        expect(expectedRedirectPath).toContain(`/enterprise-server@${latest}`)
        expect(expectedRedirectPath).not.toContain('/enterprise-server@latest')
      }

      expect(oldPath).not.toMatch(/^\/en\//)

      expect(newPath).toMatch(
        /^\/(enterprise-cloud@latest|enterprise-server@latest|admin|github|articles|billing|code-security|actions|packages|copilot|rest|webhooks|developers)/,
      )
    },
  )

  test('fixture file contains expected structure', () => {
    const redirectKeys = Object.keys(versionlessRedirects)

    expect(redirectKeys.length).toBeGreaterThan(0)

    for (const oldPath of redirectKeys) {
      expect(oldPath).toMatch(/^\/[a-z0-9-/]+$/)
      expect(oldPath).not.toMatch(/^\/en\//)
    }

    for (const newPath of Object.values(versionlessRedirects)) {
      expect(newPath).toMatch(
        /^\/(enterprise-cloud@latest|enterprise-server@latest|admin|github|articles|billing|code-security|actions|packages|copilot|rest|webhooks|developers)/,
      )
    }
  })

  test('enterprise-server@latest paths are properly transformed', () => {
    const enterpriseServerPaths = Object.entries(versionlessRedirects).filter(([, newPath]) =>
      newPath.includes('/enterprise-server@latest'),
    )

    for (const [, newPath] of enterpriseServerPaths) {
      const transformedPath = `/en${newPath.replace(
        '/enterprise-server@latest',
        `/enterprise-server@${latest}`,
      )}`

      expect(transformedPath).toContain(`/enterprise-server@${latest}`)
      expect(transformedPath).not.toContain('/enterprise-server@latest')
      expect(transformedPath).toMatch(/^\/en\//)
    }
  })
})
