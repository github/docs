import type { ComponentProps, ComponentType, ReactNode } from 'react'
import { ActionMenu } from '@primer/react-brand'

// Brand's ActionMenu.Button hardcodes trailingVisual={<ChevronDownIcon />}, and its
// props omit trailingVisual. It spreads rest props after that default, so caller
// icons still win at runtime. Docs 2026 needs a filled triangle caret, not a
// chevron. This cast is the shared typed API divergence for both header pickers. If
// @primer/react-brand destructures trailingVisual out of rest props, this line stops
// working and the caret silently reverts to a chevron.
type WithTrailingVisual = { trailingVisual?: ReactNode }

export const ActionMenuTrigger = ActionMenu.Button as ComponentType<
  ComponentProps<typeof ActionMenu.Button> & WithTrailingVisual
>
