import {
  BugIcon,
  LightBulbIcon,
  CodeIcon,
  GearIcon,
  RocketIcon,
  BeakerIcon,
  CopilotIcon,
  HubotIcon,
  LogIcon,
  TerminalIcon,
  BookIcon,
  ShieldLockIcon,
  LockIcon,
} from '@primer/octicons-react'

// The single source of truth for supported octicons. The type and the validation
// array below are both derived from it.
export const OCTICON_COMPONENTS = {
  bug: BugIcon,
  lightbulb: LightBulbIcon,
  code: CodeIcon,
  gear: GearIcon,
  rocket: RocketIcon,
  beaker: BeakerIcon,
  copilot: CopilotIcon,
  hubot: HubotIcon,
  log: LogIcon,
  terminal: TerminalIcon,
  book: BookIcon,
  'shield-lock': ShieldLockIcon,
  lock: LockIcon,
} as const

export type ValidOcticon = keyof typeof OCTICON_COMPONENTS

export const VALID_OCTICONS = Object.keys(OCTICON_COMPONENTS) as ValidOcticon[]

export function isValidOcticon(octicon: string | null): octicon is ValidOcticon {
  return octicon !== null && (octicon as ValidOcticon) in OCTICON_COMPONENTS
}

// Falls back to CopilotIcon for an unknown name.
export function getOcticonComponent(octicon: ValidOcticon | undefined) {
  if (!octicon || !isValidOcticon(octicon)) {
    return CopilotIcon
  }
  return OCTICON_COMPONENTS[octicon] || CopilotIcon
}
