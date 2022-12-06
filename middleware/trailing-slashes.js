import { defaultCacheControl } from './cache-control.js'

export default function trailingSlashes(req, res, next) {
  if (req.method === 'GET' || req.method === 'HEAD' || req.method === 'OPTIONS') {
    const split = req.url.split('?')
    let pathname = split.shift()
    if (pathname !== '/' && pathname.endsWith('/')) {
      while (pathname.endsWith('/')) {
        pathname = pathname.slice(0, pathname.length - 1)
      }
      let url = pathname
      if (split.length) {
        url += `?${split.join('?')}`
      }
      defaultCacheControl(res)
      return res.redirect(301, url)
    }
  }

  next()
}
