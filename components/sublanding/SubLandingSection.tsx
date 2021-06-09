import cx from 'classnames'
import { useTranslation } from 'components/hooks/useTranslation'

type Props = {
  title?: React.ReactNode
  sectionLink?: string
  children?: React.ReactNode
  className?: string
}

export const SubLandingSection = ({ title, children, className, sectionLink }: Props) => {
  const { t } = useTranslation('product_sublanding')

  return (
    <div className={cx('container-xl px-3 px-md-6 pt-3 pb-2', className)}>
      <h2 className="mb-3 font-mktg" id={sectionLink}>
        {sectionLink ? <a href={`#${sectionLink}`}>{title}</a> : title}
      </h2>
      {sectionLink && <div
        className="lead-mktg color-text-secondary f4 description-text"
        dangerouslySetInnerHTML={{ __html: t('learning_paths_desc') }}
      />}
      {children}
    </div>
    
  )
}
