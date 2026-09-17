import type { ComponentProps, ComponentType, ReactNode } from 'react'
import { ActionMenu } from '@primer/react-brand'

// Brand's ActionMenu.Button hardcodes `trailingVisual={<ChevronDownIcon />}` and its
// props type does not declare `trailingVisual`. It spreads rest props *after* that
// default, so a caller-supplied icon still wins at runtime, and Docs 2026 specifies a
// filled triangle caret rather than a chevron. This cast is the single deliberate
// divergence from the stock component's typed API, and it is shared by both header
// pickers so there is only one line to fix. If a future @primer/react-brand release
// destructures `trailingVisual` out of its rest props, this is the line that stops
// working and the caret silently reverts to a chevron.
type WithTrailingVisual = { trailingVisual?: ReactNode }

export const ActionMenuTrigger = ActionMenu.Button as ComponentType<
  ComponentProps<typeof ActionMenu.Button> & WithTrailingVisual
>
