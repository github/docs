import { GraphqlItem } from './GraphqlItem'
import { ScalarT } from './types'

type Props = {
  item: ScalarT
}

export function Scalar({ item }: Props) {
  return <GraphqlItem item={item} />
}
