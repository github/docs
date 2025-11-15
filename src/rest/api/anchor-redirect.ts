import express from 'express'
import path from 'path'

import { readCompressedJsonFileFallbackLazily } from '@/frame/lib/read-json-file'
import { defaultCacheControl } from '@/frame/middleware/cache-control'
import { REST_DATA_DIR } from '../lib/index'

const clientSideRestAPIRedirects = readCompressedJsonFileFallbackLazily(
  path.join(REST_DATA_DIR, 'client-side-rest-api-redirects.json'),
) as () => Record<string, string>

const router = express.Router()

// Returns a client side redirect if one exists for the given path.
// Note: Using 'any' for req/res because Express types are complex and the
// function signature is constrained by the router.get() overloads
router.get('/', function redirects(req: any, res: any) {
  if (!req.query.path) {
    return res.status(400).send("Missing 'path' query string")
  }
  if (!req.query.hash) {
    return res.status(400).send("Missing 'hash' query string")
  }

  defaultCacheControl(res)

  const redirectFrom: string = `${req.query.path}#${req.query.hash}`
  res.status(200).send({ to: clientSideRestAPIRedirects()[redirectFrom] })
})

export default router
