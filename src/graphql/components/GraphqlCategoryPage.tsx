import { type JSX } from 'react'
import cx from 'classnames'

import { Enum } from './Enum'
import { InputObject } from './InputObject'
import { Interface } from './Interface'
import { Scalar } from './Scalar'
import { Mutation } from './Mutation'
import { Object as GraphqlObject } from './Object'
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
import { ALL_KIND_KEYS, KIND_LABELS, type SchemaKindKey } from '@/graphql/lib/categories'
import styles from '@/frame/components/ui/MarkdownContent/MarkdownContent.module.scss'
import categoryStyles from './GraphqlCategoryPage.module.scss'

type SchemaItemByKind = {
  queries: QueryT
  mutations: MutationT
  objects: ObjectT
  interfaces: InterfaceT
  enums: EnumT
  unions: UnionT
  inputObjects: InputObjectT
  scalars: ScalarT
}

type AnySchemaItem = SchemaItemByKind[SchemaKindKey]

export type CategorySchema = Partial<{
  [K in SchemaKindKey]: SchemaItemByKind[K][]
}>

type Props = {
  schema: CategorySchema
  // All objects across every category. Used by `Interface` to list
  // implementers regardless of which category page is being rendered.
  allObjects: ObjectT[]
}

export function GraphqlCategoryPage({ schema, allObjects }: Props) {
  // Flatten every kind into a single alphabetical-by-name list. Each item
  // renders via the matching per-kind component below.
  //
  // Heads-up: on this branch, anchor slugs are still `item.name.toLowerCase()`
  // (the existing `GraphqlItem` behavior), so case-insensitive name clashes
  // across kinds (e.g. `Repository` object vs `repository` query) collide.
  // The kind-prefixed slug + per-kind label pill that disambiguate these will
  // land with the recategorization PR that wires this component into
  // `pages/reference.tsx`. Until then, this component is dead code.
  type Entry = { kind: SchemaKindKey; item: AnySchemaItem }
  const entries: Entry[] = []
  for (const kind of ALL_KIND_KEYS) {
    const items = schema[kind]
    if (!items || items.length === 0) continue
    for (const item of items) entries.push({ kind, item })
  }
  entries.sort((a, b) => {
    const an = a.item.name.toLowerCase()
    const bn = b.item.name.toLowerCase()
    if (an < bn) return -1
    if (an > bn) return 1
    // Tie-break by kind so the order is deterministic when two kinds share a
    // case-insensitive name (e.g. `Repository` object and `repository` query).
    return a.kind < b.kind ? -1 : a.kind > b.kind ? 1 : 0
  })

  return (
    <div className={cx(styles.markdownBody, categoryStyles.categoryPage)}>
      {entries.map(({ kind, item }) => renderItem(kind, item, allObjects))}
    </div>
  )
}

function renderItem(kind: SchemaKindKey, item: AnySchemaItem, allObjects: ObjectT[]): JSX.Element {
  const id = (item as { id?: string }).id ?? item.name
  const key = `${kind}-${id}`
  switch (kind) {
    case 'queries':
      return <Query key={key} item={item as QueryT} />
    case 'mutations':
      return <Mutation key={key} item={item as MutationT} />
    case 'objects':
      return <GraphqlObject key={key} item={item as ObjectT} />
    case 'interfaces':
      return <Interface key={key} item={item as InterfaceT} objects={allObjects} />
    case 'enums':
      return <Enum key={key} item={item as EnumT} />
    case 'unions':
      return <Union key={key} item={item as UnionT} />
    case 'inputObjects':
      return <InputObject key={key} item={item as InputObjectT} />
    case 'scalars':
      return <Scalar key={key} item={item as ScalarT} />
  }
}

// Re-export the kind label map for callers that want to render a label
// outside of the page (e.g. mini-toc or breadcrumbs).
export { KIND_LABELS }
