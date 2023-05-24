export default function handleInvalidPaths(req, res, next) {
  // Prevent various malicious injection attacks targeting Next.js
  if (req.path.match(/^\/_next[^/]/) || req.path === '/_next/data' || req.path === '/_next/data/') {
    res.setHeader('content-type', 'text/plain')
    return res.status(404).send('Not found')
  }

  return next()
}
