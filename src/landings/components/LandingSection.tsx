import React from 'react'
import cx from 'classnames'
import { HeadingLink } from '@/frame/components/article/HeadingLink'
import { RenderedHTML } from '@/frame/components/ui/RenderedHTML/RenderedHTML'

type Props = {
  title?: string
  sectionLink?: string
  children?: React.ReactNode
  className?: string
  description?: string
}
export const LandingSection = ({ title, children, className, sectionLink, description }: Props) => {
  return (
    <div className={cx('container-xl px-3 px-md-6 mt-6', className)}>
      <div className="mb-4">
        {title && (
          <HeadingLink as="h2" slug={sectionLink}>
            {title}
          </HeadingLink>
        )}
        {description && <RenderedHTML as="div" className="color-fg-muted f4" html={description} />}
      </div>
      {children}
    </div>
  )
}
