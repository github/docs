import cookieSettings from '../lib/cookie-settings.js'
import xCsurf from 'csurf'

export default xCsurf({
  cookie: cookieSettings,
  ignoreMethods: ['GET', 'HEAD', 'OPTIONS'],
})
