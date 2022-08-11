import express from 'express'
import { cacheControlFactory } from '../cache-control.js'

const router = express.Router()
const noCacheControl = cacheControlFactory(0)

router.get('/', (req, res) => {
  noCacheControl(res)
  res.json({
    isSignedIn: Boolean(req.cookies?.dotcom_user),
    csrfToken: req.csrfToken?.() || '',
  })
})

export default router
