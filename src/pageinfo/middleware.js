import express from 'express'

import statsd from '../../lib/statsd.js'
import findPage from '../../lib/find-page.js'
import { defaultCacheControl } from '../../middleware/cache-control.js'
import catchMiddlewareError from '../../middleware/catch-middleware-error.js'
import {
  SURROGATE_ENUMS,
  setFastlySurrogateKey,
  makeLanguageSurrogateKey,
} from '../../middleware/set-fastly-surrogate-key.js'
import shortVersions from '../../middleware/contextualizers/short-versions.js'
import contextualize from '../../middleware/context.js'
import features from '../../middleware/contextualizers/features.js'

const router = express.Router()

const validationMiddleware = (req, res, next) => {
  const { pathname } = req.query
  if (!pathname) {
    return res.status(400).json({ error: `No 'pathname' query` })
  }
  if (!pathname.trim()) {
    return res.status(400).json({ error: `'pathname' query empty` })
  }

  const page = findPage(pathname, req.context.pages, req.context.redirects)

  if (!page) {
    return res.status(400).json({ error: `No page found for '${pathname}'` })
  }

  req.pageinfo = {
    pathname,
    page,
  }

  return next()
}

router.get(
  '/v1',
  validationMiddleware,
  catchMiddlewareError(async function pageInfo(req, res) {
    const { page, pathname } = req.pageinfo

    const renderingReq = {
      path: pathname,
      language: page.languageCode,
      pagePath: pathname,
      cookies: {},
    }
    const next = () => {}
    await contextualize(renderingReq, res, next)
    await shortVersions(renderingReq, res, next)
    renderingReq.context.page = page
    await features(renderingReq, res, next)
    const context = renderingReq.context

    const title = await page.renderProp('title', context, { textOnly: true })
    const intro = await page.renderProp('intro', context, { textOnly: true })

    let productPage = null
    for (const permalink of page.permalinks) {
      const rootHref = permalink.href
        .split('/')
        .slice(0, permalink.pageVersion === 'free-pro-team@latest' ? 3 : 4)
        .join('/')
      const rootPage = context.pages[rootHref]
      if (rootPage) {
        productPage = rootPage
        break
      }
    }
    let product = ''
    if (productPage) {
      product = await productPage.renderProp('shortTitle', context, {
        textOnly: true,
      })
      if (!product) {
        product = await productPage.renderProp('title', context, {
          textOnly: true,
        })
      }
    }

    const info = {
      product,
      title,
      intro,
    }

    const tags = ['version:v1', `pathname:${pathname}`]
    statsd.increment('api.pageinfo', 1, tags)

    defaultCacheControl(res)

    // This is necessary so that the `Surrogate-Key` header is set with
    // the correct language surrogate key bit. By default, it's set
    // from the pathname but `/api/**` URLs don't have a language
    // (other than the default 'en').
    // We do this so that all of these URLs are cached in Fastly by language
    // which we need for the staggered purge.
    setFastlySurrogateKey(
      res,
      `${SURROGATE_ENUMS.DEFAULT} ${makeLanguageSurrogateKey(page.languageCode)}`,
      true
    )
    res.status(200).json({ info })
  })
)

// Alias for the latest version
router.get('/', (req, res) => {
  res.redirect(307, req.originalUrl.replace('/pageinfo', '/pageinfo/v1'))
})

export default router
