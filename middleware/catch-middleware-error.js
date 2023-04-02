export default function catchMiddlewareError(fn) {
  return (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)
}
