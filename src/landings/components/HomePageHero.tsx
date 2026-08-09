import { Heading, Text } from '@primer/react-brand'

import { useTranslation } from '@/languages/components/useTranslation'
import { useSearchOverlayContext } from '@/search/components/context/SearchOverlayContext'
import styles from './HomePageHero.module.scss'

export const HomePageHero = () => {
  const { t } = useTranslation(['header', 'homepage'])
  const { setIsSearchOpen } = useSearchOverlayContext()

  return (
    <section id="landing" className={styles.hero}>
      <div className={styles.rails}>
        <div className={styles.titleRow}>
          <Heading as="h1" size="display" className={styles.title}>
            {t('github_docs')}
          </Heading>
          <Text as="p" size="200" variant="muted" className={styles.lede}>
            {t('description')}
          </Text>
        </div>

        <button
          type="button"
          data-testid="homepage-search"
          className={styles.searchRow}
          onClick={() => setIsSearchOpen(true)}
          aria-haspopup="dialog"
          aria-label={t('search_placeholder')}
        >
          <span className={styles.searchPlaceholder}>{t('search_placeholder')}</span>
          <kbd className={styles.searchHint}>/</kbd>
        </button>
      </div>
    </section>
  )
}
