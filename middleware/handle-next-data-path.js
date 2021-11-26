export default async function handleNextDataPath(req, res, next) {
  if (req.path.startsWith('/_next/data') && req.path.endsWith('.json')) {
    // translate a nextjs data request to a page path that the server can use on context
    // this is triggered via client-side route tranistions
    // example path:
    // /_next/data/development/en/free-pro-team%40latest/github/setting-up-and-managing-your-github-user-account.json
    const decodedPath = decodeURIComponent(req.path)
    const parts = decodedPath.split('/').slice(4)
    // free-pro-team@latest should not be included in the page path
    if (parts[1] === 'free-pro-team@latest') {
      parts.splice(1, 1)
    }
    req.pagePath = '/' + parts.join('/').replace(/.json+$/, '')
  } else {
    req.pagePath = req.path
  }

  return next()
}
