import { GetServerSideProps } from 'next'
import { MainContextT, MainContext, getMainContext } from 'components/context/MainContext'
import getRest, { getRestOperationData } from 'lib/rest/index.js'
import { RestCategoryOperationsT } from 'components/rest/types'
import { MiniTocItem } from 'components/context/ArticleContext'
import { RestReferencePage } from 'components/rest/RestReferencePage'

type CategoryDataT = {
  descriptions: {
    [subcategory: string]: string
  }
  miniTocItems: MiniTocItem[]
  introContent: string
}

type Props = {
  mainContext: MainContextT
  restOperations: RestCategoryOperationsT
  descriptions: { [subcategory: string]: string }
  miniTocItems: MiniTocItem[]
  introContent: string
}

export default function Category({
  mainContext,
  restOperations,
  descriptions,
  miniTocItems,
  introContent,
}: Props) {
  return (
    <MainContext.Provider value={mainContext}>
      <RestReferencePage
        descriptions={descriptions}
        introContent={introContent}
        restOperations={restOperations}
        miniTocItems={miniTocItems}
      />
    </MainContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const req = context.req as any
  const res = context.res as any
  // e.g. the `activity` from `/en/rest/reference/activity#events`
  const category = context.params!.category as string
  const currentVersion = context.params!.versionId as string
  const currentLanguage = req.context.currentLanguage as string

  const restOperations = await getRest(currentVersion, category)

  // The context passed will have the Markdown content for the language
  // of the page being requested and the Markdown will be rendered
  // using the `currentVersion`
  const { descriptions, miniTocItems, introContent } = (await getRestOperationData(
    category,
    currentLanguage,
    currentVersion,
    req.context
  )) as CategoryDataT

  return {
    props: {
      restOperations,
      mainContext: getMainContext(req, res),
      descriptions,
      miniTocItems,
      introContent,
    },
  }
}
