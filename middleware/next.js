import next from 'next'

// This import is necessary, as of Jan 2022 to avoid a segmentation fault.
// Next is suppose to automatically pick up the `next.config.js` file
// but if you don't specify it to the `next()` constructor you currently
// get a seg fault.
// Possibly relevant: https://github.com/vercel/next.js/issues/33008
import conf from '../next.config.js'

const { NODE_ENV } = process.env
const isDevelopment = NODE_ENV === 'development'

export const nextApp = next({ dev: isDevelopment, conf })
export const nextHandleRequest = nextApp.getRequestHandler()
await nextApp.prepare()

function renderPageWithNext(req, res, next) {
  const isNextDataRequest = req.path.startsWith('/_next') && !req.path.startsWith('/_next/data')

  if (isNextDataRequest) {
    return nextHandleRequest(req, res)
  }

  return next()
}

export default renderPageWithNext
