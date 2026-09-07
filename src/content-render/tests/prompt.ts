import { describe, expect, test } from 'vitest'
import { renderContent } from '@/content-render/index'

describe('prompt tag', () => {
  test('wraps content in <code> with ID and appends responsive svg links', async () => {
    const input: string = 'Here is your prompt: {% prompt %}example prompt text{% endprompt %}.'
    const output: string = await renderContent(input)

    // Should have code element with ID
    expect(output).toContain('<code id="')
    expect(output).toContain('>example prompt text</code>')

    // Should have two responsive anchor elements
    expect(output).toContain('copilot-prompt-long')
    expect(output).toContain('copilot-prompt-short')

    // Should contain SVG icons
    expect(output).toContain('<svg')

    // Should have aria-describedby pointing to the code element ID
    expect(output).toContain('aria-describedby=')
  })
})
