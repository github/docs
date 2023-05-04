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
import { BreakingChanges } from 'components/graphql/BreakingChanges'
import { BreakingChangesT } from 'components/graphql/types'
import { getGraphqlBreakingChanges } from 'src/graphql/lib/index.js'

type Props = {
  mainContext: MainContextT
  schema: BreakingChangesT
  automatedPageContext: AutomatedPageContextT
}

export default function GraphqlBreakingChanges({
  mainContext,
  schema,
  automatedPageContext,
}: Props) {
  return (
    <MainContext.Provider value={mainContext}>
      <AutomatedPageContext.Provider value={automatedPageContext}>
        <AutomatedPage>
          <BreakingChanges schema={schema} />
        </AutomatedPage>
      </AutomatedPageContext.Provider>
    </MainContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const req = context.req as any
  const res = context.res as any
  const currentVersion = context.query.versionId as string
  const schema = getGraphqlBreakingChanges(currentVersion)
  if (!schema) throw new Error(`No graphql breaking changes schema found for ${currentVersion}`)

  // Gets the miniTocItems in the article context. At this point it will only
  // include miniTocItems that exist in Markdown pages in
  // content/graphql/reference/*
  const automatedPageContext = getAutomatedPageContextFromRequest(req)
  const titles = Object.keys(schema).map((item) => `Changes scheduled for ${item}`)
  const changelogMiniTocItems = await getAutomatedPageMiniTocItems(titles, req.context.context, 2)
  // Update the existing context to include the miniTocItems from GraphQL
  automatedPageContext.miniTocItems.push(...changelogMiniTocItems)

  return {
    props: {
      mainContext: await getMainContext(req, res),
      automatedPageContext,
      schema,
    },
  }
}
