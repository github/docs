import { Flash } from '@primer/react'

import { useTranslation } from 'components/hooks/useTranslation'
import type { SearchValidationErrorT } from './types'

interface Props {
  errors: SearchValidationErrorT[]
}

export function ValidationErrors({ errors }: Props) {
  const { t } = useTranslation('search')

  return (
    <div>
      {errors.map((error) => {
        return (
          <Flash key={error.error} variant="warning" sx={{ margin: '3rem' }}>
            {t('search_validation_error')}
            <br />
            <code>{error.error}</code>
          </Flash>
        )
      })}
    </div>
  )
}
