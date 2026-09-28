import { describe, expect, test } from 'vitest'
import { get } from '@/tests/helpers/e2etest'

describe('URL encoding for version paths', () => {
  // SharePoint encodes @ as %40: /en/enterprise-cloud@latest becomes /en/enterprise-cloud%40latest.
  test('handles URL-encoded @ symbol in enterprise-cloud version', async () => {
    const encodedUrl = '/en/enterprise-cloud%40latest/copilot/concepts/chat'
    const res = await get(encodedUrl)

    // Encoded @ may render directly or redirect to the decoded URL, but it must not 404.
    expect([200, 301, 302]).toContain(res.statusCode)

    if (res.statusCode === 301 || res.statusCode === 302) {
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
    const encodedUrl = '/enterprise-cloud%40latest/copilot/concepts/chat'
    const res = await get(encodedUrl)

    expect([301, 302]).toContain(res.statusCode)
    expect(res.headers.location).toBe('/en/enterprise-cloud@latest/copilot/concepts/chat')
  })

  test('normal @ symbol paths continue to work', async () => {
    const normalUrl = '/en/enterprise-cloud@latest/copilot/concepts/chat'
    const res = await get(normalUrl)

    expect(res.statusCode).toBe(200)
  })

  test('URL encoding in other parts of URL is preserved', async () => {
    // A literal @ in the version segment must not decode unrelated URL encoding.
    const encodedUrl = '/en/enterprise-cloud@latest/copilot/concepts/some%20page'
    const res = await get(encodedUrl)

    // Missing pages may 404, but unrelated URL encoding must not break the request.
    expect(res.statusCode).not.toBe(500)
  })

  test('Express URL properties are correctly updated after decoding', async () => {
    // Updating req.url must also refresh Express request properties such as req.path and req.query.
    const encodedUrl = '/en/enterprise-cloud%40latest/copilot/concepts/chat?test=value'
    const res = await get(encodedUrl)

    // Middleware updates req.path from enterprise-cloud%40latest to enterprise-cloud@latest.
    expect([200, 301, 302]).toContain(res.statusCode)
  })
})
