import Cookies from 'js-cookie'

// This library only works client side,
// so on the server side we return a mock.
export default typeof document === 'undefined'
  ? {
      get: () => undefined,
      set: () => undefined,
    }
  : Cookies.withAttributes({
      expires: 365,
      sameSite: 'strict',
      secure: document.location.protocol !== 'http:',
    })
