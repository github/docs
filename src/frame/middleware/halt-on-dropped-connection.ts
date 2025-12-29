import type { NextFunction, Request, Response } from 'express'

// The `express-timeout-handler` middleware sets a property on
// the response object if it triggered a timeout.
// So we have to "pretend" that the request of this this type because
// it can be because of how that middleware works.
type ResponseWithGlobalTimeout = Response & { globalTimeout?: boolean }

export function isConnectionDropped(req: Request, res: ResponseWithGlobalTimeout) {
  // Have the flags been set for:
  //  - a global request timeout (via the express-timeout-handler middleware)?
  //  - an aborted request connection (via Node.js core's HTTP IncomingMessage)?
  return Boolean(res.globalTimeout || req.aborted)
}

export function haltOnDroppedConnection(req: Request, res: Response, next: NextFunction) {
  // Only proceed if the flag has not been set for the express-timeout-handler middleware
  if (!isConnectionDropped(req, res)) {
    return next()
  }
}
