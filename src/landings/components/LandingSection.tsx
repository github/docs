import cx from 'classnames'
import { HeadingLink } from 'components/article/HeadingLink'

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
        {description && (
          <div className="color-fg-muted f4" dangerouslySetInnerHTML={{ __html: description }} />
        )}
      </div>
      {children}
    </div>
  )
}
