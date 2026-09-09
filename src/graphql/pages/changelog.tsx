import { GetServerSideProps } from 'next'
import type { Response } from 'express'
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

type Props = {
  mainContext: MainContextT
  schema: ChangelogItemT[]
  automatedPageContext: AutomatedPageContextT
  years: number[]
  currentYear: number
}

export default function GraphqlChangelog({
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
  const years = getGraphqlChangelogYears(currentVersion)
  const currentYear = years[0]
  const schema = getGraphqlChangelogByYear(currentVersion, currentYear) as ChangelogItemT[]
  if (!schema) throw new Error('No graphql free-pro-team changelog schema found.')

  const automatedPageContext = getAutomatedPageContextFromRequest(req)
  const titles = schema.map((item) => `Schema changes for ${item.date}`)
  const changelogMiniTocItems = await getAutomatedPageMiniTocItems(titles, req.context!, 2)
  automatedPageContext.miniTocItems.push(...changelogMiniTocItems)

  stripParagraphWrappers(schema)

  return {
    props: {
      mainContext: await getMainContext(req, res as unknown as Response),
      automatedPageContext,
      schema,
      years,
      currentYear,
    },
  }
}

/**
 * Strip wrapping `<p>` tags from HTML change descriptions to allow
 * rendering as `<li>` content without nested block elements.
 */
export function stripParagraphWrappers(schema: ChangelogItemT[]) {
  for (const item of schema) {
    for (const group of [item.schemaChanges, item.previewChanges, item.upcomingChanges]) {
      for (const change of group) {
        change.changes = change.changes.map((html) => {
          if (html.startsWith('<p>') && html.endsWith('</p>')) return html.slice(3, -4)
          return html
        })
      }
    }
  }
}
