import { useRouter } from 'next/router'
import { useState, useRef, useEffect } from 'react'
import styles from './SupportPortalVaIframe.module.scss'
export interface SupportPortalVaIframeProps {
  supportPortalUrl: string
  vaFlowUrlParameter: string
}

const PREVIEW_BUTTON_HEIGHT = 95
const FULL_HEIGHT = 750

// Support Portal controls iframe visibility remotely: height 0 and display none
// at load, 95px for the login button, and 750px for the full Virtual Assistant.
// It sends the ready message only when its iframe feature flag is on.
export function SupportPortalVaIframe({
  supportPortalVaIframeProps,
}: {
  supportPortalVaIframeProps: SupportPortalVaIframeProps
}) {
  const router = useRouter()
  const autoStartVa = router.query.autoStartVa === 'true'
  enum vaIframeMessageType {
    OPEN = 'open',
    START = 'start',
    STOP = 'stop',
  }

  const [showIframe, setIframe] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    function eventHandler(event: MessageEvent<{ type: vaIframeMessageType }>) {
      // Check event.origin so only the Support Portal domain can control the iframe.
      if (event.origin !== supportPortalVaIframeProps.supportPortalUrl) return
      const message = event.data
      switch (message.type) {
        case vaIframeMessageType.OPEN:
          // Set display through the ref to reveal the iframe without rerendering.
          if (iframeRef.current) {
            iframeRef.current.style.display = 'inline'
            iframeRef.current.style.height = autoStartVa
              ? `${FULL_HEIGHT}px`
              : `${PREVIEW_BUTTON_HEIGHT}px`
          }
          break
        case vaIframeMessageType.START:
          // Mutate height through the ref so opening the assistant does not rerender the component.
          if (iframeRef.current) {
            iframeRef.current.style.height = `${FULL_HEIGHT}px`
          }
          break
        case vaIframeMessageType.STOP:
          // Hide the iframe when Support Portal stops the assistant.
          setIframe(false)
          break
        default:
      }
    }
    window.addEventListener('message', eventHandler)
    setIframe(true)
    return () => {
      window.removeEventListener('message', eventHandler)
    }
  }, [])

  if (!showIframe) {
    return null
  }

  const usp = new URLSearchParams({ flow: supportPortalVaIframeProps.vaFlowUrlParameter })
  usp.set('flow', supportPortalVaIframeProps.vaFlowUrlParameter)
  if (autoStartVa) {
    usp.set('autoStartVa', 'true')
  }

  const src = `${supportPortalVaIframeProps.supportPortalUrl}/iframe/docs_va?${usp}`

  return (
    <iframe
      className={styles.supportPortalIframe}
      ref={iframeRef}
      title="support-portal-va"
      id="support-portal-iframe"
      src={src}
    />
  )
}
