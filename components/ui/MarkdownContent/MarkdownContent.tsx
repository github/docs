import { ReactNode } from 'react'
import cx from 'classnames'

import styles from './MarkdownContent.module.scss'

type Props = {
  children: string | ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}
export const MarkdownContent = ({
  children,
  as: Component = 'div',
  className,
  ...restProps
}: Props) => {
  return (
    <Component
      {...restProps}
      className={cx(styles.markdownBody, 'markdown-body', className)}
      {...(typeof children === 'string'
        ? { dangerouslySetInnerHTML: { __html: children } }
        : { children })}
    />
  )
}
