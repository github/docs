// This middleware rewrites the URL of requests that contain the
// portion of `/cb-\d+/`.
// "cb" stands for "cache bust".
// There's a Markdown plugin that rewrites all <img src> values
// from `<img src="/assets/foo/bar.png">` to
// `<img src="/assets/cb-123467/foo/bar.png">` for example.
// We're doing this so that we can set a much more aggressive
// Cache-Control for assets and a CDN surrogate-key that doesn't
// soft-purge on every deployment.

const regex = /\/cb-\d+\//

export default function assetPreprocessing(req, res, next) {
  if (req.path.startsWith('/assets/')) {
    // We didn't use to have a rule about all image assets must be
    // lower case. So we've exposed things like:
    // <img src="/assets/images/Foobar.png"> which means they could
    // get a 404 if the file is actually named `foobar.png`.
    if (req.url !== req.url.toLowerCase()) {
      // The reason for doing a redirect instead rewriting the
      // `req.url` attribute is that we don't want encourage this.
      // By forcing this to be a redirect, it means we only serve
      // 1 single file. All other requests will be redirects.
      // Otherwise someone might trigger too much bypassing of the CDN.
      return res.redirect(req.url.toLowerCase())
    }

    // We're only confident enough to set the *manual* surrogate key if the
    // asset contains the cache-busting piece.
    if (regex.test(req.url)) {
      // We remove it so that when `express.static()` runs, it can
      // find the file on disk by its original name.
      req.url = req.url.replace(regex, '/')
      // The Cache-Control is managed by the configuration
      // for express.static() later in the middleware.
    }
  }
  return next()
}
