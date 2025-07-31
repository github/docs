import express from 'express'

import handleMalformedUrls from './handle-malformed-urls'
import handleInvalidQuerystrings from './handle-invalid-query-strings'
import handleInvalidPaths from './handle-invalid-paths'
import handleOldNextDataPaths from './handle-old-next-data-paths'
import handleInvalidQuerystringValues from './handle-invalid-query-string-values'
import handleInvalidNextPaths from './handle-invalid-nextjs-paths'
import handleInvalidHeaders from './handle-invalid-headers'

const router = express.Router()

router.use(handleMalformedUrls)
router.use(handleInvalidQuerystrings)
router.use(handleInvalidPaths)
router.use(handleOldNextDataPaths)
router.use(handleInvalidQuerystringValues)
router.use(handleInvalidNextPaths)
router.use(handleInvalidHeaders)

export default router
