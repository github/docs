import { useRouter } from 'next/router'

import { Link } from 'components/Link'
import { GraphqlItem } from './GraphqlItem'
import { Table } from './Table'
import { useTranslation } from 'components/hooks/useTranslation'
import type { ObjectT, ImplementsT } from './types'

type Props = {
  item: ObjectT
}

export function Object({ item }: Props) {
  const { locale } = useRouter()
  const { t } = useTranslation('products')
  const heading1 = t('graphql.reference.implements')
  const heading2 = t('graphql.reference.fields')

  return (
    <GraphqlItem item={item}>
      {item.implements && (
        <>
          <h3>{heading1}</h3>
          <ul>
            {item.implements.map((implement: ImplementsT) => (
              <li key={`${implement.id}-${implement.href}-${implement.name}`}>
                <code>
                  <Link href={implement.href} locale={locale}>
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
          <h3>{heading2}</h3>
          <Table fields={item.fields} />
        </>
      )}
    </GraphqlItem>
  )
}
