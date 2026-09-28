// LOG_LEVEL controls verbosity. Lower numbers are higher priority.
// For LOG_LEVEL=info, info, warn, and error logs are emitted.
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

// Default LOG_LEVEL is info in development and debug in production.
// Tests default to debug because vitest suppresses logs unless --silent=false is passed.
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
