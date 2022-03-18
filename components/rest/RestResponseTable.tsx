import cx from 'classnames'
import { CodeResponse } from './types'
import { useTranslation } from 'components/hooks/useTranslation'
import styles from './RestResponseTable.module.scss'

type Props = {
  heading: string
  responses: Array<CodeResponse>
}

export function RestResponseTable({ heading, responses }: Props) {
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
          {responses.map((response, index) => {
            return (
              <tr key={`${response.description}-${index}}`}>
                <td>
                  <code>{response.httpStatusCode}</code>
                </td>
                <td>
                  {response.description ? (
                    <div dangerouslySetInnerHTML={{ __html: response.description }} />
                  ) : (
                    response.httpStatusMessage
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
