import { useMemo } from 'react'
import type { ComponentPropsWithoutRef, ElementType } from 'react'

import { markdownComponents } from '@/frame/components/ui/MarkdownContent/markdownComponents'
import { renderHTMLString } from './render-html-string'

type RenderedHTMLOwnProps = {
  // Pass trusted upstream HTML to render as real elements. React escapes text nodes,
  // but tags and attributes in this string render as markup.
  html: string
}

export type RenderedHTMLProps<T extends ElementType = 'div'> = RenderedHTMLOwnProps & {
  // Selects the wrapper element for parsed content. Use span for inline contexts or td inside
  // tables; passthrough props follow the element, so as="td" accepts colSpan.
  as?: T
} & Omit<ComponentPropsWithoutRef<T>, keyof RenderedHTMLOwnProps | 'as' | 'children'>

// RenderedHTML parses trusted HTML to a hast HTML AST and renders React elements
// instead of raw innerHTML. It does not sanitize input or add XSS protection;
// render only HTML that trusted upstream code produced or sanitized.
// React ownership avoids post-hydration DOM mutation and satisfies
// custom-rules/no-dangerously-set-inner-html.
// Use this for pre-rendered GraphQL or REST fragments and rendered intros.
// Pass Markdown article-body ASTs to MarkdownContent to avoid parsing twice.
export function RenderedHTML<T extends ElementType = 'div'>({
  html,
  as,
  ...rest
}: RenderedHTMLProps<T>) {
  const Component: ElementType = as || 'div'
  // markdownComponents is a module constant; html is the only value that changes output.
  const content = useMemo(() => renderHTMLString(html, markdownComponents), [html])

  return <Component {...rest}>{content}</Component>
}
