import express from 'express'
import type { Response, RequestHandler } from 'express'

import type { ExtendedRequest } from '@/types'
import { defaultCacheControl } from '@/frame/middleware/cache-control.js'
import { getProductStringFromPath, getVersionStringFromPath } from '@/frame/lib/path-utils.js'
import { getLanguageCodeFromPath } from '@/languages/middleware/detect-language.js'
import { pagelistValidationMiddleware } from './validation'
import catchMiddlewareError from '@/observability/middleware/catch-middleware-error.js'
import statsd from '@/observability/lib/statsd.js'

const router = express.Router()

// pagelistValidationMiddleware is used for every route to normalize the lang and version from the path

// If no version or lang is provided we'll assume english and fpt and redirect there
router.get(
  '/',
  pagelistValidationMiddleware as RequestHandler,
  catchMiddlewareError(async function (req: ExtendedRequest, res: Response) {
    res.redirect(
      308,
      req.originalUrl.replace(
        '/pagelist',
        `/pagelist/${req.context!.currentLanguage}/${req.context!.currentVersion}`,
      ),
    )
  }),
)

// handles paths with fragments that could be the language or the version
router.get(
  '/:someParam',
  pagelistValidationMiddleware as RequestHandler,
  catchMiddlewareError(async function (req: ExtendedRequest, res: Response) {
    const { someParam } = req.params
    res.redirect(
      308,
      req.originalUrl.replace(
        `/pagelist/${someParam}`,
        `/pagelist/${req.context!.currentLanguage}/${req.context!.currentVersion}`,
      ),
    )
  }),
)

/**
 * A list of pages available for a fully qualified path containing the target language and product version.
 * @route GET /api/pagelist
 * @param {string} lang - Path parameter for language code (e.g. 'en')
 * @param {string} productVersion - Path parameter for product version (e.g. 'free-pro-team@latest')
 * @returns {string} List of paths matching the language and version
 * @throws {Error} 400 - If language or version parameters are invalid. Reason is given in the error message.
 * @example
 * ❯ curl -s https://docs.github.com/api/pagelist/en/free-pro-team@latest
 * /en
 * /en/search
 * /en/get-started
 * /en/get-started/start-your-journey
 * /en/get-started/start-your-journey/about-github-and-git
 * [...]
 */
router.get(
  '/:lang/:productVersion',
  pagelistValidationMiddleware as RequestHandler,
  catchMiddlewareError(async function (req: ExtendedRequest, res: Response) {
    if (!req.context || !req.context.pages) throw new Error('Request not contextualized.')

    const pages = req.context.pages

    // the keys of `context.pages` are permalinks
    const keys = Object.keys(pages)

    // we filter the permalinks to get only our target version and language
    const filteredPermalinks = keys.filter((key) =>
      versionMatcher(key, req.context!.currentVersion!, req.context!.currentLanguage!),
    )

    // if we've filtered it out of existence, there's no articles to return so we must've
    // gotten a bad language or version
    if (!filteredPermalinks.length) {
      const { lang, productVersion } = req.params

      res
        .status(400)
        .type('application/json')
        .send(
          JSON.stringify({
            error: 'Invalid version or language code',
            language: lang,
            version: productVersion,
          }),
        )
      return
    }

    incrementPagelistLookup(req.context!.currentVersion!, req.context!.currentLanguage!)
    defaultCacheControl(res)

    // new line added at the end so `wc` works as expected with `-l` and `-w`.
    res.type('text').send(filteredPermalinks.join('\n').concat('\n'))
  }),
)

function versionMatcher(key: string, targetVersion: string, targetLang: string) {
  const versionFromPermalink = getVersionStringFromPath(key)

  if (!versionFromPermalink) {
    throw new Error(`Couldn't get version from the permalink ${key} when generating the pagelist.`)
  }
  if (getProductStringFromPath(key) === 'early-access') return null

  const langFromPermalink = getLanguageCodeFromPath(key)
  if (!langFromPermalink) {
    throw new Error(`Couldn't get language from the permalink ${key} when generating the pagelist.`)
  }

  if (versionFromPermalink === targetVersion && langFromPermalink === targetLang) return key
}

function incrementPagelistLookup(version: string, language: string) {
  const tags = [`version:${version}`, `language:${language}`]

  statsd.increment('api.pagelist.lookup', 1, tags)
}

export default router
