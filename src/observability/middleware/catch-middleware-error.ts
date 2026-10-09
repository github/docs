import type { NextFunction, Request, Response, RequestHandler } from 'express'

// Generic over request/response types so callers with narrower types stay type-safe.
export interface MiddlewareFn<Req extends Request = Request, Res extends Response = Response> {
  (req: Req, res: Res, next: NextFunction): unknown
}

export default function catchMiddlewareError<
  Req extends Request = Request,
  Res extends Response = Response,
>(fn: MiddlewareFn<Req, Res>): RequestHandler {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req as Req, res as Res, next)
    } catch (error) {
      next(error)
    }
  }
}
