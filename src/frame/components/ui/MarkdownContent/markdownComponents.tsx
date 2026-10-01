import type { ComponentProps } from 'react'
import type { Components } from 'hast-util-to-jsx-runtime'

import { CopyButton } from '@/frame/components/CopyButton'
import { CodeTabsGroup } from '@/frame/components/CodeTabsGroup'
import { ToggleableContent } from '@/tools/components/ToggleableContent'
import { isToggleClass } from '@/tools/components/SelectionContext'

// Shared HTML AST paths map picker and copy-button markup to React components
// instead of post-hydration DOM mutation. Article bodies and RenderedHTML
// fragments use this map, so SSR and hydration stay in sync.
// Class checks run first; unrecognized classes fall through to plain elements,
// so GraphQL and REST descriptions without pickers stay plain.
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
