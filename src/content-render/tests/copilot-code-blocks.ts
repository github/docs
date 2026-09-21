import { describe, it, expect, vi } from 'vitest'
import { renderContent } from '@/content-render/index'

const { mockWarn } = vi.hoisted(() => ({ mockWarn: vi.fn() }))
vi.mock('@/observability/logger', () => ({
  createLogger: () => ({
    info: vi.fn(),
    warn: mockWarn,
    error: vi.fn(),
    debug: vi.fn(),
  }),
}))

describe('code-header plugin', () => {
  describe('copilot language code blocks', () => {
    it('should render basic copilot code block without header (no copy meta)', async () => {
      const markdown = '```copilot\nImprove the variable names in this function\n```'

      const html = await renderContent(markdown)

      expect(html).toContain('language-copilot')
      expect(html).not.toContain('code-example')
      expect(html).not.toContain('<header')
    })

    it('should render copilot code block with copy button when copy meta is present', async () => {
      const markdown = '```copilot copy\nImprove the variable names in this function\n```'

      const html = await renderContent(markdown)

      expect(html).toContain('code-example')
      expect(html).toContain('<header')
      expect(html).toContain('js-btn-copy')
      expect(html).toContain('language-copilot')
      expect(html).not.toContain('https://github.com/copilot?prompt=')
    })

    it('should render copilot code block with prompt button only (no copy meta)', async () => {
      const markdown = '```copilot prompt\nImprove the variable names in this function\n```'

      const html = await renderContent(markdown)

      expect(html).toContain('code-example')
      expect(html).toContain('<header')
      expect(html).toContain('https://github.com/copilot?prompt=')
      expect(html).toContain('language-copilot')
      expect(html).not.toContain('js-btn-copy')
    })

    it('should render copilot code block with both copy and prompt buttons when prompt meta is present', async () => {
      const markdown = '```copilot copy prompt\nImprove the variable names in this function\n```'

      const html = await renderContent(markdown)

      expect(html).toContain('code-example')
      expect(html).toContain('<header')
      expect(html).toContain('js-btn-copy')
      expect(html).toContain('https://github.com/copilot?prompt=')
      expect(html).toContain('Improve%20the%20variable%20names%20in%20this%20function')
      expect(html).toContain('aria-label="Run this prompt in Copilot Chat"')
      expect(html).toContain('language-copilot')
    })

    it('should render copilot code block with context reference when ref meta is present', async () => {
      const markdown = `
\`\`\`javascript id=js-age
function logPersonsAge(a, b, c) {
  if (c) {
    console.log(a + " is " + b + " years old.");
  } else {
    console.log(a + " does not want to reveal their age.");
  }
}
\`\`\`

\`\`\`copilot copy prompt ref=js-age
Improve the variable names in this function
\`\`\`
      `

      const html = await renderContent(markdown)

      expect(html).toContain('https://github.com/copilot?prompt=')
      expect(html).toContain('function%20logPersonsAge')
      expect(html).toContain('Improve%20the%20variable%20names')
      expect(html).toContain('aria-label="Run this prompt with context in Copilot Chat"')
    })

    it('should render copilot code block with prompt and ref only (no copy meta)', async () => {
      const markdown = `
\`\`\`javascript id=js-age
function logPersonsAge(a, b, c) {
  if (c) {
    console.log(a + " is " + b + " years old.");
  } else {
    console.log(a + " does not want to reveal their age.");
  }
}
\`\`\`

\`\`\`copilot prompt ref=js-age
Improve the variable names in this function
\`\`\`
      `

      const html = await renderContent(markdown)

      expect(html).toContain('https://github.com/copilot?prompt=')
      expect(html).toContain('function%20logPersonsAge')
      expect(html).toContain('Improve%20the%20variable%20names')
      expect(html).toContain('aria-label="Run this prompt with context in Copilot Chat"')
      expect(html).not.toContain('js-btn-copy')
    })
  })

  describe('edge cases', () => {
    it('should handle missing reference gracefully and fall back to current code only', async () => {
      mockWarn.mockClear()

      const markdown =
        '```copilot copy prompt ref=nonexistent-id\nImprove the variable names in this function\n```'

      const html = await renderContent(markdown)

      expect(mockWarn).toHaveBeenCalledWith('Cannot find referenced code block', {
        ref: 'nonexistent-id',
      })

      expect(html).toContain('https://github.com/copilot?prompt=')
      expect(html).toContain('Improve%20the%20variable%20names%20in%20this%20function')
      expect(html).not.toContain('function%20logPersonsAge')
      expect(html).toContain('aria-label="Run this prompt in Copilot Chat"')
      expect(html).toContain('code-example')

      mockWarn.mockClear()
    })

    it('should not process annotated code blocks', async () => {
      const markdown = `\`\`\`javascript copy annotate
// This is an annotation
function test() {}
\`\`\``

      const html = await renderContent(markdown)

      expect(html).not.toContain('code-example')
    })

    it('should handle regular code blocks with copy', async () => {
      const markdown = '```javascript copy\nfunction test() {}\n```'

      const html = await renderContent(markdown)

      expect(html).toContain('code-example')
      expect(html).toContain('js-btn-copy')
      expect(html).toContain('language-javascript')
    })
  })

  describe('URL encoding', () => {
    it('should properly encode special characters in prompt URLs', async () => {
      const markdown = '```copilot copy prompt\nHow do I handle "quotes" and & symbols?\n```'

      const html = await renderContent(markdown)

      expect(html).toContain('%22quotes%22')
      expect(html).toContain('%26%20symbols')
    })

    it('should handle multiline prompts correctly', async () => {
      const markdown = `\`\`\`copilot copy prompt
This is line 1
This is line 2
\`\`\``

      const html = await renderContent(markdown)

      expect(html).toContain('This%20is%20line%201%0AThis%20is%20line%202')
    })
  })
})
