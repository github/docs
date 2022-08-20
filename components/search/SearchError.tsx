import { Box, Flash } from '@primer/react'
import { useRouter } from 'next/router'

import { useTranslation } from 'components/hooks/useTranslation'

interface Props {
  error: Error
}

export function SearchError({ error }: Props) {
  const { t } = useTranslation('search')
  const { locale, asPath } = useRouter()

  return (
    <div>
      {' '}
      <Flash variant="danger" sx={{ margin: '3rem' }}>
        {t('search_error')}
        <br />
        {process.env.NODE_ENV === 'development' && <code>{error.toString()}</code>}
      </Flash>
      <Box>
        <a href={`/${locale}${asPath}`}>Try reloading the page</a>
      </Box>
    </div>
  )
}
