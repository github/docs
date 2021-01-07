// This module is for testing our handling of uncaught async rejections on incoming requests

module.exports = async function triggerError (req, res, next) {
  // prevent this from being used in production
  if (process.env.NODE_ENV === 'production') return next()

  throw new Error('Intentional error')
}
