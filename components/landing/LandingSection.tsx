import { LinkIcon } from '@primer/octicons-react'
import cx from 'classnames'
import { useMainContext } from 'components/context/MainContext'

type Props = {
  title?: React.ReactNode
  sectionLink?: string
  children?: React.ReactNode
  className?: string
  description?: string
}
export const LandingSection = ({ title, children, className, sectionLink, description }: Props) => {
  const { page } = useMainContext()
  return (
    <div className={cx('container-xl px-3 px-md-6 mt-6', className)} id={sectionLink}>
      {title && (
        <h2 className={cx('h1 color-fg-default', !description ? 'mb-3' : 'mb-4')}>
          {sectionLink ? (
            <a
              className="color-unset"
              href={`#${sectionLink}`}
              {...{ 'aria-label': `${page.title} - ${title} section` }}
            >
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
