import { GetServerSideProps } from 'next'

import { MainContextT, MainContext, getMainContext } from 'components/context/MainContext'
import { Breadcrumbs } from 'components/Breadcrumbs'
import { DefaultLayout } from 'components/DefaultLayout'
import { useEffect, useRef } from 'react'

type Props = {
  mainContext: MainContextT
  graphqlExplorerUrl: string
}
export default function GQLExplorer({ mainContext, graphqlExplorerUrl }: Props) {
  const { page, airGap } = mainContext
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
          <Breadcrumbs />

          <h1>{page.title}</h1>
        </div>

        <div>
          {airGap ? (
            <p>GraphQL explorer is not available on this environment.</p>
          ) : (
            /* eslint-disable-next-line jsx-a11y/iframe-has-title */
            <iframe
              ref={graphiqlRef}
              style={{ height: 715 }}
              className="border width-full"
              scrolling="no"
              src={graphqlExplorerUrl}
            >
              <p>You must have iframes enabled to use this feature.</p>
            </iframe>
          )}
        </div>
      </DefaultLayout>
    </MainContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const req = context.req as any
  const res = context.res as any

  return {
    props: {
      mainContext: getMainContext(req, res),
      graphqlExplorerUrl: req.context.graphql.explorerUrl,
    },
  }
}
