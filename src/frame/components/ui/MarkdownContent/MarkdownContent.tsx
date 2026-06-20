import { memo, ReactNode } from 'react'
import type { JSX } from 'react'
import cx from 'classnames'

import styles from './MarkdownContent.module.scss'

export type MarkdownContentPropsT = {
  children: string | ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

// Memoized so that re-renders of the parent (e.g. when ToolPicker/PlatformPicker
// state updates) don't cause React 19 to re-apply `dangerouslySetInnerHTML` and
// wipe out the inline `display` styles set imperatively by the pickers.
export const MarkdownContent = memo(function MarkdownContent({
  children,
  as: Component = 'div',
  className,
  ...restProps
}: MarkdownContentPropsT) {
  return (
    <Component
      {...restProps}
      className={cx(styles.markdownBody, 'markdown-body', className)}
      {...(typeof children === 'string'
        ? { dangerouslySetInnerHTML: { __html: children } }
        : { children })}
    />
  )
})
