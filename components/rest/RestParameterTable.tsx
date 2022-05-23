import cx from 'classnames'
import { useTranslation } from 'components/hooks/useTranslation'

import { ParameterRow } from './ParameterRow'
import { BodyParameter, Parameter } from './types'

type Props = {
  slug: string
  numPreviews: number
  parameters: Array<Parameter>
  bodyParameters: Array<BodyParameter>
}

export function RestParameterTable({ slug, numPreviews, parameters, bodyParameters }: Props) {
  const { t } = useTranslation('products')
  const queryParams = parameters.filter((param) => param.in === 'query')
  const pathParams = parameters.filter((param) => param.in === 'path')

  return (
    <>
      <h3 className="mt-4 mb-3 pt-3 h4" id={`${slug}--parameters`}>
        <a href={`#${slug}--parameters`}>{t('rest.reference.parameters')}</a>
      </h3>
      <table
        className={cx('d-block')}
        summary="Column one has the type of parameter and the other columns show the name, type, and description of the parameters"
      >
        <thead>
          <tr>
            <th id="header" scope="col" className="text-bold pl-0">
              {t('rest.reference.headers')}
            </th>
          </tr>
          <tr className="visually-hidden">
            <th scope="col">
              {`${t('rest.reference.name')}, ${t('rest.reference.type')}, ${t(
                'rest.reference.description'
              )}`}
            </th>
          </tr>
        </thead>

        <tbody>
          <ParameterRow
            name={'accept'}
            type={'string'}
            description={`<p>Setting to <code>application/vnd.github.v3+json</code> is recommended.</p>`}
            isRequired={false}
            slug={slug}
            numPreviews={numPreviews}
          />
          {pathParams.length > 0 && (
            <>
              <tr className="border-top-0">
                <th className="text-bold pl-0 border-top-0" scope="colgroup">
                  {t('rest.reference.path')}
                </th>
              </tr>
              <tr className="visually-hidden">
                <th scope="colgroup">
                  {`${t('rest.reference.name')}, ${t('rest.reference.type')}, ${t(
                    'rest.reference.description'
                  )}`}
                </th>
              </tr>
              {pathParams.map((param, index) => (
                <ParameterRow
                  name={param.name}
                  type={param.schema.type}
                  description={param.description}
                  isRequired={param.required}
                  defaultValue={param.schema.default}
                  enumValues={param.schema.enum}
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
                  {t('rest.reference.query')}
                </th>
              </tr>
              <tr className="visually-hidden">
                <th scope="colgroup">
                  {`${t('rest.reference.name')}, ${t('rest.reference.type')}, ${t(
                    'rest.reference.description'
                  )}`}
                </th>
              </tr>

              {queryParams.map((param, index) => (
                <ParameterRow
                  name={param.name}
                  type={param.schema.type}
                  description={param.description}
                  isRequired={param.required}
                  defaultValue={param.schema.default}
                  enumValues={param.schema.enum}
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
                  {t('rest.reference.body')}
                </th>
              </tr>
              <tr className="visually-hidden">
                <th scope="colgroup">
                  {`${t('rest.reference.name')}, ${t('rest.reference.type')}, ${t(
                    'rest.reference.description'
                  )}`}
                </th>
              </tr>

              {bodyParameters.map((param, index) => (
                <ParameterRow
                  name={param.name}
                  type={param.type}
                  description={param.description}
                  isRequired={param.isRequired}
                  defaultValue={param.default}
                  enumValues={param.enum}
                  slug={slug}
                  childParamsGroups={param.childParamsGroups}
                  key={`${index}-${param}`}
                />
              ))}
            </>
          )}
        </tbody>
      </table>
    </>
  )
}
