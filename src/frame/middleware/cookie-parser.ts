import cookieParser from 'cookie-parser'
import { type CookieParseOptions } from 'cookie-parser'

import { cookieSettings } from '@/frame/lib/cookie-settings'

export default cookieParser(
  process.env.COOKIE_SECRET,
  // This is because of a but in @types/cookie-parser
  // The options are actually passed straight into `cookie.parse`
  // from the cookie page. When creating a cookie setting object in
  // our `cookie-settings.ts` we want to use the right type,
  // which is `CookieSerializeOptions` (from the `cookie` package)
  // but we have circumnavigate the option here.
  cookieSettings as CookieParseOptions,
)
