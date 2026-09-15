import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const ClientSideRedirectExceptions = dynamic(
  () => import('@/rest/components/ClientSideRedirectExceptions'),
  {
    ssr: false,
  },
)

export function ClientSideRedirects() {
  const { asPath } = useRouter()
  // One-off redirects for the REST docs, as a workaround for fixing the
  // hardcoded links in the REST API code, which lives in a separate repo and
  // needs many file changes and sign-off from several teams.
  //
  // This decides whether to load the redirecting component at all. It can't
  // happen server-side because the URL hash is only known on the client.
  const [load, setLoad] = useState(false)
  useEffect(() => {
    const { hash } = window.location

    // Only /rest has these redirects today. More paths may need adding.
    if (hash && asPath.startsWith('/rest')) {
      setLoad(true)
    }
  }, [])

  if (load) return <ClientSideRedirectExceptions />
  return null
}
