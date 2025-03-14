import { useRouter } from 'next/router'
import { useState, useRef, useEffect } from 'react'
import styles from './SupportPortalVaIframe.module.scss'
export interface SupportPortalVaIframeProps {
  supportPortalUrl: string
  vaFlowUrlParameter: string
}

const PREVIEW_BUTTON_HEIGHT = 95
const FULL_HEIGHT = 750

// The Support Portal iframe starts as `height 0` and `display none` to prevent the iframe from visibly rendering
// When the iframe loads and the Support Portal has the iframe feature flag set to on, a message is sent to the parent of the iframe indicating it is ready
// The iframe height is then set to 95px and the display to inline to show a button the user can click on to log in / start the VA
// The full height is used to show the entire interactive Virtual Assistant
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
      // An extra security measure which double checks that the events originate from the Support Portal domain
      if (event.origin !== supportPortalVaIframeProps.supportPortalUrl) return
      const message = event.data
      switch (message.type) {
        case vaIframeMessageType.OPEN:
          // We need to set the display to inline from a ref explicitly to prevent the component from rerendering
          // The iframe is hidden by default to allow Support Portal to disable the iframe remotely
          if (iframeRef.current) {
            iframeRef.current.style.display = 'inline'
            iframeRef.current.style.height = autoStartVa
              ? `${FULL_HEIGHT}px`
              : `${PREVIEW_BUTTON_HEIGHT}px`
          }
          break
        case vaIframeMessageType.START:
          // We need to set the height explicitly from a ref to prevent the component from rerendering
          if (iframeRef.current) {
            iframeRef.current.style.height = `${FULL_HEIGHT}px`
          }
          break
        case vaIframeMessageType.STOP:
          // Effectively hide iframe. If preferred the element can also be deleted or display set to hidden.
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
