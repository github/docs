import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import { createLowlight } from 'lowlight'
import json from 'highlight.js/lib/languages/json'
import javascript from 'highlight.js/lib/languages/javascript'
import hljsCurl from 'highlightjs-curl'
import cx from 'clsx'

// HighlightedCode avoids document scanning and innerHTML replacement so React
// owns code sample nodes produced by RestCodeSamples and Webhook.
// It renders lowlight hast tokens through toJsxRuntime, matching highlight.js
// token classes.
// Highlighting waits until a block scrolls into view so large REST reference
// pages do not compute off-screen samples at once. The highlighter libraries
// still load with pages that use this component, which always contain code samples.

// Keep the language set tight because highlight.js can pull in every language.
const lowlight = createLowlight({ json, javascript, curl: hljsCurl })
const SUPPORTED_LANGUAGES = new Set(['json', 'javascript', 'curl'])

function highlightToReact(language: string, code: string): ReactNode {
  const tree = lowlight.highlight(language, code)
  return toJsxRuntime(tree, { Fragment, jsx, jsxs })
}

// lowlight emits the same hljs-* token classes as highlight.js.
// The base hljs theme still applies.
type HighlightedCodeProps = {
  language: string
  code: string
  className?: string
}

export function HighlightedCode({ language, code, className }: HighlightedCodeProps) {
  const ref = useRef<HTMLElement>(null)
  const [highlighted, setHighlighted] = useState<ReactNode>(null)

  useEffect(() => {
    setHighlighted(null)
    if (!SUPPORTED_LANGUAGES.has(language)) return

    const element = ref.current
    // Without IntersectionObserver or an element, highlight immediately.
    if (!element || typeof window === 'undefined' || !window.IntersectionObserver) {
      setHighlighted(highlightToReact(language, code))
      return
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setHighlighted(highlightToReact(language, code))
          observer.disconnect()
          break
        }
      }
    })
    observer.observe(element)
    return () => observer.disconnect()
  }, [language, code])

  return (
    <code ref={ref} className={cx('hljs', `language-${language}`, className)}>
      {highlighted ?? code}
    </code>
  )
}
