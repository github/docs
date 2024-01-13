import React from 'react'

import { useTranslation } from 'src/languages/components/useTranslation'
import { GraphqlItem } from './GraphqlItem'
import type { EnumT } from './types'

type Props = {
  item: EnumT
}

export function Enum({ item }: Props) {
  const { t } = useTranslation('graphql')
  const heading = t('reference.values').replace('{{ GraphQLItemTitle }}', item.name)

  return (
    <GraphqlItem item={item} heading={heading}>
      {item.values.map((value) => (
        <React.Fragment key={`${value.name}-${value.description}`}>
          <p>
            <strong>{value.name}</strong>
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: value.description,
            }}
          />
        </React.Fragment>
      ))}
    </GraphqlItem>
  )
}
