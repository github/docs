import React from 'react'
import cx from 'classnames'

import styles from './LandingSection.module.scss'

type LandingSectionProps = {
  children: React.ReactNode
  className?: string
}

// A Docs 2026 "framed section". The outer band spans the full content column
// and draws the horizontal rules; the inner frame is inset by a gutter and
// draws the vertical side rules, so the horizontal rules always extend past the
// vertical ones.
export const LandingSection = ({ children, className }: LandingSectionProps) => {
  return (
    <div className={styles.band}>
      <div className={cx(styles.frame, className)}>{children}</div>
    </div>
  )
}
