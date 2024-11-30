import fs from 'fs/promises'

import sharp from 'sharp'

import { assetCacheControl, defaultCacheControl } from './cache-control.js'
import { setFastlySurrogateKey, SURROGATE_ENUMS } from './set-fastly-surrogate-key.js'

export default async function dynamicAssets(req, res, next) {
  if (!req.url.startsWith('/assets/')) return next()

  if (!(req.method === 'GET' || req.method === 'HEAD')) {
    return res.status(405).type('text/plain').send('Method Not Allowed')
  }

  // To protect from possible denial of service, we never allow what
  // we're going to do (the image file operation), if the whole thing
  // won't be aggressively cached.
  // If we didn't do this, someone making 2 requests, ...
  //
  //    > GET /assets/images/site/logo.web?random=10476583
  //    > GET /assets/images/site/logo.web?random=20196996
  //
  // ...would be treated as 2 distinct backend requests. Sure, each one
  // would be cached in the CDN, but that's not helping if someone does...
  //
  //    while (true) {
  //       startFetchThread(`/assets/images/site/logo.web?whatever=${rand()}`)
  //    }
  //
  // So we "force" any deviation of the URL to a redirect to the canonical
  // URL (which, again, is heavily cached).
  if (Object.keys(req.query).length > 0) {
    // Cache the 404 so it won't be re-attempted over and over
    defaultCacheControl(res)

    // This redirects to the same URL we're currently on, but with the
    // query string part omitted.
    // For example:
    //
    //    > GET /assets/images/site/logo.web?foo=bar
    //    < 302
    //    < location: /assets/images/site/logo.web
    //
    return res.redirect(302, req.path)
  }

  if (req.path.endsWith('.webp')) {
    // From PNG (if it exists) to WEBP
    try {
      const originalBuffer = await fs.readFile(req.path.slice(1).replace(/\.webp$/, '.png'))
      const buffer = await sharp(originalBuffer)
        // Note that by default, sharp will use a lossy compression.
        // (i.e. `{lossless: false}` in the options)
        // The difference is that a lossless image is slightly crisper
        // but becomes on average 1.8x larger.
        // Given how we serve images, no human would be able to tell the
        // difference simply by looking at the image as it appears as an
        // image tag in the web page.
        // Also given that rendering-for-viewing is the "end of the line"
        // for the image meaning it just ends up being viewed and not
        // resaved as a source file. If we had intention to overwrite all
        // original PNG source files to WEBP, we should consier lossless
        // to preserve as much quality as possible at the source level.
        // The default quality is 80% which, combined with `lossless:false`
        // makes our images 2.8x smaller than the average PNG.
        .webp()
        .toBuffer()
      assetCacheControl(res)
      return res.type('image/webp').send(buffer)
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error
      }
    }
  }

  if (req.path.endsWith('.avif')) {
    // From PNG (if it exists) to AVIF
    try {
      const originalBuffer = await fs.readFile(req.path.slice(1).replace(/\.avif$/, '.png'))
      const buffer = await sharp(originalBuffer)
        .avif({
          // The default is 4 (max is 9). Because this is a dynamic thing
          // and AVIF encoding is slow for large images, go for a smaller
          // effort to be sure it can't take too long on a busy server.
          effort: 2,
        })
        .toBuffer()
      assetCacheControl(res)
      return res.type('image/avif').send(buffer)
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error
      }
    }
  }

  // Cache the 404 so it won't be re-attempted over and over
  defaultCacheControl(res)

  // There's a preceeding middleware that sets the Surrogate-Key to
  // "manual-purge" based on the URL possibly having the `/cb-xxxxx/`
  // checksum in it. But, if it failed, we don't want that. So
  // undo that if it was set.
  // It's handy too to not overly cache 404s in the CDN because
  // it could be that the next prod deployment fixes the missing image.
  // For example, a PR landed that introduced the *reference* to the image
  // but forgot to check in the new image, then a follow-up PR adds the image.
  setFastlySurrogateKey(res, SURROGATE_ENUMS.DEFAULT)

  // Don't use something like `next(404)` because we don't want a fancy
  // HTML "Page not found" page response because a failed asset lookup
  // is impossibly a typo in the browser address bar or an accidentally
  // broken link, like it might be to a regular HTML page.
  res.status(404).type('text/plain').send('Asset not found')
}
