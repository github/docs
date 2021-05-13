import cx from 'classnames'

type Props = {
  title?: string
  children?: React.ReactNode
  className?: string
}
export const LandingSection = ({ title, children, className }: Props) => {
  return (
    <div className={cx('container-xl px-3 px-md-6', className)}>
      {title && <h2 className="font-mktg h1 mb-2">{title}</h2>}
      {children}
    </div>
  )
}
