import cx from 'classnames'

type Props = {
  title?: React.ReactNode
  sectionLink?: string
  children?: React.ReactNode
  className?: string
}
export const LandingSection = ({ title, children, className, sectionLink }: Props) => {
  return (
    <div className={cx('container-xl px-3 px-md-6', className)} id={sectionLink}>
      {title && (
        <h2 className="font-mktg h1 mb-4">
          {sectionLink ? <a href={`#${sectionLink}`}>{title}</a> : title}
        </h2>
      )}
      {children}
    </div>
  )
}
