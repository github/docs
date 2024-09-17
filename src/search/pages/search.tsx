import type { GetServerSideProps } from 'next'

import {
  MainContextT,
  MainContext,
  getMainContext,
  addUINamespaces,
} from 'src/frame/components/context/MainContext'
import { DefaultLayout } from 'src/frame/components/DefaultLayout'
import type { SearchT } from 'src/search/components/types'
import { SearchContext, SearchContextT } from 'src/search/components/context/SearchContext'
import { Search } from 'src/search/components/index'

type Props = {
  mainContext: MainContextT
  searchContext: SearchContextT
}

export default function Page({ mainContext, searchContext }: Props) {
  return (
    <MainContext.Provider value={mainContext}>
      <SearchContext.Provider value={searchContext}>
        <DefaultLayout>
          <Search />
        </DefaultLayout>
      </SearchContext.Provider>
    </MainContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const req = context.req as any
  const res = context.res as any

  const mainContext = await getMainContext(req, res)
  addUINamespaces(req, mainContext.data.ui, ['search_results'])

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
      // Use `null` instead of `undefined` for JSON serialization.
      // The only reason it would ever not be truthy is if the aggregates
      // functionality is not enabled for this version.
      aggregations: req.context.search.results.aggregations || null,
    }
  }

  return {
    props: {
      mainContext,
      searchContext: { search },
    },
  }
}
