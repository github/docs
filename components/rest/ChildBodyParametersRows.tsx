import { useTranslation } from 'components/hooks/useTranslation'
import { ParameterRow } from './ParameterRow'
import type { ChildParameter } from './types'

type Props = {
  slug: string
  childParamsGroups: ChildParameter[]
  parentName: string
  parentType: string
}

export function ChildBodyParametersRows({
  slug,
  parentName,
  parentType,
  childParamsGroups,
}: Props) {
  const { t } = useTranslation('products')

  return (
    <tr className="border-top-0">
      <td colSpan={4} className="has-nested-table">
        <details className="ml-1">
          <summary role="button" aria-expanded="false" className="keyboard-focus color-fg-muted">
            <span className="d-inline-block mb-3" id={`${slug}-${parentName}-${parentType}`}>
              Properties of the
              <code>{parentName}</code>
              {parentType}
            </span>
          </summary>
          <table id={`${parentName}-object`} className="mb-4 mt-2 color-bg-subtle">
            <thead className="visually-hidden">
              <tr>
                <th>
                  {`${t('rest.reference.name')}, ${t('rest.reference.type')}, ${t(
                    'rest.reference.description'
                  )}`}
                </th>
              </tr>
            </thead>
            <tbody>
              {childParamsGroups.map((childParam) => {
                return (
                  <ParameterRow
                    rowParams={childParam}
                    slug={slug}
                    isChild={true}
                    key={childParam.name}
                  />
                )
              })}
            </tbody>
          </table>
        </details>
      </td>
    </tr>
  )
}
