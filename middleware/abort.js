import statsd from '#src/observability/lib/statsd.js'

export default function abort(req, res, next) {
  // If the client aborts the connection, send an error
  req.once('aborted', () => {
    // ignore aborts from next, usually has to do with webpack-hmr
    if (req.path.startsWith('/_next')) {
      return
    }
    // NOTE: Node.js will also automatically set `req.aborted = true`

    const incrementTags = []
    // Be careful with depending on attributes set on the `req` because
    // under certain conditions the contextualizers might not yet have
    // had a chance to run.
    if (req.pagePath) {
      incrementTags.push(`path:${req.pagePath}`)
    }
    if (req.context?.currentCategory) {
      incrementTags.push(`product:${req.context.currentCategory}`)
    }
    statsd.increment('middleware.abort', 1, incrementTags)

    const abortError = new Error('Client closed request')
    abortError.statusCode = 499
    abortError.code = 'ECONNRESET'

    // Pass the error to the Express error handler
    return next(abortError)
  })

  return next()
}
