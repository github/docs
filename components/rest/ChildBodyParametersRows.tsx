import { useTranslation } from 'components/hooks/useTranslation'
import { ParameterRow } from './ParameterRow'
import type { ChildParamsGroup } from './types'

type Props = {
  slug: string
  childParamsGroups: ChildParamsGroup[]
}

export function ChildBodyParametersRows({ slug, childParamsGroups }: Props) {
  const { t } = useTranslation('products')

  return (
    <tr className="border-none">
      <td colSpan={4} className="has-nested-table">
        {childParamsGroups?.map((childParamGroup) => (
          <details key={childParamGroup.id}>
            <summary role="button" aria-expanded="false" className="keyboard-focus color-fg-muted">
              <span className="d-inline-block mb-3" id={`${slug}-${childParamGroup.id}`}>
                Properties of the
                <code>{childParamGroup.parentName}</code>
                {childParamGroup.parentType}
              </span>
            </summary>
            <table
              id={`${childParamGroup.parentName}-object`}
              className="ml-4 mb-4 mt-2 color-bg-subtle"
            >
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
                {childParamGroup.params.map((childParam, index) => (
                  <ParameterRow
                    name={childParam.name}
                    description={childParam.description}
                    type={childParam.type}
                    isRequired={childParam.isRequired}
                    defaultValue={childParam.default}
                    enumValues={childParam.enum}
                    slug={slug}
                    isChild={true}
                    key={`${index}-${childParam}`}
                  />
                ))}
              </tbody>
            </table>
          </details>
        ))}
      </td>
    </tr>
  )
}
