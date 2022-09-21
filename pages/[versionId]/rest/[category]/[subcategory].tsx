import { GetServerSideProps } from 'next'
import getRest, { getRestMiniTocItems } from 'lib/rest/index.js'
import { Operation } from 'components/rest/types'
import { RestReferencePage } from 'components/rest/RestReferencePage'
import { getMainContext, MainContext, MainContextT } from 'components/context/MainContext'
import {
  AutomatedPageContext,
  AutomatedPageContextT,
  getAutomatedPageContextFromRequest,
} from 'components/context/AutomatedPageContext'
import type { MiniTocItem } from 'components/context/ArticleContext'

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
  const req = context.req as any
  const res = context.res as any
  // e.g. the `activity` from `/en/rest/activity/events`
  const category = context.params!.category as string
  let subCategory = context.params!.subcategory as string
  const currentVersion = context.params!.versionId as string
  const currentLanguage = req.context.currentLanguage as string

  // For pages with category level only operations like /rest/billing, we set
  // the subcategory's value to be the category for the call to getRest()
  if (!subCategory) {
    subCategory = category
  }

  const restOperations = (await getRest(currentVersion, category, subCategory)) || []

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
      restOperations,
      currentLanguage,
      currentVersion,
      req.context
    )) as MinitocItemsT

    restOperationsMiniTocItems && miniTocItems.push(...restOperationsMiniTocItems)
  }

  return {
    props: {
      restOperations,
      mainContext: getMainContext(req, res),
      automatedPageContext: getAutomatedPageContextFromRequest(req),
    },
  }
}
