import { GetServerSideProps } from 'next'

import {
  AutomatedPageContextT,
  getAutomatedPageContextFromRequest,
} from 'src/automated-pipelines/components/AutomatedPageContext'
import { MainContextT, getMainContext } from 'src/frame/components/context/MainContext'

import { EnabledList, EnabledListT } from 'src/github-apps/components/EnabledList'

type Props = {
  mainContext: MainContextT
  currentVersion: string
  appsItems: EnabledListT
  automatedPageContext: AutomatedPageContextT
  categoriesWithoutSubcategories: string[]
}

export default function FineGrainedTokenEndpoints({
  mainContext,
  currentVersion,
  appsItems,
  automatedPageContext,
  categoriesWithoutSubcategories,
}: Props) {
  return (
    <EnabledList
      items={appsItems}
      currentVersion={currentVersion}
      categoriesWithoutSubcategories={categoriesWithoutSubcategories}
      mainContext={mainContext}
      automatedPageContext={automatedPageContext}
    />
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { getAppsServerSideProps } = await import('src/github-apps/lib/index.js')
  const { currentVersion, appsItems, categoriesWithoutSubcategories } =
    await getAppsServerSideProps(context, 'fine-grained-pat', { useDisplayTitle: false })

  return {
    props: {
      mainContext: await getMainContext(context.req, context.res),
      currentVersion,
      appsItems,
      automatedPageContext: getAutomatedPageContextFromRequest(context.req),
      categoriesWithoutSubcategories,
    },
  }
}
