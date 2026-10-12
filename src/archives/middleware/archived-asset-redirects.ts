import type { Response, NextFunction } from 'express'

import type { ExtendedRequest } from '@/types'

// Archived rendered pages can reference static assets that no longer exist in the repo.
// Redirect legacy assets we can map instead of hosting unused files.

// archived-enterprise-versions-assets.ts handles whole archived path prefixes, such as
// /en/enterprise-server@2.9/foo/bar.css.

const REDIRECTS: Record<string, string> = {
  // One archived source is
  // https://docs.github.com/en/enterprise-server@2.22/authentication/connecting-to-github-with-ssh.
  '/assets/images/octicons/search.svg': '/assets/images/octicons/search-24.svg',
}
export default function archivedAssetRedirects(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  if (req.path in REDIRECTS) {
    const redirect = REDIRECTS[req.path].replace('/assets/', '/assets/cb-0000/')
    return res.safeRedirect(308, redirect)
  }

  return next()
}
