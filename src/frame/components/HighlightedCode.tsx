import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import { createLowlight } from 'lowlight'
import json from 'highlight.js/lib/languages/json'
import javascript from 'highlight.js/lib/languages/javascript'
import hljsCurl from 'highlightjs-curl'
import cx from 'classnames'

// React-native replacement for the imperative ClientSideHighlightJS enhancer
// (#6619). The old enhancer scanned the document for `[data-highlight] code` and
// called `hljs.highlightElement`, which REPLACES the `<code>`'s innerHTML —
// destructive on a React-owned node. Instead, components that render code
// (RestCodeSamples, Webhook) use <HighlightedCode>, which highlights with
// `lowlight` (the hast-based highlighter behind rehype-highlight) and renders the
// tokens as real React elements via `toJsxRuntime`. No innerHTML, no DOM scan.
//
// Highlighting (the per-block compute) is deferred until the block scrolls into
// view, preserving the old IntersectionObserver *compute* laziness so large REST
// reference pages don't highlight every off-screen sample at once. Note: unlike
// the old `dynamic(..., { ssr: false })` chunk, the highlighter libraries are now
// statically bundled into these pages, so *load* laziness is not preserved. These
// pages always contain code samples, so the chunk would have loaded anyway.

// Keep the language set tight: highlight.js can pull in everything, which is huge.
const lowlight = createLowlight({ json, javascript, curl: hljsCurl })
const SUPPORTED_LANGUAGES = new Set(['json', 'javascript', 'curl'])

function highlightToReact(language: string, code: string): ReactNode {
  const tree = lowlight.highlight(language, code)
  return toJsxRuntime(tree, { Fragment, jsx, jsxs })
}

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
    // No IntersectionObserver (or no element): just highlight right away.
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

  // `hljs` provides the base theme; the same token classes (`hljs-*`) that
  // highlight.js produced are emitted by lowlight, so styling is unchanged.
  return (
    <code ref={ref} className={cx('hljs', `language-${language}`, className)}>
      {highlighted ?? code}
    </code>
  )
}
