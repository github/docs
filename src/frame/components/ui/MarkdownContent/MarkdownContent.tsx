import { memo, ReactNode } from 'react'
import type { JSX } from 'react'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import type { Root as HastRoot } from 'hast'
import cx from 'classnames'

import { markdownComponents } from './markdownComponents'
import { renderHTMLString } from '@/frame/components/ui/RenderedHTML/render-html-string'
import styles from './MarkdownContent.module.scss'

export type MarkdownContentPropsT = {
  children?: string | ReactNode
  hast?: HastRoot
  className?: string
  as?: keyof JSX.IntrinsicElements
}

// Memoized so that unrelated parent re-renders (e.g. ToolPicker/PlatformPicker
// state updates) don't re-parse the HTML string and rebuild the body's element
// tree, which is the expensive part of rendering an article.
export const MarkdownContent = memo(function MarkdownContent({
  children,
  hast,
  as: Component = 'div',
  className,
  ...restProps
}: MarkdownContentPropsT) {
  // Render trusted HTML as real React elements instead of injecting it as raw
  // innerHTML (#6619). Prefer a hast (HTML AST) tree when provided; otherwise
  // parse a rendered HTML string. Non-string children render as-is.
  const childProps = hast
    ? { children: toJsxRuntime(hast, { Fragment, jsx, jsxs, components: markdownComponents }) }
    : typeof children === 'string'
      ? { children: renderHTMLString(children, markdownComponents) }
      : { children }

  return (
    <Component
      {...restProps}
      className={cx(styles.markdownBody, 'markdown-body', className)}
      {...childProps}
    />
  )
})
