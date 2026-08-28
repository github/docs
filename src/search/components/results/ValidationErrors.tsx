import { Flash } from '@primer/react'

import { useTranslation } from '@/languages/components/useTranslation'
import type { SearchValidationErrorEntry } from '../../types'

import styles from './ValidationErrors.module.scss'

interface Props {
  errors: SearchValidationErrorEntry[]
}

export function ValidationErrors({ errors }: Props) {
  const { t } = useTranslation('search_results')

  return (
    <div>
      {errors.map((error) => {
        return (
          <Flash key={error.error} variant="warning" className={styles.flash}>
            {t('search_validation_error')}
            <br />
            <code>{error.error}</code>
          </Flash>
        )
      })}
    </div>
  )
}
