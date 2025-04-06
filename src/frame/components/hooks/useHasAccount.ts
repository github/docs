import { useState, useEffect } from 'react'
import Cookies from 'src/frame/components/lib/cookies'

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
  const cookieValue = Cookies.get('color_mode')
  const altCookieValue = Cookies.get('preferred_color_mode')
  return Boolean(cookieValue || altCookieValue)
}
