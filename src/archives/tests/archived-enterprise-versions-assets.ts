import { describe, expect, test } from 'vitest'

import { getArchivedAssetProxyUrl } from '@/archives/middleware/archived-enterprise-versions-assets'

describe('getArchivedAssetProxyUrl', () => {
  test('builds the proxy URL for a normal asset path', () => {
    expect(getArchivedAssetProxyUrl('/_next/static/css/a.css', '3.5')).toBe(
      'https://github.github.com/docs-ghes-3.5/_next/static/css/a.css',
    )
    expect(getArchivedAssetProxyUrl('/assets/images/site/favicon.png', '2.18')).toBe(
      'https://github.github.com/docs-ghes-2.18/assets/images/site/favicon.png',
    )
  })

  test('rejects literal dot segments', () => {
    expect(getArchivedAssetProxyUrl('/_next/../../x', '3.5')).toBeNull()
    expect(getArchivedAssetProxyUrl('/dist/index../css', '2.18')).toBeNull()
  })

  test('rejects percent-encoded dot segments that escape the archive', () => {
    expect(getArchivedAssetProxyUrl('/_next/%2e%2e/%2e%2e/x/index.html', '3.5')).toBeNull()
    expect(getArchivedAssetProxyUrl('/assets/%2E%2e/.%2e/x/', '3.5')).toBeNull()
    expect(getArchivedAssetProxyUrl('/_next/%2e./%2E./x/index.html', '3.5')).toBeNull()
  })

  test('rejects backslashes and encoded slashes', () => {
    expect(getArchivedAssetProxyUrl('/_next/..%2f..%2fx', '3.5')).toBeNull()
    expect(getArchivedAssetProxyUrl('/_next/..%5C..%5Cx', '3.5')).toBeNull()
    expect(getArchivedAssetProxyUrl('/_next/..\\..\\x', '3.5')).toBeNull()
  })

  test('rejects embedded URL syntax', () => {
    expect(getArchivedAssetProxyUrl('/dist/index.csshttp://example.com', '2.18')).toBeNull()
    expect(getArchivedAssetProxyUrl('/dist/index.css:password@example.com', '2.18')).toBeNull()
    expect(getArchivedAssetProxyUrl('a:b@c', '3.5')).toBeNull()
  })
})
