import type { ReactNode } from 'react'
import cx from 'clsx'

import styles from './Banner.module.scss'

export type BannerPropsT = {
  variant?: 'default' | 'warning' | 'danger'
  className?: string
  children: ReactNode
}

// No live region role: every banner renders with the page and never updates in place.
export function Banner({ variant = 'default', className, children }: BannerPropsT) {
  return <div className={cx(styles.banner, styles[variant], className)}>{children}</div>
}
