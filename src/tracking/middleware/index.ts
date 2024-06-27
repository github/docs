import express from 'express'

import handleTrackingQueryStrings from './handle-query-strings.js'

const router = express.Router()

router.use(handleTrackingQueryStrings)

export default router
