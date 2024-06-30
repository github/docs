import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { slug as githubSlug } from 'github-slugger'

import { HeadingLink } from 'src/frame/components/article/HeadingLink'
import { Link } from 'src/frame/components/Link'
import { MainContext, MainContextT } from 'src/frame/components/context/MainContext'
import {
  AutomatedPageContext,
  AutomatedPageContextT,
} from 'src/automated-pipelines/components/AutomatedPageContext'
import { AutomatedPage } from 'src/automated-pipelines/components/AutomatedPage'
import { RestRedirect } from 'src/rest/components/RestRedirect'

type EnabledOperationT = {
  slug: string
  subcategory: string
  verb: string
  requestPath: string
}

export type EnabledListT = Record<string, EnabledOperationT[]>

type Props = {
  items: EnabledListT
  currentVersion: string
  categoriesWithoutSubcategories: string[]
  mainContext: MainContextT
  automatedPageContext: AutomatedPageContextT
}

export function EnabledList({
  items,
  currentVersion,
  categoriesWithoutSubcategories,
  mainContext,
  automatedPageContext,
}: Props) {
  const { locale } = useRouter()
  const DEFAULT_VERSION = mainContext.nonEnterpriseDefaultVersion
  const restRoot =
    currentVersion === DEFAULT_VERSION ? `/${locale}/rest` : `/${locale}/${currentVersion}/rest`

  const content = Object.entries(items).map(([category, operations]) =>
    operations.length === 0 ? null : (
      <Fragment key={category}>
        <HeadingLink as="h2" slug={githubSlug(category)}>
          {category}
        </HeadingLink>
        <ul>
          {operations.map((operation, index) => {
            const { slug, verb, requestPath } = operation
            const subcategory = categoriesWithoutSubcategories.includes(category)
              ? ''
              : `/${operation.subcategory}`
            const opPath = `${restRoot}/${category}${subcategory}#${slug}`

            return (
              <li key={`enabledList-${slug}-${index}`}>
                <Link href={opPath}>
                  <code>
                    <span>{verb.toUpperCase()}</span> {requestPath}
                  </code>
                </Link>
              </li>
            )
          })}
        </ul>
      </Fragment>
    ),
  )

  return (
    <MainContext.Provider value={mainContext}>
      <AutomatedPageContext.Provider value={automatedPageContext}>
        <RestRedirect />
        <AutomatedPage>{content}</AutomatedPage>
      </AutomatedPageContext.Provider>
    </MainContext.Provider>
  )
}
