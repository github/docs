import type { GetServerSideProps } from 'next'

import { MainContextT, MainContext, getMainContext } from 'components/context/MainContext'
import { DefaultLayout } from 'components/DefaultLayout'
import { Search } from 'src/search/components/index'

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

  return {
    props: {
      mainContext,
    },
  }
}
