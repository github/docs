import { describe, expect, test } from 'vitest'
import { get } from '@/tests/helpers/e2etest'

const makeURL = (pathname: string): string =>
  `/api/article/body?${new URLSearchParams({ pathname })}`

describe('secret scanning article body api', () => {
  test('supported-secret-scanning-patterns page', async () => {
    const res = await get(
      makeURL('/en/code-security/secret-scanning/introduction/supported-secret-scanning-patterns'),
    )

    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toContain('text/markdown')

    expect(res.body).toContain('# Supported secret scanning patterns')
    expect(res.body).toContain('## Supported secrets')

    // A substring check also catches multiline, empty, and unterminated comments.
    expect(res.body).not.toContain('<!--')

    // Icon spans become plain ✓/✗ characters.
    expect(res.body).not.toMatch(/<span[^>]*aria-label="Supported"/)
    expect(res.body).not.toMatch(/<span[^>]*aria-label="Unsupported"/)
    expect(res.body).not.toMatch(/<span[^>]*>/)

    expect(res.body).toMatch(/|\s*Provider\s*|/)
    expect(res.body).toMatch(/\| (Adafruit|AWS|Alibaba|Amazon)/)

    const hasCopilotSection = res.body.match(/###.*Copilot secret scanning/i)
    const hasGenericPassword = res.body.match(/\|\s*Generic\s*\|\s*password\s*\|/)
    if (hasCopilotSection) {
      expect(hasGenericPassword).toBeTruthy()
    }

    const hasDefaultPatterns = res.body.includes('### Default patterns')
    const hasHighConfidence = res.body.includes('### High confidence patterns')

    // Fixture mode may omit section headings, but it must keep the main table.
    expect(res.body).toContain('## Supported secrets')

    if (hasDefaultPatterns) {
      expect(hasHighConfidence).toBe(false)
    }
    if (hasHighConfidence) {
      expect(hasDefaultPatterns).toBe(false)
    }
  })
})
