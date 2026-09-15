import path from 'path'
import chalk from 'chalk'
import { getLoggerContext } from '@/observability/logger/lib/logger-context'
import {
  getLogLevelNumber,
  LOG_LEVELS,
  useProductionLogging,
} from '@/observability/logger/lib/log-levels'
import { toLogfmt } from '@/observability/logger/lib/to-logfmt'
import { POD_IDENTITY } from '@/observability/logger/lib/pod-identity'

const LEVEL_COLORS: Record<keyof typeof LOG_LEVELS, (s: string) => string> = {
  error: chalk.red,
  warn: chalk.yellow,
  info: chalk.cyan,
  debug: chalk.gray,
}

function formatTimestamp(): string {
  const now = new Date()
  const h = String(now.getHours()).padStart(2, '0')
  const m = String(now.getMinutes()).padStart(2, '0')
  const s = String(now.getSeconds()).padStart(2, '0')
  const ms = String(now.getMilliseconds()).padStart(3, '0')
  return `${h}:${m}:${s}.${ms}`
}

function formatContext(ctx: Record<string, unknown>): string {
  const parts: string[] = []
  for (const [key, value] of Object.entries(ctx)) {
    if (value instanceof Error) continue // errors handled separately
    if (value === undefined || value === null || value === '') continue
    let v: string
    if (typeof value === 'object') {
      try {
        v = JSON.stringify(value)
      } catch {
        v = String(value)
      }
    } else {
      v = String(value)
    }
    parts.push(`${chalk.dim(`${key}=`)}${v}`)
  }
  return parts.length > 0 ? `  ${parts.join(' ')}` : ''
}

// Handles file:// URLs (from import.meta.url) and plain string labels.
function resolveFilePath(filePath: string): string {
  try {
    const parsed = new URL(filePath)
    return path.relative(process.cwd(), parsed.pathname)
  } catch {
    return filePath
  }
}

type IncludeContext = { [key: string]: unknown }

// Read once at module startup so every log line carries the deployed version.
// BUILD_SHA is baked into each Docker image via ARG/ENV in the Dockerfile.
const BUILD_SHA = process.env.BUILD_SHA || undefined

// A trailing plain object is treated as extra context, not a message part.
// Error arguments are extracted from anywhere in the list,
// and their messages appended to the log message.
interface LoggerMethod {
  (message: string): void
  (message: string, extraData: IncludeContext): void
  (message: string, ...messageParts: (string | number | boolean)[]): void
  (
    message: string,
    ...args: [...messageParts: (string | number | boolean)[], extraData: IncludeContext]
  ): void
  (message: string, error: Error): void
  (message: string, ...args: (string | number | boolean | Error | IncludeContext | object)[]): void
}

/*
Call this function with `import.meta.url` as the argument to create a logger for a specific file.

e.g. `const logger = createLogger(import.meta.url)`

Logs will be output to the console in development, and in `logfmt` format to stdout in production.
*/
export function createLogger(filePath: string) {
  if (!filePath) {
    throw new Error('createLogger must be called with the import.meta.url argument')
  }

  function isPlainObject(value: unknown): value is Record<string, unknown> {
    return (
      value !== null &&
      typeof value === 'object' &&
      (value as Record<string, unknown>).constructor === Object &&
      !(value instanceof Error) &&
      !(value instanceof Array) &&
      !(value instanceof Date)
    )
  }

  function logMessage(level: keyof typeof LOG_LEVELS, message: string, ...args: unknown[]) {
    let finalMessage: string
    let includeContext: IncludeContext = {}

    const errorObjects: Error[] = []
    const nonErrorArgs: unknown[] = []

    for (const arg of args) {
      if (arg instanceof Error) {
        errorObjects.push(arg)
      } else {
        nonErrorArgs.push(arg)
      }
    }

    if (nonErrorArgs.length > 0 && isPlainObject(nonErrorArgs[nonErrorArgs.length - 1])) {
      includeContext = { ...(nonErrorArgs[nonErrorArgs.length - 1] as IncludeContext) }
      const messageParts = nonErrorArgs.slice(0, -1)
      if (messageParts.length > 0) {
        const allMessageParts = [
          message,
          ...messageParts.map((arg) => (typeof arg === 'string' ? arg : String(arg))),
        ]
        finalMessage = allMessageParts.join(' ')
      } else {
        finalMessage = message
      }
    } else if (nonErrorArgs.length > 0) {
      const allMessageParts = [
        message,
        ...nonErrorArgs.map((arg) => (typeof arg === 'string' ? arg : String(arg))),
      ]
      finalMessage = allMessageParts.join(' ')
    } else {
      finalMessage = message
    }

    if (errorObjects.length > 0) {
      if (errorObjects.length === 1) {
        includeContext.error = errorObjects[0]
        finalMessage = `${finalMessage}: ${errorObjects[0].message}`
      } else {
        for (let index = 0; index < errorObjects.length; index++) {
          const error = errorObjects[index]
          includeContext[`error_${index + 1}`] = error
        }
        const errorMessages = errorObjects.map((err) => err.message).join(', ')
        finalMessage = `${finalMessage}: ${errorMessages}`
      }
    }
    const currentLogLevel = getLogLevelNumber()
    if (LOG_LEVELS[level] > currentLogLevel) {
      return // Do not log if the requested level is lower priority
    }

    const loggerContext = getLoggerContext()
    const timestamp = new Date().toISOString()

    if (useProductionLogging()) {
      const logObject: IncludeContext = {
        ...POD_IDENTITY, // pod_name, pod_namespace, node_hostname (static; {} in local dev)
        ...loggerContext, // requestUuid, path, method, headers, etc. (per-request)
        timestamp,
        level,
        ...(BUILD_SHA !== undefined ? { build_sha: BUILD_SHA } : {}),
        file: resolveFilePath(filePath),
        message: finalMessage,
      }

      const includedContextWithFormattedError = {} as IncludeContext
      for (const [key, value] of Object.entries(includeContext)) {
        if (typeof value === 'object' && value instanceof Error) {
          // Errors don't serialize well to JSON, so just log the message + stack trace
          includedContextWithFormattedError[key] = value.message
          includedContextWithFormattedError[`${key}_code`] = (value as NodeJS.ErrnoException).code
          includedContextWithFormattedError[`${key}_name`] = value.name
          includedContextWithFormattedError[`${key}_stack`] = value.stack
        } else {
          includedContextWithFormattedError[key] = value
        }
      }

      // Nested under its own key to avoid colliding with loggerContext keys.
      logObject.included = includedContextWithFormattedError

      console.log(toLogfmt(logObject))
    } else {
      const relFile = resolveFilePath(filePath)
      const ts = formatTimestamp()
      const colorFn = LEVEL_COLORS[level]
      const lvl = colorFn(level.toUpperCase().padEnd(5))
      const fileTag = chalk.dim(`(${relFile})`)
      const contextStr = formatContext(includeContext)

      // Prints the message line once per error, so a two-error call repeats it.
      let wasErrorLog = false
      for (const [, value] of Object.entries(includeContext)) {
        if (typeof value === 'object' && value instanceof Error) {
          wasErrorLog = true
          console.log(`${chalk.dim(ts)} ${lvl} ${fileTag} ${finalMessage}${contextStr}`)
          console.error(value)
        }
      }
      if (!wasErrorLog) {
        console.log(`${chalk.dim(ts)} ${lvl} ${fileTag} ${finalMessage}${contextStr}`)
      }
    }
  }

  return {
    error: logMessage.bind(null, 'error') as LoggerMethod,
    warn: logMessage.bind(null, 'warn') as LoggerMethod,
    info: logMessage.bind(null, 'info') as LoggerMethod,
    debug: logMessage.bind(null, 'debug') as LoggerMethod,
  }
}
