import chalk from 'chalk'
import { getLoggerContext } from '@/observability/logger/lib/logger-context'
import type { NextFunction, Request, Response } from 'express'
import { getLogLevelNumber, useProductionLogging } from '@/observability/logger/lib/log-levels'
import { toLogfmt } from '@/observability/logger/lib/to-logfmt'

/**
 * Check if automatic development logging is enabled.
 * We don't turn on automatic logging for tests & GitHub Actions by default,
 * but you can override this using the ENABLE_DEV_LOGGING environment variable.
 */
function shouldEnableAutomaticDevLogging(): boolean {
  const isTest = process.env.NODE_ENV === 'test' || process.env.GITHUB_ACTIONS === 'true'
  return Boolean(
    process.env.ENABLE_DEV_LOGGING ? JSON.parse(process.env.ENABLE_DEV_LOGGING) : !isTest,
  )
}

/**
 * Returns a custom middleware that automatically logs request details.
 *
 * e.g. `GET /path/to/resource 200 5.000 ms - 1234`
 *
 * In production, we include the logger context and print in logfmt format
 * In development, we print colored strings for better readability
 * In test, the request details are not logged.
 */
export function getAutomaticRequestLogger() {
  return (req: Request, res: Response, next: NextFunction) => {
    const startTime = Date.now()

    // Store original end method to capture response completion
    const originalEnd = res.end

    // Override res.end to log when response completes
    res.end = function (chunk?: any, encoding?: any) {
      const responseTime = Date.now() - startTime
      const status = res.statusCode || 200
      const contentLength = res.getHeader('content-length') || '-'
      const method = req.method
      const url = req.originalUrl || req.url

      if (useProductionLogging()) {
        // Production: log in logfmt format with full context
        const loggerContext = getLoggerContext()
        console.log(
          toLogfmt({
            ...loggerContext,
            status,
            responseTime: responseTime + ' ms',
            contentLength: String(contentLength),
            method,
            url,
          }),
        )
      } else if (shouldEnableAutomaticDevLogging()) {
        // Development: log colored strings for readability
        const logLevelNum = getLogLevelNumber()

        // Don't log `/_next/` requests unless LOG_LEVEL is `debug` or higher
        if (url?.startsWith('/_next/') && logLevelNum < 3) {
          return originalEnd.call(this, chunk, encoding)
        }

        // Choose color based on status code
        const color =
          status >= 500 ? 'red' : status >= 400 ? 'yellow' : status >= 300 ? 'cyan' : 'green'

        const logLine = [
          '[AUTO]',
          chalk.reset(method),
          chalk.reset(url),
          chalk[color](status),
          chalk.reset(responseTime + ' ms'),
          chalk.reset('-'),
          chalk.reset(String(contentLength)),
        ].join(' ')

        console.log(logLine)
      }

      // Call the original end method to complete the response
      return originalEnd.call(this, chunk, encoding)
    }

    next()
  }
}
