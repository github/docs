import express from 'express'

import handleInvalidQuerystrings from './handle-invalid-query-strings.js'
import handleInvalidPaths from './handle-invalid-paths.js'
import handleOldNextDataPaths from './handle-old-next-data-paths.js'
import handleInvalidQuerytringValues from './handle-invalid-query-string-values.js'
import handleInvalidNextPaths from './handle-invalid-nextjs-paths.js'
import rateLimit from './rate-limit.js'

const router = express.Router()

router.use(rateLimit)
router.use(handleInvalidQuerystrings)
router.use(handleInvalidPaths)
router.use(handleOldNextDataPaths)
router.use(handleInvalidQuerytringValues)
router.use(handleInvalidNextPaths)

export default router
