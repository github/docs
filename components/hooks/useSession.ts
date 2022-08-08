import type { ThemeProviderProps } from '@primer/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useSWR from 'swr'

import { getTheme } from '../../lib/get-theme'

export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init)
  return res.json()
}

export type Session = {
  isSignedIn: boolean
  csrfToken?: string
  userLanguage: string // en, es, ja, cn
  theme: {
    colorMode: Pick<ThemeProviderProps, 'colorMode'>
    nightTheme: string
    dayTheme: string
  }
  themeCss: {
    colorMode: Pick<ThemeProviderProps, 'colorMode'>
    nightTheme: string
    dayTheme: string
  }
}

const defaultSession: Session = {
  isSignedIn: false,
  userLanguage: 'en', // en, es, ja, cn
  theme: getTheme({}), // as if no cookie was present
  themeCss: getTheme({}, true), // as if no cookie was present
}
// React hook version
export function useSession() {
  const { locale } = useRouter()

  const { data: session, error } = useSWR<Session>('/api/session', fetcher, {
    // Use the current language, as per the URL, until we know what the
    // user actually prefers.
    fallbackData: Object.assign({}, defaultSession, { userLanguage: locale }),
  })

  useEffect(() => {
    if (error) {
      console.warn('An error occurred loading the user session', error)
    }
  }, [error])

  return { session }
}
