import express from 'express'
import path from 'path'

import { readCompressedJsonFileFallbackLazily } from '@/frame/lib/read-json-file'
import { defaultCacheControl } from '@/frame/middleware/cache-control'
import { REST_DATA_DIR } from '../lib/index'

const clientSideRestAPIRedirects = readCompressedJsonFileFallbackLazily(
  path.join(REST_DATA_DIR, 'client-side-rest-api-redirects.json'),
)

const router = express.Router()

// Returns a client side redirect if one exists for the given path.
router.get('/', function redirects(req, res) {
  if (!req.query.path) {
    return res.status(400).send("Missing 'path' query string")
  }
  if (!req.query.hash) {
    return res.status(400).send("Missing 'hash' query string")
  }

  defaultCacheControl(res)

  const redirectFrom = `${req.query.path}#${req.query.hash}`
  res.status(200).send({ to: clientSideRestAPIRedirects()[redirectFrom] })
})

export default router
