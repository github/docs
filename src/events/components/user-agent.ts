// A tiny user agent checking RegExp for analytics purposes

// The order matters with these
const OS_REGEXPS = [
  /(iphone os|ipad os) ([^);]+)/i,
  /(mac) os x ([^);]+)/i,
  /(windows) ([^);]+)/i,
  /(android) ([^);]+)/i,
  /(cros) ([^);]+)/i,
  /(linux) ([^);]+)/i,
]

// The order matters with these
const BROWSER_REGEXPS = [
  /(opr)\/([^\s)]+)/i, // Opera
  /(edg[e]?)\/([^\s)]+)/i, // Microsoft Edge newer ua is "edg", older is "edge"
  /(firefox)\/([^\s)]+)/i,
  /(chrome)\/([^\s)]+)/i,
  /(safari)\/([^\s)]+)/i,
]

export function parseUserAgent(ua = navigator.userAgent) {
  ua = ua.toLowerCase()
  const osRe = OS_REGEXPS.find((re) => re.test(ua))
  let [, os = 'other', os_version = '0'] = (osRe && ua.match(osRe)) || []
  if (os === 'iphone os' || os === 'ipad os') os = 'ios'
  const browserRe = BROWSER_REGEXPS.find((re) => re.test(ua))
  let [, browser = 'other', browser_version = '0'] = (browserRe && ua.match(browserRe)) || []
  if (browser === 'opr') browser = 'opera'
  if (browser === 'edg') browser = 'edge'
  return { os, os_version, browser, browser_version }
}
