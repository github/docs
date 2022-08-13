import { useEffect } from 'react'
import useSWR from 'swr'

export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init)
  return res.json()
}

export type Session = {
  csrfToken?: string
}

// React hook version
export function useSession() {
  const { data: session, error } = useSWR<Session>('/api/session', fetcher)

  useEffect(() => {
    if (error) {
      console.warn('An error occurred loading the user session', error)
    }
  }, [error])

  return { session }
}
