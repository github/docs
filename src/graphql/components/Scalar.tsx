import { GraphqlItem } from './GraphqlItem'
import { ScalarT } from './types'

type Props = {
  item: ScalarT
  headingLevel?: number
}

export function Scalar({ item, headingLevel = 2 }: Props) {
  return <GraphqlItem item={item} headingLevel={headingLevel} kind="scalars" />
}
