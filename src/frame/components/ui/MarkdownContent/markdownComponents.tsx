import type { ComponentProps } from 'react'
import type { Components } from 'hast-util-to-jsx-runtime'

import { CopyButton } from '@/frame/components/CopyButton'
import { CodeTabsGroup } from '@/frame/components/CodeTabsGroup'
import { ToggleableContent } from '@/tools/components/ToggleableContent'
import { isToggleClass } from '@/tools/components/SelectionContext'

// Map specific elements in the HTML AST to interactive React components instead
// of inert markup enhanced by post-hydration DOM mutation (#6619). Shared by
// every hast rendering path (the article body via MarkdownContent and the
// HTML-string fragments via RenderedHTML) so the same element always becomes the
// same component, and SSR/client hydration stay in sync.
//
// The className checks are cheap and run first, so only the handful of
// interactive/toggleable elements become components; every other div/span/button
// renders as a plain element with no hook. Unrecognized classes fall through to
// plain elements, so fragments that never contain pickers or copy buttons (e.g.
// GraphQL/REST descriptions) are unaffected.
export const markdownComponents = {
  button(props: ComponentProps<'button'>) {
    const classes = String(props.className || '').split(/\s+/)
    if (classes.includes('js-btn-copy')) {
      return <CopyButton {...props} />
    }
    return <button {...props} />
  },
  div(props: ComponentProps<'div'>) {
    const classes = String(props.className || '').split(/\s+/)
    if (classes.includes('ghd-codetabs')) {
      return <CodeTabsGroup {...props} />
    }
    if (isToggleClass(props.className)) {
      return <ToggleableContent tag="div" {...props} />
    }
    return <div {...props} />
  },
  span(props: ComponentProps<'span'>) {
    if (isToggleClass(props.className)) {
      return <ToggleableContent tag="span" {...props} />
    }
    return <span {...props} />
  },
} as unknown as Partial<Components>
