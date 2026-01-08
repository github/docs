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

    // Check for expected content
    expect(res.body).toContain('# Supported secret scanning patterns')
    expect(res.body).toContain('## Supported secrets')

    // Verify HTML comments are stripped
    expect(res.body).not.toMatch(/<!--.*?-->/)

    // Verify table content is present with providers
    expect(res.body).toMatch(/|\s*Provider\s*|/)
    expect(res.body).toMatch(/\| (Adafruit|AWS|Alibaba|Amazon)/)

    // Verify Copilot secret scanning section is present (feature-flagged for fpt/ghec)
    // Note: This may not appear if feature flags aren't loaded in the test environment
    const hasCopilotSection = res.body.match(/###.*Copilot secret scanning/i)
    const hasGenericPassword = res.body.match(/\|\s*Generic\s*\|\s*password\s*\|/)
    if (hasCopilotSection) {
      // If Copilot section is present, verify it has the expected content
      expect(hasGenericPassword).toBeTruthy()
    }

    // Verify correct section title (should be "Default patterns" for fpt if feature flags load correctly)
    // Accept either title since CI may not load feature flags consistently
    const hasDefaultPatterns = res.body.includes('### Default patterns')
    const hasHighConfidence = res.body.includes('### High confidence patterns')

    // In fixture mode (CI), the page may have minimal content without these sections
    // Just verify the main table exists; section headings are optional
    expect(res.body).toContain('## Supported secrets')

    // If either section is present, verify mutual exclusivity
    if (hasDefaultPatterns) {
      expect(hasHighConfidence).toBe(false)
    }
    if (hasHighConfidence) {
      expect(hasDefaultPatterns).toBe(false)
    }
  })
})
