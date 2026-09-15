import { GetServerSideProps } from 'next'
import type { Response } from 'express'
import type { ServerResponse } from 'http'
import { Operation } from '@/rest/components/types'
import type { ExtendedRequest, AllVersions } from '@/types/types'
import { RestReferencePage } from '@/rest/components/RestReferencePage'
import {
  addUINamespaces,
  getMainContext,
  MainContext,
  MainContextT,
} from '@/frame/components/context/MainContext'
import {
  AutomatedPageContext,
  AutomatedPageContextT,
  getAutomatedPageContextFromRequest,
} from '@/automated-pipelines/components/AutomatedPageContext'
import type { MiniTocItem } from '@/frame/components/context/ArticleContext'

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
  const { default: getRest, getRestMiniTocItems } = await import('@/rest/lib/index')

  const req = context.req as unknown as ExtendedRequest
  const res = context.res as unknown as ServerResponse
  // e.g. the `activity` from `/en/rest/activity/events`
  const category = context.params!.category as string
  let subCategory = context.params!.subcategory as string
  const currentVersion = context.params!.versionId as string
  const currentLanguage = req.context!.currentLanguage as string
  const allVersions = req.context!.allVersions as AllVersions
  const queryApiVersion = context.query.apiVersion as string
  const apiVersion = allVersions[currentVersion].apiVersions.includes(queryApiVersion)
    ? queryApiVersion
    : allVersions[currentVersion].latestApiVersion
  // For pages with category level only operations like /rest/billing, we set
  // the subcategory's value to be the category for the call to getRest()
  if (!subCategory) {
    subCategory = category
  }

  const categoryData = await getRest(currentVersion, apiVersion, category)
  const restOperations = (categoryData && categoryData[subCategory]) || []

  // Gets the miniTocItems in the article context. At this point it will only
  // include miniTocItems generated from the Markdown pages in
  // content/rest/*
  const { miniTocItems } = getAutomatedPageContextFromRequest(req)

  // Build mini-TOC items from the operation titles, using the request context
  // for the language and version, and append them to the article's mini-TOC.
  if (restOperations) {
    const { restOperationsMiniTocItems } = (await getRestMiniTocItems(
      category,
      subCategory,
      apiVersion,
      restOperations,
      currentLanguage,
      currentVersion,
      req.context!,
    )) as MinitocItemsT

    if (restOperationsMiniTocItems) {
      miniTocItems.push(...restOperationsMiniTocItems)
    }
  }

  const mainContext = await getMainContext(req, res as unknown as Response)
  addUINamespaces(req, mainContext.data.ui, ['parameter_table', 'rest_reference'])

  return {
    props: {
      restOperations,
      mainContext,
      automatedPageContext: getAutomatedPageContextFromRequest(req),
    },
  }
}
