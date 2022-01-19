import { LinkIcon } from '@primer/octicons-react'
import cx from 'classnames'

type Props = {
  title?: React.ReactNode
  sectionLink?: string
  children?: React.ReactNode
  className?: string
  description?: string
}
export const LandingSection = ({ title, children, className, sectionLink, description }: Props) => {
  return (
    <div className={cx('container-xl px-3 px-md-6 mt-6', className)} id={sectionLink}>
      {title && (
        <h2 className={cx('h1 color-fg-default', !description ? 'mb-3' : 'mb-4')}>
          {sectionLink ? (
            <a className="color-unset" href={`#${sectionLink}`}>
              <LinkIcon size={24} className="m-1" />
              {title}
            </a>
          ) : (
            title
          )}
        </h2>
      )}
      {description && (
        <div className="color-fg-muted f4" dangerouslySetInnerHTML={{ __html: description }} />
      )}
      {children}
    </div>
  )
}
