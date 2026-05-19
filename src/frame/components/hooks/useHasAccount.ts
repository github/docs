import { useState, useEffect } from 'react'
import Cookies from '@/frame/components/lib/cookies'
import { COLOR_MODE_COOKIE_NAME, PREFERRED_COLOR_MODE_COOKIE_NAME } from '@/frame/lib/constants'

// Measure if the user has a github.com account and signed in during this session.
// The github.com sends the color_mode cookie every request when you sign in,
// but does not delete the color_mode cookie on sign out.
// You do not need to change your color mode settings to get this cookie,
// this applies to every user regardless of if they changed this setting.
// To test this, try a private browser tab.
// We are using the color_mode cookie because it is not HttpOnly.
// For users that haven't changed their session cookies recently,
// we also can check for the browser-set `preferred_color_mode` cookie.
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
