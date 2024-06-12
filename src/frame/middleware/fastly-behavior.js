// This middleware allows the client to cause the server-side processing to fail with a specific error.
// It is used for testing error handling with Fastly. It should only be enabled in non-production environments!
//
// NOTE: This middleware is intended to be removed once testing is complete!
//
export default function fastlyBehavior(req, res, next) {
  if ((req.method === 'GET' || req.method === 'HEAD') && req.get('X-CacheTest-Error')) {
    const error = parseInt(req.get('X-CacheTest-Error'))
    res.status(error).send(`SIMULATED ERROR ${error}`)
    return
  }

  next()
}
