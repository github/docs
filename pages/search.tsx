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
  // The dedicated search results page is, as of Sep 2022 not enabled by
  // default.
  if (!process.env.ENABLE_SEARCH_RESULTS_PAGE) {
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

  const mainContext = await getMainContext(req, res)

  return {
    props: {
      mainContext,
    },
  }
}
