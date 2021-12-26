import xCookieParser from 'cookie-parser'
import xCookieSettings from '../lib/cookie-settings.js'
export default xCookieParser(process.env.COOKIE_SECRET, xCookieSettings)
