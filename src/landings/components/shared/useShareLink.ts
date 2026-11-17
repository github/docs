import { useEffect, useRef, useState } from 'react'
import { announce } from '@primer/live-region-element'
import { useTranslation } from '@/languages/components/useTranslation'
import { sendEvent } from '@/events/components/events'
import { EventType } from '@/events/types'
import { buildShareUrl, shareOrCopy } from '@/landings/lib/share-url'

// How long the button shows "Link copied" before returning to "Share".
const COPIED_DURATION_MS = 2000

// Lets event visitors, often on a phone at a booth, send the page to
// themselves for later. Uses the native share sheet where the browser has one,
// so they can email, message, or AirDrop the link without typing an address,
// and copies the link everywhere else.
// A hook rather than a component because Brand's ButtonGroup only keeps
// Button elements it can recognize by type, so the hero renders the Button.
export function useShareLink(title: string) {
  const { t } = useTranslation(['product_landing'])
  const [copied, setCopied] = useState(false)
  // Set after a native share fails, so the next click copies from a fresh gesture.
  const [copyOnly, setCopyOnly] = useState(false)
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => () => clearTimeout(resetTimer.current), [])

  const handleClick = async () => {
    const url = buildShareUrl(window.location.href)
    // Record the click before the outcome: a closed share sheet still shows intent.
    sendEvent({
      type: EventType.clipboard,
      clipboard_operation: 'share',
      clipboard_target: url,
    })

    const share =
      typeof navigator.share === 'function' ? navigator.share.bind(navigator) : undefined
    const { result, shareFailed } = await shareOrCopy(
      { share, writeText: (text) => navigator.clipboard.writeText(text) },
      { title, url },
      copyOnly,
    )
    if (shareFailed) setCopyOnly(true)
    if (result !== 'copied') return

    setCopied(true)
    // Restart on every copy so a repeat click gets the full confirmation time.
    clearTimeout(resetTimer.current)
    resetTimer.current = setTimeout(() => setCopied(false), COPIED_DURATION_MS)
    announce(t('share_button.link_copied'))
  }

  return {
    copied,
    label: copied
      ? t('share_button.link_copied')
      : copyOnly
        ? t('share_button.copy_link')
        : t('share_button.label'),
    onClick: handleClick,
  }
}
