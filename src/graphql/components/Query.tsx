import { Link } from '@/frame/components/Link'
import { GraphqlItem, headingTag } from './GraphqlItem'
import { Table } from './Table'
import { useTranslation } from '@/languages/components/useTranslation'
import type { QueryT } from './types'

type Props = {
  item: QueryT
  headingLevel?: number
}

export function Query({ item, headingLevel = 2 }: Props) {
  const { t } = useTranslation('graphql')
  const SubHeading = headingTag(headingLevel + 1)

  return (
    <GraphqlItem item={item} headingLevel={headingLevel} kind="queries">
      <p>
        <b>{t('graphql.reference.type')}: </b>
        <Link href={item.href} makeAbsolute>
          {item.type}
        </Link>
      </p>

      {item.args.length > 0 && (
        <>
          <SubHeading
            dangerouslySetInnerHTML={{
              __html: t('reference.arguments').replace('{{ GraphQLItemTitle }}', item.name),
            }}
          />
          <Table fields={item.args} />
        </>
      )}
    </GraphqlItem>
  )
}
