import { URL } from 'url'
import patterns from '../../lib/patterns.js'

// redirect help.github.com requests to docs.github.com

export default function helpToDocs(req, res, next) {
  if (req.hostname === 'help.github.com') {
    // prevent open redirect security vulnerability
    const path = req.originalUrl.replace(patterns.multipleSlashes, '/')

    const url = new URL(path, 'https://docs.github.com')
    const newURL = url.toString()

    return res.redirect(301, newURL)
  } else {
    return next()
  }
}
