import Cookies from 'js-cookie'

// js-cookie reads document, so server rendering gets a no-op mock.
export default typeof document === 'undefined'
  ? {
      get: () => undefined,
      set: () => undefined,
    }
  : Cookies.withAttributes({
      expires: 365,
      // Server and CDN version and language redirects need these cookies on links from other sites, such as search results.
      sameSite: 'lax',
      secure: document.location.protocol !== 'http:',
    })
