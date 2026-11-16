import { type CookieSerializeOptions } from 'cookie'

export const cookieSettings: CookieSerializeOptions = {
  httpOnly: true, // Browser JavaScript cannot access HTTP-only cookies.
  secure: !['test', 'development'].includes(process.env.NODE_ENV),
  // Chrome rejects secure cookies on http://localhost.
  sameSite: 'lax',
  // Explicit lax behavior protects older browsers with weaker defaults.
}
