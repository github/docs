import { createElement } from 'react'
import type { ReactNode } from 'react'

import {
  classifyToggleClass,
  isContentVisible,
  useSelection,
} from '@/tools/components/SelectionContext'

// Wraps a platform/tool-scoped element from the article body hast and toggles
// its visibility from SelectionContext instead of the old imperative
// `style.display` mutation (#6619). Renders the same element/props/children, but
// sets `hidden` when the current platform/tool selection doesn't match. We keep
// the node in the DOM (hidden) rather than returning null so anchors, IDs, and
// screen-reader traversal behave like the previous `display:none` approach.
type ToggleableContentProps = {
  tag: 'div' | 'span'
  className?: string
  hidden?: boolean
  children?: ReactNode
  [key: string]: unknown
}

export function ToggleableContent({ tag, ...props }: ToggleableContentProps) {
  const { platform, tool } = useSelection()
  const classification = classifyToggleClass(props.className)

  const hidden = classification
    ? Boolean(props.hidden) || !isContentVisible(classification, { platform, tool })
    : props.hidden

  return createElement(tag, { ...props, hidden })
}
