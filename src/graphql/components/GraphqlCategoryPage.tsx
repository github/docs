import { type JSX } from 'react'
import cx from 'clsx'

import { Enum } from './Enum'
import { InputObject } from './InputObject'
import { Interface } from './Interface'
import { Scalar } from './Scalar'
import { Mutation } from './Mutation'
import { Object as GraphqlObject } from './Object'
import { Query } from './Query'
import { Union } from './Union'
import { HeadingLink } from '@/frame/components/article/HeadingLink'
import type {
  EnumT,
  InputObjectT,
  InterfaceImplementerT,
  InterfaceT,
  MutationT,
  ObjectT,
  QueryT,
  ScalarT,
  UnionT,
} from './types'
import {
  ALL_KIND_KEYS,
  KIND_LABELS,
  KIND_LABELS_PLURAL,
  KIND_URL_SEGMENT,
  compareByName,
  type SchemaKindKey,
} from '@/graphql/lib/categories'
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
  // Interface lists implementers from every category, not only this page's objects.
  implementers: InterfaceImplementerT[]
}

// Keep item headings in sync with the mini-TOC builder in src/graphql/pages/reference.tsx.
const ITEM_HEADING_LEVEL = 3

// src/graphql/pages/reference.tsx sends empty categories to 404, so this renders populated pages.
// GraphqlItem keeps kind labels so deep-linked items remain self-describing outside the section.
export function GraphqlCategoryPage({ schema, implementers }: Props) {
  const sections = ALL_KIND_KEYS.flatMap((kind) => {
    const items = schema[kind]
    if (!items || items.length === 0) return []
    const sorted = [...items].sort(compareByName)
    return [{ kind, items: sorted }]
  })

  return (
    <div className={cx(styles.markdownBody, categoryStyles.categoryPage)}>
      {sections.map(({ kind, items }) => (
        <section key={kind} aria-labelledby={KIND_URL_SEGMENT[kind]}>
          <HeadingLink as="h2" slug={KIND_URL_SEGMENT[kind]}>
            {KIND_LABELS_PLURAL[kind]}
          </HeadingLink>
          {items.map((item) => renderItem(kind, item, implementers))}
        </section>
      ))}
    </div>
  )
}

function renderItem(
  kind: SchemaKindKey,
  item: AnySchemaItem,
  implementers: InterfaceImplementerT[],
): JSX.Element {
  const id = (item as { id?: string }).id ?? item.name
  const key = `${kind}-${id}`
  switch (kind) {
    case 'queries':
      return <Query key={key} item={item as QueryT} headingLevel={ITEM_HEADING_LEVEL} />
    case 'mutations':
      return <Mutation key={key} item={item as MutationT} headingLevel={ITEM_HEADING_LEVEL} />
    case 'objects':
      return <GraphqlObject key={key} item={item as ObjectT} headingLevel={ITEM_HEADING_LEVEL} />
    case 'interfaces':
      return (
        <Interface
          key={key}
          item={item as InterfaceT}
          objects={implementers}
          headingLevel={ITEM_HEADING_LEVEL}
        />
      )
    case 'enums':
      return <Enum key={key} item={item as EnumT} headingLevel={ITEM_HEADING_LEVEL} />
    case 'unions':
      return <Union key={key} item={item as UnionT} headingLevel={ITEM_HEADING_LEVEL} />
    case 'inputObjects':
      return <InputObject key={key} item={item as InputObjectT} headingLevel={ITEM_HEADING_LEVEL} />
    case 'scalars':
      return <Scalar key={key} item={item as ScalarT} headingLevel={ITEM_HEADING_LEVEL} />
  }
}

export { KIND_LABELS }
