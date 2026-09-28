import { useEffect } from 'react'
import { useRouter } from 'next/router'

// OpenAPI URLs can lag REST doc page moves, so this catches product links such as
// API error-code URLs. Redirects can target another operation URL or move a heading,
// for example /rest/repos#statuses to /rest/commits/statuses.
export default function ClientSideRedirectExceptions() {
  const router = useRouter()
  useEffect(() => {
    // Abort during cleanup because fetch can resolve after unmount and still call router.replace.
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

        // Missing redirects return 200 with an empty object; parse only successful responses.
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
