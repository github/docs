import { describe, expect, test } from 'vitest'
import { renderContent } from '@/content-render/index'

describe('prompt tag', () => {
  test('wraps content in <code> and appends svg', async () => {
    const input = 'Here is your prompt: {% prompt %}example prompt text{% endprompt %}.'
    const output = await renderContent(input)
    expect(output).toContain('<code>example prompt text</code><a')
    expect(output).toContain('<svg')
  })
})
