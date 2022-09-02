import { cacheControlFactory } from './cache-control.js'

const BUILD_SHA = process.env.BUILD_SHA
const noCacheControl = cacheControlFactory(0)

export default function buildInfo(req, res, next) {
  res.type('text/plain')
  noCacheControl(res)
  if (!BUILD_SHA) {
    return res.status(404).send('Not known')
  }
  return res.send(`${BUILD_SHA}`)
}
