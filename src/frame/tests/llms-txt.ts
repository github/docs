import { describe, expect, test } from 'vitest'
import { get } from '@/tests/helpers/e2etest'

describe('llms.txt endpoint', () => {
  test('returns 200 OK', async () => {
    const res = await get('/llms.txt')
    expect(res.statusCode).toBe(200)
  })

  test('returns markdown content type', async () => {
    const res = await get('/llms.txt')
    expect(res.headers['content-type']).toMatch(/text\/markdown/)
  })

  test('includes GitHub Docs title', async () => {
    const res = await get('/llms.txt')
    const content = res.body

    // Should contain GitHub in the title
    expect(content).toMatch(/^# .*GitHub.*Docs/m)
  })

  test('includes programmatic access section', async () => {
    const res = await get('/llms.txt')
    const content = res.body

    // Should mention the existing APIs
    expect(content).toMatch(/Article API/i)
    expect(content).toMatch(/Page List API/i)
    expect(content).toMatch(/api\/article/i)
    expect(content).toMatch(/api\/pagelist\/en\/free-pro-team@latest/i)
  })

  test('includes all main sections', async () => {
    const res = await get('/llms.txt')
    const content = res.body

    // Should have all the main sections we expect
    expect(content).toMatch(/## Docs Content/i)
    expect(content).toMatch(/## Translations/i)
    expect(content).toMatch(/## Versions/i)
  })

  test('contains valid markdown links', async () => {
    const res = await get('/llms.txt')
    const content = res.body

    // Extract all markdown links
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    const links = Array.from(content.matchAll(linkRegex))

    expect(links.length).toBeGreaterThan(0)

    // Check that links are properly formatted
    for (const match of links) {
      const [, linkText, linkUrl] = match as RegExpMatchArray
      expect(linkText.trim()).not.toBe('')
      expect(linkUrl.trim()).not.toBe('')

      // All links should be absolute GitHub docs URLs
      expect(linkUrl).toMatch(/^https:\/\/docs\.github\.com/i)
    }
  })

  test('has proper cache headers', async () => {
    const res = await get('/llms.txt')

    // Should have cache control headers set by defaultCacheControl
    expect(res.headers).toHaveProperty('cache-control')
  })

  test('references pagelist API for content discovery', async () => {
    const res = await get('/llms.txt')
    const content = res.body

    // Should prominently feature the pagelist API as the main content source
    expect(content).toMatch(/Page List API.*api\/pagelist\/en\/free-pro-team@latest/i)
    expect(content).not.toMatch(/Machine-readable list/i) // Removed descriptions
  })

  test.each(['free-pro-team@latest', 'enterprise-cloud@latest'])(
    'includes %s version in versions section',
    async (versionPattern) => {
      const res = await get('/llms.txt')
      const content = res.body

      // Should include versions section
      expect(content).toMatch(/## Versions/i)

      // Should include this specific version pattern
      expect(content).toMatch(new RegExp(`api/pagelist/en/${versionPattern}`))
    },
  )

  test('includes enterprise server versions', async () => {
    const res = await get('/llms.txt')
    const content = res.body

    // Should include enterprise server versions with pattern
    expect(content).toMatch(/api\/pagelist\/en\/enterprise-server@\d+\.\d+/)
  })

  test('follows llms.txt specification structure and has reasonable length', async () => {
    const res = await get('/llms.txt')
    const content = res.body

    // Check for required H1 title
    expect(content).toMatch(/^# .+/m)

    // Check for blockquote description
    expect(content).toMatch(/^> .+/m)

    // Check for H2 sections
    expect(content).toMatch(/^## .+/m)

    // Check for markdown links
    expect(content).toMatch(/\[.+\]\(.+\)/m)

    // Should include translations and versions but still be reasonable
    expect(content.length).toBeGreaterThan(500)
    expect(content.length).toBeLessThan(5000)

    // Split into lines for structure analysis
    const lines = content.split('\n')

    // First non-empty line should be H1
    const firstContentLine = lines.find((line: string) => line.trim() !== '')
    expect(firstContentLine).toMatch(/^# /)

    // Should contain blockquote after title
    const hasBlockquote = lines.some((line: string) => line.trim().startsWith('>'))
    expect(hasBlockquote).toBe(true)

    // Should have multiple H2 sections (Docs Content, Translations, Versions)
    const h2Sections = lines.filter((line: string) => line.trim().startsWith('## '))
    expect(h2Sections.length).toBeGreaterThanOrEqual(3)
  })
})
