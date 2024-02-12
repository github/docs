import { GetServerSideProps } from 'next'

import {
  AutomatedPageContextT,
  getAutomatedPageContextFromRequest,
} from 'src/automated-pipelines/components/AutomatedPageContext'
import { MainContext, MainContextT, getMainContext } from 'components/context/MainContext'
import { PermissionsList, PermissionListT } from 'src/github-apps/components/PermissionsList'

type Props = {
  mainContext: MainContextT
  currentVersion: string
  appsItems: PermissionListT
  automatedPageContext: AutomatedPageContextT
  categoriesWithoutSubcategories: string[]
}

export default function FineGrainedPatPermissions({
  mainContext,
  currentVersion,
  appsItems,
  automatedPageContext,
  categoriesWithoutSubcategories,
}: Props) {
  return (
    <MainContext.Provider value={mainContext}>
      <PermissionsList
        items={appsItems}
        currentVersion={currentVersion}
        categoriesWithoutSubcategories={categoriesWithoutSubcategories}
        mainContext={mainContext}
        automatedPageContext={automatedPageContext}
      />
    </MainContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { getAppsServerSideProps } = await import('src/github-apps/lib/index.js')
  const { currentVersion, appsItems, categoriesWithoutSubcategories } =
    await getAppsServerSideProps(context, 'fine-grained-pat-permissions', { useDisplayTitle: true })

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
