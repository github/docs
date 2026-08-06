import { GetServerSideProps } from 'next'
import type { Response } from 'express'

import { GraphqlCategoryPage, type CategorySchema } from '@/graphql/components/GraphqlCategoryPage'
import {
  MainContextT,
  MainContext,
  getMainContext,
  addUINamespaces,
} from '@/frame/components/context/MainContext'
import type { ObjectT } from '@/graphql/components/types'
import type { ExtendedRequest } from '@/types/types'
import { AutomatedPage } from '@/automated-pipelines/components/AutomatedPage'
import {
  AutomatedPageContext,
  AutomatedPageContextT,
  getAutomatedPageContextFromRequest,
} from '@/automated-pipelines/components/AutomatedPageContext'
import {
  ALL_KIND_KEYS,
  KIND_SLUG_PREFIX,
  KIND_LABELS_PLURAL,
  KIND_URL_SEGMENT,
  isValidCategory,
} from '@/graphql/lib/categories'

type Props = {
  mainContext: MainContextT
  automatedPageContext: AutomatedPageContextT
  schema: CategorySchema
  allObjects: ObjectT[]
  language: string
  categorySlug: string
}

export default function GraphqlReferencePage({
  mainContext,
  automatedPageContext,
  schema,
  allObjects,
  categorySlug,
}: Props) {
  // Key the schema content by category slug. Without this, client-side
  // navigation between category pages reuses the same React tree and
  // dangerouslySetInnerHTML descriptions from a previous category can stick
  // around in the DOM. Keying forces a clean unmount/remount on route change.
  const content = <GraphqlCategoryPage key={categorySlug} schema={schema} allObjects={allObjects} />
  return (
    <MainContext.Provider value={mainContext}>
      <AutomatedPageContext.Provider value={automatedPageContext}>
        <AutomatedPage>{content}</AutomatedPage>
      </AutomatedPageContext.Provider>
    </MainContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { getGraphqlSchema, getAllGraphqlObjects } = await import('@/graphql/lib/index')

  const req = context.req as unknown as ExtendedRequest
  const res = context.res
  const ctx = req.context
  if (!ctx?.currentLanguage || !ctx?.currentVersion) {
    throw new Error('Request is missing currentLanguage or currentVersion in context')
  }
  const language: string = ctx.currentLanguage
  const currentVersion: string = ctx.currentVersion
  const page = context.query.page as string

  if (!isValidCategory(page)) {
    return { notFound: true }
  }

  const schema = getGraphqlSchema(currentVersion, page) as CategorySchema
  const allObjects = getAllGraphqlObjects(currentVersion) as ObjectT[]

  // If a category has no types in the current version, 404 the page rather
  // than render an empty document. Empty buckets typically happen when a
  // category exists in fpt/ghec but not in GHES (or vice versa). The content
  // .md files for categories that are empty in every version are removed
  // from `content/graphql/reference/`, but the dynamic [page].tsx route would
  // still serve them otherwise. This guard makes the response a real 404.
  const hasAnyTypes = ALL_KIND_KEYS.some((kind) => {
    const items = (schema as Record<string, unknown[] | undefined>)[kind]
    return Array.isArray(items) && items.length > 0
  })
  if (!hasAnyTypes) {
    return { notFound: true }
  }

  // Build a two-level mini-TOC mirroring the page's kind sections. Top-level
  // entries are kind labels (e.g. "Objects") pointing at the matching section
  // heading; nested entries are the items inside each section. The mini-TOC
  // React component (`MiniTocs`) renders `item.items` recursively, so pushing
  // a nested structure here yields a two-level sidebar even though the
  // default heading-collection path is capped at one level globally.
  const automatedPageContext = getAutomatedPageContextFromRequest(req)
  for (const kind of ALL_KIND_KEYS) {
    const kindItems = (schema as Record<string, Array<{ name: string }>>)[kind]
    if (!kindItems || kindItems.length === 0) continue
    const sortedItems = [...kindItems].sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
    )
    automatedPageContext.miniTocItems.push({
      contents: {
        href: `#${KIND_URL_SEGMENT[kind]}`,
        title: KIND_LABELS_PLURAL[kind],
      },
      items: sortedItems.map((item) => ({
        contents: {
          href: `#${KIND_SLUG_PREFIX[kind]}-${item.name.toLowerCase()}`,
          title: item.name,
        },
      })),
    })
  }

  const mainContext = await getMainContext(req, res as unknown as Response)
  addUINamespaces(req, mainContext.data.ui, ['graphql'])

  return {
    props: {
      mainContext,
      automatedPageContext,
      schema,
      allObjects,
      language,
      categorySlug: page,
    },
  }
}
