import chalk from 'chalk'
import { getLoggerContext } from '@/observability/logger/lib/logger-context'
import type { NextFunction, Request, Response } from 'express'
import { getLogLevelNumber, useProductionLogging } from '@/observability/logger/lib/log-levels'
import { toLogfmt } from '@/observability/logger/lib/to-logfmt'
import { POD_IDENTITY } from '@/observability/logger/lib/pod-identity'

// Off by default for tests and GitHub Actions. Override with ENABLE_DEV_LOGGING.
function shouldEnableAutomaticDevLogging(): boolean {
  const isTest = process.env.NODE_ENV === 'test' || process.env.GITHUB_ACTIONS === 'true'
  return Boolean(
    process.env.ENABLE_DEV_LOGGING ? JSON.parse(process.env.ENABLE_DEV_LOGGING) : !isTest,
  )
}

// Emits one line per response, like: GET /path/to/resource 200 5.000 ms - 1234
// Tests and Actions stay silent unless ENABLE_DEV_LOGGING overrides.
export function getAutomaticRequestLogger() {
  return (req: Request, res: Response, next: NextFunction) => {
    const startTime = Date.now()

    const originalEnd = res.end

    res.end = function (...args: unknown[]) {
      const responseTime = Date.now() - startTime
      const status = res.statusCode || 200
      const contentLength = res.getHeader('content-length') || '-'
      const method = req.method
      const url = req.originalUrl || req.url

      if (useProductionLogging()) {
        const loggerContext = getLoggerContext()
        console.log(
          toLogfmt({
            ...POD_IDENTITY,
            ...loggerContext,
            status,
            responseTime: `${responseTime} ms`,
            contentLength: String(contentLength),
            method,
            url,
          }),
        )
      } else if (shouldEnableAutomaticDevLogging()) {
        const logLevelNum = getLogLevelNumber()

        // Don't log `/_next/` requests unless LOG_LEVEL is `debug` or higher
        if (url?.startsWith('/_next/') && logLevelNum < 3) {
          return originalEnd.apply(this, args as Parameters<typeof originalEnd>)
        }

        const color =
          status >= 500 ? 'red' : status >= 400 ? 'yellow' : status >= 300 ? 'cyan' : 'green'

        const logLine = [
          '[AUTO]',
          chalk.reset(method),
          chalk.reset(url),
          chalk[color](status),
          chalk.reset(`${responseTime} ms`),
          chalk.reset('-'),
          chalk.reset(String(contentLength)),
        ].join(' ')

        console.log(logLine)
      }

      return originalEnd.apply(this, args as Parameters<typeof originalEnd>)
    }

    next()
  }
}
