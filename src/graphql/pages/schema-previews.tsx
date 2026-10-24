import { GetServerSideProps } from 'next'
import type { Response } from 'express'
import type { ExtendedRequest } from '@/types'
import type { ServerResponse } from 'http'

import {
  MainContextT,
  MainContext,
  getMainContext,
  addUINamespaces,
} from '@/frame/components/context/MainContext'
import { AutomatedPage } from '@/automated-pipelines/components/AutomatedPage'
import {
  AutomatedPageContext,
  AutomatedPageContextT,
  getAutomatedPageContextFromRequest,
} from '@/automated-pipelines/components/AutomatedPageContext'
import { Previews } from '@/graphql/components/Previews'
import { PreviewT } from '@/graphql/components/types'

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
  const { getPreviews } = await import('@/graphql/lib/index')
  const { getAutomatedPageMiniTocItems } = await import('@/frame/lib/get-mini-toc-items')

  const req = context.req as unknown as ExtendedRequest
  const res = context.res as unknown as ServerResponse
  const currentVersion = context.query.versionId as string
  const schema = getPreviews(currentVersion) as PreviewT[]
  if (!schema) throw new Error(`No graphql preview schema found for ${currentVersion}`)

  // Start from the current page's Markdown headings, then append the generated ones.
  const automatedPageContext = getAutomatedPageContextFromRequest(req)
  const titles = schema.map((item) => item.title)
  const changelogMiniTocItems = await getAutomatedPageMiniTocItems(titles, req.context!, 2)
  automatedPageContext.miniTocItems.push(...changelogMiniTocItems)

  const mainContext = await getMainContext(req, res as unknown as Response)
  addUINamespaces(req, mainContext.data.ui, ['graphql'])

  return {
    props: {
      mainContext,
      automatedPageContext,
      schema,
    },
  }
}
