import FailBot from '../lib/failbot.js'
import { nextApp } from './next.js'
import { setFastlySurrogateKey, SURROGATE_ENUMS } from './set-fastly-surrogate-key.js'
import { cacheControlFactory } from './cache-control.js'

const cacheControl = cacheControlFactory(60) // 1 minute

function shouldLogException(error) {
  const IGNORED_ERRORS = [
    // avoid sending CSRF token errors (from bad-actor POST requests)
    'EBADCSRFTOKEN',
    // Client connected aborted
    'ECONNRESET',
  ]

  if (IGNORED_ERRORS.includes(error.code)) {
    return false
  }

  // We should log this exception
  return true
}

async function logException(error, req) {
  if (process.env.NODE_ENV !== 'test' && shouldLogException(error)) {
    await FailBot.report(error, {
      path: req.path,
    })
  }
}

export default async function handleError(error, req, res, next) {
  const responseDone = res.headersSent || req.aborted

  if (req.path.startsWith('/assets') || req.path.startsWith('/_next/static')) {
    if (!responseDone) {
      // By default, Fastly will cache 404 responses unless otherwise
      // told not to.
      // See https://docs.fastly.com/en/guides/how-caching-and-cdns-work#http-status-codes-cached-by-default
      // Let's cache our 404'ing assets conservatively.
      // The Cache-Control is short, and let's use the default surrogate
      // key just in case it was a mistake.
      cacheControl(res)
      // Undo the cookie setting that CSRF sets.
      res.removeHeader('set-cookie')
      // Makes sure the surrogate key is NOT the manual one if it failed.
      // This basically unsets what was assumed in the beginning of
      // loading all the middlewares.
      setFastlySurrogateKey(res, SURROGATE_ENUMS.DEFAULT)
    }
  } else if (process.env.NODE_ENV === 'test') {
    console.warn('An error occurrred in some middleware handler', error)
  }

  try {
    // If the headers have already been sent or the request was aborted...
    if (responseDone) {
      // Report to Failbot
      await logException(error, req)

      // We MUST delegate to the default Express error handler
      return next(error)
    }

    if (!req.context) {
      req.context = {}
    }
    // display error on the page in development and staging, but not in production
    if (process.env.HEROKU_PRODUCTION_APP !== 'true') {
      req.context.error = error
    }

    // Special handling for when a middleware calls `next(404)`
    if (error === 404) {
      return nextApp.render404(req, res)
    }

    // If the error contains a status code, just send that back. This is usually
    // from a middleware like `express.json()` or `csrf`.
    if (error.statusCode || error.status) {
      return res.sendStatus(error.statusCode || error.status)
    }

    if (process.env.NODE_ENV !== 'test') {
      console.error('500 error!', req.path)
      console.error(error)
    }

    res.statusCode = 500
    nextApp.renderError(error, req, res, req.path)

    // Report to Failbot AFTER responding to the user
    await logException(error, req)
  } catch (error) {
    console.error('An error occurred in the error handling middleware!', error)
    return next(error)
  }
}
