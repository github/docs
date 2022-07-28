import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const MAX_CACHE = 5000 // milliseconds
const RETRY = 500 // milliseconds

type LanguageItem = {
  name: string
  nativeName?: string
  code: string
  hreflang: string
  wip?: boolean
}

type Session = {
  isSignedIn: boolean
  csrfToken: string
  userLanguage: string // en, es, ja, cn
  languages: Record<string, LanguageItem> // en... name nativeName code hreflang redirectPatterns dir wip
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
  lastUpdate = Date.now()
  const response = await fetch('/api/session')
  if (response.ok) {
    sessionCache = await response.json()
    return sessionCache as Session
  }
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
