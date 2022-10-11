import { cloneElement, ReactNode, ReactElement, ElementType } from 'react'
import cx from 'classnames'

import styles from './BumpLink.module.scss'

export type BumpLinkPropsT = {
  children?: ReactNode
  title: ReactElement<any> | string
  href: string
  as?: ElementType<{ className?: string; href: string }>
  className?: string
}

export const BumpLink = ({ as, children, href, title, className }: BumpLinkPropsT) => {
  const Component = as || 'a'

  const symbol = <span className={styles.symbol}>→</span>
  let extendedTitle: ReactNode
  if (typeof title === 'string') {
    extendedTitle = (
      <span className="h4">
        {title} {symbol}
      </span>
    )
  } else {
    extendedTitle = cloneElement(title, title.props, title.props.children, symbol)
  }

  return (
    <Component
      data-testid="bump-link"
      className={cx(styles.container, 'no-underline d-block py-1', className)}
      href={href}
    >
      {extendedTitle}

      {children}
    </Component>
  )
}
