import { describe, expect, test } from 'vitest'
import { get } from '@/tests/helpers/e2etest'

describe('URL encoding for version paths', () => {
  test('handles URL-encoded @ symbol in enterprise-cloud version', async () => {
    // SharePoint encodes @ as %40, so /en/enterprise-cloud@latest becomes /en/enterprise-cloud%40latest
    const encodedUrl = '/en/enterprise-cloud%40latest/copilot/concepts/chat'
    const res = await get(encodedUrl)

    // Should either:
    // 1. Work directly (200) - the encoded URL should decode and work
    // 2. Redirect (301/302) to the proper decoded URL
    // Should NOT return 404
    expect([200, 301, 302]).toContain(res.statusCode)

    if (res.statusCode === 301 || res.statusCode === 302) {
      // If it redirects, it should redirect to the decoded version
      expect(res.headers.location).toBe('/en/enterprise-cloud@latest/copilot/concepts/chat')
    }
  })

  test('handles URL-encoded @ symbol in enterprise-server version', async () => {
    const encodedUrl =
      '/en/enterprise-server%403.17/admin/managing-github-actions-for-your-enterprise'
    const res = await get(encodedUrl)

    expect([200, 301, 302]).toContain(res.statusCode)

    if (res.statusCode === 301 || res.statusCode === 302) {
      expect(res.headers.location).toBe(
        '/en/enterprise-server@3.17/admin/managing-github-actions-for-your-enterprise',
      )
    }
  })

  test('handles URL-encoded @ symbol in second path segment', async () => {
    // When no language prefix is present
    const encodedUrl = '/enterprise-cloud%40latest/copilot/concepts/chat'
    const res = await get(encodedUrl)

    // Should redirect to add language prefix and decode
    expect([301, 302]).toContain(res.statusCode)
    expect(res.headers.location).toBe('/en/enterprise-cloud@latest/copilot/concepts/chat')
  })

  test('normal @ symbol paths continue to work', async () => {
    // Ensure we don't break existing functionality
    const normalUrl = '/en/enterprise-cloud@latest/copilot/concepts/chat'
    const res = await get(normalUrl)

    expect(res.statusCode).toBe(200)
  })

  test('URL encoding in other parts of URL is preserved', async () => {
    // Only @ symbols in version paths should be decoded, other encoding should be preserved
    const encodedUrl = '/en/enterprise-cloud@latest/copilot/concepts/some%20page'
    const res = await get(encodedUrl)

    // This might 404 if the page doesn't exist, but shouldn't break due to encoding
    expect(res.statusCode).not.toBe(500)
  })

  test('Express URL properties are correctly updated after decoding', async () => {
    // Test that req.path, req.query, etc. are properly updated when req.url is modified
    const encodedUrl = '/en/enterprise-cloud%40latest/copilot/concepts/chat?test=value'
    const res = await get(encodedUrl)

    // Should work correctly (200 or redirect) - the middleware should properly update
    // req.path from '/en/enterprise-cloud%40latest/...' to '/en/enterprise-cloud@latest/...'
    expect([200, 301, 302]).toContain(res.statusCode)
  })
})
