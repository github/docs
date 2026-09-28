import { Flash } from '@primer/react'
import { Heading } from '@primer/react-brand'

import { useMainContext } from '@/frame/components/context/MainContext'
import { useTranslation } from '@/languages/components/useTranslation'

import styles from './NoQuery.module.scss'

// NoQuery keeps the callout on Primer React because Brand lacks Flash, Banner, or Alert.
// The Docs 2026 callout system is the planned replacement.
export function NoQuery() {
  const { t } = useTranslation('old_search')
  const mainContext = useMainContext()
  // Search page rendering has context.page, but the shared context type keeps page nullable.
  const page = mainContext.page!

  return (
    <>
      <Heading as="h1" size="3" className={styles.heading}>
        {page.title}
      </Heading>

      <Flash variant="danger" className={styles.flash}>
        {t('description')}
      </Flash>
    </>
  )
}
