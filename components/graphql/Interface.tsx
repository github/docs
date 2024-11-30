import { useRouter } from 'next/router'

import { Link } from 'components/Link'
import { GraphqlItem } from './GraphqlItem'
import { Table } from './Table'
import { useTranslation } from 'components/hooks/useTranslation'
import type { ObjectT, InterfaceT } from './types'

type Props = {
  item: InterfaceT
  objects: ObjectT[]
}

export function Interface({ item, objects }: Props) {
  const { locale } = useRouter()
  const { t } = useTranslation('products')
  const heading = t('graphql.reference.implemented_by')
  const heading2 = t('graphql.reference.fields')

  const implementedBy = objects.filter(
    (object) =>
      object.implements &&
      object.implements.some((implementsItem) => implementsItem.name === item.name)
  )

  return (
    <GraphqlItem item={item} heading={heading}>
      <ul>
        {implementedBy.map((object) => (
          <li key={`${item.id}-${item.name}-${object.href}-${object.name}`}>
            <code>
              <Link href={object.href} locale={locale}>
                {object.name}
              </Link>
            </code>
          </li>
        ))}
      </ul>
      {item.fields && (
        <>
          <h4>{heading2}</h4>
          <Table fields={item.fields} />
        </>
      )}
    </GraphqlItem>
  )
}
