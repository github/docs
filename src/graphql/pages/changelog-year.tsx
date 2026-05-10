import { GetServerSideProps } from 'next'
import type { ExtendedRequest } from '@/types'
import type { ServerResponse } from 'http'

import { MainContextT, MainContext, getMainContext } from '@/frame/components/context/MainContext'
import { AutomatedPage } from '@/automated-pipelines/components/AutomatedPage'
import {
  AutomatedPageContext,
  AutomatedPageContextT,
  getAutomatedPageContextFromRequest,
} from '@/automated-pipelines/components/AutomatedPageContext'
import { Changelog } from '@/graphql/components/Changelog'
import { ChangelogItemT } from '@/graphql/components/types'
import { stripParagraphWrappers } from '@/graphql/pages/changelog'

type Props = {
  mainContext: MainContextT
  schema: ChangelogItemT[]
  automatedPageContext: AutomatedPageContextT
  years: number[]
  currentYear: number
}

export default function GraphqlChangelogYear({
  mainContext,
  schema,
  automatedPageContext,
  years,
  currentYear,
}: Props) {
  const content = <Changelog changelogItems={schema} years={years} currentYear={currentYear} />
  return (
    <MainContext.Provider value={mainContext}>
      <AutomatedPageContext.Provider value={automatedPageContext}>
        <AutomatedPage>{content}</AutomatedPage>
      </AutomatedPageContext.Provider>
    </MainContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { getGraphqlChangelogByYear, getGraphqlChangelogYears } =
    await import('@/graphql/lib/index')
  const { getAutomatedPageMiniTocItems } = await import('@/frame/lib/get-mini-toc-items')

  const req = context.req as unknown as ExtendedRequest
  const res = context.res as unknown as ServerResponse
  const currentVersion = context.query.versionId as string
  const year = Number(context.query.year)

  const years = getGraphqlChangelogYears(currentVersion)
  if (!years.includes(year)) {
    return { notFound: true }
  }

  const schema = getGraphqlChangelogByYear(currentVersion, year) as ChangelogItemT[]

  const automatedPageContext = getAutomatedPageContextFromRequest(req)
  const titles = schema.map((item) => `Schema changes for ${item.date}`)
  const changelogMiniTocItems = await getAutomatedPageMiniTocItems(titles, req.context!, 2)
  automatedPageContext.miniTocItems.push(...changelogMiniTocItems)

  stripParagraphWrappers(schema)

  return {
    props: {
      mainContext: await getMainContext(req, res),
      automatedPageContext,
      schema,
      years,
      currentYear: year,
    },
  }
}
