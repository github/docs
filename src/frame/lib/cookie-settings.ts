import { type CookieSerializeOptions } from 'cookie'

export const cookieSettings: CookieSerializeOptions = {
  httpOnly: true, // can't access these cookies through browser JavaScript
  secure: !['test', 'development'].includes(process.env.NODE_ENV),
  // requires https protocol
  // http://localhost fails on chrome with secure
  sameSite: 'lax',
  // most browsers are "lax" these days,
  // but older browsers used to default to "none"
}
