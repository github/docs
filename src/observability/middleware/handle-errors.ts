import type { NextFunction, Response } from 'express'

import FailBot from '../lib/failbot'
import { nextApp } from '@/frame/middleware/next'
import { minimumNotFoundHtml } from '@/frame/lib/constants'
import {
  setFastlySurrogateKey,
  makeLanguageSurrogateKey,
} from '@/frame/middleware/set-fastly-surrogate-key'
import { errorCacheControl } from '@/frame/middleware/cache-control'
import { toError } from '@/observability/lib/to-error'
import { ExtendedRequest } from '@/types'
import { createLogger } from '@/observability/logger'

const logger = createLogger(import.meta.url)

const DEBUG_MIDDLEWARE_TESTS = Boolean(JSON.parse(process.env.DEBUG_MIDDLEWARE_TESTS || 'false'))

type ErrorWithCode = Error & {
  code: string
  statusCode?: number
  status?: string
}

function shouldLogException(error: ErrorWithCode) {
  const IGNORED_ERRORS = [
    // Client connection aborted
    'ECONNRESET',
  ]

  if (IGNORED_ERRORS.includes(error.code)) {
    return false
  }

  return true
}

async function logException(error: ErrorWithCode, req: ExtendedRequest) {
  if (process.env.NODE_ENV !== 'test' && shouldLogException(error)) {
    await FailBot.report(error, {
      path: req.path,
      url: req.url,
    })
  }
}

async function handleError(
  error: ErrorWithCode | number,
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  const responseDone = res.headersSent || req.aborted

  if (req.path.startsWith('/assets') || req.path.startsWith('/_next/static')) {
    if (!responseDone) {
      // Fastly caches 404s by default, so cache 404'ing assets conservatively:
      // a short Cache-Control, plus the default surrogate key
      // in case the 404 was a mistake.
      // https://docs.fastly.com/en/guides/how-caching-and-cdns-work#http-status-codes-cached-by-default
      errorCacheControl(res)
      // Unsets the manual surrogate key assumed earlier in the middleware chain.
      // Falls back to `no-language` when `req.language` isn't set yet,
      // e.g. errors before language detection.
      setFastlySurrogateKey(res, makeLanguageSurrogateKey(req.language), true)
    }
  } else if (DEBUG_MIDDLEWARE_TESTS) {
    logger.warn('An error occurred in some middleware handler', { error })
  }

  try {
    if (responseDone) {
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
      errorCacheControl(res)
      setFastlySurrogateKey(res, makeLanguageSurrogateKey(req.language), true)
      res.status(404).type('html').send(minimumNotFoundHtml)
      return
    }
    if (typeof error === 'number') {
      throw new Error("Don't use next(xxx) where xxx is any other number than 404")
    }

    // display error on the page in development and staging, but not in production
    if (!process.env.MODA_PROD_SERVICE_ENV) {
      req.context.error = error
    }

    // Errors with a status code usually come from a middleware like `express.json()`.
    if (error.statusCode) {
      res.sendStatus(error.statusCode)
      return
    }

    res.statusCode = 500
    // Local dev doesn't need the pretty HTML rendering of 500.tsx.
    // Also, as of Jan 2024, calling nextApp.renderError hangs forever
    // when `NODE_ENV` is 'development'. We can't fully explain it,
    // and it's moot because in local dev the full stack trace is more useful.
    if (process.env.NODE_ENV === 'development') {
      next(error)
      return
    } else {
      nextApp.renderError(error, req, res, req.path)

      // Report to Failbot AFTER responding to the user
      await logException(error, req)
    }
  } catch (handlingError) {
    logger.error('An error occurred in the error handling middleware', {
      error: toError(handlingError),
    })
    next(handlingError)
    return
  }
}

export default handleError
