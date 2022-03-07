import { GetServerSideProps } from 'next'
import { MainContextT, MainContext, getMainContext } from 'components/context/MainContext'
import getRest, { getRestOperationData } from 'lib/rest/index.js'
import { RestOperation } from 'components/rest/RestOperation'
import { Operation } from 'components/rest/types'
import {
  getArticleContextFromRequest,
  ArticleContextT,
  ArticleContext,
  MiniTocItem,
} from 'components/context/ArticleContext'
import { ArticlePage } from 'components/article/ArticlePage'

type RestCategoryOperationsT = {
  [subcategory: string]: Operation[]
}

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
  articleContext: ArticleContextT
  introContent: string
}

let rest: RestOperationsT | null = null
let restOperationData: RestDataT | null = null

export default function Category({
  mainContext,
  articleContext,
  restOperations,
  descriptions,
  introContent,
}: Props) {
  const subcategories = Object.keys(restOperations)

  const operations = subcategories.map((subcategory, index: number) => {
    const operations = restOperations[subcategory].map((operation: Operation, index: number) => (
      <RestOperation key={`restOperation-${index}`} operation={operation} index={index} />
    ))
    return (
      <div key={`restCategory-${index}`}>
        <div dangerouslySetInnerHTML={{ __html: descriptions[subcategory] }} />
        {operations}
      </div>
    )
  })

  // This is Markdown content at the path
  // data/reusables/rest-reference/<category>/<subcategory>
  // that doesn't map directory to a group of operations.
  operations.unshift(
    <div key={`restCategory-introContent`}>
      <div dangerouslySetInnerHTML={{ __html: introContent }} />
    </div>
  )

  return (
    <MainContext.Provider value={mainContext}>
      <ArticleContext.Provider value={articleContext}>
        <ArticlePage structuredContent={operations} />
      </ArticleContext.Provider>
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

  // Because the Markdown page in the content/rest/reference directory
  // is only metadata, the miniTocItems and renderedPage properties
  // are undefined. We need to populate those properties with the static
  // data read from the decorated schema files.
  const articleContext = getArticleContextFromRequest(req)
  articleContext.miniTocItems =
    restOperationData[currentLanguage][currentVersion][category].miniTocItems

  return {
    props: {
      restOperations,
      mainContext: getMainContext(req, res),
      descriptions: restOperationData[currentLanguage][currentVersion][category].descriptions,
      articleContext: articleContext,
      introContent: restOperationData[currentLanguage][currentVersion][category].introContent,
    },
  }
}
