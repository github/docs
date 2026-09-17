import { useEffect } from 'react'
import { useRouter } from 'next/router'

// REST operations have moved around in the docs, so the URLs in the OpenAPI are
// out of sync with where the pages now live. Until those are updated, this
// catches links from elsewhere in the product, such as error-code URLs from the
// APIs. A redirect can be one operation URL to another, or a heading on one page
// to a different page, e.g. /rest/repos#statuses to /rest/commits/statuses.
export default function ClientSideRedirectExceptions() {
  const router = useRouter()
  useEffect(() => {
    // The fetch can resolve after the component unmounts and still call
    // router.replace, so abort it during cleanup.
    const controller = new AbortController()
    const signal = controller.signal

    const { hash, pathname } = window.location
    const barePath = pathname
      .replace(`/${router.locale}`, '')
      .replace(`/${router.query.versionId || ''}`, '')

    async function getRedirect() {
      try {
        const sp = new URLSearchParams()
        sp.set('path', barePath)
        sp.set('hash', hash.replace(/^#/, ''))

        const response = await fetch(`/api/anchor-redirect?${sp.toString()}`, {
          signal,
        })

        // A missing redirect is a 200 with an empty object, so only a
        // successful response is worth parsing.
        if (response.ok) {
          const { to } = await response.json()
          if (to) {
            // Keep the language and version, so swap only the path and hash.
            const fromUrl = pathname + hash
            const bareUrl = barePath + hash
            const toUrl = fromUrl.replace(bareUrl, to)
            router.replace(toUrl)
          }
        }
      } catch (error) {
        console.warn('Unable to fetch client-side redirect:', error)
      }
    }
    getRedirect()

    return () => controller.abort()
  }, [])

  return null
}
