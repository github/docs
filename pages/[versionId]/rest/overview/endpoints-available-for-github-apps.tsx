import { GetServerSideProps } from 'next'
import { MainContextT, MainContext, getMainContext } from 'components/context/MainContext'
import {
  getArticleContextFromRequest,
  ArticleContextT,
  ArticleContext,
} from 'components/context/ArticleContext'
import { ArticlePage } from 'components/article/ArticlePage'
import { getEnabledForApps } from 'lib/rest/index.js'

type OperationT = {
  slug: string
  verb: string
  requestPath: string
}

type EnabledAppCategoryT = {
  [category: string]: OperationT[]
}

type AppDataT = {
  [version: string]: EnabledAppCategoryT
}

let enabledForApps: AppDataT | null = null

type Props = {
  mainContext: MainContextT
  enabledForApps: EnabledAppCategoryT
  userLanguage: string
  articleContext: ArticleContextT
}

export default function Category({
  mainContext,
  enabledForApps,
  userLanguage,
  articleContext,
}: Props) {
  const content = Object.keys(enabledForApps).map((category: string, index: Number) => (
    <div key={`enabledAppCategory-${index}`}>
      {enabledForApps[category].length > 0 ? (
        <h3 id={category}>
          <a href={category}>{category}</a>
        </h3>
      ) : null}
      <ul>
        {enabledForApps[category].map((operation: OperationT, index: Number) => (
          <li key={`enabledAppOperation-${index}`}>
            <a href={`${userLanguage}/rest/reference/${category}#${operation.slug}`}>
              <code>
                <span className="text-uppercase">{operation.verb}</span> {operation.requestPath}
              </code>
            </a>
          </li>
        ))}
      </ul>
    </div>
  ))

  return (
    <MainContext.Provider value={mainContext}>
      <ArticleContext.Provider value={articleContext}>
        <ArticlePage structuredContent={content} />
      </ArticleContext.Provider>
    </MainContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const req = context.req as object
  const res = context.res as object
  const currentVersion = context.query.versionId as string
  const mainContext = getMainContext(req, res)
  const userLanguage = context.locale || ''

  if (!enabledForApps) {
    enabledForApps = (await getEnabledForApps()) as AppDataT
  }

  return {
    props: {
      mainContext,
      enabledForApps: enabledForApps[currentVersion],
      userLanguage,
      articleContext: getArticleContextFromRequest(req),
    },
  }
}
