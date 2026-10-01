import { useCallback, useEffect, useRef, useState } from 'react'
import type { ComponentPropsWithoutRef } from 'react'
import { announce } from '@primer/live-region-element'

type CopyButtonProps = ComponentPropsWithoutRef<'button'> & {
  'data-clipboard'?: string
}

// React replacement for the imperative copy-code.ts enhancer. The code-block
// header in content-render/unified/code-header.ts emits this button into the HTML
// AST next to a hidden pre[data-clipboard] element that holds the raw code.
// MarkdownContent maps button.js-btn-copy to CopyButton so React owns the node
// instead of a post-hydration document.querySelectorAll pass.
// Do not send analytics here: events/components/events.ts already records
// .js-btn-copy clicks through its delegated click listener.
export function CopyButton({ className, children, ...props }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const clipboardId = props['data-clipboard']

  const handleClick = useCallback(async () => {
    if (!clipboardId) return

    // Look up the sibling hidden pre locally so a reused content hash cannot copy another block.
    const scope: Element | Document = buttonRef.current?.parentElement ?? document
    const pre = scope.querySelector<HTMLElement>(`pre[data-clipboard="${CSS.escape(clipboardId)}"]`)
    const text = pre?.innerText
    if (!text) return

    try {
      await navigator.clipboard.writeText(text)
    } catch {
      // A blocked clipboard write must not show a false Copied state.
      return
    }

    setCopied(true)
    announce('Copied!')

    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setCopied(false), 2000)
  }, [clipboardId])

  return (
    <button
      type="button"
      {...props}
      ref={buttonRef}
      className={copied ? `${className ?? ''} copied`.trim() : className}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
