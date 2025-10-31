import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const UtmPreserver = () => {
  const router = useRouter()

  useEffect(() => {
    // Extract UTM parameters from current URL
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

    // Check if a link should have UTM parameters preserved
    const shouldPreserveUtm = (url: string): boolean => {
      const lowercaseUrl = url.toLowerCase()

      // Preserve UTM for any external github.com links (including subdomains like blog.github.com)
      // but NOT for docs.github.com (which are internal links anyway)
      const hasProtocol = lowercaseUrl.startsWith('https://') || lowercaseUrl.startsWith('http://')
      const isGithubCom = lowercaseUrl.includes('github.com')
      const isDocsGithubCom = lowercaseUrl.includes('docs.github.com')

      return hasProtocol && isGithubCom && !isDocsGithubCom
    }

    // Add UTM parameters to a URL
    const addUtmParamsToUrl = (url: string, params: URLSearchParams): string => {
      try {
        const urlObj = new URL(url)

        for (const [key, value] of params) {
          urlObj.searchParams.set(key, value)
        }

        return urlObj.toString()
      } catch {
        // If URL parsing fails, return original URL
        return url
      }
    }

    // Apply UTM parameters to relevant links
    const applyUtmToLinks = (): void => {
      const links = document.querySelectorAll<HTMLAnchorElement>('a[href]')

      links.forEach((link) => {
        if (link.href && shouldPreserveUtm(link.href)) {
          link.href = addUtmParamsToUrl(link.href, utmParams)
        }
      })
    }

    // Handle click events for dynamic link modification
    const handleLinkClick = (event: Event): void => {
      const link = (event.target as Element)?.closest('a') as HTMLAnchorElement
      if (!link || !link.href) return

      if (shouldPreserveUtm(link.href)) {
        link.href = addUtmParamsToUrl(link.href, utmParams)
      }
    }

    // Apply UTM parameters immediately to existing links
    applyUtmToLinks()

    // Also handle clicks for any dynamically added links
    document.addEventListener('click', handleLinkClick, true)

    // Re-apply when the route changes (for single-page navigation)
    const handleRouteChange = () => {
      // Small delay to ensure DOM has updated
      setTimeout(applyUtmToLinks, 100)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    // Cleanup
    return () => {
      document.removeEventListener('click', handleLinkClick, true)
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.asPath, router.events])

  // This component doesn't render anything
  return null
}
