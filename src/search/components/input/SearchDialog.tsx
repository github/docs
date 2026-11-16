import React, { useEffect, useRef, useState, type RefObject } from 'react'
import { createPortal } from 'react-dom'
import { focusTrap } from '@primer/behaviors'
import { useTheme as useBrandTheme } from '@primer/react-brand'

import styles from './SearchOverlay.module.scss'

type Props = {
  ariaLabel: string
  returnFocusRef: RefObject<HTMLElement | null>
  initialFocusRef?: RefObject<HTMLElement | null>
  onClose: () => void
  children: React.ReactNode
}

// @primer/react-brand has no Dialog, Overlay, or Portal, so this hand-builds the portal,
// focus trap, Escape, click-outside, and return focus.
// Portals to `document.body`: dialog-overrides.scss forces `z-index: 3` inside
// `#__primerPortalRoot__` so the version picker clears the header, which would clamp this too.
export function SearchDialog({
  ariaLabel,
  returnFocusRef,
  initialFocusRef,
  onClose,
  children,
}: Props) {
  const dialogRef = useRef<HTMLDivElement>(null)

  // The portal sits outside the provider's element, so stamp the resolved mode on the scrim.
  const { colorMode } = useBrandTheme()
  // The type allows "auto", but the provider has already resolved it.
  const brandColorMode = colorMode === 'dark' ? 'dark' : 'light'

  // Open state comes from the URL, so this renders during SSR with no document to portal into.
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Abort the focusTrap controller on cleanup, or the trap outlives the dialog and steals focus.
  useEffect(() => {
    if (!isMounted || !dialogRef.current) {
      return
    }
    const controller = focusTrap(dialogRef.current, initialFocusRef?.current || undefined)
    return () => controller?.abort()
  }, [isMounted, initialFocusRef])

  // Lock body scroll behind the scrim; pad for the scrollbar's width so content doesn't shift.
  useEffect(() => {
    if (!isMounted) {
      return
    }
    const { body, documentElement } = document
    const previousOverflow = body.style.overflow
    const previousPaddingRight = body.style.paddingRight
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth

    body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      const currentPaddingRight = parseFloat(window.getComputedStyle(body).paddingRight) || 0
      body.style.paddingRight = `${currentPaddingRight + scrollbarWidth}px`
    }

    return () => {
      body.style.overflow = previousOverflow
      body.style.paddingRight = previousPaddingRight
    }
  }, [isMounted])

  // Listen on document to keep the scrim handler-free. Use mousedown so drags onto it don't close.
  useEffect(() => {
    if (!isMounted) {
      return
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      // An Escape that cancels an input method composition must not close the dialog.
      if (event.isComposing || event.keyCode === 229) {
        return
      }
      // The input closes on Escape and prevents default, so this catches Escape elsewhere.
      if (event.key === 'Escape' && !event.defaultPrevented) {
        onClose()
      }
    }
    const handleMouseDown = (event: MouseEvent) => {
      const target = event.target
      if (target instanceof Node && !dialogRef.current?.contains(target)) {
        // Prevent default, or focus moves to <body> after the dialog returns it to the opener.
        event.preventDefault()
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleMouseDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [isMounted, onClose])

  // Skip if the opener left the DOM, for example after navigating to a picked result.
  useEffect(() => {
    return () => {
      // Read at teardown: Header swaps `parentRef` between desktop and mobile buttons on resize.
      const returnFocusTo = returnFocusRef.current
      if (returnFocusTo && document.contains(returnFocusTo)) {
        returnFocusTo.focus({ preventScroll: true })
      }
    }
  }, [returnFocusRef])

  if (!isMounted) {
    return null
  }

  return createPortal(
    <div className={styles.scrim} data-color-mode={brandColorMode}>
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
      >
        {children}
      </div>
    </div>,
    document.body,
  )
}
