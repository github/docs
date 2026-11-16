import type { ReactNode } from 'react'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { toJsxRuntime, type Components } from 'hast-util-to-jsx-runtime'
import { fromHtml } from 'hast-util-from-html'

// Parse trusted HTML into an HTML AST and render it as React elements. This
// helper imports no UI components, so tests avoid the styling and component
// chain; RenderedHTML adds the shared interactive component map.
export function renderHTMLString(html: string, components?: Partial<Components>): ReactNode {
  return toJsxRuntime(fromHtml(html, { fragment: true }), {
    Fragment,
    jsx,
    jsxs,
    components,
  })
}
