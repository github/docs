import cx from 'classnames'
import { useTranslation } from 'src/languages/components/useTranslation'

import { ParameterRow } from './ParameterRow'
import { BodyParameter, ChildParameter, Parameter } from './types'

import styles from './ParameterTable.module.scss'

type Props = {
  slug: string
  numPreviews?: number
  heading?: string
  headers?: Array<ChildParameter>
  parameters?: Array<Parameter>
  bodyParameters: Array<BodyParameter>
  bodyParamExpandCallback?: (target: HTMLDetailsElement) => void
  clickedBodyParameterName?: string | undefined
  variant?: 'rest' | 'webhooks'
}

export function ParameterTable({
  slug,
  numPreviews = 0,
  heading = '',
  headers = [],
  parameters = [],
  bodyParameters,
  bodyParamExpandCallback = undefined,
  clickedBodyParameterName = '',
  variant = 'rest',
}: Props) {
  const { t } = useTranslation(['parameter_table', 'products'])
  const queryParams = parameters.filter((param) => param.in === 'query')
  const pathParams = parameters.filter((param) => param.in === 'path')

  return (
    <>
      {heading && (
        <h3 className="mt-4 mb-3 pt-3 h4" id={`${slug}--parameters`}>
          <a href={`#${slug}--parameters`}>{heading}</a>
        </h3>
      )}

      {headers.length > 0 && (
        <>
          {/* <h4 id="headers-table-heading">{t('headers')}</h4> */}
          <table
            className={cx(styles.parameterTable)}
            summary="Column one describes the parameter. The first line includes the name, type, and whether the parameter is required. The second line is a description of the parameter."
            aria-labelledby="headers-table-heading"
          >
            <caption className="mt-3 mb-3 h5 float-left">{t('headers')}</caption>
            <thead className="visually-hidden">
              <tr>
                <th scope="col">{`${t('name')}, ${t('type')}, ${t('description')}`}</th>
              </tr>
            </thead>
            <tbody>
              {headers.map((header, index) => (
                <ParameterRow
                  rowParams={header}
                  slug={slug}
                  numPreviews={numPreviews}
                  key={`${index}-${header.name}`}
                />
              ))}
            </tbody>
          </table>
        </>
      )}

      {pathParams.length > 0 && (
        <>
          {/* <h4 id="path-table-heading">{t('path')}</h4> */}
          <table
            className={cx(styles.parameterTable)}
            summary="Column one describes the parameter. The first line includes the name, type, and whether the parameter is required. The second line is a description of the parameter."
            aria-labelledby="path-table-heading"
          >
            <caption className="mt-3 mb-3 h5 float-left">{t('path')}</caption>
            <thead className="visually-hidden">
              <tr>
                <th scope="col">{`${t('name')}, ${t('type')}, ${t('description')}`}</th>
              </tr>
            </thead>
            <tbody>
              {pathParams.map((param, index) => (
                <ParameterRow
                  rowParams={{
                    name: param.name,
                    type: param.schema.type,
                    description: param.description,
                    isRequired: param.required,
                    default: param.schema.default,
                    enum: param.schema.enum,
                  }}
                  slug={slug}
                  key={`${index}-${param}`}
                />
              ))}
            </tbody>
          </table>
        </>
      )}

      {queryParams.length > 0 && (
        <>
          {/* <h4 id="query-table-heading">{t('query')}</h4> */}
          <table
            className={cx(styles.parameterTable)}
            summary="Column one describes the parameter. The first line includes the name, type, and whether the parameter is required. The second line is a description of the parameter."
            aria-labelledby="query-table-heading"
          >
            <caption className="mt-3 mb-3 h5 float-left">{t('query')}</caption>
            <thead className="visually-hidden">
              <tr>
                <th scope="col">{`${t('name')}, ${t('type')}, ${t('description')}`}</th>
              </tr>
            </thead>
            <tbody>
              {queryParams.map((param, index) => (
                <ParameterRow
                  rowParams={{
                    name: param.name,
                    type: param.schema.type,
                    description: param.description,
                    isRequired: param.required,
                    default: param.schema.default,
                    enum: param.schema.enum,
                  }}
                  slug={slug}
                  key={`${index}-${param}`}
                />
              ))}
            </tbody>
          </table>
        </>
      )}

      {bodyParameters.length > 0 && (
        <>
          {/* <h4 id="body-table-heading">{variant === 'rest' ? t('body') : t('webhook-body')}</h4> */}
          <table
            className={cx(styles.parameterTable)}
            summary="Column one describes the parameter. The first line includes the name, type, and whether the parameter is required. The second line is a description of the parameter."
            aria-labelledby="body-table-heading"
          >
            <caption className="mt-3 mb-3 h5 float-left">
              {variant === 'rest' ? t('body') : t('webhook-body')}
            </caption>
            <thead className="visually-hidden">
              <tr>
                <th scope="col">{`${t('name')}, ${t('type')}, ${t('description')}`}</th>
              </tr>
            </thead>
            <tbody>
              {bodyParameters.map((param, index) => (
                <ParameterRow
                  bodyParamExpandCallback={bodyParamExpandCallback}
                  clickedBodyParameterName={clickedBodyParameterName}
                  rowParams={param}
                  slug={slug}
                  key={`${index}-${param}`}
                />
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  )
}
