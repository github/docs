import React, { ReactNode, ReactHTML } from 'react'
import cx from 'classnames'

type Props = {
  as?: keyof ReactHTML
  maxLines: number
  children: ReactNode
  className?: string
}
export const TruncateLines = (props: Props) => {
  const { as, maxLines, className, children } = props
  const Component = as || 'div'
  return (
    <Component className={cx('root', className)}>
      {children}
      <style jsx>{`
        .root {
          display: -webkit-box;
          -webkit-line-clamp: ${maxLines};
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </Component>
  )
}
