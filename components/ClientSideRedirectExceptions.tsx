import { useEffect } from 'react'
import { useRouter } from 'next/router'

// We recently moved several rest api operations around
// in the docs. That means that we are out of sync with
// the urls defined in the OpenAPI. We will eventually
// update those urls but for now we want to ensure that
// we have client-side redirects in place for any urls
// in the product that link to the rest docs (e.g., error
// code urls from the apis).
// The client-side redirects can consist of operation urls
// being redirected to the new operation url or headings
// on a page that need to be redirected to the new page (e.g.,
// /rest/reference/repos#statuses to
// /rest/reference/commits#commit-statuses)
export default function ClientSideRedirectExceptions() {
  const router = useRouter()
  useEffect(() => {
    // Because we have an async call to fetch, it's possible that this
    // component unmounts before we perform the redirect, however, React
    // will still try to perform the redirect even after the component
    // is unmounted. To prevent this, we can use the AbortController signal
    // to abort the Web request when the component unmounts.
    const controller = new AbortController()
    const signal = controller.signal

    const { hash, pathname } = window.location
    // path without a version or language
    const barePath = pathname
      .replace(`/${router.locale}`, '')
      .replace(`/${router.query.versionId || ''}`, '')

    async function getRedirect() {
      try {
        const sp = new URLSearchParams()
        sp.set('path', barePath)
        sp.set('hash', hash.replace(/^#/, ''))

        // call the anchor-redirect endpoint to get the redirect url
        const response = await fetch(`/api/anchor-redirect?${sp.toString()}`, {
          signal,
        })

        // the response status will always be 200 unless there
        // was a problem with the fetch request. When the
        // redirect doesn't exist the json response will be empty
        if (response.ok) {
          const { to } = await response.json()
          if (to) {
            // we want to redirect with the language and version in tact
            // so we'll replace the full url's path and hash
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
