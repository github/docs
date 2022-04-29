import express from 'express'
import { readCompressedJsonFileFallbackLazily } from '../lib/read-json-file.js'

const clientSideRestAPIRedirects = readCompressedJsonFileFallbackLazily(
  './lib/redirects/static/client-side-rest-api-redirects.json'
)
console.log(clientSideRestAPIRedirects)

const router = express.Router()

// Returns a client side redirect if one exists for the given path.
router.get('/', function redirects(req, res, next) {
  if (!req.query.path) {
    return res.status(400).send("Missing 'path' query string")
  }
  if (!req.query.hash) {
    return res.status(400).send("Missing 'hash' query string")
  }
  const redirectFrom = `${req.query.path}#${req.query.hash}`
  res.status(200).send({ to: clientSideRestAPIRedirects()[redirectFrom] } || null)
})

export default router
