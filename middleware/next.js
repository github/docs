const next = require('next')

const { NODE_ENV, FEATURE_NEXTJS } = process.env
const isDevelopment = NODE_ENV === 'development'

let nextHandleRequest
if (FEATURE_NEXTJS) {
  const nextApp = next({ dev: isDevelopment })
  nextHandleRequest = nextApp.getRequestHandler()
  nextApp.prepare()
}

module.exports = function renderPageWithNext (req, res, next) {
  if (req.path.startsWith('/_next') && !req.path.startsWith('/_next/data')) {
    return nextHandleRequest(req, res)
  }

  next()
}

module.exports.nextHandleRequest = nextHandleRequest
