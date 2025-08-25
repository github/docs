/*
The log level is controlled by the `LOG_LEVEL` environment variable, where lower log levels = more verbose
 examples:
   if log level is 'info', only 'info', 'warn', and 'error' logs will be output
   if log level is 'debug', all logs will be output
   if log level is 'error', only 'error' logs will be output

NOTE: This file is `.js` because next.config.js does not yet support importing
*/
export const LOG_LEVELS = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
}

// We set the log level based on the LOG_LEVEL environment variable
// but default to:
//   - 'info' in development
//   - 'debug' in production
//   - 'debug' in test - this is because `vitest` turns off logs unless --silent=false is passed
export function getLogLevelNumber() {
  let defaultLogLevel = 'info'
  if (
    !process.env.LOG_LEVEL &&
    (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test')
  ) {
    defaultLogLevel = 'debug'
  }
  const logLevel = process.env.LOG_LEVEL?.toLowerCase() || defaultLogLevel
  return LOG_LEVELS[logLevel]
}

export const useProductionLogging = () => {
  return (
    (process.env.NODE_ENV === 'production' && !process.env.CI) ||
    process.env.LOG_LIKE_PRODUCTION === 'true'
  )
}
