import { useTranslation } from '@/languages/components/useTranslation'
import { GraphqlItem } from './GraphqlItem'
import type { EnumT } from './types'

type Props = {
  item: EnumT
  headingLevel?: number
}

export function Enum({ item, headingLevel = 2 }: Props) {
  const { t } = useTranslation('graphql')
  const heading = t('reference.values').replace('{{ GraphQLItemTitle }}', item.name)

  return (
    <GraphqlItem item={item} heading={heading} headingLevel={headingLevel} kind="enums">
      <table className="fields width-full table-fixed">
        <thead>
          <tr>
            <th>{t('reference.name')}</th>
            <th>{t('reference.description')}</th>
          </tr>
        </thead>
        <tbody>
          {item.values.map((value) => (
            <tr key={`${value.name}-${value.description}`}>
              <td>
                <code>{value.name}</code>
              </td>
              <td
                dangerouslySetInnerHTML={{
                  __html: value.description,
                }}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </GraphqlItem>
  )
}
