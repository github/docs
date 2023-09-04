import { useRouter } from 'next/router'

import { Link } from 'components/Link'
import { GraphqlItem } from './GraphqlItem'
import { useTranslation } from 'src/languages/components/useTranslation'
import type { UnionT } from './types'

type Props = {
  item: UnionT
}

export function Union({ item }: Props) {
  const { locale } = useRouter()
  const { t } = useTranslation('products')
  const heading = t('graphql.reference.possible_types').replace('{{ GraphQLItemTitle }}', item.name)

  return (
    <GraphqlItem item={item} heading={heading}>
      <ul>
        {item.possibleTypes.map((type) => (
          <li key={type.id}>
            <Link href={type.href} locale={locale}>
              <code>{type.name}</code>
            </Link>
          </li>
        ))}
      </ul>
    </GraphqlItem>
  )
}
