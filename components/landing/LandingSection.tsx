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
    <div className={cx('container-xl px-3 px-md-6', className)} id={sectionLink}>
      {title && (
        <h2 className={cx('h1 color-text-primary', !description ? 'mb-3' : 'mb-4')}>
          {sectionLink ? (
            <a className="color-unset" href={`#${sectionLink}`}>
              {title}
            </a>
          ) : (
            title
          )}
        </h2>
      )}
      {description && (
        <div
          className="color-text-secondary f4"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
      {children}
    </div>
  )
}
