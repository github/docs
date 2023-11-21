import { DOMAttributes, ReactNode } from 'react'
import cx from 'classnames'
import styles from './Callout.module.scss'

export type CalloutPropsT = {
  dangerouslySetInnerHTML?: DOMAttributes<HTMLDivElement>['dangerouslySetInnerHTML']
  children?: ReactNode
  className?: string
}

export const Callout = ({ className, dangerouslySetInnerHTML, children }: CalloutPropsT) => {
  return (
    <div
      data-testid="callout"
      className={cx(className, styles.container, 'ghd-spotlight ghd-spotlight-done my-4 pl-3 py-2')}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </div>
  )
}
