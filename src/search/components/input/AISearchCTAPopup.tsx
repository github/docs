import { useEffect, useRef } from 'react'
import { Text, Button, Heading, Popover, useOnEscapePress } from '@primer/react'
import { focusTrap } from '@primer/behaviors'

import { useTranslation } from '@/languages/components/useTranslation'
import { useMaxWidthBreakpoint, useMinWidthBreakpoint } from '../hooks/useBreakpoint'

let previouslyFocused: HTMLElement | null = null

export function AISearchCTAPopup({ isOpen, dismiss }: { isOpen: boolean; dismiss: () => void }) {
  const { t } = useTranslation('search')
  const isLargeOrUp = useMinWidthBreakpoint('large')
  const isTooSmallForCTA = useMaxWidthBreakpoint('293px')
  let overlayRef = useRef<HTMLDivElement>(null)
  let dismissButtonRef = useRef<HTMLButtonElement>(null)

  // For a11y, focus trap the CTA and allow it to be closed with Escape
  useEffect(() => {
    if (isTooSmallForCTA) {
      return
    }
    if (isOpen && overlayRef.current && dismissButtonRef.current) {
      focusTrap(overlayRef.current, dismissButtonRef.current)
      previouslyFocused = document.activeElement as HTMLElement | null
    }
  }, [isOpen, isTooSmallForCTA])

  const onDismiss = () => {
    if (isTooSmallForCTA) {
      return
    }
    if (previouslyFocused) {
      previouslyFocused.focus()
    }
    dismiss()
  }

  useOnEscapePress(onDismiss)

  if (isTooSmallForCTA) {
    return null
  }

  return (
    <Popover
      ref={overlayRef}
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="ai-search-cta-heading"
      aria-describedby="ai-search-cta-description"
      open={isOpen}
      caret={isLargeOrUp ? 'top' : 'top-right'}
      sx={{
        top: '55px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        width: '270px',
        // When in mobile (< large) the search bar collapses to a button on the RHS of the screen
        // To align the popover with the button we need to move it to the left
        marginLeft: isLargeOrUp ? 0 : -235,
      }}
    >
      <Popover.Content
        sx={{
          width: '270px',
        }}
      >
        <img
          src="/assets/images/search/copilot-action.png"
          width={220}
          alt="The Copilot Icon in front of an explosion of color."
        />
        <Heading
          as="h2"
          id="ai-search-cta-heading"
          sx={{
            fontSize: '16px',
            fontWeight: 'bold',
            marginTop: '12px',
          }}
        >
          {t('search.cta.heading')}
        </Heading>
        <Text
          id="ai-search-cta-description"
          sx={{
            display: 'block',
            fontSize: '15px',
            marginTop: '12px',
          }}
        >
          {t('search.cta.description')}
        </Text>
        <Button
          ref={dismissButtonRef}
          aria-label="Dismiss"
          sx={{
            marginTop: '16px',
            fontWeight: 'bold',
          }}
          onClick={onDismiss}
        >
          Dismiss
        </Button>
      </Popover.Content>
    </Popover>
  )
}
