import cookieParser from 'cookie-parser'
import { type CookieParseOptions } from 'cookie-parser'

import { cookieSettings } from '@/frame/lib/cookie-settings'

export default cookieParser(
  process.env.COOKIE_SECRET,
  // `cookie-settings.ts` declares these as `CookieSerializeOptions` because
  // that is the right type for the places that set cookies. cookie-parser
  // wants `CookieParseOptions`, so bridge the two here.
  cookieSettings as CookieParseOptions,
)
