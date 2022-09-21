import { GetServerSideProps } from 'next'
import getRest, { getRestMiniTocItems } from 'lib/rest/index.js'
import nonEnterpriseDefaultVersion from 'lib/non-enterprise-default-version.js'
import { Operation } from 'components/rest/types'
import { RestReferencePage } from 'components/rest/RestReferencePage'
import { getMainContext, MainContext, MainContextT } from 'components/context/MainContext'
import {
  AutomatedPageContext,
  AutomatedPageContextT,
  getAutomatedPageContextFromRequest,
} from 'components/context/AutomatedPageContext'
import type { MiniTocItem } from 'components/context/ArticleContext'
import {
  getTocLandingContextFromRequest,
  TocItem,
  TocLandingContext,
  TocLandingContextT,
} from 'components/context/TocLandingContext'
import { TocLanding } from 'components/landing/TocLanding'

type MinitocItemsT = {
  restOperationsMiniTocItems: MiniTocItem[]
}

type Props = {
  mainContext: MainContextT
  tocLandingContext: TocLandingContextT
  automatedPageContext: AutomatedPageContextT
  restOperations: Operation[]
}

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
        {/* When the page is the rest product landing page, we don't want to
        render the rest-specific sidebar because toggling open the categories
        won't have the minitoc items at that level. These are pages that have
        category - subcategory - and operations */}
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
  const req = context.req as any
  const res = context.res as any
  const tocLandingContext = getTocLandingContextFromRequest(req)
  // e.g. the `activity` from `/en/rest/activity/events`
  const category = context.params!.category as string
  let subcategory = context.params!.subcategory as string
  const currentVersion = context.params!.versionId as string
  const currentLanguage = req.context.currentLanguage as string

  // For pages with category level only operations like /rest/billing, we set
  // the subcategory's value to be the category for the call to getRest()
  if (!subcategory) {
    subcategory = category
  }

  const restOperations = (await getRest(currentVersion, category, subcategory)) || []

  // Build table of contents for all category operations for TocLanding:
  //
  // * get all operations for a category (will be broken up by subcategory)
  // * loop over subcategories and get the operations per subcategory
  //   * get the minitoc items per set of subcategory operations
  //   * with this data, build a collection of toc items that can be used by TocLanding
  const restCategoryOperations = (await getRest(currentVersion, category)) || []
  const restCategoryTocItems = []

  for (const [subCat, subCatOperations] of Object.entries(restCategoryOperations)) {
    let versionPathSegment: string

    // If 'free-pro-team@latest' is in the URL, after clicking the link the
    // sidebar isn't expanded to whatever subcategory or operation you clicked
    // and 'free-pro-team@latest' is still in the browser address bar so
    // manually removing.
    if (context.params?.versionId === nonEnterpriseDefaultVersion) {
      versionPathSegment = '/'
    } else {
      versionPathSegment = `/${context.params?.versionId}/`
    }

    const fullSubcategoryPath = `/${context.locale}${versionPathSegment}rest/${context.params?.category}/${subCat}`
    // The actual page titles are available from the tocLandingContext so we
    // can use this information as we build our REST toc items.  If we relied
    // only on the API information, we would need to cleanup subcategory names
    // (e.g. they're all lowercase and use hyphens as word separators) and we
    // would also end up using words we wouldn't want to like "Repos" instead
    // of "GitHub Repositories" for example.
    let fullSubcategoryTitle

    const pageTocItem = tocLandingContext.tocItems.find(
      (tocItem) => tocItem.fullPath === fullSubcategoryPath
    )

    if (pageTocItem) {
      fullSubcategoryTitle = pageTocItem.title
    } else {
      // Shouldn't happen but provide a reasonable fallback just in case.  E.g.
      // for Organizations, a subcategory is 'outside-collaborators' and we
      // convert that to 'Outside collaborators' for a toc item title.
      fullSubcategoryTitle = `${subCat[0].toUpperCase()}${subCat.slice(1).replaceAll('-', ' ')}`
    }

    const restSubcategoryTocs: TocItem[] = []
    const miniTocItems = (await getRestMiniTocItems(
      category,
      subCat,
      subCatOperations,
      currentLanguage,
      currentVersion,
      req.context
    )) as MinitocItemsT

    miniTocItems.restOperationsMiniTocItems.forEach((operationMinitoc) => {
      const { title, href: miniTocAnchor } = operationMinitoc.contents
      const fullPath = `/${context.locale}${versionPathSegment}rest/${context.params?.category}/${subCat}${miniTocAnchor}`

      restSubcategoryTocs.push({
        fullPath,
        title,
      })
    })

    // TocLanding expects a collection of objects that looks like this:
    //
    // {
    //   fullPath: '/en/free-pro-team@latest/rest/activity/events',
    //   title: 'Events',
    //   childTocItems: [
    //     {
    //       fullPath: '/en/free-pro-team@latest/rest/activity/events#list-public-events',
    //       title: 'List public events'
    //     },
    //     {
    //       fullPath: '/en/free-pro-team@latest/rest/activity/events#list-public-events-for-a-network-of-repositories',
    //       title: 'List public events for a network of repositories'
    //     },
    //     ...
    //   ]
    // }
    restCategoryTocItems.push({
      fullPath: fullSubcategoryPath,
      title: fullSubcategoryTitle,
      childTocItems: restSubcategoryTocs,
    })
  }

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
      subcategory,
      restOperations,
      currentLanguage,
      currentVersion,
      req.context
    )) as MinitocItemsT

    restOperationsMiniTocItems && miniTocItems.push(...restOperationsMiniTocItems)
  }

  // Replace the toc items in the context with the REST toc items we just
  // created.
  tocLandingContext.tocItems = restCategoryTocItems

  return {
    props: {
      restOperations,
      mainContext: getMainContext(req, res),
      automatedPageContext: getAutomatedPageContextFromRequest(req),
      tocLandingContext,
    },
  }
}
