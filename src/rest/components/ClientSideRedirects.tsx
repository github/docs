import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const ClientSideRedirectExceptions = dynamic(
  () => import('src/rest/components/ClientSideRedirectExceptions'),
  {
    ssr: false,
  },
)

export function ClientSideRedirects() {
  const { asPath } = useRouter()
  // We have some one-off redirects for rest api docs
  // currently those are limited to the repos page, but
  // that will grow soon as we restructure the rest api docs.
  // This is a workaround to updating the hardcoded links
  // directly in the REST API code in a separate repo, which
  // requires many file changes and teams to sign off.
  // While the organization is turbulent, we can do this.
  // Once it's more settled, we can refactor the rest api code
  // to leverage the OpenAPI urls rather than hardcoded urls.
  // The code below determines if we should bother loading this redirecting
  // component at all.
  // The reason this isn't done at the server-level is because there you
  // can't possibly access the URL hash. That's only known in client-side
  // code.
  const [load, setLoad] = useState(false)
  useEffect(() => {
    const { hash } = window.location

    // Today, Jan 2022, it's known explicitly what the pathname.
    // In the future there might be more.
    // Hopefully, we can some day delete all of this and no longer
    // be dependent on the URL hash to do the redirect.
    if (hash && asPath.startsWith('/rest')) {
      setLoad(true)
    }
  }, [])

  if (load) return <ClientSideRedirectExceptions />
  return null
}
