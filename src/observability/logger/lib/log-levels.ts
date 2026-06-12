/*
The log level is controlled by the `LOG_LEVEL` environment variable, where lower log levels = more verbose
 examples:
   if log level is 'info', only 'info', 'warn', and 'error' logs will be output
   if log level is 'debug', all logs will be output
   if log level is 'error', only 'error' logs will be output
*/
export const LOG_LEVELS = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
} as const

type LogLevel = keyof typeof LOG_LEVELS
type LogLevelValue = (typeof LOG_LEVELS)[LogLevel]

function isValidLogLevel(level: string): level is LogLevel {
  return level in LOG_LEVELS
}

// We set the log level based on the LOG_LEVEL environment variable
// but default to:
//   - 'info' in development
//   - 'debug' in production
//   - 'debug' in test - this is because `vitest` turns off logs unless --silent=false is passed
export function getLogLevelNumber(): LogLevelValue {
  let defaultLogLevel: LogLevel = 'info'
  if (
    !process.env.LOG_LEVEL &&
    (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test')
  ) {
    defaultLogLevel = 'debug'
  }

  const envLogLevel = process.env.LOG_LEVEL?.toLowerCase() || defaultLogLevel
  const logLevel = isValidLogLevel(envLogLevel) ? envLogLevel : defaultLogLevel

  return LOG_LEVELS[logLevel]
}

export const useProductionLogging = (): boolean => {
  return (
    (process.env.NODE_ENV === 'production' && !process.env.CI) ||
    process.env.LOG_LIKE_PRODUCTION === 'true'
  )
}
