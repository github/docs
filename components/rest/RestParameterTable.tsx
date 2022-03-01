import cx from 'classnames'
import { useTranslation } from 'components/hooks/useTranslation'
import { BodyParameter, ChildParameter, ChildParamsGroup, Parameter, xGitHub } from './types'
import styles from './RestParameterTable.module.scss'

type Props = {
  slug: string
  hasRequiredPreviews: boolean
  xGitHub: xGitHub
  parameters: Array<Parameter>
  bodyParameters: Array<BodyParameter>
}

let nestedChildParamsRowIndex = 0

export function RestParameterTable({
  slug,
  hasRequiredPreviews,
  xGitHub,
  parameters,
  bodyParameters,
}: Props) {
  const { t } = useTranslation('products')
  const tableRows: JSX.Element[] = []

  function addPreviewsRow() {
    tableRows.push(
      /* Previews require an `accept` header. These used to be documented
      as `operation.parameters` but have moved to `operation.x-github.previews` */
      <tr key="previews-accept-row">
        <td>
          <code>accept</code>
        </td>
        <td>string</td>
        <td>header</td>
        <td>
          {hasRequiredPreviews ? (
            <p>This API is under preview and subject to change.</p>
          ) : (
            <p className="m-0">
              Setting to
              <code>application/vnd.github.v3+json</code> is recommended.
              {xGitHub.previews && (
                <a href={`#${slug}-preview-notices`} className="d-inline">
                  {xGitHub.previews.length > 1
                    ? ` ${t('rest.reference.see_preview_notices')}`
                    : ` ${t('rest.reference.see_preview_notice')}`}
                </a>
              )}
            </p>
          )}
        </td>
      </tr>
    )
  }

  function addParametersRows(parameters: Parameter[]) {
    parameters.forEach((param: Parameter, index: number) => {
      tableRows.push(
        <tr key={`${param.name}-${index}`}>
          <td>
            <code>{param.name}</code>
          </td>
          <td>{param.schema.type}</td>
          <td>{param.in}</td>
          <td>
            <div dangerouslySetInnerHTML={{ __html: param.descriptionHTML }} />
            {param.schema.default && (
              <p>
                Default: <code>{param.schema.default}</code>
              </p>
            )}
          </td>
        </tr>
      )
    })
  }

  function addBodyParametersRows(bodyParameters: BodyParameter[]) {
    bodyParameters.forEach((bodyParam: BodyParameter, index: number) => {
      tableRows.push(
        <tr key={`${bodyParam.name}-${index}`}>
          <td>
            <code>{bodyParam.name}</code>
          </td>
          <td>{bodyParam.type}</td>
          <td>{bodyParam.in}</td>
          <td>
            <div dangerouslySetInnerHTML={{ __html: bodyParam.description }} />
            {bodyParam.default && (
              <p>
                Default: <code>{bodyParam.default}</code>
              </p>
            )}
          </td>
        </tr>
      )

      // Adding the nested rows
      if (bodyParam.childParamsGroups && bodyParam.childParamsGroups.length > 0) {
        tableRows.push(
          <tr key={`nested-child-body-params-${nestedChildParamsRowIndex}`} className="border-none">
            <td colSpan={4} className="has-nested-table">
              {bodyParam.childParamsGroups.map(
                (childParamGroup: ChildParamsGroup, index: number) => {
                  return (
                    <details key={`${childParamGroup.id}-${index}`}>
                      <summary
                        role="button"
                        aria-expanded="false"
                        className="keyboard-focus color-fg-muted"
                      >
                        <span className="d-inline-block mb-3" id={`${slug}-${childParamGroup.id}`}>
                          Properties of the
                          <code>{childParamGroup.parentName}</code>
                          {childParamGroup.parentType}
                        </span>
                      </summary>
                      <div id={`${childParamGroup.parentName}-object`} />
                      <table className="ml-4 mb-4 mt-2 color-bg-subtle">
                        <thead>
                          <tr>
                            <th>Name (Type)</th>
                            <th>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {childParamGroup.params.map(
                            (childParam: ChildParameter, index: number) => {
                              return (
                                <tr key={`${childParam.name}-${index}`}>
                                  <td className="color-bg-subtle">
                                    <code>{childParam.name}</code> ({childParam.type})
                                  </td>
                                  <td className="color-bg-subtle">
                                    <div
                                      dangerouslySetInnerHTML={{ __html: childParam.description }}
                                    />
                                  </td>
                                </tr>
                              )
                            }
                          )}
                        </tbody>
                      </table>
                    </details>
                  )
                }
              )}
            </td>
          </tr>
        )
        nestedChildParamsRowIndex++
      }
    })
  }

  function renderTableRows() {
    addPreviewsRow()
    addParametersRows(parameters)
    addBodyParametersRows(bodyParameters)
    return tableRows
  }

  return (
    <>
      <h4 className="mt-4 mb-3 pt-3" id={`${slug}--parameters`}>
        <a href={`#${slug}--parameters`}>{t('rest.reference.parameters')}</a>
      </h4>
      <table className={cx(styles.parameterTable)}>
        <thead>
          <tr className="text-left">
            <th>Name</th>
            <th>Type</th>
            <th>In</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    </>
  )
}
