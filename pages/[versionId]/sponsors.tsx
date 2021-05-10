import { GetServerSideProps } from 'next'

import {
  MainContextT,
  MainContext,
  getMainContextFromRequest,
} from 'components/context/MainContext'
import { DefaultLayout } from 'components/DefaultLayout'

type Props = {
  mainContext: MainContextT
}
const SponsorsPage = ({ mainContext }: Props) => {
  return (
    <MainContext.Provider value={mainContext}>
      <DefaultLayout>
        <p className="p-4">Sponsors page</p>
      </DefaultLayout>
    </MainContext.Provider>
  )
}

export default SponsorsPage

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const req = context.req as any

  return {
    props: {
      mainContext: getMainContextFromRequest(req),
    },
  }
}
