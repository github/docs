const timeout = require('express-timeout-handler')

// Heroku router requests timeout after 30 seconds. We should stop them earlier!
const maxRequestTimeout = parseInt(process.env.REQUEST_TIMEOUT, 10) || 25000

module.exports = timeout.handler({
  // Default timeout for all endpoints
  // To override for a given router/endpoint, use `require('express-timeout-handler').set(...)`
  timeout: maxRequestTimeout,

  // IMPORTANT:
  // We cannot allow the middleware to disable the `res` object's methods like
  // it does by default if we want to use `next` in the `onTimeout` handler!
  disable: [],

  onTimeout: function (req, res, next) {
    // Create a custom timeout error
    const timeoutError = new Error('Request timed out')
    timeoutError.statusCode = 503
    timeoutError.code = 'ETIMEDOUT'

    // Pass the error to our Express error handler for consolidated processing
    return next(timeoutError)
  }

  // Can also set an `onDelayedResponse` property IF AND ONLY IF you allow for disabling methods
})
