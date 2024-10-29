import path from 'path'

import got from 'got'
import type { Response, NextFunction } from 'express'

import patterns from '@/frame/lib/patterns.js'
import { isArchivedVersion } from '@/archives/lib/is-archived-version.js'
import {
  setFastlySurrogateKey,
  SURROGATE_ENUMS,
} from '@/frame/middleware/set-fastly-surrogate-key.js'
import { archivedCacheControl, defaultCacheControl } from '@/frame/middleware/cache-control.js'
import type { ExtendedRequest } from '@/types'

// This module handles requests for the CSS and JS assets for
// deprecated GitHub Enterprise versions by routing them to static content in
// help-docs-archived-enterprise-versions
//
// Note that as of GHES 3.2, we no longer store assets for deprecated versions
// in help-docs-archived-enterprise-versions. Instead, we store them in the
// Azure blob storage `githubdocs` in the `enterprise` container. All HTML files
// have been updated to use references to this blob storage for all assets.
//
// See also ./archived-enterprise-versions.js for non-CSS/JS paths

export default async function archivedEnterpriseVersionsAssets(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  // Only match asset paths
  // This can be true on /enterprise/2.22/_next/static/foo.css
  // or /_next/static/foo.css
  if (!patterns.assetPaths.test(req.path)) return next()

  // We now know the URL is either /enterprise/2.22/_next/static/foo.css
  // or the regular /_next/static/foo.css. But we're only going to
  // bother looking it up on https://github.github.com/help-docs-archived-enterprise-versions
  // if the URL has the enterprise bit in it, or if the path was
  // /_next/static/foo.css *and* its Referrer had the enterprise
  // bit in it.
  if (
    !(
      patterns.getEnterpriseVersionNumber.test(req.path) ||
      patterns.getEnterpriseServerNumber.test(req.path) ||
      patterns.getEnterpriseVersionNumber.test(req.get('referrer') || '') ||
      patterns.getEnterpriseServerNumber.test(req.get('referrer') || '')
    )
  ) {
    return next()
  }

  // Now we know the URL is definitely not /_next/static/foo.css
  // So it's probably /enterprise/2.22/_next/static/foo.css and we
  // should see if we might find this in the proxied backend.
  // But `isArchivedVersion()` will only return truthy if the
  // Referrer header also indicates that the request for this static
  // asset came from a page
  const { isArchived, requestedVersion } = isArchivedVersion(req)
  if (!isArchived || !requestedVersion) return next()

  const assetPath = req.path.replace(`/enterprise/${requestedVersion}`, '')

  // Just to be absolutely certain that the path can not contain
  // a URL that might trip up the GET we're about to make.
  if (
    assetPath.includes('..') ||
    assetPath.includes('://') ||
    (assetPath.includes(':') && assetPath.includes('@'))
  ) {
    defaultCacheControl(res)
    return res.status(404).type('text/plain').send('Asset path not valid')
  }

  const proxyPath = path.join('/', requestedVersion, assetPath)

  try {
    const r = await got(
      `https://github.github.com/help-docs-archived-enterprise-versions${proxyPath}`,
    )
    res.set('accept-ranges', 'bytes')
    res.set('content-type', r.headers['content-type'])
    res.set('content-length', r.headers['content-length'])
    res.set('x-is-archived', 'true')
    res.set('x-robots-tag', 'noindex')

    // This cache configuration should match what we do for archived
    // enterprise version URLs that are not assets.
    archivedCacheControl(res)
    setFastlySurrogateKey(res, SURROGATE_ENUMS.MANUAL)

    return res.send(r.body)
  } catch (err) {
    // Primarily for the developers working on tests that mock
    // requests. If you don't set up `nock` correctly, you might
    // not realize that and think it failed for other reasons.
    if (err instanceof Error && err.toString().includes('Nock: No match for request')) {
      throw err
    }

    // It's important that we don't give up on this by returning a 404
    // here. It's better to let this through in case the asset exists
    // beyond the realm of archived enterprise versions.
    // For example, image you load
    // /enterprise-server@2.21/en/DOES/NOT/EXIST in your browser.
    // Quickly, we discover that the proxying is failing because
    // it didn't find a page called `/en/DOES/NOT/EXIST` over there.
    // So, we proceed to render *our* 404 HTML page.
    // Now, on that 404 page, it will reference static assets too.
    // E.g. <link href="/_next/static/styles.css">
    // These will thus be requested, with a Referrer header that
    // forces us to give it a chance, but it'll find it can't find it
    // but we mustn't return a 404 yet, because that
    // /_next/static/styles.css will probably still succeed because the 404
    // page is not that of the archived enterprise version.
    return next()
  }
}
