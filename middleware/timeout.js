import timeout from 'express-timeout-handler'

import statsd from '#src/observability/lib/statsd.js'
import { MAX_REQUEST_TIMEOUT } from '../lib/constants.js'

export default timeout.handler({
  // Default timeout for all endpoints
  // To override for a given router/endpoint, use `xExpressTimeoutHandler.set(...)`
  timeout: MAX_REQUEST_TIMEOUT,

  // IMPORTANT:
  // We cannot allow the middleware to disable the `res` object's methods like
  // it does by default if we want to use `next` in the `onTimeout` handler!
  disable: [],

  onTimeout: function (req, res, next) {
    // The `req.pagePath` can come later so it's not guaranteed to always
    // be present. It's added by the `handle-next-data-path.js` middleware
    // we translates those "cryptic" `/_next/data/...` URLs from
    // client-side routing.
    const incrementTags = [`path:${req.pagePath || req.path}`]
    if (req.context?.currentCategory) {
      incrementTags.push(`product:${req.context.currentCategory}`)
    }
    statsd.increment('middleware.timeout', 1, incrementTags)

    // Create a custom timeout error
    const timeoutError = new Error('Request timed out')
    timeoutError.statusCode = 503
    timeoutError.code = 'ETIMEDOUT'

    // Pass the error to our Express error handler for consolidated processing
    return next(timeoutError)
  },

  // Can also set an `onDelayedResponse` property IF AND ONLY IF you allow for disabling methods
})
