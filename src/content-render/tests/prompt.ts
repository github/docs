import { describe, expect, test } from 'vitest'
import { renderContent } from '@/content-render/index'

describe('prompt tag', () => {
  test('wraps content in <code> with ID and appends responsive svg links', async () => {
    const input: string = 'Here is your prompt: {% prompt %}example prompt text{% endprompt %}.'
    const output: string = await renderContent(input)

    expect(output).toContain('<code id="')
    expect(output).toContain('>example prompt text</code>')

    expect(output).toContain('copilot-prompt-long')
    expect(output).toContain('copilot-prompt-short')

    expect(output).toContain('<svg')

    expect(output).toContain('aria-describedby=')
  })
})
