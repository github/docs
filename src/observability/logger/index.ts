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

// Format non-error included context as compact key=value pairs
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

// Safely resolve filePath to a relative path.
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

// Type definitions for logger methods with overloads
interface LoggerMethod {
  // Pattern 1: Just a message e.g. `logger.info('Hello world')`
  (message: string): void
  // Pattern 2: Message with extraData object e.g. `logger.info('Hello world', { userId: 123 })`
  (message: string, extraData: IncludeContext): void
  // Pattern 3: Multiple message parts e.g. `logger.info('Hello', 'world', 123, true)`
  (message: string, ...messageParts: (string | number | boolean)[]): void
  // Pattern 4: Multiple message parts followed by extraData object e.g.
  // `logger.info('Hello', 'world', 123, true, { userId: 123 })`
  // Note: The extraData object must be the last argument
  (
    message: string,
    ...args: [...messageParts: (string | number | boolean)[], extraData: IncludeContext]
  ): void
  // Pattern 5: Message with Error object (automatically handled) e.g.
  // `logger.error('Database error', error)`
  // Note: This will append the error message to the final log message
  (message: string, error: Error): void
  // Pattern 6: Message with multiple parts and Error objects
  // e.g. `logger.error('Multiple failures', error1, error2)`
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

  // Helper function to check if a value is a plain object (not Array, Error, Date, etc.)
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

  // The actual log function used by each level-specific method.
  function logMessage(level: keyof typeof LOG_LEVELS, message: string, ...args: unknown[]) {
    // Determine if we have extraData or additional message parts
    let finalMessage: string
    let includeContext: IncludeContext = {}

    // First, extract any Error objects from the arguments and handle them specially
    const errorObjects: Error[] = []
    const nonErrorArgs: unknown[] = []

    for (const arg of args) {
      if (arg instanceof Error) {
        errorObjects.push(arg)
      } else {
        nonErrorArgs.push(arg)
      }
    }

    // Handle the non-error arguments for message building and extraData
    if (nonErrorArgs.length > 0 && isPlainObject(nonErrorArgs[nonErrorArgs.length - 1])) {
      // Last non-error argument is a plain object - treat as extraData
      includeContext = { ...(nonErrorArgs[nonErrorArgs.length - 1] as IncludeContext) }
      const messageParts = nonErrorArgs.slice(0, -1)
      if (messageParts.length > 0) {
        // There are message parts before the extraData object
        const allMessageParts = [
          message,
          ...messageParts.map((arg) => (typeof arg === 'string' ? arg : String(arg))),
        ]
        finalMessage = allMessageParts.join(' ')
      } else {
        // Only the extraData object, no additional message parts
        finalMessage = message
      }
    } else if (nonErrorArgs.length > 0) {
      // Multiple arguments or non-plain-object - concatenate as message parts
      const allMessageParts = [
        message,
        ...nonErrorArgs.map((arg) => (typeof arg === 'string' ? arg : String(arg))),
      ]
      finalMessage = allMessageParts.join(' ')
    } else {
      // No additional non-error arguments
      finalMessage = message
    }

    // Add Error objects to includeContext and optionally to the message
    if (errorObjects.length > 0) {
      if (errorObjects.length === 1) {
        // Single error - use 'error' key and append error message to final message
        includeContext.error = errorObjects[0]
        finalMessage = `${finalMessage}: ${errorObjects[0].message}`
      } else {
        // Multiple errors - use indexed keys and append all error messages
        for (let index = 0; index < errorObjects.length; index++) {
          const error = errorObjects[index]
          includeContext[`error_${index + 1}`] = error
        }
        const errorMessages = errorObjects.map((err) => err.message).join(', ')
        finalMessage = `${finalMessage}: ${errorMessages}`
      }
    }
    // Compare the requested level's priority to current environment's level
    const currentLogLevel = getLogLevelNumber()
    if (LOG_LEVELS[level] > currentLogLevel) {
      return // Do not log if the requested level is lower priority
    }

    const loggerContext = getLoggerContext()
    const timestamp = new Date().toISOString()

    if (useProductionLogging()) {
      // Logfmt logging in production
      const logObject: IncludeContext = {
        ...POD_IDENTITY, // pod_name, pod_namespace, node_hostname (static; {} in local dev)
        ...loggerContext, // requestUuid, path, method, headers, etc. (per-request)
        timestamp,
        level,
        ...(BUILD_SHA !== undefined ? { build_sha: BUILD_SHA } : {}),
        file: resolveFilePath(filePath),
        message: finalMessage,
      }

      // Add any included context to the log object
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

      // Add extra context to its own key in the log object to prevent conflicts with loggerContext keys
      logObject.included = includedContextWithFormattedError

      console.log(toLogfmt(logObject))
    } else {
      // Human-readable dev/script logging
      const relFile = resolveFilePath(filePath)
      const ts = formatTimestamp()
      const colorFn = LEVEL_COLORS[level]
      const lvl = colorFn(level.toUpperCase().padEnd(5))
      const fileTag = chalk.dim(`(${relFile})`)
      const contextStr = formatContext(includeContext)

      // If the log includes an error, print the Error object to console.error in local dev
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
