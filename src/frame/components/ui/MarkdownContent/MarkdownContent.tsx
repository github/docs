import { memo, ReactNode } from 'react'
import type { ComponentProps, JSX } from 'react'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { toJsxRuntime, type Components } from 'hast-util-to-jsx-runtime'
import type { Root as HastRoot } from 'hast'
import cx from 'classnames'

import { CopyButton } from '@/frame/components/CopyButton'
import { CodeTabsGroup } from '@/frame/components/CodeTabsGroup'
import { ToggleableContent } from '@/tools/components/ToggleableContent'
import { isToggleClass } from '@/tools/components/SelectionContext'
import styles from './MarkdownContent.module.scss'

export type MarkdownContentPropsT = {
  children?: string | ReactNode
  hast?: HastRoot
  className?: string
  as?: keyof JSX.IntrinsicElements
}

// Map specific elements in the HTML AST to interactive React components instead
// of inert markup enhanced by post-hydration DOM mutation (#6619). This only
// applies to the hast rendering path; the dangerouslySetInnerHTML string path is
// untouched. The same map runs during SSR and on the client, so hydration matches.
const markdownComponents = {
  button(props: ComponentProps<'button'>) {
    const classes = String(props.className || '').split(/\s+/)
    if (classes.includes('js-btn-copy')) {
      return <CopyButton {...props} />
    }
    return <button {...props} />
  },
  // Platform/tool-scoped blocks and inline spans subscribe to SelectionContext so
  // the pickers can hide non-matching content via React state instead of the old
  // imperative `style.display` DOM mutation (#6619). The className check is cheap
  // and runs first, so only the handful of toggleable elements become context
  // consumers; every other div/span renders as a plain element with no hook.
  div(props: ComponentProps<'div'>) {
    const classes = String(props.className || '').split(/\s+/)
    if (classes.includes('ghd-codetabs')) {
      return <CodeTabsGroup {...props} />
    }
    if (isToggleClass(props.className)) {
      return <ToggleableContent tag="div" {...props} />
    }
    return <div {...props} />
  },
  span(props: ComponentProps<'span'>) {
    if (isToggleClass(props.className)) {
      return <ToggleableContent tag="span" {...props} />
    }
    return <span {...props} />
  },
} as unknown as Partial<Components>

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
