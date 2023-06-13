import express from 'express'

import handleInvalidQuerystrings from './handle-invalid-query-strings.js'
import handleInvalidPaths from './handle-invalid-paths.js'
import rateLimit from './rate-limit.js'

const router = express.Router()

router.use(rateLimit)
router.use(handleInvalidQuerystrings)
router.use(handleInvalidPaths)

export default router
