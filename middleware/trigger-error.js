// This module is for testing our handling of uncaught async rejections on incoming requests

// IMPORTANT: Leave this function as `async` even though it doesn't need to be!
export default async function triggerError(req, res, next) {
  // IMPORTANT:
  // Do NOT wrap this method's contents in the usual `try-catch+next(error)`
  // pattern used on async middleware! This is an intentional omission!

  // prevent this from being used in production
  if (process.env.NODE_ENV === 'production' && process.env.HEROKU_PRODUCTION_APP) return next()

  throw new Error('Intentional error')
}
