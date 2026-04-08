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

/**
 * Mapping of octicon names to their React components
 * This is the single source of truth for all supported octicons
 */
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

/**
 * Valid octicon types derived from the component mapping
 */
export type ValidOcticon = keyof typeof OCTICON_COMPONENTS

/**
 * Array of all valid octicon names for validation, derived from component mapping
 */
export const VALID_OCTICONS = Object.keys(OCTICON_COMPONENTS) as ValidOcticon[]

/**
 * Helper function to validate and cast octicon values
 * @param octicon - The octicon string to validate
 * @returns True if the octicon is valid, false otherwise
 */
export function isValidOcticon(octicon: string | null): octicon is ValidOcticon {
  return octicon !== null && (octicon as ValidOcticon) in OCTICON_COMPONENTS
}

/**
 * Get the React component for a given octicon name
 * @param octicon - The octicon name
 * @returns The corresponding React component, or CopilotIcon as fallback
 */
export function getOcticonComponent(octicon: ValidOcticon | undefined) {
  if (!octicon || !isValidOcticon(octicon)) {
    return CopilotIcon
  }
  return OCTICON_COMPONENTS[octicon] || CopilotIcon
}
