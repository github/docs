import { GetServerSideProps } from 'next'

import { MainContextT, MainContext, getMainContext } from 'components/context/MainContext'
import { DefaultLayout } from 'components/DefaultLayout'
import { useEffect, useRef } from 'react'

type Props = {
  mainContext: MainContextT
  graphqlExplorerUrl: string
}
export default function GQLExplorer({ mainContext, graphqlExplorerUrl }: Props) {
  const { page } = mainContext
  const graphiqlRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search) {
      graphiqlRef.current?.contentWindow?.postMessage(window.location.search, graphqlExplorerUrl)
    }
  }, [])

  return (
    <MainContext.Provider value={mainContext}>
      <DefaultLayout>
        <div className="container-xl px-3 px-md-6 my-4 my-lg-4">
          <h1 id="title-h1">{page.title}</h1>
        </div>

        <div>
          {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
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
      </DefaultLayout>
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

  return {
    props: {
      mainContext: await getMainContext(req, res),
      graphqlExplorerUrl,
    },
  }
}
