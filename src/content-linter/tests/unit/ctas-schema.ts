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
    expect(errors.length).toBe(2)

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
    expect(errors.length).toBe(1)
    expect(errors[0].fixInfo).toBeDefined()

    const fixedUrl = errors[0].fixInfo?.insertText
    expect(fixedUrl).toBeDefined()
    expect(fixedUrl).not.toContain('{')
    expect(fixedUrl).not.toContain('}')
    expect(fixedUrl).toContain('ref_product=ghec')
  })

  test('old CTA format autofix preserves original URL structure', async () => {
    const markdown = `
[Try Copilot](https://github.com?ref_cta=Copilot+trial&ref_loc=getting+started&ref_page=docs)
`
    const result = await runRule(ctasSchema, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].fixInfo).toBeDefined()

    const fixedUrl = errors[0].fixInfo?.insertText
    expect(fixedUrl).toBeDefined()
    expect(fixedUrl).toMatch(/^https:\/\/github\.com\?ref_product=/)
    expect(fixedUrl).not.toMatch(/github\.com\/\?/)
  })

  test('mixed parameter scenarios - new format takes precedence over old', async () => {
    const markdown = `
[Mixed Format](https://github.com/copilot?ref_product=copilot&ref_type=trial&ref_cta=Copilot+Enterprise+trial&ref_loc=enterprise+page)
`
    const result = await runRule(ctasSchema, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].fixInfo).toBeDefined()

    const fixedUrl = errors[0].fixInfo?.insertText
    expect(fixedUrl).toBeDefined()
    expect(fixedUrl).toContain('ref_product=copilot')
    expect(fixedUrl).toContain('ref_type=trial')
    expect(fixedUrl).not.toContain('ref_cta=')
    expect(fixedUrl).not.toContain('ref_loc=')
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
    expect(fixedUrl).toContain('#pricing')
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
    expect(fixedUrl).toContain('utm_source=docs')
    expect(fixedUrl).toContain('utm_campaign=trial')
    expect(fixedUrl).toContain('other_param=value')
    expect(fixedUrl).toContain('ref_product=copilot')
    expect(fixedUrl).not.toContain('ref_cta=')
  })

  test('multiple query parameter types handled correctly', async () => {
    const markdown = `
[Complex URL](https://github.com/features/copilot?utm_source=docs&ref_product=copilot&ref_type=invalid_type&campaign_id=123&ref_cta=old_cta&locale=en#section)
`
    const result = await runRule(ctasSchema, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].errorDetail).toContain('old parameter format')
    expect(errors[0].fixInfo).toBeDefined()
  })
})
