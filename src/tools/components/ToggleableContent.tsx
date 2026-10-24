import { createElement } from 'react'
import type { ReactNode } from 'react'

import {
  classifyToggleClass,
  isContentVisible,
  useSelection,
} from '@/tools/components/SelectionContext'

// ToggleableContent keeps hidden article nodes in the DOM so anchors, IDs, and
// screen-reader traversal match the previous display:none behavior.
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
