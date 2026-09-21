import { ReactNode } from 'react'
import type { JSX } from 'react'
import cx from 'classnames'
import styles from './Lead.module.scss'
import { RenderedHTML } from '@/frame/components/ui/RenderedHTML'

export type LeadPropsT = {
  children: string | ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
  // 'hero' is the Docs 2026 article lede (Lead.module.scss — Mona Sans 16px,
  // muted). Every other surface that renders a Lead — the landings, the
  // REST/automated intros, the generic error page — stays on the legacy `f2`
  // scale, which is ~50% larger. Scoped rather than global because the Figma
  // hero spec was drawn for the article page only.
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
