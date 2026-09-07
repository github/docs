import { describe, expect, it } from 'vitest'

import { fastTextOnly } from '@/content-render/unified/text-only'

describe('fastTextOnly', () => {
  it('returns empty string for falsy input', () => {
    expect(fastTextOnly('')).toBe('')
  })

  it('strips a simple <p> wrapper and decodes entities', () => {
    expect(fastTextOnly('<p>Foo &amp; bar</p>')).toBe('Foo & bar')
  })

  it('strips nested tags', () => {
    expect(fastTextOnly('A <a href="#">link</a> and <code>code</code>')).toBe('A link and code')
  })

  it('handles multiple nested elements', () => {
    expect(fastTextOnly('<p>text with <code>code</code> and <em>emphasis</em></p>')).toBe(
      'text with code and emphasis',
    )
  })

  it('decodes HTML entities', () => {
    expect(fastTextOnly('<p>&lt;script&gt;alert(1)&lt;/script&gt;</p>')).toBe(
      '<script>alert(1)</script>',
    )
  })

  it('trims whitespace', () => {
    expect(fastTextOnly('<p>  hello  </p>')).toBe('hello')
  })

  it('handles self-closing tags', () => {
    expect(fastTextOnly('before<br/>after')).toBe('beforeafter')
  })
})
