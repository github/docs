import Cookies from 'js-cookie'

// js-cookie reads document, so server rendering gets a no-op mock.
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
