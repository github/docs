// Next.js data routes include a build ID, for example:
// /_next/data/oOIffMZgfjR6sR9pa50O9/en/free-pro-team%40latest/pages.json
// When the build ID does not match .next/BUILD_ID, return a short cacheable 404
// here instead of letting nextApp.render404 handle it.
// Local npm run dev uses /_next/data/development/..., so that path stays unblocked
// without depending on NODE_ENV parsing.

import fs from 'fs'

import type { Response, NextFunction } from 'express'

import { ExtendedRequest } from '@/types'
import { errorCacheControl } from '@/frame/middleware/cache-control'

export default function handleOldNextDataPaths(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  if (req.path.startsWith('/_next/data/') && !req.path.startsWith('/_next/data/development/')) {
    const requestBuildId = req.path.split('/')[3]
    if (requestBuildId !== getCurrentBuildID()) {
      errorCacheControl(res)
      res.status(404).type('text').send('build ID mismatch')
      return
    }
  }
  return next()
}

let _buildId: string
function getCurrentBuildID() {
  if (!_buildId) {
    _buildId = fs.readFileSync('.next/BUILD_ID', 'utf-8').trim()
  }
  return _buildId
}
