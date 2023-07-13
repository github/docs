import React from 'react'
import cx from 'classnames'

import { Enum } from './Enum'
import { InputObject } from './InputObject'
import { Interface } from './Interface'
import { Scalar } from './Scalar'
import { Mutation } from './Mutation'
import { Object } from './Object'
import { Query } from './Query'
import { Union } from './Union'
import type {
  EnumT,
  InputObjectT,
  InterfaceT,
  MutationT,
  ObjectT,
  QueryT,
  ScalarT,
  UnionT,
} from './types'
import styles from 'components/ui/MarkdownContent/MarkdownContent.module.scss'

type Props = {
  schema: Object
  pageName: string
  objects?: ObjectT[]
}

export const GraphqlPage = ({ schema, pageName, objects }: Props) => {
  const graphqlItems: JSX.Element[] = [] // In the case of the H2s for Queries

  // The queries page has two heading sections (connections and fields)
  // So we need to add the heading component and the children under it
  // for each section.
  if (pageName === 'queries') {
    graphqlItems.push(
      ...(schema as QueryT[]).map((item) => <Query item={item} key={item.id + item.name} />),
    )
  } else if (pageName === 'enums') {
    graphqlItems.push(
      ...(schema as EnumT[]).map((item) => {
        return <Enum key={item.id} item={item} />
      }),
    )
  } else if (pageName === 'inputObjects') {
    graphqlItems.push(
      ...(schema as InputObjectT[]).map((item) => {
        return <InputObject key={item.id} item={item} />
      }),
    )
  } else if (pageName === 'interfaces' && objects) {
    graphqlItems.push(
      ...(schema as InterfaceT[]).map((item) => {
        return <Interface key={item.id} item={item} objects={objects} />
      }),
    )
  } else if (pageName === 'mutations') {
    graphqlItems.push(
      ...(schema as MutationT[]).map((item) => {
        return <Mutation key={item.id} item={item} />
      }),
    )
  } else if (pageName === 'objects') {
    graphqlItems.push(
      ...(schema as ObjectT[]).map((item) => {
        return <Object key={item.id} item={item} />
      }),
    )
  } else if (pageName === 'scalars') {
    graphqlItems.push(
      ...(schema as ScalarT[]).map((item) => {
        return <Scalar key={item.id} item={item} />
      }),
    )
  } else if (pageName === 'unions') {
    graphqlItems.push(
      ...(schema as UnionT[]).map((item) => {
        return <Union key={item.id} item={item} />
      }),
    )
  }

  return <div className={cx(styles.markdownBody)}>{graphqlItems}</div>
}
