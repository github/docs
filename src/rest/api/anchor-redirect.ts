import express, { RequestHandler } from 'express'
import path from 'path'

import { readCompressedJsonFileFallbackLazily } from '@/frame/lib/read-json-file'
import { defaultCacheControl } from '@/frame/middleware/cache-control'
import { REST_DATA_DIR } from '../lib/index'

const clientSideRestAPIRedirects = readCompressedJsonFileFallbackLazily(
  path.join(REST_DATA_DIR, 'client-side-rest-api-redirects.json'),
) as () => Record<string, string>

const router = express.Router()

// Returns a client side redirect if one exists for the given path.
const redirects: RequestHandler = (req, res) => {
  if (!req.query.path) {
    res.status(400).send("Missing 'path' query string")
    return
  }
  if (!req.query.hash) {
    res.status(400).send("Missing 'hash' query string")
    return
  }

  defaultCacheControl(res)

  const redirectFrom: string = `${req.query.path}#${req.query.hash}`
  res.status(200).send({ to: clientSideRestAPIRedirects()[redirectFrom] })
}

router.get('/', redirects)

export default router
