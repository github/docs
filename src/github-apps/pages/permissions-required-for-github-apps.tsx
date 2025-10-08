import { GetServerSideProps } from 'next'
import {
  AutomatedPageContextT,
  getAutomatedPageContextFromRequest,
} from '@/automated-pipelines/components/AutomatedPageContext'
import { MainContext, MainContextT, getMainContext } from '@/frame/components/context/MainContext'
import { PermissionsList, PermissionListT } from '@/github-apps/components/PermissionsList'

type Props = {
  mainContext: MainContextT
  currentVersion: string
  appsItems: PermissionListT
  automatedPageContext: AutomatedPageContextT
  categoriesWithoutSubcategories: string[]
}

export default function GitHubAppPermissions({
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
        tokenTypes={true}
      />
    </MainContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { getAppsServerSideProps } = await import('@/github-apps/lib/index')
  const { currentVersion, appsItems, categoriesWithoutSubcategories } =
    await getAppsServerSideProps(context, 'server-to-server-permissions', { useDisplayTitle: true })

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
