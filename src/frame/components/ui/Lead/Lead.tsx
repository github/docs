import { ReactNode } from 'react'
import type { JSX } from 'react'
import cx from 'clsx'
import styles from './Lead.module.scss'
import { RenderedHTML } from '@/frame/components/ui/RenderedHTML'

export type LeadPropsT = {
  children: string | ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
  // The hero variant matches the article lede Figma spec in Lead.module.scss.
  // Landings, REST and automated intros, and the error page keep the f2 scale
  // because that spec targets article pages only.
  variant?: 'default' | 'hero'
}

export function Lead({
  children,
  className,
  as: Component = 'div',
  variant = 'default',
  ...restProps
}: LeadPropsT) {
  const sharedProps = {
    className: cx(
      'mb-3',
      variant === 'hero' ? styles.container : cx('f2', styles.muted),
      className,
    ),
    'data-container': 'lead',
    ...restProps,
  }
  if (typeof children === 'string') {
    return <RenderedHTML as={Component} {...sharedProps} html={children} />
  }
  return <Component {...sharedProps}>{children}</Component>
}
