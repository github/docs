import { useTranslation } from '@/languages/components/useTranslation'
import styles from './HomePageHero.module.scss'
import cx from 'classnames'

export const HomePageHero = () => {
  const { t } = useTranslation(['header', 'homepage'])

  return (
    <section
      id="landing"
      className={cx(
        'border-bottom color-border-muted color-bg-subtle',
        'd-flex flex-justify-center flex-column',
        'text-center',
        styles.section,
      )}
    >
      <div className={cx('mx-auto px-4 rounded-3', styles.content)}>
        <h1 id="title-h1" className="text-semibold">
          {t('github_docs')}
        </h1>
        <p className="f3 color-fg-muted">{t('description')}</p>
      </div>
    </section>
  )
}
