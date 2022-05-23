import cookieParser from 'cookie-parser'
import cookieSettings from '../lib/cookie-settings.js'
export default cookieParser(process.env.COOKIE_SECRET, cookieSettings)
