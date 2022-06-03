import { cacheControlFactory } from './cache-control.js'
import { PREFERRED_LOCALE_COOKIE_NAME, getLanguageCodeFromHeader } from './detect-language.js'

const cacheControl = cacheControlFactory(0)

export default function fastRootRedirect(req, res, next) {
  if (!req.headers.cookie || !req.headers.cookie.includes(PREFERRED_LOCALE_COOKIE_NAME)) {
    // No preferred language cookie header!
    const language = getLanguageCodeFromHeader(req) || 'en'
    cacheControl(res)
    res.set('location', `/${language}`)
    return res.status(302).send('')
  }
  next()
}
