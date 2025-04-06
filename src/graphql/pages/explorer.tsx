import { GetServerSideProps } from 'next'

import { MainContextT, MainContext, getMainContext } from 'src/frame/components/context/MainContext'
import { AutomatedPage } from 'src/automated-pipelines/components/AutomatedPage'
import {
  AutomatedPageContext,
  AutomatedPageContextT,
  getAutomatedPageContextFromRequest,
} from 'src/automated-pipelines/components/AutomatedPageContext'
import { useEffect, useRef } from 'react'

type Props = {
  mainContext: MainContextT
  graphqlExplorerUrl: string
  automatedPageContext: AutomatedPageContextT
}
export default function GQLExplorer({
  mainContext,
  graphqlExplorerUrl,
  automatedPageContext,
}: Props) {
  const graphiqlRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search) {
      graphiqlRef.current?.contentWindow?.postMessage(window.location.search, graphqlExplorerUrl)
    }
  }, [])

  return (
    <MainContext.Provider value={mainContext}>
      <AutomatedPageContext.Provider value={automatedPageContext}>
        <AutomatedPage fullWidth={true}>
          <div>
            <iframe
              ref={graphiqlRef}
              style={{ height: 715 }}
              className="border width-full"
              scrolling="no"
              src={graphqlExplorerUrl}
              title="GitHub GraphQL API"
            >
              You must have iframes enabled to use this feature.
            </iframe>
          </div>
        </AutomatedPage>
      </AutomatedPageContext.Provider>
    </MainContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const req = context.req as any
  const res = context.res as any
  const graphqlExplorerUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://graphql.github.com/explorer'
      : 'http://localhost:3000'
  const automatedPageContext = getAutomatedPageContextFromRequest(req)

  return {
    props: {
      mainContext: await getMainContext(req, res),
      graphqlExplorerUrl,
      automatedPageContext,
    },
  }
}
