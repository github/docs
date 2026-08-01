import { Hero } from '@primer/react-brand'
import { useTranslation } from '@/languages/components/useTranslation'
import styles from './HomePageHero.module.scss'
import cx from 'classnames'

export const HomePageHero = () => {
  const { t } = useTranslation(['header', 'homepage'])

  return (
    <Hero
      id="landing"
      align="center"
      className={cx('border-bottom color-border-muted color-bg-subtle', styles.section)}
    >
      <div className={cx('mx-auto px-4 rounded-3', styles.content)}>
        <Hero.Heading>{t('github_docs')}</Hero.Heading>
        <Hero.Description>{t('description')}</Hero.Description>
      </div>
    </Hero>
  )
}
