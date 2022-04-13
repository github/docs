import cx from 'classnames'
import { StatusCode } from './types'
import { useTranslation } from 'components/hooks/useTranslation'
import styles from './RestResponseTable.module.scss'

type Props = {
  heading: string
  statusCodes: Array<StatusCode>
}

export function RestStatusCodes({ heading, statusCodes }: Props) {
  const { t } = useTranslation('products')

  return (
    <>
      <h4>{heading}</h4>
      <table className={cx(styles.restResponseTable)}>
        <thead>
          <tr className="text-left">
            <th>{t('rest.reference.http_status_code')}</th>
            <th>{t('rest.reference.description')}</th>
          </tr>
        </thead>
        <tbody>
          {statusCodes.map((statusCode, index) => {
            return (
              <tr key={`${statusCode.description}-${index}}`}>
                <td>
                  <code>{statusCode.httpStatusCode}</code>
                </td>
                <td>
                  {statusCode.description ? (
                    <div dangerouslySetInnerHTML={{ __html: statusCode.description }} />
                  ) : (
                    statusCode.httpStatusMessage
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
