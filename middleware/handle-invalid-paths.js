import patterns from '../lib/patterns.js'

export default function handleInvalidPaths(req, res, next) {
  // prevent open redirect vulnerability
  if (req.path.match(patterns.multipleSlashes)) {
    return next(404)
  }

  // Prevent Express from blowing up with `URIError: Failed to decode param`
  // for paths like /%7B%
  try {
    decodeURIComponent(req.path)
  } catch (err) {
    if (process.env.NODE_ENV !== 'test') {
      console.error('unable to decode path', req.path, err)
    }

    return res.sendStatus(400)
  }

  // Prevent spammy request URLs from getting through by checking how they
  // handle being normalized twice in a row
  try {
    const origin = 'https://docs.github.com'
    const normalizedPath = new URL(req.path, origin).pathname

    // This may also throw an error with code `ERR_INVALID_URL`
    const reNormalizedPath = new URL(normalizedPath, origin).pathname

    if (reNormalizedPath !== normalizedPath) {
      throw new Error('URI keeps changing')
    }
  } catch (err) {
    if (process.env.NODE_ENV !== 'test') {
      console.error('unable to normalize path', req.path, err)
    }

    return res.sendStatus(400)
  }

  // Prevent some script tag injection attacks
  if (req.path.match(/<script/i)) {
    return res.sendStatus(400)
  }

  // Prevent some injection attacks targeting Fastly
  if (req.path.match(/<esi:include/i)) {
    return res.sendStatus(400)
  }

  // Prevent various malicious injection attacks targeting Next.js
  if (req.path.match(/^\/_next[^/]/)) {
    return next(404)
  }

  return next()
}
