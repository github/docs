import cx from 'classnames'
import { useTranslation } from 'components/hooks/useTranslation'

import { ParameterRow } from './ParameterRow'
import { BodyParameter, ChildParameter, Parameter } from './types'

import styles from './ParameterTable.module.scss'

type Props = {
  slug: string
  numPreviews: number
  heading: string
  headers: Array<ChildParameter>
  parameters: Array<Parameter>
  bodyParameters: Array<BodyParameter>
}

export function ParameterTable({
  slug,
  numPreviews,
  heading = '',
  headers = [],
  parameters,
  bodyParameters,
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

      <table
        className={cx(styles.parameterTable)}
        summary="Column one has the type of parameter and the other columns show the name, type, and description of the parameters"
      >
        <thead>
          <tr>
            <th id="header" scope="col" className="text-bold pl-0">
              {t('headers')}
            </th>
          </tr>
          <tr className="visually-hidden">
            <th scope="col">{`${t('name')}, ${t('type')}, ${t('description')}`}</th>
          </tr>
        </thead>

        <tbody>
          {headers.length > 0 && (
            <>
              {headers.map((header, index) => (
                <ParameterRow
                  rowParams={header}
                  slug={slug}
                  numPreviews={numPreviews}
                  key={`${index}-${header.name}`}
                />
              ))}
            </>
          )}

          {pathParams.length > 0 && (
            <>
              <tr className="border-top-0">
                <th className="text-bold pl-0 border-top-0" scope="colgroup">
                  {t('path')}
                </th>
              </tr>
              <tr className="visually-hidden">
                <th scope="colgroup">{`${t('name')}, ${t('type')}, ${t('description')}`}</th>
              </tr>
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
            </>
          )}

          {queryParams.length > 0 && (
            <>
              <tr className="border-top-0">
                <th className="text-bold pl-0" scope="colgroup">
                  {t('query')}
                </th>
              </tr>
              <tr className="visually-hidden">
                <th scope="colgroup">{`${t('name')}, ${t('type')}, ${t('description')}`}</th>
              </tr>

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
            </>
          )}

          {bodyParameters.length > 0 && (
            <>
              <tr className="border-top-0">
                <th scope="colgroup" className="text-bold pl-0">
                  {t('body')}
                </th>
              </tr>
              <tr className="visually-hidden">
                <th scope="colgroup">{`${t('name')}, ${t('type')}, ${t('description')}`}</th>
              </tr>

              {bodyParameters.map((param, index) => (
                <ParameterRow rowParams={param} slug={slug} key={`${index}-${param}`} />
              ))}
            </>
          )}
        </tbody>
      </table>
    </>
  )
}
