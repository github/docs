import { GetServerSideProps } from 'next'
import { Operation } from 'src/rest/components/types'
import { RestReferencePage } from 'src/rest/components/RestReferencePage'
import {
  addUINamespaces,
  getMainContext,
  MainContext,
  MainContextT,
} from 'src/frame/components/context/MainContext'
import {
  AutomatedPageContext,
  AutomatedPageContextT,
  getAutomatedPageContextFromRequest,
} from 'src/automated-pipelines/components/AutomatedPageContext'
import type { MiniTocItem } from 'src/frame/components/context/ArticleContext'

type MinitocItemsT = {
  restOperationsMiniTocItems: MiniTocItem[]
}

type Props = {
  mainContext: MainContextT
  automatedPageContext: AutomatedPageContextT
  restOperations: Operation[]
}

export default function SubCategory({ mainContext, automatedPageContext, restOperations }: Props) {
  return (
    <MainContext.Provider value={mainContext}>
      <AutomatedPageContext.Provider value={automatedPageContext}>
        <RestReferencePage restOperations={restOperations} />
      </AutomatedPageContext.Provider>
    </MainContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { default: getRest, getRestMiniTocItems } = await import('src/rest/lib/index.js')

  const req = context.req as any
  const res = context.res as any
  // e.g. the `activity` from `/en/rest/activity/events`
  const category = context.params!.category as string
  let subCategory = context.params!.subcategory as string
  const currentVersion = context.params!.versionId as string
  const currentLanguage = req.context.currentLanguage as string
  const allVersions = req.context.allVersions
  const queryApiVersion = context.query.apiVersion
  const apiVersion = allVersions[currentVersion].apiVersions.includes(queryApiVersion)
    ? queryApiVersion
    : allVersions[currentVersion].latestApiVersion
  // For pages with category level only operations like /rest/billing, we set
  // the subcategory's value to be the category for the call to getRest()
  if (!subCategory) {
    subCategory = category
  }

  const restOperations = (await getRest(currentVersion, apiVersion, category, subCategory)) || []

  // Gets the miniTocItems in the article context. At this point it will only
  // include miniTocItems generated from the Markdown pages in
  // content/rest/*
  const { miniTocItems } = getAutomatedPageContextFromRequest(req)

  // When operations exist, update the miniTocItems in the article context
  // with the list of operations in the OpenAPI.

  // The context passed will have the Markdown content for the language
  // of the page being requested and the Markdown will be rendered
  // using the `currentVersion`
  if (restOperations) {
    const { restOperationsMiniTocItems } = (await getRestMiniTocItems(
      category,
      subCategory,
      apiVersion,
      restOperations,
      currentLanguage,
      currentVersion,
      req.context,
    )) as MinitocItemsT

    restOperationsMiniTocItems && miniTocItems.push(...restOperationsMiniTocItems)
  }

  const mainContext = await getMainContext(req, res)
  addUINamespaces(req, mainContext.data.ui, ['parameter_table', 'rest_reference'])

  return {
    props: {
      restOperations,
      mainContext,
      automatedPageContext: getAutomatedPageContextFromRequest(req),
    },
  }
}
