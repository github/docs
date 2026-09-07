import { createElement } from 'react'
import type { ReactNode } from 'react'
import { describe, expect, test } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import type { Components } from 'hast-util-to-jsx-runtime'

import { renderHTMLString } from '@/frame/components/ui/RenderedHTML/render-html-string'

// Renders the helper output to a static HTML string so we can assert on the
// real React serialization. The plain parse -> hast -> React path is what every
// RenderedHTML call site relies on.
function render(html: string) {
  return renderToStaticMarkup(renderHTMLString(html))
}

describe('renderHTMLString', () => {
  test('renders a trusted HTML fragment as real elements', () => {
    expect(render('<p>Hello <code>world</code></p>')).toBe('<p>Hello <code>world</code></p>')
  })

  test('preserves nested structure and attributes', () => {
    expect(render('<div class="note"><span id="x">plain</span></div>')).toBe(
      '<div class="note"><span id="x">plain</span></div>',
    )
  })

  test('renders multiple sibling nodes', () => {
    expect(render('<p>one</p><p>two</p>')).toBe('<p>one</p><p>two</p>')
  })

  test('escapes text content rather than emitting raw markup', () => {
    expect(render('<p>1 &lt; 2 &amp; 3 &gt; 2</p>')).toBe('<p>1 &lt; 2 &amp; 3 &gt; 2</p>')
  })

  test('routes elements through a provided component map', () => {
    const components = {
      strong: (props: { children?: ReactNode }) => createElement('em', null, props.children),
    } as unknown as Partial<Components>
    const out = renderToStaticMarkup(renderHTMLString('<strong>hi</strong>', components))
    expect(out).toBe('<em>hi</em>')
  })

  // The cases below lock down the hast -> React property mapping that every
  // migrated call site depends on. The legacy raw-innerHTML path handed a string
  // straight to the browser parser; RenderedHTML hands hast to React, so
  // attribute handling (style strings, SVG camelCasing, booleans, class) must
  // round-trip correctly.
  test('converts an inline style string into a React style object', () => {
    expect(render('<p style="color:red;display:none">x</p>')).toBe(
      '<p style="color:red;display:none">x</p>',
    )
  })

  test('renders SVG with camelCased and hyphenated attributes', () => {
    expect(render('<svg viewBox="0 0 16 16"><path stroke-width="2" d="M1 1"></path></svg>')).toBe(
      '<svg viewBox="0 0 16 16"><path stroke-width="2" d="M1 1"></path></svg>',
    )
  })

  test('renders boolean attributes', () => {
    const out = render('<input type="checkbox" checked disabled/>')
    expect(out).toContain('checked=""')
    expect(out).toContain('disabled=""')
  })

  test('maps class and aria/data attributes', () => {
    expect(render('<div class="a b" aria-label="hi" data-x="1">t</div>')).toBe(
      '<div class="a b" aria-label="hi" data-x="1">t</div>',
    )
  })

  test('renders void elements', () => {
    expect(render('<hr class="rule"/>')).toBe('<hr class="rule"/>')
  })

  test('renders a full table fragment with the expected structure', () => {
    expect(render('<table><tbody><tr><td>cell</td></tr></tbody></table>')).toBe(
      '<table><tbody><tr><td>cell</td></tr></tbody></table>',
    )
  })
})
