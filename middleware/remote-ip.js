import { cacheControlFactory } from './cache-control.js'

const noCacheControl = cacheControlFactory(0)

export default function remoteIp(req, res, next) {
  noCacheControl(res)
  res.json({
    ip: req.ip,
    'x-forwarded-for': req.headers['x-forwarded-for'] || null,
    'fastly-client-ip': req.headers['fastly-client-ip'] || null,
  })
}
