import { Heading, Flash } from '@primer/react'

import { useMainContext } from 'src/frame/components/context/MainContext'
import { useTranslation } from 'src/languages/components/useTranslation'

export function NoQuery() {
  const { t } = useTranslation(['search'])
  const mainContext = useMainContext()
  // Use TypeScript's "not null assertion" because `context.page` should
  // will present in main context if it's gotten to the stage of React
  // rendering.
  const page = mainContext.page!

  return (
    <>
      <Heading as="h1">{page.title}</Heading>

      <Flash variant="danger" sx={{ margin: '2rem' }}>
        {t('description')}
      </Flash>
    </>
  )
}
