import { GetServerSideProps } from 'next'
import React from 'react'

import { MainContextT, MainContext, getMainContext } from 'components/context/MainContext'
import { AutomatedPage } from 'src/automated-pipelines/components/AutomatedPage'
import {
  AutomatedPageContext,
  AutomatedPageContextT,
  getAutomatedPageContextFromRequest,
} from 'src/automated-pipelines/components/AutomatedPageContext'
import { Changelog } from 'src/graphql/components/Changelog'
import { ChangelogItemT } from 'src/graphql/components/types'

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
  const { getGraphqlChangelog } = await import('src/graphql/lib/index.js')
  const { getAutomatedPageMiniTocItems } = await import('lib/get-mini-toc-items.js')

  const req = context.req as any
  const res = context.res as any
  const currentVersion = context.query.versionId as string
  const schema = getGraphqlChangelog(currentVersion) as ChangelogItemT[]
  if (!schema) throw new Error('No graphql free-pro-team changelog schema found.')
  // Gets the miniTocItems in the article context. At this point it will only
  // include miniTocItems that exist in Markdown pages in
  // content/graphql/reference/*
  const automatedPageContext = getAutomatedPageContextFromRequest(req)
  const titles = schema.map((item) => `Schema changes for ${item.date}`)
  const changelogMiniTocItems = await getAutomatedPageMiniTocItems(titles, req.context.context, 2)
  // Update the existing context to include the miniTocItems from GraphQL
  automatedPageContext.miniTocItems.push(...changelogMiniTocItems)

  // All groups in the schema have a change.changes array of strings that are
  // all the HTML output from a Markdown conversion. E.g.
  // `<p>Field filename was added to object type <code>IssueTemplate</code></p>`
  // Change these to just be the inside of the <p> tag.
  // `Field filename was added to object type <code>IssueTemplate</code>`
  // This makes the serialized state data smaller and it makes it possible
  // to render it as...
  //
  //    <li>Field filename was added to object type <code>IssueTemplate</code></li>
  //
  // ...without the additional <p>.
  schema.forEach((item) => {
    for (const group of [item.schemaChanges, item.previewChanges, item.upcomingChanges]) {
      group.forEach((change) => {
        change.changes = change.changes.map((html) => {
          if (html.startsWith('<p>') && html.endsWith('</p>')) return html.slice(3, -4)
          return html
        })
      })
    }
  })

  return {
    props: {
      mainContext: await getMainContext(req, res),
      automatedPageContext,
      schema,
    },
  }
}
