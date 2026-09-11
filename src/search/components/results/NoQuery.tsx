import { Flash } from '@primer/react'
import { Heading } from '@primer/react-brand'

import { useMainContext } from '@/frame/components/context/MainContext'
import { useTranslation } from '@/languages/components/useTranslation'

import styles from './NoQuery.module.scss'

export function NoQuery() {
  const { t } = useTranslation('old_search')
  const mainContext = useMainContext()
  // Use TypeScript's "not null assertion" because `context.page` should
  // will present in main context if it's gotten to the stage of React
  // rendering.
  const page = mainContext.page!

  return (
    <>
      {/* Brand ships no Flash/Banner/Alert equivalent, so the callout stays on
        @primer/react until the Docs 2026 callout system lands
        (github/docs-engineering#6702). */}
      <Heading as="h1" size="3" className={styles.heading}>
        {page.title}
      </Heading>

      <Flash variant="danger" className={styles.flash}>
        {t('description')}
      </Flash>
    </>
  )
}
