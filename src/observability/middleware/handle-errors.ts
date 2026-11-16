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

// For asset 404s, handleError sets short cache headers because Fastly caches 404 responses.
// https://docs.fastly.com/en/guides/how-caching-and-cdns-work#http-status-codes-cached-by-default
async function handleError(
  error: ErrorWithCode | number,
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  const responseDone = res.headersSent || req.aborted

  if (req.path.startsWith('/assets') || req.path.startsWith('/_next/static')) {
    if (!responseDone) {
      errorCacheControl(res)
      // Clear any earlier manual surrogate key; pre-language errors fall back to no-language.
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

      // Delegate once headers are sent or the request aborted, so Express closes the connection.
      next(error)
      return
    }

    if (!req.context) {
      req.context = {}
    }

    // Middleware may signal a normal 404 by calling next(404).
    if (error === 404) {
      errorCacheControl(res)
      setFastlySurrogateKey(res, makeLanguageSurrogateKey(req.language), true)
      res.status(404).type('html').send(minimumNotFoundHtml)
      return
    }
    if (typeof error === 'number') {
      throw new Error("Don't use next(xxx) where xxx is any other number than 404")
    }

    // Development and staging pages show the error; production pages do not.
    if (!process.env.MODA_PROD_SERVICE_ENV) {
      req.context.error = error
    }

    // Status-code errors usually come from middleware such as express.json.
    if (error.statusCode) {
      res.sendStatus(error.statusCode)
      return
    }

    res.statusCode = 500
    // In development, nextApp.renderError hangs forever and the stack trace is more useful.
    if (process.env.NODE_ENV === 'development') {
      next(error)
      return
    } else {
      nextApp.renderError(error, req, res, req.path)

      // Report to Failbot after responding to the user.
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
