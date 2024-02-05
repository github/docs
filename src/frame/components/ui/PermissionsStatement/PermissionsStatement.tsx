import cx from 'classnames'

import styles from './PermissionsStatement.module.scss'
import { useTranslation } from 'src/languages/components/useTranslation'

type Props = {
  permissions: string
}

export function PermissionsStatement({ permissions }: Props) {
  const { t } = useTranslation('pages')
  return (
    <div
      className={cx(styles.permissions_statement, 'pl-3 my-4')}
      data-search="hide"
      data-testid="permissions-statement"
    >
      <div className="text-bold pr-2">{t('permissions_statement')}</div>
      <div dangerouslySetInnerHTML={{ __html: permissions }} />
    </div>
  )
}
