import getRedirect from '../lib/get-redirect.js'
// This middleware uses the request path to find a page in the preloaded context.pages object

export default function findPage(req, res, next) {
  let page = req.context.pages[req.pagePath]

  // When a user navigates to a translated page that doesn't yet exists
  // we want to first check if there is an English page with the same relative
  // path.
  // If an exact match in English doesn't exist, the requested page might have
  // a redirect configured to a new page. This happens when an English page is
  // renamed and Crowdin hasn't synced the new file.
  // In both cases, redirect to the English page. If we don't redirect most
  // components won't refresh and everything except the article will render
  // in req.language.
  if (!page && req.language !== 'en') {
    const englishPath = req.pagePath.replace(new RegExp(`^/${req.language}`), '/en')
    // NOTE the fallback page will have page.languageCode = 'en'
    page = req.context.pages[englishPath]
    const redirectToPath = getRedirect(englishPath, req.context)

    // If the requested translated page has a 1-1 mapping in English,
    // redirect to that English page
    if (page) {
      return res.redirect(302, englishPath)
    }
    // If the English file was renamed and has a redirect that matches the
    // requested page's href, redirect to the new English href
    if (redirectToPath) {
      return res.redirect(302, redirectToPath)
    }
  }

  if (page) {
    req.context.page = page
    req.context.page.version = req.context.currentVersion
  }

  return next()
}
