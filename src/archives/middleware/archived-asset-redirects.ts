import type { Response, NextFunction } from 'express'

import type { ExtendedRequest } from '@/types'

// When we archive old versions, we take a snapshot of rendered pages,
// which includes whatever bundles it used at the time.
// Sometimes those archived versions don't include all static assets
// it might refer to.
// This middleware is a chance to redirect to new assets that we can
// use instead.
// Yes, not all legacy assets *can* be redirected to something we have
// today. But for those that we can, this is the middleware to do it.
// And the reason we don't host a copy of these old files is because
// we strive to make the files in the repo only files that we actually
// use and refer to in the non-archived content.

// Note that, we also have `archived-enterprise-versions-assets.js`
// but that one assumes the whole path refers to a prefix which is
// considered archived. E.g. /en/enterprise-server@2.9/foo/bar.css

const REDIRECTS: Record<string, string> = {
  // Example: https://docs.github.com/en/enterprise-server@2.22/authentication/connecting-to-github-with-ssh
  '/assets/images/octicons/search.svg': '/assets/images/octicons/search-24.svg',
}
export default function archivedAssetRedirects(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  if (req.path in REDIRECTS) {
    const redirect = REDIRECTS[req.path].replace('/assets/', '/assets/cb-0000/')
    return res.redirect(308, redirect)
  }

  return next()
}
