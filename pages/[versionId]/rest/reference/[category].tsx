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

type RestDataT = Record<string, CategoryDataT>

type Props = {
  mainContext: MainContextT
  restOperations: RestCategoryOperationsT
  descriptions: { [subcategory: string]: string }
  articleContext: ArticleContextT
  introContent: string
}

let rest: RestOperationsT | null = null
const restOperationData: RestDataT = {}

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

  // Use a local cache to store all of the REST operations, so
  // we only read the directory of static/decorated files once
  if (!rest) {
    rest = (await getRest()) as RestOperationsT
  }

  const restOperations = rest[currentVersion][category]

  if (!(category in restOperationData)) {
    restOperationData[category] = (await getRestOperationData(
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
  articleContext.miniTocItems = restOperationData[category].miniTocItems

  return {
    props: {
      restOperations,
      mainContext: getMainContext(req, res),
      descriptions: restOperationData[category].descriptions,
      articleContext: articleContext,
      introContent: restOperationData[category].introContent,
    },
  }
}
