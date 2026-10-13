import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const UtmPreserver = () => {
  const router = useRouter()

  useEffect(() => {
    const getUtmParams = (): URLSearchParams => {
      const urlParams = new URLSearchParams(window.location.search)
      const utmParams = new URLSearchParams()

      for (const [key, value] of urlParams) {
        if (key.startsWith('utm_')) {
          utmParams.set(key, value)
        }
      }

      return utmParams
    }

    const utmParams = getUtmParams()
    if (utmParams.toString() === '') return

    const shouldPreserveUtm = (url: string): boolean => {
      const lowercaseUrl = url.toLowerCase()

      // Preserve UTMs for external github.com links, including blog.github.com, but skip docs.github.com.
      const hasProtocol = lowercaseUrl.startsWith('https://') || lowercaseUrl.startsWith('http://')
      const isGithubCom = lowercaseUrl.includes('github.com')
      const isDocsGithubCom = lowercaseUrl.includes('docs.github.com')

      return hasProtocol && isGithubCom && !isDocsGithubCom
    }

    const addUtmParamsToUrl = (url: string, params: URLSearchParams): string => {
      try {
        const urlObj = new URL(url)

        for (const [key, value] of params) {
          urlObj.searchParams.set(key, value)
        }

        return urlObj.toString()
      } catch {
        return url
      }
    }

    const applyUtmToLinks = (): void => {
      const links = document.querySelectorAll<HTMLAnchorElement>('a[href]')

      for (const link of links) {
        if (link.href && shouldPreserveUtm(link.href)) {
          link.href = addUtmParamsToUrl(link.href, utmParams)
        }
      }
    }

    const handleLinkClick = (event: Event): void => {
      const link = (event.target as Element)?.closest('a') as HTMLAnchorElement
      if (!link || !link.href) return

      if (shouldPreserveUtm(link.href)) {
        link.href = addUtmParamsToUrl(link.href, utmParams)
      }
    }

    applyUtmToLinks()

    // Delegated clicks cover links added after the first pass.
    document.addEventListener('click', handleLinkClick, true)

    // Route changes need another pass after Next updates the DOM.
    const handleRouteChange = () => {
      // Wait for route rendering before querying links.
      setTimeout(applyUtmToLinks, 100)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      document.removeEventListener('click', handleLinkClick, true)
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.asPath, router.events])

  return null
}
