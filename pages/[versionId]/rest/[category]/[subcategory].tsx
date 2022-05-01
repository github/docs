import { GetServerSideProps } from 'next'
import getRest, { getRestMiniTocItems } from 'lib/rest/index.js'
import { Operation } from 'components/rest/types'
import { RestReferencePage } from 'components/rest/RestReferencePage'
import { getMainContext, MainContext, MainContextT } from 'components/context/MainContext'
import {
  RestContext,
  RestContextT,
  getRestContextFromRequest,
  MiniTocItem,
} from 'components/context/RestContext'

type MinitocItemsT = {
  restOperationsMiniTocItems: MiniTocItem[]
}

type Props = {
  mainContext: MainContextT
  restContext: RestContextT
  restOperations: Operation[]
}

export default function SubCategory({ mainContext, restContext, restOperations }: Props) {
  return (
    <MainContext.Provider value={mainContext}>
      <RestContext.Provider value={restContext}>
        <RestReferencePage restOperations={restOperations} />
      </RestContext.Provider>
    </MainContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const req = context.req as any
  const res = context.res as any
  // e.g. the `activity` from `/en/rest/activity/events`
  const category = context.params!.category as string
  const subCategory = context.params!.subcategory as string
  const currentVersion = context.params!.versionId as string
  const currentLanguage = req.context.currentLanguage as string

  const restOperations = (await getRest(currentVersion, category, subCategory)) || []

  // Gets the miniTocItems in the article context. At this point it will only
  // include miniTocItems generated from the Markdown pages in
  // content/rest/*
  const { miniTocItems } = getRestContextFromRequest(req)

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
      restContext: getRestContextFromRequest(req),
    },
  }
}
