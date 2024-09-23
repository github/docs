import express from 'express'
import type { Response } from 'express'

import type { ExtendedRequest } from '@/types'
import { defaultCacheControl } from '@/frame/middleware/cache-control.js'
import { getProductStringFromPath, getVersionStringFromPath } from '#src/frame/lib/path-utils.js'
import { latest } from '#src/versions/lib/enterprise-server-releases.js'

const router = express.Router()

router.get('/v1/enterprise-server@latest', (req, res) => {
  res.redirect(
    307,
    req.originalUrl.replace(
      '/pagelist/v1/enterprise-server@latest',
      `/pagelist/v1/enterprise-server@${latest}`,
    ),
  )
})

router.get('/v1/:product@:version', (req: ExtendedRequest, res: Response) => {
  const { product, version } = req.params

  if (!req.context || !req.context.pages) throw new Error('Request not contextualized.')

  const pages = req.context.pages

  // the keys of `context.pages` are permalinks
  const keys = Object.keys(pages)

  // we filter the permalinks to get only our target version
  const filteredPermalinks = keys.filter((key) => versionMatcher(key, `${product}@${version}`))
  const expression = /^\/en/

  if (!filteredPermalinks.length) {
    res.status(400).type('text').send('Invalid version')
    return
  }

  //right now we only need english permalinks perhaps we can use the language from the request in the future
  const englishPermalinks = filteredPermalinks.filter((permalink) => expression.test(permalink))

  defaultCacheControl(res)

  // new line added at the end so `wc` works as expected with `-l` and `-w`.
  res.type('text').send(englishPermalinks.join('\n').concat('\n'))
})

router.get('/:product@:version', (req, res) => {
  res.redirect(307, req.originalUrl.replace('/pagelist', '/pagelist/v1'))
})

// If no version is provided we'll assume API v1 and Docs version FPT
router.get('/', (req, res) => {
  res.redirect(307, req.originalUrl.replace('/pagelist', '/pagelist/v1/free-pro-team@latest'))
})

function versionMatcher(key: string, targetVersion: string) {
  const versionFromPath = getVersionStringFromPath(key)

  if (!versionFromPath) {
    throw new Error(`Couldn't get version from the permalink ${key} when generating the pagelist.`)
  }
  if (getProductStringFromPath(key) === 'early-access') return null
  if (versionFromPath === targetVersion) return key
}

export default router
