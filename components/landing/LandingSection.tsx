import cx from 'classnames'
import { PermalinkHeader } from 'components/article/PermalinkHeader'

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
      {title && (
        <PermalinkHeader as="h2" slug={sectionLink} className="mb-4">
          {title}
        </PermalinkHeader>
      )}
      {description && (
        <div className="color-fg-muted f4" dangerouslySetInnerHTML={{ __html: description }} />
      )}
      {children}
    </div>
  )
}
