import { describe, expect, it } from 'vitest'

import { stripOuterTag } from '@/frame/lib/strip-outer-tag'

describe('stripOuterTag', () => {
  it('returns empty string for falsy input', () => {
    expect(stripOuterTag('')).toBe('')
  })

  it('removes a <p> wrapper preserving inner HTML', () => {
    expect(stripOuterTag('<p>Hello <strong>world</strong></p>')).toBe(
      'Hello <strong>world</strong>',
    )
  })

  it('removes a <div> wrapper', () => {
    expect(stripOuterTag('<div class="foo">content</div>')).toBe('content')
  })

  it('returns original string for multiple top-level elements', () => {
    expect(stripOuterTag('<p>a</p><p>b</p>')).toBe('<p>a</p><p>b</p>')
  })

  it('returns original string for plain text with no tags', () => {
    expect(stripOuterTag('just text')).toBe('just text')
  })

  it('returns original string for malformed HTML', () => {
    expect(stripOuterTag('<p>unclosed')).toBe('<p>unclosed')
  })

  it('returns original string when open and close tags do not match', () => {
    expect(stripOuterTag('<p>content</div>')).toBe('<p>content</div>')
  })

  it('handles nested same-name tags', () => {
    expect(stripOuterTag('<div><div>inner</div></div>')).toBe('<div>inner</div>')
  })
})
