import type { NextFunction, Response } from 'express'

import type { ExtendedRequest, Context } from '@/types'

import languages from '@/languages/lib/languages.js'
import enterpriseServerReleases from '@/versions/lib/enterprise-server-releases.js'
import { allVersions } from '@/versions/lib/all-versions.js'
import { productMap } from '@/products/lib/all-products.js'
import {
  getVersionStringFromPath,
  getProductStringFromPath,
  getCategoryStringFromPath,
  getPathWithoutLanguage,
  getPathWithoutVersion,
} from '@/frame/lib/path-utils.js'
import productNames from '@/products/lib/product-names.js'
import warmServer from '@/frame/lib/warm-server'
import nonEnterpriseDefaultVersion from '@/versions/lib/non-enterprise-default-version.js'
import { getDataByLanguage, getUIDataMerged } from '@/data-directory/lib/get-data.js'

// This doesn't change just because the request changes, so compute it once.
const enterpriseServerVersions = Object.keys(allVersions).filter((version) =>
  version.startsWith('enterprise-server@'),
)

// Supply all route handlers with a baseline `req.context` object
// Note that additional middleware in middleware/index.js adds to this context object
export default async function contextualize(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  // Ensure that we load some data only once on first request
  const { redirects, siteTree, pages: pageMap } = await warmServer([])

  const context: Context = {}
  req.context = context

  req.context.process = { env: {} }

  // define each context property explicitly for code-search friendliness
  // e.g. searches for "req.context.page" will include results from this file
  req.context.currentLanguage = req.language
  req.context.userLanguage = req.userLanguage
  req.context.currentVersion = getVersionStringFromPath(req.pagePath) as string

  req.context.currentVersionObj = allVersions[req.context.currentVersion]
  req.context.currentProduct = getProductStringFromPath(req.pagePath)
  req.context.currentCategory = getCategoryStringFromPath(req.pagePath)
  req.context.productMap = productMap
  req.context.allVersions = allVersions
  req.context.currentPathWithoutLanguage = getPathWithoutLanguage(req.pagePath)

  // define property for writers to link to the current page in a different version
  // includes any type of rendered page not just "articles"
  req.context.currentArticle = getPathWithoutVersion(req.context.currentPathWithoutLanguage)
  req.context.currentPath = req.pagePath
  req.context.query = req.query
  req.context.languages = languages
  req.context.productNames = productNames
  req.context.enterpriseServerReleases = enterpriseServerReleases
  req.context.enterpriseServerVersions = enterpriseServerVersions
  req.context.redirects = redirects
  req.context.site = {
    data: {
      ui: getUIDataMerged(req.language),
    },
  }
  req.context.getDottedData = (dottedPath) => getDataByLanguage(dottedPath, req.language)
  req.context.siteTree = siteTree
  req.context.pages = pageMap
  req.context.nonEnterpriseDefaultVersion = nonEnterpriseDefaultVersion
  req.context.initialRestVersioningReleaseDate =
    allVersions[nonEnterpriseDefaultVersion].apiVersions[0]

  const restDate = new Date(req.context.initialRestVersioningReleaseDate)
  req.context.initialRestVersioningReleaseDateLong = restDate.toUTCString().split(' 00:')[0]

  // Conditionally add this for non-English pages so what inside the
  // `Page.render` method, when it calls out to `renderContentWithFallback`
  // it can be able to fall back get original content from English if there's
  // some runtime rendering error from the translation.
  if (req.language !== 'en') {
    // The reason this is a function is because most of the time, we don't
    // need to know the English equivalent. It only comes into play if a
    // translated
    req.context.getEnglishPage = (context) => {
      if (!context.enPage) {
        const { page } = context
        if (!page) {
          throw new Error("The 'page' has not been put into the context yet.")
        }
        const enPath = context.currentPath!.replace(`/${page.languageCode}`, '/en')
        const enPage = context.pages![enPath]
        if (!enPage) {
          throw new Error(`Unable to find equivalent English page by the path '${enPath}'`)
        }
        context.enPage = enPage
      }
      return context.enPage
    }
  }

  return next()
}
