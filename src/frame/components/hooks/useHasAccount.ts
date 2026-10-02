import { useState, useEffect } from 'react'
import Cookies from '@/frame/components/lib/cookies'
import { COLOR_MODE_COOKIE_NAME, PREFERRED_COLOR_MODE_COOKIE_NAME } from '@/frame/lib/constants'

// github.com sends color_mode on every signed-in request and leaves it on sign-out.
// Every account gets that client-readable cookie, regardless of color-mode settings.
// preferred_color_mode covers sessions that still use the browser-set cookie.
export function useHasAccount() {
  const [hasAccount, setHasAccount] = useState<boolean | null>(null)

  useEffect(() => {
    setHasAccount(isLoggedIn())
  }, [])

  return { hasAccount }
}

export function isLoggedIn() {
  const cookieValue = Cookies.get(COLOR_MODE_COOKIE_NAME)
  const altCookieValue = Cookies.get(PREFERRED_COLOR_MODE_COOKIE_NAME)
  return Boolean(cookieValue || altCookieValue)
}
