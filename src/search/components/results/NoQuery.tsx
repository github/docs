import { Heading } from '@primer/react-brand'

import { useMainContext } from '@/frame/components/context/MainContext'
import { Banner } from '@/frame/components/ui/Banner'
import { useTranslation } from '@/languages/components/useTranslation'

import styles from './NoQuery.module.scss'

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

      <Banner variant="danger" className={styles.banner}>
        {t('description')}
      </Banner>
    </>
  )
}
