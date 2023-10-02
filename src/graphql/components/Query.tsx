import { useRouter } from 'next/router'

import { Link } from 'components/Link'
import { GraphqlItem } from './GraphqlItem'
import { Table } from './Table'
import { useTranslation } from 'src/languages/components/useTranslation'
import type { QueryT } from './types'

type Props = {
  item: QueryT
}

export function Query({ item }: Props) {
  const { locale } = useRouter()
  const { t } = useTranslation('products')

  return (
    <GraphqlItem item={item} headingLevel={3}>
      <div>
        <p>
          <b>{t('graphql.reference.type')}: </b>
          <Link href={item.href} locale={locale}>
            {item.type}
          </Link>
        </p>
      </div>

      <div>
        {item.args.length > 0 && (
          <>
            <h4
              dangerouslySetInnerHTML={{
                __html: t('graphql.reference.arguments').replace(
                  '{{ GraphQLItemTitle }}',
                  item.name,
                ),
              }}
            />
            <Table fields={item.args} />
          </>
        )}
      </div>
    </GraphqlItem>
  )
}
