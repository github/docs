import { GraphqlItem } from './GraphqlItem'
import { Table } from './Table'
import { useTranslation } from '@/languages/components/useTranslation'
import type { InputObjectT } from './types'

type Props = {
  item: InputObjectT
  headingLevel?: number
}

export function InputObject({ item, headingLevel = 2 }: Props) {
  const { t } = useTranslation('graphql')
  const heading = t('reference.input_fields').replace('{{ GraphQLItemTitle }}', item.name)
  return (
    <GraphqlItem item={item} heading={heading} headingLevel={headingLevel} kind="inputObjects">
      <Table fields={item.inputFields} />
    </GraphqlItem>
  )
}
