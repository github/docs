import { memo, ReactNode } from 'react'
import type { JSX } from 'react'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import type { Root as HastRoot } from 'hast'
import cx from 'classnames'

import { markdownComponents } from './markdownComponents'
import styles from './MarkdownContent.module.scss'

export type MarkdownContentPropsT = {
  children?: string | ReactNode
  hast?: HastRoot
  className?: string
  as?: keyof JSX.IntrinsicElements
}

// Memoized so that re-renders of the parent (e.g. when ToolPicker/PlatformPicker
// state updates) don't cause React 19 to re-apply `dangerouslySetInnerHTML` and
// wipe out the inline `display` styles set imperatively by the pickers.
export const MarkdownContent = memo(function MarkdownContent({
  children,
  hast,
  as: Component = 'div',
  className,
  ...restProps
}: MarkdownContentPropsT) {
  // When a hast (HTML AST) tree is provided, render it as real React elements
  // instead of injecting an HTML string via dangerouslySetInnerHTML (#6619).
  const childProps = hast
    ? { children: toJsxRuntime(hast, { Fragment, jsx, jsxs, components: markdownComponents }) }
    : typeof children === 'string'
      ? { dangerouslySetInnerHTML: { __html: children } }
      : { children }

  return (
    <Component
      {...restProps}
      className={cx(styles.markdownBody, 'markdown-body', className)}
      {...childProps}
    />
  )
})
