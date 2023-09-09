import { DOMAttributes, ReactNode } from 'react'
import cx from 'classnames'
import styles from './Callout.module.scss'

export type CalloutPropsT = {
  dangerouslySetInnerHTML?: DOMAttributes<HTMLDivElement>['dangerouslySetInnerHTML']
  variant: 'success' | 'info' | 'warning'
  children?: ReactNode
  className?: string
}

export const Callout = ({
  variant,
  className,
  dangerouslySetInnerHTML,
  children,
}: CalloutPropsT) => {
  return (
    <div
      data-testid="callout"
      className={cx(
        className,
        styles.container,
        'border rounded-1 p-3 f5',
        variant === 'success' && 'color-border-success-emphasis color-bg-success',
        variant === 'info' && 'color-border-accent-emphasis color-bg-accent',
        variant === 'warning' && 'color-border-attention-emphasis color-bg-attention',
      )}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </div>
  )
}
