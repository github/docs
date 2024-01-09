import { Link } from 'src/frame/components/Link'
import { GraphqlItem } from './GraphqlItem'
import { Table } from './Table'
import { useTranslation } from 'src/languages/components/useTranslation'
import type { ObjectT, ImplementsT } from './types'

type Props = {
  item: ObjectT
}

export function Object({ item }: Props) {
  const { t } = useTranslation('graphql')
  const heading1 = t('reference.implements').replace('{{ GraphQLItemTitle }}', item.name)
  const heading2 = t('reference.fields').replace('{{ GraphQLItemTitle }}', item.name)

  return (
    <GraphqlItem item={item}>
      {item.implements && (
        <>
          <h3 dangerouslySetInnerHTML={{ __html: heading1 }} />
          <ul>
            {item.implements.map((implement: ImplementsT) => (
              <li key={`${implement.id}-${implement.href}-${implement.name}`}>
                <code>
                  <Link href={implement.href} makeAbsolute>
                    {implement.name}
                  </Link>
                </code>
              </li>
            ))}
          </ul>
        </>
      )}

      {item.fields && (
        <>
          <h3 dangerouslySetInnerHTML={{ __html: heading2 }} />
          <Table fields={item.fields} />
        </>
      )}
    </GraphqlItem>
  )
}
