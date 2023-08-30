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
