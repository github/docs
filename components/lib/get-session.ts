import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const MAX_CACHE = 5000 // milliseconds
const RETRY = 500 // milliseconds

type Session = {
  isSignedIn: boolean
  csrfToken: string
  language: string // en, es, ja, cn
  userLanguage: string // en, es, ja, cn
  theme: object // colorMode, nightTheme, dayTheme
  themeCSS: object // colorMode, nightTheme, dayTheme
}

let sessionCache: Session | null
let lastUpdate: number | null

function isCacheValid() {
  return lastUpdate && Date.now() - lastUpdate < MAX_CACHE
}

export function getSession() {
  return sessionCache
}

// This function must only be called in the browser
export async function fetchSession(): Promise<Session | null> {
  if (isCacheValid()) return sessionCache
  const response = await fetch('/api/session')
  if (response.ok) {
    sessionCache = await response.json()
    lastUpdate = Date.now()
    return sessionCache as Session
  }
  lastUpdate = null
  sessionCache = null
  await new Promise((resolve) => setTimeout(resolve, RETRY))
  return fetchSession()
}

// React hook version
export function useSession() {
  const [session, setSession] = useState<Session | null>(sessionCache)
  const { asPath } = useRouter()
  // Only call `fetchSession` on the client
  useEffect(() => {
    fetchSession().then((session) => setSession(session))
  }, [asPath])
  return session
}
