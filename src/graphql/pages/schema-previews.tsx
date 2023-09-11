import { GetServerSideProps } from 'next'
import React from 'react'

import { MainContextT, MainContext, getMainContext } from 'components/context/MainContext'
import { AutomatedPage } from 'src/automated-pipelines/components/AutomatedPage'
import {
  AutomatedPageContext,
  AutomatedPageContextT,
  getAutomatedPageContextFromRequest,
} from 'src/automated-pipelines/components/AutomatedPageContext'
import { Previews } from 'src/graphql/components/Previews'
import { PreviewT } from 'src/graphql/components/types'

type Props = {
  mainContext: MainContextT
  schema: PreviewT[]
  automatedPageContext: AutomatedPageContextT
}

export default function GraphqlPreviews({ mainContext, schema, automatedPageContext }: Props) {
  const content = <Previews schema={schema} />
  return (
    <MainContext.Provider value={mainContext}>
      <AutomatedPageContext.Provider value={automatedPageContext}>
        <AutomatedPage>{content}</AutomatedPage>
      </AutomatedPageContext.Provider>
    </MainContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { getPreviews } = await import('src/graphql/lib/index.js')
  const { getAutomatedPageMiniTocItems } = await import('lib/get-mini-toc-items.js')

  const req = context.req as any
  const res = context.res as any
  const currentVersion = context.query.versionId as string
  const schema = getPreviews(currentVersion) as PreviewT[]
  if (!schema) throw new Error(`No graphql preview schema found for ${currentVersion}`)

  // Gets the miniTocItems in the article context. At this point it will only
  // include miniTocItems that exist in Markdown pages in
  // content/graphql/reference/*
  const automatedPageContext = getAutomatedPageContextFromRequest(req)
  const titles = schema.map((item) => item.title)
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
