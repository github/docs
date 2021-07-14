import next from 'next'

const { NODE_ENV, FEATURE_NEXTJS } = process.env
const isDevelopment = NODE_ENV === 'development'

const nextApp = FEATURE_NEXTJS ? next({ dev: isDevelopment }) : null
export const nextHandleRequest = nextApp ? nextApp.getRequestHandler() : null
if (nextApp) {
  nextApp.prepare()
}

function renderPageWithNext(req, res, next) {
  if (req.path.startsWith('/_next') && !req.path.startsWith('/_next/data')) {
    return nextHandleRequest(req, res)
  }

  return next()
}

export default renderPageWithNext
