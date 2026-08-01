import { useCallback, useEffect, useRef, useState } from 'react'
import type { ComponentPropsWithoutRef } from 'react'
import { announce } from '@primer/live-region-element'

type CopyButtonProps = ComponentPropsWithoutRef<'button'> & {
  'data-clipboard'?: string
}

// React replacement for the imperative `copy-code.ts` enhancer. The code-block
// header (`content-render/unified/code-header.ts`) emits this button into the
// HTML AST next to a hidden `<pre data-clipboard="<id>">` holding the raw code.
// When the article body is rendered from hast (instead of dangerouslySetInnerHTML),
// `MarkdownContent` maps that `<button class="js-btn-copy">` to this component so
// React owns the node rather than a post-hydration `document.querySelectorAll`.
//
// Analytics is intentionally NOT sent here: a global delegated click listener in
// `events/components/events.ts` already records `.js-btn-copy` clicks.
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

    // The hidden <pre> is a sibling of this button inside the code-block header,
    // so look it up locally to avoid copying a different block that happens to
    // share the same content hash.
    const scope: Element | Document = buttonRef.current?.parentElement ?? document
    const pre = scope.querySelector<HTMLElement>(`pre[data-clipboard="${CSS.escape(clipboardId)}"]`)
    const text = pre?.innerText
    if (!text) return

    try {
      await navigator.clipboard.writeText(text)
    } catch {
      // Clipboard write can be blocked (permissions, insecure context, etc.).
      // Don't show a false "Copied!" state.
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
