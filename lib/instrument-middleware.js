const path = require('path')
const statsd = require('./statsd')

module.exports = function instrumentMiddleware (relativePath) {
  // Requires the file as if it were being required from '../middleware/index.js'.
  // This is a little wonky, but let's us write `app.use(instrument(path))` and
  // maintain the name of the file, instead of hard-coding it for each middleware.
  const middleware = require(path.resolve(__dirname, '../middleware', relativePath))

  // Check if the middleware is an async function, to use the appropriate timer
  const isAsyncFunction = middleware.constructor.name === 'AsyncFunction'

  // Add a tag so we can see all middleware together
  const tags = { middleware: path.basename(relativePath) }

  return isAsyncFunction
    ? statsd.asyncTimer(middleware, 'middleware', tags)
    : statsd.timer(middleware, 'middleware', tags)
}
