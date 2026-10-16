import { Banner } from '@/frame/components/ui/Banner'
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
          <Banner key={error.error} variant="warning" className={styles.banner}>
            {t('search_validation_error')}
            <br />
            <code>{error.error}</code>
          </Banner>
        )
      })}
    </div>
  )
}
