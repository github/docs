import cx from 'classnames'

type Props = {
  title?: React.ReactNode
  sectionLink?: string
  children?: React.ReactNode
  className?: string
}
export const SubLandingSection = ({ title, children, className, sectionLink }: Props) => {
  return (
    <div className={cx('container-xl px-3 px-md-6 pt-3 pb-2', className)} id={sectionLink}>
      <h1 className='my-3 font-mktg'>{title}</h1>
      {children}
    </div>
    
  )
}
