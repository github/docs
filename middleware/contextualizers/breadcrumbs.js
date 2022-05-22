export default async function breadcrumbs(req, res, next) {
  if (!req.context.page) return next()
  if (req.context.page.hidden) return next()

  req.context.breadcrumbs = []

  // Return an empty array on the landing page.
  if (req.context.page.documentType === 'homepage') {
    return next()
  }

  const currentSiteTree =
    req.context.siteTree[req.context.currentLanguage][req.context.currentVersion]
  const fallbackSiteTree = req.context.siteTree.en[req.context.currentVersion]

  req.context.breadcrumbs = await getBreadcrumbs(
    // Array of child pages on the root, i.e., the product level.
    currentSiteTree.childPages,
    fallbackSiteTree.childPages,
    req.context.currentPath.slice(3),
    req.context.currentLanguage
  )

  return next()
}

async function getBreadcrumbs(
  pageArray,
  fallbackPageArray,
  currentPathWithoutLanguage,
  intendedLanguage
) {
  // Find the page that starts with the requested path
  let childPage = findPageWithPath(currentPathWithoutLanguage, pageArray)

  // Find the page in the fallback page array (likely the English sub-tree)
  const fallbackChildPage =
    findPageWithPath(currentPathWithoutLanguage, fallbackPageArray || []) || childPage

  // No matches, we bail
  if (!childPage && !fallbackChildPage) {
    return []
  }

  // Didn't find the intended page, but found the fallback
  if (!childPage) {
    childPage = fallbackChildPage
  }

  const breadcrumb = {
    documentType: childPage.page.documentType,
    // give the breadcrumb the intendedLanguage, so nav through breadcrumbs doesn't inadvertantly change the user's selected language
    href: `/${intendedLanguage}/${childPage.href.slice(4)}`,
    title: childPage.renderedShortTitle || childPage.renderedFullTitle,
  }

  // Recursively loop through the childPages and create each breadcrumb, until we reach the
  // point where the current siteTree page is the same as the requested page. Then stop.
  if (childPage.childPages && currentPathWithoutLanguage !== childPage.href.slice(3)) {
    return [
      breadcrumb,
      ...(await getBreadcrumbs(
        childPage.childPages,
        fallbackChildPage.childPages,
        currentPathWithoutLanguage,
        intendedLanguage
      )),
    ]
  } else {
    return [breadcrumb]
  }
}

// Finds the page that starts with or equals the requested path in the array of
// pages e.g. if the current page is /actions/learn-github-actions/understanding-github-actions,
// depending on the pages in the pageArray agrument, would find:
//
// * /actions
// * /actions/learn-github-actions
// * /actions/learn-github-actions/understanding-github-actions
function findPageWithPath(pageToFind, pageArray) {
  return pageArray.find((page) => {
    const pageWithoutLanguage = page.href.slice(3)
    const numPathSegments = pageWithoutLanguage.split('/').length
    const pageToFindNumPathSegments = pageToFind.split('/').length

    if (pageToFindNumPathSegments > numPathSegments) {
      // if the current page to find has more path segments, add a trailing
      // slash to the page comparison to avoid an overlap like:
      //
      // * /github-cli/github-cli/about-github-cli with /github
      return pageToFind.startsWith(`${pageWithoutLanguage}/`)
    } else if (pageToFindNumPathSegments === numPathSegments) {
      // if the current page has the same number of path segments, only match
      // if the paths are the same to avoid an overlap like:
      //
      // * /get-started/using-github with /get-started/using-git
      return pageToFind === pageWithoutLanguage
    } else {
      return false
    }
  })
}
