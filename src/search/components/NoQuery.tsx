import { Heading, Flash } from '@primer/react'

import { useMainContext } from 'components/context/MainContext'
import { useTranslation } from 'src/languages/components/useTranslation'

export function NoQuery() {
  const { t } = useTranslation(['search'])
  const { page } = useMainContext()

  return (
    <>
      <Heading as="h1">{page.title}</Heading>

      <Flash variant="danger" sx={{ margin: '2rem' }}>
        {t('description')}
      </Flash>
    </>
  )
}
