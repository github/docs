import type { KeyboardEvent } from 'react'

// Brand's ActionMenu fires onSelect from both the overlay's own Enter listener
// and the focused Item's Enter/Space handler, double-invoking onSelect for one
// keypress. Route both keys through a single click instead.
export function onActionMenuItemKeyDownCapture(event: KeyboardEvent<HTMLLIElement>) {
  if (event.key !== 'Enter' && event.key !== ' ') return
  event.preventDefault()
  event.stopPropagation()
  event.currentTarget.click()
}
