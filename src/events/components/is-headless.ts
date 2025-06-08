// Basic checks for if the browser is actually a headless browser robot

declare global {
  interface Window {
    GHDOCSPLAYWRIGHT: any
  }
}

export function isHeadless(): boolean {
  if (window.GHDOCSPLAYWRIGHT) return false
  if (navigator.webdriver) return true
  if (/headless/i.test(navigator.userAgent)) return true
  if (/headless/i.test(navigator.appVersion)) return true
  if (!window.outerHeight || !window.innerHeight) return true
  if (navigator.languages?.length === 0) return true
  if (navigator.mimeTypes?.length === 0) return true
  return false
}
