import { memo, ReactNode } from 'react'
import type { JSX } from 'react'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import type { Root as HastRoot } from 'hast'
import cx from 'clsx'

import { markdownComponents } from './markdownComponents'
import { renderHTMLString } from '@/frame/components/ui/RenderedHTML/render-html-string'
import styles from './MarkdownContent.module.scss'

export type MarkdownContentPropsT = {
  children?: string | ReactNode
  hast?: HastRoot
  className?: string
  as?: keyof JSX.IntrinsicElements
}

// Memoization prevents picker state updates from rebuilding the expensive element
// tree. String children parse as trusted HTML; React nodes pass through unchanged.
// A provided HTML AST avoids reparsing.
export const MarkdownContent = memo(function MarkdownContent({
  children,
  hast,
  as: Component = 'div',
  className,
  ...restProps
}: MarkdownContentPropsT) {
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
