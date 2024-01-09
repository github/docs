import { Link } from 'src/frame/components/Link'
import { GraphqlItem } from './GraphqlItem'
import { Notice } from './Notice'
import { useTranslation } from 'src/languages/components/useTranslation'
import { Table } from './Table'
import type { MutationT } from './types'
import React from 'react'

type Props = {
  item: MutationT
}

export function Mutation({ item }: Props) {
  const { t } = useTranslation('graphql')
  const heading = t('reference.input_fields').replace('{{ GraphQLItemTitle }}', item.name)
  const heading2 = t('reference.return_fields').replace('{{ GraphQLItemTitle }}', item.name)

  return (
    <GraphqlItem item={item} heading={heading}>
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
          <h4 dangerouslySetInnerHTML={{ __html: heading2 }} />
          <Table fields={item.returnFields} />
        </React.Fragment>
      ))}
    </GraphqlItem>
  )
}
