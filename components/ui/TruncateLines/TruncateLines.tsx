import React, { ReactNode } from 'react'
import cx from 'classnames'

import styles from './TruncateLines.module.scss'

export type TruncateLinesPropsT = {
  as?: keyof JSX.IntrinsicElements
  maxLines: number
  children: ReactNode
  className?: string
}

export const TruncateLines = (props: TruncateLinesPropsT) => {
  const { maxLines, className, children, as: Component = 'div' } = props
  return (
    <Component className={cx(styles.truncated, className)} style={{ WebkitLineClamp: maxLines }}>
      {children}
    </Component>
  )
}
