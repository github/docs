import path from 'path'
import { contentTypesEnum } from '@/frame/lib/frontmatter'

const RESPONSIBLE_USE_STRING = 'responsible-use'
const LANDING_TYPE = 'landing'
const RAI_TYPE = 'rai'
const OTHER_TYPE = 'other'

export function determineContentType(relativePath: string): string {
  // For copilot/how-tos/troubleshoot/index.md, pathSegments[1] is the content type.
  const pathSegments = relativePath.split(path.sep)

  const topLevelDirectory = pathSegments[0]
  const derivedContentType = pathSegments[1]

  // content/index.md is the only homepage.
  if (topLevelDirectory === 'index.md') return 'homepage'

  // Responsible-use directories map to the rai content type.
  if (derivedContentType.includes(RESPONSIBLE_USE_STRING)) {
    return RAI_TYPE
  }

  // getting-started directories map to get-started.
  if (derivedContentType === 'getting-started') {
    return 'get-started'
  }

  // Directories matching contentTypesEnum map to their content type.
  if (contentTypesEnum.includes(derivedContentType)) {
    return derivedContentType
  }

  // Product index.md files are landing pages.
  if (derivedContentType === 'index.md') {
    return LANDING_TYPE
  }

  return OTHER_TYPE
}

// These values depend on the file's location, so they are stale once the path no longer derives them.
const LOCATION_SPECIFIC_TYPES = ['homepage', LANDING_TYPE, RAI_TYPE]

// Topic directories derive 'other', so a curated contentType there is kept instead of downgraded.
export function shouldWriteContentType(existing: string | undefined, derived: string): boolean {
  if (!existing) return true
  if (existing === derived) return false
  return derived !== OTHER_TYPE || LOCATION_SPECIFIC_TYPES.includes(existing)
}
