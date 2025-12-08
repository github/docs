import type { NextFunction } from 'express'

// Use type assertion to maintain compatibility with existing middleware patterns
// This matches the original JavaScript behavior while providing some type safety
// The assertion is necessary because Express middleware can have various request/response types
export default function catchMiddlewareError(fn: any) {
  return async (req: any, res: any, next: NextFunction) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}
