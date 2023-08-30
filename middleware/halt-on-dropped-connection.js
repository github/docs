export function isConnectionDropped(req, res) {
  // Have the flags been set for:
  //  - a global request timeout (via the express-timeout-handler middleware)?
  //  - an aborted request connection (via Node.js core's HTTP IncomingMessage)?
  return Boolean(res.globalTimeout || req.aborted)
}

export function haltOnDroppedConnection(req, res, next) {
  // Only proceed if the flag has not been set for the express-timeout-handler middleware
  if (!isConnectionDropped(req, res)) {
    return next()
  }
}

// Export this logic, too
haltOnDroppedConnection.isConnectionDropped = isConnectionDropped

export default haltOnDroppedConnection
