import next from 'next'

const { NODE_ENV } = process.env
const isDevelopment = NODE_ENV === 'development'

export const nextApp = next({ dev: isDevelopment })
export const nextHandleRequest = nextApp.getRequestHandler()
await nextApp.prepare()

function renderPageWithNext(req, res, next) {
  // We currently don't use next/image for any images.
  // We don't even have `sharp` installed.
  // This could change in the future but right now can just 404 on these
  // so we don't have to deal with any other errors.
  if (req.path.startsWith('/_next/image')) {
    return next(404)
  }

  const isNextDataRequest = req.path.startsWith('/_next') && !req.path.startsWith('/_next/data')

  if (isNextDataRequest) {
    return nextHandleRequest(req, res)
  }

  return next()
}

export default renderPageWithNext
