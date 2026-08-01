import { ReactNode } from 'react'
import type { JSX } from 'react'
import cx from 'classnames'
import styles from './Lead.module.scss'
import { RenderedHTML } from '@/frame/components/ui/RenderedHTML'

export type LeadPropsT = {
  children: string | ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function Lead({ children, className, as: Component = 'div', ...restProps }: LeadPropsT) {
  const sharedProps = {
    className: cx('f2 color-fg-muted mb-3', styles.container, className),
    'data-container': 'lead',
    ...restProps,
  }
  if (typeof children === 'string') {
    return <RenderedHTML as={Component} {...sharedProps} html={children} />
  }
  return <Component {...sharedProps}>{children}</Component>
}
