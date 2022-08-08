import express from 'express'
import { getTheme } from '../../lib/get-theme.js'
import { cacheControlFactory } from '../cache-control.js'

const router = express.Router()
const noCacheControl = cacheControlFactory(0)

router.get('/', (req, res) => {
  noCacheControl(res)
  res.json({
    isSignedIn: Boolean(req.cookies?.dotcom_user),
    csrfToken: req.csrfToken?.() || '',
    userLanguage: req.userLanguage,
    languages: req.context.languages,
    theme: getTheme(req),
    themeCss: getTheme(req, true),
  })
})

export default router
