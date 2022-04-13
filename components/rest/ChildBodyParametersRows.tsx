import { useTranslation } from 'components/hooks/useTranslation'
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
        {childParamsGroups?.map((childParamGroup) => {
          return (
            <details key={childParamGroup.id}>
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
              <table
                id={`${childParamGroup.parentName}-object`}
                className="ml-4 mb-4 mt-2 color-bg-subtle"
              >
                <thead>
                  <tr>
                    <th>
                      {t('rest.reference.name')} ({t('rest.reference.type')})
                    </th>
                    <th>{t('rest.reference.description')}</th>
                  </tr>
                </thead>
                <tbody>
                  {childParamGroup.params.map((childParam) => {
                    return (
                      <tr key={`${childParam.name}-${childParam.description}`}>
                        <td className="color-bg-subtle">
                          <code>{childParam.name}</code> ({childParam.type})
                        </td>
                        <td className="color-bg-subtle">
                          <div dangerouslySetInnerHTML={{ __html: childParam.description }} />
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </details>
          )
        })}
      </td>
    </tr>
  )
}
