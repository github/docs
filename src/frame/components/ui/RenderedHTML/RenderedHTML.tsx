import { useMemo } from 'react'
import type { ComponentPropsWithoutRef, ElementType } from 'react'

import { markdownComponents } from '@/frame/components/ui/MarkdownContent/markdownComponents'
import { renderHTMLString } from './render-html-string'

type RenderedHTMLOwnProps = {
  // A trusted HTML string (already produced by our own render pipeline or build
  // step) to render as real React elements. This string is rendered as markup,
  // so it MUST be trusted/sanitized upstream; React only escapes text nodes, not
  // the tags and attributes contained in this string.
  html: string
}

export type RenderedHTMLProps<T extends ElementType = 'div'> = RenderedHTMLOwnProps & {
  // The wrapper element to render the parsed content inside. Defaults to a div;
  // pass e.g. 'span' for inline contexts or 'td' inside tables. Passthrough props
  // are typed against this element (e.g. `colSpan` is allowed when `as="td"`).
  as?: T
} & Omit<ComponentPropsWithoutRef<T>, keyof RenderedHTMLOwnProps | 'as' | 'children'>

// Renders a trusted HTML string as real React elements instead of injecting it
// as raw innerHTML (#6619). The string is parsed to hast and handed to the same
// component map the article body uses, so React owns the resulting element tree.
//
// This is NOT a sanitizer. It carries the same trust assumption as
// dangerouslySetInnerHTML: arbitrary tags/attributes in `html` are rendered, so
// the string must already be trusted/sanitized upstream. The benefit over
// dangerouslySetInnerHTML is that React owns the tree (no post-hydration DOM
// mutation) and the move unblocks the react/no-danger lint guard, not added XSS
// protection.
//
// Use this for the many call sites that hold a pre-rendered HTML fragment (e.g.
// GraphQL/REST descriptions from build-time data, or request-time rendered
// intros). For the markdown article body, prefer MarkdownContent with a `hast`
// prop, which avoids the parse round-trip.
export function RenderedHTML<T extends ElementType = 'div'>({
  html,
  as,
  ...rest
}: RenderedHTMLProps<T>) {
  const Component: ElementType = as || 'div'
  // `markdownComponents` is a module constant, so it is intentionally omitted
  // from the dependency list; only `html` changes the rendered output.
  const content = useMemo(() => renderHTMLString(html, markdownComponents), [html])

  return <Component {...rest}>{content}</Component>
}
