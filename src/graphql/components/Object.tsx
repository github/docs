import { Link } from '@/frame/components/Link'
import { GraphqlItem, headingTag } from './GraphqlItem'
import { Table } from './Table'
import { useTranslation } from '@/languages/components/useTranslation'
import type { ObjectT, ImplementsT } from './types'
import { RenderedHTML } from '@/frame/components/ui/RenderedHTML/RenderedHTML'

type Props = {
  item: ObjectT
  headingLevel?: number
}

export function Object({ item, headingLevel = 2 }: Props) {
  const { t } = useTranslation('graphql')
  const heading1 = t('reference.implements').replace('{{ GraphQLItemTitle }}', item.name)
  const heading2 = t('reference.fields').replace('{{ GraphQLItemTitle }}', item.name)
  const SubHeading = headingTag(headingLevel + 1)

  return (
    <GraphqlItem item={item} headingLevel={headingLevel} kind="objects">
      {item.implements && (
        <>
          <RenderedHTML as={SubHeading} html={heading1} />
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
          <RenderedHTML as={SubHeading} html={heading2} />
          <Table fields={item.fields} />
        </>
      )}
    </GraphqlItem>
  )
}
