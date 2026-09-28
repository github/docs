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

  // Resolved on every read rather than captured when the header mounts. This is
  // the search overlay's `returnFocusRef`, and Brand owns that subtree: if a
  // future version re-creates the trigger (opening the narrow menu, its
  // `--search-open` animation), a node cached at mount would leave Escape
  // restoring focus to a detached element, and the failure would be silent.
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
    // Brand 0.75 has no close-menu API. Use its exported control hook rather
    // than a private CSS selector, synthetic Escape, or remounting the navbar.
    const menuButton = headerRef.current?.querySelector<HTMLButtonElement>(
      `[data-testid="${SubdomainNavBar.testIds.menuButton}"]`,
    )
    if (menuButton?.getAttribute('aria-expanded') === 'true') menuButton.click()
  }, [])

  // Brand renders its own skip link as a sibling *before* `<header>`, which puts
  // it outside the inert wrapper DefaultLayout draws around the rest of the page.
  // Left alone it stays focusable while the narrow menu is open and still points
  // at #main-content — which is inert — so activating it would move focus
  // nowhere. Mirror exactly what DefaultLayout does to the Docs skip link.
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

    // The compound Search overrides onSearchOpen and cannot host our Copilot
    // dialog. Intercept only our trigger, keeping Brand's native dialog closed.
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
