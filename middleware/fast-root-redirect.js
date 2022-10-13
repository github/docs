import { cacheControlFactory } from './cache-control.js'
import { getLanguageCodeFromHeader } from './detect-language.js'
import { PREFERRED_LOCALE_COOKIE_NAME } from '../lib/constants.js'

const cacheControl = cacheControlFactory(0)
const noCacheSurrogateControl = cacheControlFactory(0, {
  key: 'surrogate-control',
  maxAgeZero: true,
})

export default function fastRootRedirect(req, res, next) {
  if (!req.headers.cookie || !req.headers.cookie.includes(PREFERRED_LOCALE_COOKIE_NAME)) {
    // No preferred language cookie header!
    const language = getLanguageCodeFromHeader(req) || 'en'
    cacheControl(res)
    // See #2287
    noCacheSurrogateControl(res)
    return res.redirect(`/${language}`)
  }
  next()
}
