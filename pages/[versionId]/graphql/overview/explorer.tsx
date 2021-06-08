import { GetServerSideProps } from 'next'

import {
  MainContextT,
  MainContext,
  getMainContextFromRequest,
} from 'components/context/MainContext'
import { Breadcrumbs } from 'components/Breadcrumbs'
import { DefaultLayout } from 'components/DefaultLayout'

type Props = {
  mainContext: MainContextT
  graphqlExplorerUrl: string
}
export default function GQLExplorer({ mainContext, graphqlExplorerUrl }: Props) {
  const { page, airGap } = mainContext
  return (
    <MainContext.Provider value={mainContext}>
      <DefaultLayout>
        <main className="container-xl px-3 px-md-6 my-4 my-lg-4 d-xl-flex">
          <article className="markdown-body width-full">
            <div className="d-lg-flex flex-justify-between">
              <div className="d-flex flex-items-center breadcrumbs-wrapper">
                <Breadcrumbs />
              </div>
            </div>

            <h1 className="border-bottom-0">{page.title}</h1>

            <div className="mt-2">
              <div>
                {airGap ? (
                  <p>GraphQL explorer is not available on this environment.</p>
                ) : (
                  <iframe
                    id="graphiql"
                    className="graphql-explorer"
                    scrolling="no"
                    src={graphqlExplorerUrl}
                  >
                    <p>You must have iframes enabled to use this feature.</p>
                  </iframe>
                )}
              </div>
            </div>
          </article>
        </main>
      </DefaultLayout>
    </MainContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const req = context.req as any

  return {
    props: {
      mainContext: getMainContextFromRequest(req),
      graphqlExplorerUrl: req.context.graphql.explorerUrl,
    },
  }
}
