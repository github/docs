import React from 'react'
import cx from 'classnames'
import styles from './ArticleTitle.module.scss'

type Props = {
  children: React.ReactNode
}
export const ArticleTitle = ({ children }: Props) => {
  return (
    <div className="d-flex flex-items-baseline flex-justify-between" data-container="title">
      <h1 id="title-h1" className={cx('border-bottom-0', styles.title)}>
        {children}
      </h1>
    </div>
  )
}
