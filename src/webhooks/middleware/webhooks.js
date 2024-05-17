import express from 'express'
import { getWebhook } from '../lib/index.js'
import { allVersions } from '#src/versions/lib/all-versions.js'
import { defaultCacheControl } from '#src/frame/middleware/cache-control.js'

const router = express.Router()

// Returns a webhook for the given category and version
//
// Example request:
//
//   /api/webhooks/v1?category=check_run&version=free-pro-team%40latest
router.get('/v1', async function webhooks(req, res, next) {
  if (!req.query.category) {
    return res.status(400).json({ error: "Missing 'category' in query string" })
  }
  if (!req.query.version) {
    return res.status(400).json({ error: "Missing 'version' in query string" })
  }

  const webhookVersion = Object.values(allVersions).find(
    (version) => version.version === req.query.version,
  )?.version
  const notFoundError = 'No webhook found for given category and version'

  if (!webhookVersion) {
    return res.status(404).json({ error: notFoundError })
  }

  const webhook = await getWebhook(webhookVersion, req.query.category)

  if (webhook) {
    if (process.env.NODE_ENV !== 'development') {
      defaultCacheControl(res)
    }
    return res.status(200).send(webhook)
  } else {
    res.status(404).json({ error: notFoundError })
  }
})

export default router
