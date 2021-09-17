import React, { ReactNode } from 'react'
import cx from 'classnames'

type Props = {
  as?: keyof JSX.IntrinsicElements
  maxLines: number
  children: ReactNode
  className?: string
}
export const TruncateLines = (props: Props) => {
  const { maxLines, className, children, as: Component = 'div' } = props
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
