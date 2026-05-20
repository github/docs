import { GetServerSideProps } from 'next'

import {
  getMainContext,
  MainContext,
  MainContextT,
  addUINamespaces,
} from '@/frame/components/context/MainContext'
import {
  getAutomatedPageContextFromRequest,
  AutomatedPageContext,
  AutomatedPageContextT,
} from '@/automated-pipelines/components/AutomatedPageContext'
import { AutomatedPage } from '@/automated-pipelines/components/AutomatedPage'
import { SecretScanningTable } from '@/secret-scanning/components/SecretScanningTable'
import type { ExtendedRequest, SecretScanningData } from '@/types'

type Props = {
  mainContext: MainContextT
  automatedPageContext: AutomatedPageContextT
  patterns: SecretScanningData[]
}

export default function SupportedSecretScanningPatterns({
  mainContext,
  automatedPageContext,
  patterns,
}: Props) {
  return (
    <MainContext.Provider value={mainContext}>
      <AutomatedPageContext.Provider value={automatedPageContext}>
        <AutomatedPage rawChildren={<SecretScanningTable data={patterns} />} />
      </AutomatedPageContext.Provider>
    </MainContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const req = context.req as unknown as ExtendedRequest
  const res = context.res as object
  const mainContext = await getMainContext(req, res)
  addUINamespaces(req, mainContext.data.ui, ['secret_scanning'])
  const automatedPageContext = getAutomatedPageContextFromRequest(req)

  // The middleware already loads secretScanningData into req.context
  const patterns = req.context?.secretScanningData ?? []
  return {
    props: {
      mainContext,
      automatedPageContext,
      patterns,
    },
  }
}
