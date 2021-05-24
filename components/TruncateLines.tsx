import React, { ReactNode, ReactHTML } from 'react'
import cx from 'classnames'

type Props = {
  as?: keyof ReactHTML
  maxLines: number
  children: ReactNode
  className?: string
}
export const TruncateLines = (props: Props) => {
  const Component = props.as || 'div'
  return (
    <Component className={cx('root', props.className)}>
      {props.children}
      <style jsx>{`
        .root {
          display: -webkit-box;
          -webkit-line-clamp: ${props.maxLines};
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </Component>
  )
}
