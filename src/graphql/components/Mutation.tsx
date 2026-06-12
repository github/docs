import { Link } from '@/frame/components/Link'
import { GraphqlItem, headingTag } from './GraphqlItem'
import { Notice } from './Notice'
import { useTranslation } from '@/languages/components/useTranslation'
import { Table } from './Table'
import type { MutationT } from './types'
import React from 'react'

type Props = {
  item: MutationT
  headingLevel?: number
}

export function Mutation({ item, headingLevel = 2 }: Props) {
  const { t } = useTranslation('graphql')
  const heading = t('reference.input_fields').replace('{{ GraphQLItemTitle }}', item.name)
  const heading2 = t('reference.return_fields').replace('{{ GraphQLItemTitle }}', item.name)
  const SubHeading = headingTag(headingLevel + 1)

  return (
    <GraphqlItem item={item} heading={heading} headingLevel={headingLevel} kind="mutations">
      {item.inputFields.map((input) => (
        <React.Fragment key={input.id}>
          <ul>
            <li>
              <code>{input.name}</code> (
              <code>
                <Link href={input.href} makeAbsolute>
                  {input.type}
                </Link>
              </code>
              )
            </li>
          </ul>

          {input.preview && <Notice item={input} variant="preview" />}
          {input.isDeprecated && <Notice item={input} variant="deprecation" />}
          <SubHeading dangerouslySetInnerHTML={{ __html: heading2 }} />
          <Table fields={item.returnFields} />
        </React.Fragment>
      ))}
    </GraphqlItem>
  )
}
