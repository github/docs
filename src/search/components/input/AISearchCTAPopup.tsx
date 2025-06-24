import { useEffect, useRef } from 'react'
import { Text, Button, Heading, Popover, useOnEscapePress, Box } from '@primer/react'
import { focusTrap } from '@primer/behaviors'

import { useTranslation } from '@/languages/components/useTranslation'
import { useMaxWidthBreakpoint, useMinWidthBreakpoint } from '../hooks/useBreakpoint'
import { useCTAPopoverContext } from '@/frame/components/context/CTAContext'

let previouslyFocused: HTMLElement | null = null

export function AISearchCTAPopup({
  isOpen,
  dismiss,
  setIsSearchOpen,
  isDismissible = true,
}: {
  isOpen: boolean
  dismiss?: () => void
  setIsSearchOpen: (value: boolean) => void
  isDismissible?: boolean
}) {
  const { t } = useTranslation('search')
  const { permanentDismiss } = useCTAPopoverContext()
  const isLargeOrUp = useMinWidthBreakpoint('large')
  const isTooSmallForCTA = useMaxWidthBreakpoint('293px')
  let overlayRef = useRef<HTMLDivElement>(null)
  let dismissButtonRef = useRef<HTMLButtonElement>(null)

  const openSearch = () => {
    setIsSearchOpen(true)
    // They engaged with the CTA, so let's not show this popup for them anymore
    permanentDismiss()
  }

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
    if (dismiss) {
      dismiss()
    }
  }

  useOnEscapePress(onDismiss)

  if (isTooSmallForCTA) {
    return null
  }

  const innerContent = (
    <>
      <img
        src="/assets/images/search/copilot-action.png"
        width="100%"
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {isDismissible ? (
          <Button
            ref={dismissButtonRef}
            aria-label="Dismiss"
            sx={{
              marginTop: '16px',
              fontWeight: 'bold',
            }}
            onClick={onDismiss}
          >
            {t('search.cta.dismiss')}
          </Button>
        ) : null}
        <Button
          variant="primary"
          sx={
            isDismissible
              ? {
                  marginTop: '16px',
                  marginLeft: '8px',
                  fontWeight: 'bold',
                }
              : {
                  marginTop: '16px',
                  width: '100%',
                }
          }
          onClick={openSearch}
        >
          {t('search.cta.ask_copilot')}
        </Button>
      </Box>
    </>
  )

  // If not dismissible, it's not being used as a popover
  if (!isDismissible) {
    return (
      <Box
        sx={{
          position: 'relative',
          width: '270px',
          border: '1px solid var(--borderColor-default, var(--color-border-default, #d0d7de))',
          borderRadius: '6px',
          padding: '16px',
        }}
      >
        {innerContent}
      </Box>
    )
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
        {innerContent}
      </Popover.Content>
    </Popover>
  )
}
