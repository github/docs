import type { NextFunction, Response } from 'express'

import type { ExtendedRequest, Context } from '@/types'

import languages from '@/languages/lib/languages-server'
import enterpriseServerReleases from '@/versions/lib/enterprise-server-releases'
import { allVersions } from '@/versions/lib/all-versions'
import { productMap } from '@/products/lib/all-products'
import {
  getVersionStringFromPath,
  getProductStringFromPath,
  getCategoryStringFromPath,
  getPathWithoutLanguage,
  getPathWithoutVersion,
} from '@/frame/lib/path-utils'
import productNames from '@/products/lib/product-names'
import warmServer from '@/frame/lib/warm-server'
import nonEnterpriseDefaultVersion from '@/versions/lib/non-enterprise-default-version'
import { getDataByLanguage, getUIDataMerged } from '@/data-directory/lib/get-data'
import { updateLoggerContext } from '@/observability/logger/lib/logger-context'

// Enterprise Server version keys do not depend on each request, so compute them once.
const enterpriseServerVersions = Object.keys(allVersions).filter((version) =>
  version.startsWith('enterprise-server@'),
)

// middleware/index.ts depends on contextualize setting baseline req.context.
// For non-English pages, contextualize adds getEnglishPage for renderContentWithFallback.
// It handles fallback-eligible Liquid, autotitle, and empty-title errors.
export default async function contextualize(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  // warmServer caches this data after the first request.
  const { redirects, siteTree, pages: pageMap } = await warmServer([])

  const context: Context = {}
  req.context = context

  req.context.process = { env: {} }

  if (req.pagePath && req.pagePath.endsWith('.md')) {
    // The rendering pipeline resolves req.pagePath in the tree without the .md suffix.
    req.pagePath = req.pagePath.replace(/\/index\.md$/, '').replace(/\.md$/, '')
    req.context.markdownRequested = true
    // markdownViaUrl avoids a misleading Vary: accept header for URL suffix requests.
    req.context.markdownViaUrl = true
  }

  // Explicit req.context property assignments keep code search results discoverable.
  req.context.currentLanguage = req.language
  req.context.userLanguage = req.userLanguage
  req.context.currentVersion = getVersionStringFromPath(req.pagePath) as string

  req.context.currentVersionObj = allVersions[req.context.currentVersion]
  req.context.currentProduct = getProductStringFromPath(req.pagePath)
  req.context.currentCategory = getCategoryStringFromPath(req.pagePath)
  req.context.productMap = productMap
  req.context.allVersions = allVersions
  req.context.currentPathWithoutLanguage = getPathWithoutLanguage(req.pagePath)

  // currentArticle lets writers link any rendered page, not only articles, in another version.
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
      ui: getUIDataMerged(req.language!),
    },
  }
  req.context.getDottedData = (dottedPath) => getDataByLanguage(dottedPath, req.language!)
  req.context.siteTree = siteTree
  req.context.pages = pageMap
  req.context.nonEnterpriseDefaultVersion = nonEnterpriseDefaultVersion
  req.context.initialRestVersioningReleaseDate =
    allVersions[nonEnterpriseDefaultVersion].apiVersions[0]
  // apiVersions sorts newest first, so the last item is the default without X-GitHub-Api-Version.
  const apiVersions = allVersions[nonEnterpriseDefaultVersion].apiVersions
  req.context.defaultRestApiVersion = apiVersions[apiVersions.length - 1]

  const restDate = new Date(req.context.initialRestVersioningReleaseDate)
  req.context.initialRestVersioningReleaseDateLong = restDate.toUTCString().split(' 00:')[0]

  if (req.language !== 'en') {
    // getEnglishPage delays the lookup until a translated page needs fallback content.
    req.context.getEnglishPage = (ctx) => {
      if (!ctx.enPage) {
        const { page } = ctx
        if (!page) {
          throw new Error("The 'page' has not been put into the context yet.")
        }
        const enPath = ctx.currentPath!.replace(`/${page.languageCode}`, '/en')
        const enPage = ctx.pages![enPath]
        if (!enPage) {
          throw new Error(`Unable to find equivalent English page by the path '${enPath}'`)
        }
        ctx.enPage = enPage
      }
      return ctx.enPage
    }
  }

  updateLoggerContext({
    version: req.context.currentVersion,
    pagePath: req.pagePath,
  })

  return next()
}
