import { GetServerSideProps } from 'next'
import GithubSlugger from 'github-slugger'

import { MainContextT, MainContext, getMainContext } from 'src/frame/components/context/MainContext'
import { AutomatedPage } from 'src/automated-pipelines/components/AutomatedPage'
import {
  AutomatedPageContext,
  AutomatedPageContextT,
  getAutomatedPageContextFromRequest,
} from 'src/automated-pipelines/components/AutomatedPageContext'
import type { HeadingT } from 'src/graphql/components/BreakingChanges'
import { BreakingChanges } from 'src/graphql/components/BreakingChanges'
import { BreakingChangesT } from 'src/graphql/components/types'

type Props = {
  mainContext: MainContextT
  schema: BreakingChangesT
  automatedPageContext: AutomatedPageContextT
  headings: Record<string, HeadingT>
}

export default function GraphqlBreakingChanges({
  mainContext,
  schema,
  automatedPageContext,
  headings,
}: Props) {
  return (
    <MainContext.Provider value={mainContext}>
      <AutomatedPageContext.Provider value={automatedPageContext}>
        <AutomatedPage>
          <BreakingChanges schema={schema} headings={headings} />
        </AutomatedPage>
      </AutomatedPageContext.Provider>
    </MainContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { getGraphqlBreakingChanges } = await import('src/graphql/lib/index.js')
  const { getAutomatedPageMiniTocItems } = await import('src/frame/lib/get-mini-toc-items.js')

  const req = context.req as any
  const res = context.res as any
  const currentVersion = context.query.versionId as string
  const schema = getGraphqlBreakingChanges(currentVersion)
  if (!schema) throw new Error(`No graphql breaking changes schema found for ${currentVersion}`)

  // Gets the miniTocItems in the article context. At this point it will only
  // include miniTocItems that exist in Markdown pages in
  // content/graphql/reference/*
  const automatedPageContext = getAutomatedPageContextFromRequest(req)
  const slugger = new GithubSlugger()
  const headings = Object.fromEntries(
    Object.keys(schema).map((date) => {
      const title = `Changes scheduled for ${date}`
      const slug = slugger.slug(title)
      return [
        date,
        {
          title,
          slug,
        },
      ]
    }),
  )
  const titles = Object.values(headings).map((heading) => heading.title)
  const changelogMiniTocItems = await getAutomatedPageMiniTocItems(titles, req.context.context, 2)
  // Update the existing context to include the miniTocItems from GraphQL
  automatedPageContext.miniTocItems.push(...changelogMiniTocItems)

  return {
    props: {
      mainContext: await getMainContext(req, res),
      automatedPageContext,
      schema,
      headings,
    },
  }
}
