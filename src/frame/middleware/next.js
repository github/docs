import next from 'next'

const { NODE_ENV } = process.env
const isDevelopment = NODE_ENV === 'development'

export const nextApp = next({ dev: isDevelopment })
export const nextHandleRequest = nextApp.getRequestHandler()
await nextApp.prepare()

function renderPageWithNext(req, res, next) {
  const isNextDataRequest = req.path.startsWith('/_next') && !req.path.startsWith('/_next/data')

  if (
    isNextDataRequest &&
    // In local development, the very first request for a _next/static file
    // triggers Nextjs to build it. So we need to let Nextjs handle that.
    // But once it's built, we can handle it ourselves.
    !req.path.startsWith('/_next/webpack-hmr') &&
    // If the file doesn't exist on disk, and fell through our express.static
    // for the `_next/static` prefix, it means the file does not exist.
    // And trying to handle it will trigger the run of
    // getServerSideProps() in `pages/index.tsx` which assumes there exists
    // a page always.
    !/_next\/static\/webpack\/[a-f0-9]+\.webpack\.hot-update\.json/.test(req.path)
  ) {
    return nextHandleRequest(req, res)
  }

  return next()
}

export default renderPageWithNext
