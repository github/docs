import cookieSettings from '../lib/cookie-settings.js'
import csurf from 'csurf'

export default csurf({
  cookie: cookieSettings,
  ignoreMethods: ['GET', 'HEAD', 'OPTIONS'],
})
