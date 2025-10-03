import { useEffect } from 'react'
import { useRouter } from 'next/router'

type UtmPreserverProps = {
  // CSS selector for links that should preserve UTM parameters
  linkSelector?: string
  // Specific page paths where this component should be active
  activePaths?: string[]
}

export const UtmPreserver = ({
  linkSelector = 'a[href*="github.com/copilot"], a[href*="github.com/github-copilot"]',
  activePaths = ['/copilot/get-started/plans'],
}: UtmPreserverProps) => {
  const router = useRouter()

  useEffect(() => {
    // Check if current page should have UTM preservation
    const shouldPreserveUtm = activePaths.some((path) => router.asPath.includes(path))
    if (!shouldPreserveUtm) return

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

    // Add UTM parameters to a URL
    const addUtmParamsToUrl = (url: string, utmParams: URLSearchParams): string => {
      try {
        const urlObj = new URL(url)

        for (const [key, value] of utmParams) {
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
      const utmParams = getUtmParams()

      if (utmParams.toString() === '') return

      const links = document.querySelectorAll<HTMLAnchorElement>(linkSelector)

      links.forEach((link) => {
        if (link.href && (link.href.startsWith('http://') || link.href.startsWith('https://'))) {
          link.href = addUtmParamsToUrl(link.href, utmParams)
        }
      })
    }

    // Handle click events for dynamic link modification
    const handleLinkClick = (event: Event): void => {
      const link = (event.target as Element)?.closest('a') as HTMLAnchorElement
      if (!link) return

      // Check if this link matches our selector
      if (!link.matches(linkSelector)) return

      const utmParams = getUtmParams()
      if (utmParams.toString() === '') return

      if (link.href && (link.href.startsWith('http://') || link.href.startsWith('https://'))) {
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
  }, [router.asPath, router.events, linkSelector, activePaths])

  // This component doesn't render anything
  return null
}
