import cookieParser from 'cookie-parser'
import { type CookieParseOptions } from 'cookie-parser'

import { cookieSettings } from '@/frame/lib/cookie-settings'

export default cookieParser(
  process.env.COOKIE_SECRET,
  // cookie-settings.ts exports CookieSerializeOptions for cookie writers.
  // cookie-parser expects CookieParseOptions, so bridge the two here.
  cookieSettings as CookieParseOptions,
)
