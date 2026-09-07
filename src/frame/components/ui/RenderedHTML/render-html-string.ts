import type { ReactNode } from 'react'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { toJsxRuntime, type Components } from 'hast-util-to-jsx-runtime'
import { fromHtml } from 'hast-util-from-html'

// Parse a trusted HTML string into hast and render it as React elements (#6619).
// Pure and dependency-light on purpose: it imports no UI components, so it can be
// unit-tested without pulling in the styling/component chain. RenderedHTML wraps
// this with the shared interactive component map.
export function renderHTMLString(html: string, components?: Partial<Components>): ReactNode {
  return toJsxRuntime(fromHtml(html, { fragment: true }), {
    Fragment,
    jsx,
    jsxs,
    components,
  })
}
