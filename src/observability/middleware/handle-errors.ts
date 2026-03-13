import type { NextFunction, Response } from 'express'

import FailBot from '../lib/failbot'
import { shouldLogException, type ErrorWithCode } from '../lib/should-log-exception'
import { nextApp } from '@/frame/middleware/next'
import { setFastlySurrogateKey, SURROGATE_ENUMS } from '@/frame/middleware/set-fastly-surrogate-key'
import { errorCacheControl } from '@/frame/middleware/cache-control'
import statsd from '@/observability/lib/statsd'
import { ExtendedRequest } from '@/types'

const DEBUG_MIDDLEWARE_TESTS = Boolean(JSON.parse(process.env.DEBUG_MIDDLEWARE_TESTS || 'false'))

async function logException(error: ErrorWithCode, req: ExtendedRequest) {
  if (process.env.NODE_ENV !== 'test' && shouldLogException(error)) {
    await FailBot.report(error, {
      path: req.path,
      url: req.url,
    })
  }
}

function timedOut(req: ExtendedRequest) {
  // The `req.pagePath` can come later so it's not guaranteed to always
  // be present. It's added by the `handle-next-data-path.ts` middleware
  // we translates those "cryptic" `/_next/data/...` URLs from
  // client-side routing.
  const incrementTags = [`path:${req.pagePath || req.path}`]
  if (req.context?.currentCategory) {
    incrementTags.push(`product:${req.context.currentCategory}`)
  }
  statsd.increment('middleware.timeout', 1, incrementTags)
}

async function handleError(
  error: ErrorWithCode | number,
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  // Potentially set by the `connect-timeout` middleware.
  if (req.timedout) {
    timedOut(req)
  }

  const responseDone = res.headersSent || req.aborted

  if (req.path.startsWith('/assets') || req.path.startsWith('/_next/static')) {
    if (!responseDone) {
      // By default, Fastly will cache 404 responses unless otherwise
      // told not to.
      // See https://docs.fastly.com/en/guides/how-caching-and-cdns-work#http-status-codes-cached-by-default
      // Let's cache our 404'ing assets conservatively.
      // The Cache-Control is short, and let's use the default surrogate
      // key just in case it was a mistake.
      errorCacheControl(res)
      // Makes sure the surrogate key is NOT the manual one if it failed.
      // This basically unsets what was assumed in the beginning of
      // loading all the middlewares.
      setFastlySurrogateKey(res, SURROGATE_ENUMS.DEFAULT)
    }
  } else if (DEBUG_MIDDLEWARE_TESTS) {
    console.warn('An error occurred in some middleware handler', error)
  }

  try {
    // If the headers have already been sent or the request was aborted...
    if (responseDone) {
      // Report to Failbot
      if (typeof error !== 'number') {
        await logException(error, req)
      }

      // We MUST delegate to the default Express error handler
      next(error)
      return
    }

    if (!req.context) {
      req.context = {}
    }

    // Special handling for when a middleware calls `next(404)`
    if (error === 404) {
      // Route to App Router for proper 404 handling
      req.url = '/404'
      res.status(404)
      res.setHeader('x-pathname', req.path)
      res.locals = res.locals || {}
      res.locals.handledByAppRouter = true
      return nextApp.getRequestHandler()(req, res)
    }
    if (typeof error === 'number') {
      throw new Error("Don't use next(xxx) where xxx is any other number than 404")
    }

    // display error on the page in development and staging, but not in production
    if (!process.env.MODA_PROD_SERVICE_ENV) {
      req.context.error = error
    }

    // If the error contains a status code, just send that back. This is usually
    // from a middleware like `express.json()`.
    if (error.statusCode) {
      res.sendStatus(error.statusCode)
      return
    }

    res.statusCode = 500
    // When in local development mode, we don't need the pretty HTML
    // renderig of 500.tsx.
    // Incidentally, as Jan 2024, if you try to execute nextApp.renderError
    // when `NODE_ENV` is 'development' it will hang forever. A problem
    // we can't fully explain but it's also moot because in local dev
    // it's easier to just see the full stack trace in the console
    // and in the client.
    if (process.env.NODE_ENV === 'development') {
      next(error)
      return
    } else {
      nextApp.renderError(error, req, res, req.path)

      // Report to Failbot AFTER responding to the user
      await logException(error, req)
    }
  } catch (handlingError) {
    console.error('An error occurred in the error handling middleware!', handlingError)
    next(handlingError)
    return
  }
}

export default handleError
