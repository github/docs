import cx from 'classnames'

import { useTranslation } from 'components/hooks/useTranslation'
import styles from './RestOperation.module.scss'
import { StatusCode } from './types'

type Props = {
  statusCodes: Array<StatusCode>
  slug: string
}

export function RestStatusCodes({ statusCodes, slug }: Props) {
  const { t } = useTranslation('products')

  return (
    <>
      <h3 className="mt-4 mb-3 pt-3 h4" id={`${slug}--status-codes`}>
        <a href={`#${slug}--status-codes`}>{t('rest.reference.http_status_code')}</a>
      </h3>

      <table className={cx(styles.restResponseTable, 'd-block')}>
        <thead>
          <tr className="text-left">
            <th>{t('rest.reference.status_code')}</th>
            <th>{t('rest.reference.description')}</th>
          </tr>
        </thead>
        <tbody>
          {statusCodes.map((statusCode, index) => (
            <tr key={`${statusCode.description}-${index}}`}>
              <td>
                <code>{statusCode.httpStatusCode}</code>
              </td>
              <td className="color-fg-muted">
                {statusCode.description ? (
                  <div dangerouslySetInnerHTML={{ __html: statusCode.description }} />
                ) : (
                  statusCode.httpStatusMessage
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
