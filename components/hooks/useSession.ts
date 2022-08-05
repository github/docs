import type { ThemeProviderProps } from '@primer/react'
import useSWR from 'swr'

export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init)
  return res.json()
}

type LanguageItem = {
  name: string
  nativeName?: string
  code: string
  hreflang: string
  wip?: boolean
}

export type Session = {
  isSignedIn: boolean
  csrfToken: string
  userLanguage: string // en, es, ja, cn
  languages: Record<string, LanguageItem>
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

// React hook version
export function useSession() {
  const { data: session, error } = useSWR<Session>('/api/session', fetcher)
  return { session, isLoadingSession: !error && !session }
}
