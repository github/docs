import type { GetServerSideProps } from 'next'
import type { Response } from 'express'
import type { ExtendedRequest } from '@/types'

import {
  MainContextT,
  MainContext,
  getMainContext,
  addUINamespaces,
} from '@/frame/components/context/MainContext'
import { DefaultLayout } from '@/frame/components/DefaultLayout'
import { SearchContext } from '@/search/components/context/SearchContext'
import { Search } from '@/search/components/results/index'
import { SearchOnReqObject } from '@/search/types'
import type { SearchContextT } from '@/search/components/types'

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
  const req = context.req as unknown as ExtendedRequest
  const res = context.res as unknown as Response

  const mainContext = await getMainContext(req, res)
  addUINamespaces(req, mainContext.data.ui, ['search_results'])

  if (!req.context?.search) {
    // Middleware populates req.context.search before this page renders.
    throw new Error('Expected req.context to be populated with .search')
  }

  const searchObject = (req.context?.search ?? {}) as SearchOnReqObject<'generalSearch'>

  // Only query and debug go into searchParams; result metadata stays in results.meta.
  const search: SearchContextT['search'] = {
    searchParams: {
      query: searchObject.searchParams.query,
      debug: searchObject.searchParams.debug,
    },
    validationErrors: searchObject.validationErrors,
  }
  // Empty searches omit results because Next.js cannot serialize undefined.
  if (searchObject.results) {
    search.results = {
      meta: searchObject.results.meta,
      hits: searchObject.results.hits,
      // Normalize missing aggregations to null because Next.js cannot serialize undefined.
      aggregations: searchObject.results.aggregations || null,
    }
  }

  return {
    props: {
      mainContext,
      searchContext: { search },
    },
  }
}
