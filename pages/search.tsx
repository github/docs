import type { GetServerSideProps } from 'next'

import searchVersions from '../lib/search/versions.js'

import { MainContextT, MainContext, getMainContext } from 'components/context/MainContext'
import { DefaultLayout } from 'components/DefaultLayout'
import { Search } from 'components/search/index'

type Props = {
  mainContext: MainContextT
}

export default function Page({ mainContext }: Props) {
  return (
    <MainContext.Provider value={mainContext}>
      <DefaultLayout>
        <Search />
      </DefaultLayout>
    </MainContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  // The dedicated search results page depends on a working Elasticsearch,
  // ultimately, but unfortunately, that might not be up and running.
  // So if that's the case, which might be true in production (Aug 2022)
  // or on an engineers local development, we basically pretend the
  // page doesn't exist.
  // By depending conditionally on these two environment variables we're
  // able to carefully launch the dedicated search results page
  // separately from the JSON API endpoint.
  if (!process.env.ELASTICSEARCH_URL || !process.env.ENABLE_SEARCH_RESULTS_PAGE) {
    return { notFound: true }
  }

  const req = context.req as any
  const res = context.res as any

  const version = req.context.currentVersion

  const searchVersion = searchVersions[Array.isArray(version) ? version[0] : version]
  if (!searchVersion) {
    // E.g. someone loaded `/en/enterprisy-server@2.99/search`
    // That's going to 404 in the XHR later but it simply shouldn't be
    // a valid starting page.
    return {
      notFound: true,
    }
  }

  const mainContext = getMainContext(req, res)

  return {
    props: {
      mainContext,
    },
  }
}
