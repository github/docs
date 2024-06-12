import { useEffect } from 'react'
import { useRouter } from 'next/router'
import hljs from 'highlight.js/lib/core'
import json from 'highlight.js/lib/languages/json'
import javascript from 'highlight.js/lib/languages/javascript'
import hljsCurl from 'highlightjs-curl'

// Add as needed. It's pretty cheap to add but please don't use
// highlight.js import that loads all and everything.
hljs.registerLanguage('json', json)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('curl', hljsCurl)
const SUPPORTED_LANGUAGES = ['json', 'javascript', 'curl']

// This is the selector we use for the first document.querySelectorAll()
// to find the containers for `<code>` tags. Because it's s dataset
// attribute, its value is expected to be the language.
// E.g.
//
//   <div class="whatever" data-highlight="javascript">
//     <p>other stuff</p>
//     <code>Ignored!</code>
//
//     <pre>
//       <code>HIGHLIGHT THIS!</code>
//     </pre>
//
const CODE_ELEMENTS_PARENT_SELECTOR = '[data-highlight]'
const CODE_SELECTOR = 'code'

export default function ClientSideHighlightJS() {
  const { asPath } = useRouter()

  useEffect(() => {
    // Hi Internet Explorer!
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#browser_compatibility
    // If intersectionObserver isn't supported, let's not bother doing
    // anything. If your browser is that behind, syntax highlight is probably
    // your least concern.
    if (!window.IntersectionObserver) return

    const intersectionObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement
          if (!element.classList.contains('hljs')) {
            hljs.highlightElement(element)
          }
        }
      }
    })
    for (const parent of Array.from(
      document.querySelectorAll<HTMLElement>(CODE_ELEMENTS_PARENT_SELECTOR),
    )) {
      const language = parent.dataset.highlight || 'json'
      if (!SUPPORTED_LANGUAGES.includes(language)) {
        if (process.env.NODE_ENV === 'development') {
          console.warn(
            `For highlighting, only ${SUPPORTED_LANGUAGES} is supported. Not '${language}'.`,
          )
        }
        continue
      }
      for (const element of Array.from(parent.querySelectorAll<HTMLElement>(CODE_SELECTOR))) {
        element.classList.add(`language-${language}`)
        intersectionObserver.observe(element)
      }
    }

    return () => {
      intersectionObserver.disconnect()
    }
  }, [asPath])

  return null
}
