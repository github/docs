import { Link } from 'src/frame/components/Link'
import { GraphqlItem } from './GraphqlItem'
import { Table } from './Table'
import { useTranslation } from 'src/languages/components/useTranslation'
import type { ObjectT, InterfaceT } from './types'

type Props = {
  item: InterfaceT
  objects: ObjectT[]
}

export function Interface({ item, objects }: Props) {
  const { t } = useTranslation('graphql')
  const heading = t('reference.implemented_by').replace('{{ GraphQLItemTitle }}', item.name)
  const heading2 = t('reference.fields').replace('{{ GraphQLItemTitle }}', item.name)

  const implementedBy = objects.filter(
    (object) =>
      object.implements &&
      object.implements.some((implementsItem) => implementsItem.name === item.name),
  )

  return (
    <GraphqlItem item={item} heading={heading}>
      <ul>
        {implementedBy.map((object) => (
          <li key={`${item.id}-${item.name}-${object.href}-${object.name}`}>
            <code>
              <Link href={object.href} makeAbsolute>
                {object.name}
              </Link>
            </code>
          </li>
        ))}
      </ul>
      {item.fields && (
        <>
          <h4
            dangerouslySetInnerHTML={{
              __html: heading2,
            }}
          />
          <Table fields={item.fields} />
        </>
      )}
    </GraphqlItem>
  )
}
