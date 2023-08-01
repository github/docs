import type { GetServerSideProps } from 'next'

import { MainContextT, MainContext, getMainContext } from 'components/context/MainContext'
import { DefaultLayout } from 'components/DefaultLayout'
import type { SearchT } from 'src/search/components/types'
import { Search } from 'src/search/components/index'

type Props = {
  mainContext: MainContextT
  search: SearchT
}

export default function Page({ mainContext, search }: Props) {
  return (
    <MainContext.Provider value={mainContext}>
      <DefaultLayout>
        <Search search={search} />
      </DefaultLayout>
    </MainContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const req = context.req as any
  const res = context.res as any

  const version = req.context.currentVersion

  const searchVersion = req.context.searchVersions[Array.isArray(version) ? version[0] : version]
  if (!searchVersion) {
    // E.g. someone loaded `/en/enterprisy-server@2.99/search`
    // That's going to 404 in the XHR later but it simply shouldn't be
    // a valid starting page.
    return {
      notFound: true,
    }
  }

  const mainContext = await getMainContext(req, res)

  if (!req.context.search) {
    // This should have been done by the middleware.
    throw new Error('Expected req.context to be populated with .search')
  }

  // The `req.context.search` is similar to what's needed to React
  // render the search result page.
  // But it contains information (from the contextualizing) that is
  // not needed to display search results.
  // For example, the `req.context.search.search` contains things like
  // `page` and `indexName` which was useful when it made the actual
  // Elasticsearch query. But it's not needed to render the results.
  // We explicitly pick out the parts that are needed, only.
  const search: SearchT = {
    search: {
      query: req.context.search.search.query,
      debug: req.context.search.search.debug,
    },
    validationErrors: req.context.search.validationErrors,
  }
  // If there are no results (e.g. /en/search?query=) from the
  // contextualizing, then `req.context.search.results` will
  // be `undefined` which can't be serialized as a prop, using JSON.stringify.
  if (req.context.search.results) {
    search.results = {
      meta: req.context.search.results.meta,
      hits: req.context.search.results.hits,
    }
  }

  return {
    props: {
      mainContext,
      search,
    },
  }
}
