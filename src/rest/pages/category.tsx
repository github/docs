import { GetServerSideProps } from 'next'
import type { Response } from 'express'
import type { ServerResponse } from 'http'
import { Operation } from '@/rest/components/types'
import type { ExtendedRequest, AllVersions } from '@/types/types'
import { RestReferencePage } from '@/rest/components/RestReferencePage'
import { getMainContext, MainContext, MainContextT } from '@/frame/components/context/MainContext'
import {
  AutomatedPageContext,
  AutomatedPageContextT,
  getAutomatedPageContextFromRequest,
} from '@/automated-pipelines/components/AutomatedPageContext'
import type { MiniTocItem } from '@/frame/components/context/ArticleContext'
import {
  getTocLandingContextFromRequest,
  TocLandingContext,
  TocLandingContextT,
} from '@/frame/components/context/TocLandingContext'
import type { TocItem } from '@/landings/types'
import { TocLanding } from '@/landings/components/TocLanding'

type MinitocItemsT = {
  restOperationsMiniTocItems: MiniTocItem[]
}

type Props = {
  mainContext: MainContextT
  tocLandingContext: TocLandingContextT
  automatedPageContext: AutomatedPageContextT
  restOperations: Operation[]
}

// Category landing pages (index.md) render TocLanding instead of the REST reference
// sidebar because their categories have no mini-TOC items at that level.
export default function Category({
  mainContext,
  automatedPageContext,
  tocLandingContext,
  restOperations,
}: Props) {
  const { relativePath } = mainContext

  return (
    <MainContext.Provider value={mainContext}>
      <AutomatedPageContext.Provider value={automatedPageContext}>
        {relativePath?.endsWith('index.md') ? (
          <TocLandingContext.Provider value={tocLandingContext}>
            <TocLanding />
          </TocLandingContext.Provider>
        ) : (
          <RestReferencePage restOperations={restOperations} />
        )}
      </AutomatedPageContext.Provider>
    </MainContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { default: getRest, getRestMiniTocItems } = await import('@/rest/lib/index')
  const nonEnterpriseDefaultVersionModule =
    await import('@/versions/lib/non-enterprise-default-version')
  const nonEnterpriseDefaultVersion = nonEnterpriseDefaultVersionModule.default as string

  const req = context.req as unknown as ExtendedRequest
  const res = context.res as unknown as ServerResponse
  const tocLandingContext = getTocLandingContextFromRequest(
    req as unknown as Parameters<typeof getTocLandingContextFromRequest>[0],
  )
  const category = context.params!.category as string
  let subcategory = context.params!.subcategory as string
  const currentVersion = context.params!.versionId as string
  const currentLanguage = req.context!.currentLanguage as string
  const allVersions = req.context!.allVersions as AllVersions
  const queryApiVersion = context.query.apiVersion as string
  const apiVersion = allVersions[currentVersion].apiVersions.includes(queryApiVersion)
    ? queryApiVersion
    : allVersions[currentVersion].latestApiVersion

  // Category-only pages like /rest/billing use the category as the getRest subcategory.
  if (!subcategory) {
    subcategory = category
  }

  const categoryData = await getRest(currentVersion, apiVersion, category)
  const restOperations = (categoryData && categoryData[subcategory]) || []

  // TocLanding needs one child item per operation grouped under each REST subcategory.
  const restCategoryOperations = categoryData || {}
  const restCategoryTocItems = []

  for (const [subCat, subCatOperations] of Object.entries(restCategoryOperations)) {
    let versionPathSegment: string

    // Omit free-pro-team@latest; otherwise clicked links keep it and the sidebar stays collapsed.
    if (context.params?.versionId === nonEnterpriseDefaultVersion) {
      versionPathSegment = '/'
    } else {
      versionPathSegment = `/${context.params?.versionId}/`
    }

    const fullSubcategoryPath = `/${context.locale}${versionPathSegment}rest/${context.params?.category}/${subCat}`
    // Use tocLandingContext titles; OpenAPI slugs turn repos into Repos, not GitHub Repositories.
    let fullSubcategoryTitle

    const pageTocItem = tocLandingContext.tocItems.find(
      (tocItem) => tocItem.fullPath === fullSubcategoryPath,
    )

    if (pageTocItem) {
      fullSubcategoryTitle = pageTocItem.title
    } else {
      // Fallback titleizes slugs such as outside-collaborators for missing toc entries.
      fullSubcategoryTitle = `${subCat[0].toUpperCase()}${subCat.slice(1).replaceAll('-', ' ')}`
    }

    const restSubcategoryTocs: TocItem[] = []
    const miniTocItems = (await getRestMiniTocItems(
      category,
      subCat,
      apiVersion,
      subCatOperations,
      currentLanguage,
      currentVersion,
      req.context!,
    )) as MinitocItemsT

    for (const operationMinitoc of miniTocItems.restOperationsMiniTocItems) {
      const { title, href: miniTocAnchor } = operationMinitoc.contents
      const fullPath = `/${context.locale}${versionPathSegment}rest/${context.params?.category}/${subCat}${miniTocAnchor}`

      restSubcategoryTocs.push({
        fullPath,
        title,
      })
    }

    restCategoryTocItems.push({
      fullPath: fullSubcategoryPath,
      title: fullSubcategoryTitle,
      childTocItems: restSubcategoryTocs,
    })
  }

  // Article context starts with mini-TOC items from content/rest Markdown.
  const { miniTocItems } = getAutomatedPageContextFromRequest(req)

  // Append operation title anchors to the article mini-TOC.
  if (restOperations) {
    const { restOperationsMiniTocItems } = (await getRestMiniTocItems(
      category,
      subcategory,
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

  tocLandingContext.tocItems = restCategoryTocItems

  const mainContext = await getMainContext(req, res as unknown as Response)

  return {
    props: {
      restOperations,
      mainContext,
      automatedPageContext: getAutomatedPageContextFromRequest(req),
      tocLandingContext,
    },
  }
}
