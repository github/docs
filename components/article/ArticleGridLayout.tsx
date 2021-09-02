import React from 'react'
import cx from 'classnames'
import styles from './ArticleGridLayout.module.scss'

type Props = {
  head?: React.ReactNode
  toc?: React.ReactNode
  children?: React.ReactNode
  className?: string
}
export const ArticleGridLayout = ({ head, toc, children, className }: Props) => {
  return (
    <div className={cx(styles.container, className)}>
      {/* head */}
      {head && <div className={styles.head}>{head}</div>}

      {/* toc */}
      {toc && (
        <div className={cx(styles.sidebar, 'border-bottom border-xl-0 pb-4 mb-5 pb-xl-0 mb-xl-0')}>
          <div className={styles.sidebarContent}>{toc}</div>
        </div>
      )}

      {/* content */}
      <div data-search="article-body" className={styles.content}>
        {children}
      </div>
    </div>
  )
}
