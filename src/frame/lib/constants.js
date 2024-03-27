const isDev = process.env.NODE_ENV === 'development'

// 10 seconds, by default in production and tests.
// 15 seconds, by default in development.
// Why more in development? Because Next.js compilation is JIT (Just-In-Time)
// so that starting `npm start` and viewing your first page on localhost:4000
// can, these days, take more than 10 seconds when the computer isn't
// very fast. That first compilation can take long even of fast hardware
// if the local contributor is running several other resource-intensive
// applications at the same time.
const DEFAULT_MAX_REQUEST_TIMEOUT = isDev ? 15_000 : 10_000

export const ROOT = process.env.ROOT || '.'
export const USER_LANGUAGE_COOKIE_NAME = 'user_language'
export const TRANSLATIONS_ROOT = process.env.TRANSLATIONS_ROOT || 'translations'
export const MAX_REQUEST_TIMEOUT = process.env.REQUEST_TIMEOUT
  ? parseInt(process.env.REQUEST_TIMEOUT, 10)
  : DEFAULT_MAX_REQUEST_TIMEOUT
export const TRANSLATIONS_FIXTURE_ROOT = process.env.TRANSLATIONS_FIXTURE_ROOT
