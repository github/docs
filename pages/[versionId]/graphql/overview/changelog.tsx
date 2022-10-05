import { GetServerSideProps } from 'next'
import React from 'react'

import { MainContextT, MainContext, getMainContext } from 'components/context/MainContext'
import { AutomatedPage } from 'components/article/AutomatedPage'
import {
  AutomatedPageContext,
  AutomatedPageContextT,
  getAutomatedPageContextFromRequest,
} from 'components/context/AutomatedPageContext'
import { getAutomatedPageMiniTocItems } from 'lib/get-mini-toc-items.js'
import { Changelog } from 'components/graphql/Changelog'
import { ChangelogItemT } from 'components/graphql/types'
import { getGraphqlChangelog } from 'lib/graphql/index.js'

type Props = {
  mainContext: MainContextT
  schema: ChangelogItemT[]
  automatedPageContext: AutomatedPageContextT
}

export default function GraphqlChangelog({ mainContext, schema, automatedPageContext }: Props) {
  const content = <Changelog changelogItems={schema} />
  return (
    <MainContext.Provider value={mainContext}>
      <AutomatedPageContext.Provider value={automatedPageContext}>
        <AutomatedPage>{content}</AutomatedPage>
      </AutomatedPageContext.Provider>
    </MainContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const req = context.req as any
  const res = context.res as any
  const schema = getGraphqlChangelog() as ChangelogItemT[]
  if (!schema) throw new Error('No graphql free-pro-team changelog schema found.')
  // Gets the miniTocItems in the article context. At this point it will only
  // include miniTocItems that exist in Markdown pages in
  // content/graphql/reference/*
  const automatedPageContext = getAutomatedPageContextFromRequest(req)
  const titles = schema.map((item) => `Schema changes for ${item.date}`)
  const changelogMiniTocItems = await getAutomatedPageMiniTocItems(titles, req.context.context, 2)
  // Update the existing context to include the miniTocItems from GraphQL
  automatedPageContext.miniTocItems.push(...changelogMiniTocItems)

  return {
    props: {
      mainContext: getMainContext(req, res),
      automatedPageContext,
      schema,
    },
  }
}
