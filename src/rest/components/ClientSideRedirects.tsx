import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const ClientSideRedirectExceptions = dynamic(
  () => import('@/rest/components/ClientSideRedirectExceptions'),
  {
    ssr: false,
  },
)

// REST API code hardcodes some docs links in a separate repo. Fixing those links
// needs many file changes and team sign-off, so redirect exceptions repair one-offs.
// Hashes are client-only, so wait to load redirect logic until the browser can inspect them.
export function ClientSideRedirects() {
  const { asPath } = useRouter()
  const [load, setLoad] = useState(false)
  useEffect(() => {
    const { hash } = window.location

    // Redirect exceptions apply only under /rest.
    if (hash && asPath.startsWith('/rest')) {
      setLoad(true)
    }
  }, [])

  if (load) return <ClientSideRedirectExceptions />
  return null
}
