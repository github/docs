import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test'
import { ctasSchema } from '../../lib/linting-rules/ctas-schema'

describe(ctasSchema.names.join(' - '), () => {
  test('valid CTA URL passes validation', async () => {
    const markdown = `
[Try Copilot](https://github.com/github-copilot/signup?ref_product=copilot&ref_type=trial&ref_style=text&ref_plan=pro)
`
    const result = await runRule(ctasSchema, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('invalid ref_product value fails validation', async () => {
    const markdown = `
[Try Copilot](https://github.com/github-copilot/signup?ref_product=invalid&ref_type=trial&ref_style=text)
`
    const result = await runRule(ctasSchema, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].errorDetail).toContain('Invalid value for ref_product')
  })

  test('missing required parameter fails validation', async () => {
    const markdown = `
[Try Copilot](https://github.com/github-copilot/signup?ref_product=copilot&ref_style=text)
`
    const result = await runRule(ctasSchema, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].errorDetail).toContain('Missing required parameter: ref_type')
  })

  test('unexpected parameter fails validation', async () => {
    const markdown = `
[Try Copilot](https://github.com/github-copilot/signup?ref_product=copilot&ref_type=trial&ref_style=text&ref_unknown=test)
`
    const result = await runRule(ctasSchema, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].errorDetail).toContain('Unexpected parameter: ref_unknown')
  })

  test('non-CTA URLs are ignored', async () => {
    const markdown = `
[Regular link](https://github.com/features)
[External link](https://example.com?param=value)
`
    const result = await runRule(ctasSchema, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('case sensitive validation enforces lowercase values', async () => {
    const markdown = `
[Try Copilot](https://github.com/github-copilot/signup?ref_product=copilot&ref_type=Trial&ref_style=Button)
`
    const result = await runRule(ctasSchema, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(2) // Should have errors for 'Trial' and 'Button'

    // Check that both expected errors are present (order may vary)
    const errorMessages = errors.map((error) => error.errorDetail)
    expect(errorMessages.some((msg) => msg.includes('Invalid value for ref_type: "Trial"'))).toBe(
      true,
    )
    expect(errorMessages.some((msg) => msg.includes('Invalid value for ref_style: "Button"'))).toBe(
      true,
    )
  })

  test('URL regex correctly stops at curly braces (not overgreedy)', async () => {
    const markdown = `
---
try_ghec_for_free: '{% ifversion ghec %}https://github.com/account/enterprises/new?ref_cta=GHEC+trial&ref_loc=enterprise+administrators+landing+page&ref_page=docs{% endif %}'
---
`
    const result = await runRule(ctasSchema, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1) // Should detect and try to convert the old CTA format
    expect(errors[0].fixInfo).toBeDefined()

    // The extracted URL should not include the curly brace - verify by checking the fix
    const fixedUrl = errors[0].fixInfo?.insertText
    expect(fixedUrl).toBeDefined()
    expect(fixedUrl).not.toContain('{') // Should not include curly brace from Liquid syntax
    expect(fixedUrl).not.toContain('}') // Should not include curly brace from Liquid syntax
    expect(fixedUrl).toContain('ref_product=ghec') // Should have converted old format correctly
  })

  test('old CTA format autofix preserves original URL structure', async () => {
    const markdown = `
[Try Copilot](https://github.com?ref_cta=Copilot+trial&ref_loc=getting+started&ref_page=docs)
`
    const result = await runRule(ctasSchema, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].fixInfo).toBeDefined()

    // The fixed URL should not introduce extra slashes
    const fixedUrl = errors[0].fixInfo?.insertText
    expect(fixedUrl).toBeDefined()
    expect(fixedUrl).toMatch(/^https:\/\/github\.com\?ref_product=/) // Should not have github.com/?
    expect(fixedUrl).not.toMatch(/github\.com\/\?/) // Should not contain extra slash before query
  })

  test('mixed parameter scenarios - new format takes precedence over old', async () => {
    const markdown = `
[Mixed Format](https://github.com/copilot?ref_product=copilot&ref_type=trial&ref_cta=Copilot+Enterprise+trial&ref_loc=enterprise+page)
`
    const result = await runRule(ctasSchema, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].fixInfo).toBeDefined()

    // Should preserve existing new format parameters, only convert old ones not already covered
    const fixedUrl = errors[0].fixInfo?.insertText
    expect(fixedUrl).toBeDefined()
    expect(fixedUrl).toContain('ref_product=copilot') // Preserved from new format
    expect(fixedUrl).toContain('ref_type=trial') // Preserved from new format
    expect(fixedUrl).not.toContain('ref_cta=') // Old parameter removed
    expect(fixedUrl).not.toContain('ref_loc=') // Old parameter removed
  })

  test('hash fragment preservation during conversion', async () => {
    const markdown = `
[Copilot Pricing](https://github.com/copilot?ref_cta=Copilot+trial&ref_loc=getting+started&ref_page=docs#pricing)
`
    const result = await runRule(ctasSchema, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].fixInfo).toBeDefined()

    const fixedUrl = errors[0].fixInfo?.insertText
    expect(fixedUrl).toBeDefined()
    expect(fixedUrl).toContain('#pricing') // Hash fragment preserved
    expect(fixedUrl).toContain('ref_product=copilot')
  })

  test('UTM parameter preservation during conversion', async () => {
    const markdown = `
[Track This](https://github.com/copilot?utm_source=docs&utm_campaign=trial&ref_cta=Copilot+trial&ref_loc=getting+started&other_param=value)
`
    const result = await runRule(ctasSchema, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].fixInfo).toBeDefined()

    const fixedUrl = errors[0].fixInfo?.insertText
    expect(fixedUrl).toBeDefined()
    expect(fixedUrl).toContain('utm_source=docs') // UTM preserved
    expect(fixedUrl).toContain('utm_campaign=trial') // UTM preserved
    expect(fixedUrl).toContain('other_param=value') // Other params preserved
    expect(fixedUrl).toContain('ref_product=copilot') // New CTA params added
    expect(fixedUrl).not.toContain('ref_cta=') // Old CTA params removed
  })

  test('multiple query parameter types handled correctly', async () => {
    const markdown = `
[Complex URL](https://github.com/features/copilot?utm_source=docs&ref_product=copilot&ref_type=invalid_type&campaign_id=123&ref_cta=old_cta&locale=en#section)
`
    const result = await runRule(ctasSchema, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1) // Only old format conversion error
    expect(errors[0].errorDetail).toContain('old parameter format')
    expect(errors[0].fixInfo).toBeDefined() // Should have autofix
  })
})
