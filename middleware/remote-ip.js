import { cacheControlFactory } from './cache-control.js'

const noCacheControl = cacheControlFactory(0)

export default async function remoteIp(req, res, next) {
  noCacheControl(res)
  res.send(
    `ip=${req.ip}\t` +
      `x-forwarded-for=${req.headers['x-forwarded-for']}\t` +
      `fastly-client-ip=${req.headers['fastly-client-ip']}`
  )
}
