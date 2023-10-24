/**
 * This middleware looks at the URL if it's something like:
 *
 *   /_next/data/oOIffMZgfjR6sR9pa50O9/en/free-pro-team%40latest/pages.json?...
 *
 * And from that, it compares that oOIffMZgfjR6sR9pa50O9 with the content
 * of the .next/BUILD_ID file. If they don't match, then it's going to 404.
 * But instead of letting the nextApp.render404() handle it, we're going to
 * manually handle it here.
 * This makes sure the response is a short and fast plain text 404 response.
 * And we can force it to be served with a cache-control which allows
 * the CDN to cache it a bit.
 *
 * Note that when you start the local server with `npm run dev` and
 * do client-side navigation in the app, NextJS will send XHR requests for...
 *
 *   /_next/data/development/en/free-pro-team%40latest/pages.json?...
 *
 * Relying on that test is easier than to try to parse the
 * value of `process.env.NODE_ENV`.
 */

import fs from 'fs'

import { errorCacheControl } from '../../../middleware/cache-control.js'

export default function handleOldNextDataPaths(req, res, next) {
  if (req.path.startsWith('/_next/data/') && !req.path.startsWith('/_next/data/development/')) {
    const requestBuildId = req.path.split('/')[3]
    if (requestBuildId !== getCurrentBuildID()) {
      errorCacheControl(res)
      return res.status(404).type('text').send('build ID mismatch')
    }
  }
  return next()
}

let _buildId
function getCurrentBuildID() {
  // Simple memoization
  if (!_buildId) {
    _buildId = fs.readFileSync('.next/BUILD_ID', 'utf-8').trim()
  }
  return _buildId
}
