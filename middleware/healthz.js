import express from 'express'

const router = express.Router()

/**
 * Returns the healthiness of the service.
 * This may be used by azure app service (forthcoming) to determine whether this
 * instance remains in the pool to handle requests
 * For example: if we have a failing database connection we may return a 500 status here.
 */
router.get('/', function healthz(req, res, next) {
  res.set({
    'surrogate-control': 'private, no-store',
    'cache-control': 'private, no-store',
  })

  res.sendStatus(200)
})

export default router
