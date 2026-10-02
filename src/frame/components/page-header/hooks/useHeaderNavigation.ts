import { useCallback, useEffect, useMemo, useRef } from 'react'
import type { MouseEvent, RefObject } from 'react'
import { useRouter } from 'next/router'
import { SubdomainNavBar } from '@primer/react-brand'
import type { SubdomainNavBarHandle } from '@primer/react-brand'

import { useSearchOverlayContext } from '@/search/components/context/SearchOverlayContext'

type Props = {
  homeURL: string
  searchTriggerClassName: string
  skipToContentTargetId: string
  isNarrowMenuOpen: boolean
  onNarrowMenuToggle: (isOpen: boolean) => void
}

// useHeaderNavigation resolves searchButtonRef on every read because Brand owns the
// search trigger subtree. If Brand recreates the trigger during the narrow menu's
// --search-open animation, a mount-time node cache would make Escape restore focus
// to a detached element.
//
// It also neutralizes Brand's skip link while the narrow menu is open. Brand renders
// the link as a sibling before header, outside DefaultLayout's inert wrapper. Left
// alone, it stays focusable and points at inert #main-content, so activation moves
// focus nowhere. Mirror DefaultLayout's Docs skip-link handling.
export function useHeaderNavigation({
  homeURL,
  searchTriggerClassName,
  skipToContentTargetId,
  isNarrowMenuOpen,
  onNarrowMenuToggle,
}: Props) {
  const router = useRouter()
  const { isSearchOpen, setIsSearchOpen } = useSearchOverlayContext()
  const headerRef = useRef<SubdomainNavBarHandle | null>(null)

  const setHeaderRef = useCallback((header: SubdomainNavBarHandle | null) => {
    headerRef.current = header
  }, [])

  const searchButtonRef = useMemo<RefObject<HTMLButtonElement | null>>(
    () => ({
      get current() {
        return (
          headerRef.current?.querySelector<HTMLButtonElement>(
            `.${searchTriggerClassName} button`,
          ) ?? null
        )
      },
    }),
    [searchTriggerClassName],
  )

  const closeNarrowMenu = useCallback(() => {
    // Brand exposes no close-menu API; find its button by exported test ID and click it.
    const menuButton = headerRef.current?.querySelector<HTMLButtonElement>(
      `[data-testid="${SubdomainNavBar.testIds.menuButton}"]`,
    )
    if (menuButton?.getAttribute('aria-expanded') === 'true') menuButton.click()
  }, [])

  useEffect(() => {
    const skipLink = document
      .querySelector('[data-container="header"]')
      ?.querySelector<HTMLAnchorElement>(`a[href="#${skipToContentTargetId}"]`)
    if (!skipLink) return
    if (isNarrowMenuOpen) {
      skipLink.setAttribute('inert', '')
      skipLink.setAttribute('aria-hidden', 'true')
    } else {
      skipLink.removeAttribute('inert')
      skipLink.removeAttribute('aria-hidden')
    }
  }, [isNarrowMenuOpen, skipToContentTargetId])

  useEffect(() => {
    if (isSearchOpen && isNarrowMenuOpen) closeNarrowMenu()
  }, [isSearchOpen, isNarrowMenuOpen, closeNarrowMenu])

  useEffect(() => {
    router.events.on('routeChangeStart', closeNarrowMenu)
    return () => router.events.off('routeChangeStart', closeNarrowMenu)
  }, [router.events, closeNarrowMenu])

  useEffect(() => () => onNarrowMenuToggle(false), [onNarrowMenuToggle])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.isComposing) return
      if (event.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false)
        return
      }
      if (event.key !== '/' || event.ctrlKey || event.metaKey || event.altKey) return
      const target = event.target as HTMLElement | null
      if (
        target?.tagName === 'INPUT' ||
        target?.tagName === 'TEXTAREA' ||
        target?.tagName === 'SELECT' ||
        target?.isContentEditable
      ) {
        return
      }
      event.preventDefault()
      setIsSearchOpen(true)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isSearchOpen, setIsSearchOpen])

  const handleClickCapture = (event: MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof Element)) return
    const trigger = event.target.closest<HTMLButtonElement>(`.${searchTriggerClassName} button`)
    if (!trigger || !event.currentTarget.contains(trigger)) return

    // Open the Docs Copilot dialog from our trigger and keep Brand's native dialog closed.
    event.preventDefault()
    event.stopPropagation()
    setIsSearchOpen(true)
  }

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      !(event.target instanceof Element)
    ) {
      return
    }
    const link = event.target.closest<HTMLAnchorElement>('a[href]')
    if (
      !link ||
      link.getAttribute('href') !== homeURL ||
      (link.target && link.target !== '_self') ||
      link.hasAttribute('download')
    ) {
      return
    }
    event.preventDefault()
    closeNarrowMenu()
    void router.push(homeURL, undefined, { locale: false })
  }

  return {
    setHeaderRef,
    searchButtonRef,
    closeNarrowMenu,
    handleClickCapture,
    handleClick,
    isSearchOpen: isSearchOpen && !isNarrowMenuOpen,
    setIsSearchOpen,
  }
}
