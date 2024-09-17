import { ReactNode } from 'react'
import cx from 'classnames'
import styles from './Lead.module.scss'

export type LeadPropsT = {
  children: string | ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function Lead({ children, className, as: Component = 'div', ...restProps }: LeadPropsT) {
  return (
    <Component
      className={cx('f2 color-fg-muted mb-3', styles.container, className)}
      data-container="lead"
      {...restProps}
      {...(typeof children === 'string'
        ? { dangerouslySetInnerHTML: { __html: children } }
        : { children })}
    />
  )
}
