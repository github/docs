import { Link } from 'src/frame/components/Link'
import { GraphqlItem } from './GraphqlItem'
import { useTranslation } from 'src/languages/components/useTranslation'
import type { UnionT } from './types'

type Props = {
  item: UnionT
}

export function Union({ item }: Props) {
  const { t } = useTranslation('graphql')
  const heading = t('reference.possible_types').replace('{{ GraphQLItemTitle }}', item.name)

  return (
    <GraphqlItem item={item} heading={heading}>
      <ul>
        {item.possibleTypes.map((type) => (
          <li key={type.id}>
            <Link href={type.href} makeAbsolute>
              <code>{type.name}</code>
            </Link>
          </li>
        ))}
      </ul>
    </GraphqlItem>
  )
}
