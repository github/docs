import { GetServerSideProps } from 'next'
import { MainContextT, MainContext, getMainContext } from 'components/context/MainContext'
import getRest, { getRestOperationData } from 'lib/rest/index.js'
import { RestCategoryOperationsT } from 'components/rest/types'
import { MiniTocItem } from 'components/context/ArticleContext'
import { RestReferencePage } from 'components/rest/RestReferencePage'

type RestOperationsT = {
  [version: string]: {
    [category: string]: RestCategoryOperationsT
  }
}

type CategoryDataT = {
  descriptions: {
    [subcategory: string]: string
  }
  miniTocItems: MiniTocItem[]
  introContent: string
}

type RestDataT = {
  [language: string]: {
    [version: string]: {
      [category: string]: CategoryDataT
    }
  }
}

type Props = {
  mainContext: MainContextT
  restOperations: RestCategoryOperationsT
  descriptions: { [subcategory: string]: string }
  miniTocItems: MiniTocItem[]
  introContent: string
}

let rest: RestOperationsT | null = null
let restOperationData: RestDataT | null = null

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

  // Use a local cache to store all of the REST operations, so
  // we only read the directory of static/decorated files once
  if (!rest) {
    rest = (await getRest()) as RestOperationsT
  }

  /* This sets up a skeleton object in the format:
    {
      'en': { free-pro-team@latest: {}, enterprise-cloud@latest: {}},
      'ja': { free-pro-team@latest: {}, enterprise-cloud@latest: {}}
    }
  */
  if (!restOperationData) {
    restOperationData = {}
    Object.keys(req.context.languages).forEach((language) => {
      restOperationData![language] = {}
      Object.keys(req.context.allVersions).forEach(
        (version) => (restOperationData![language][version] = {})
      )
    })
  }

  const restOperations = rest[currentVersion][category]

  // The context passed will have the Markdown content for the language
  // of the page being requested and the Markdown will be rendered
  // using the `currentVersion`
  if (!(category in restOperationData[currentLanguage][currentVersion])) {
    restOperationData[currentLanguage][currentVersion][category] = (await getRestOperationData(
      category,
      restOperations,
      req.context
    )) as CategoryDataT
  }

  return {
    props: {
      restOperations,
      mainContext: getMainContext(req, res),
      descriptions: restOperationData[currentLanguage][currentVersion][category].descriptions,
      miniTocItems: restOperationData[currentLanguage][currentVersion][category].miniTocItems,
      introContent: restOperationData[currentLanguage][currentVersion][category].introContent,
    },
  }
}
