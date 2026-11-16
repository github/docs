// cse-copilot accepts this small docs version set.
import { versionToIndexVersionMap } from '../elasticsearch-versions'
const CSE_COPILOT_DOCS_VERSIONS = ['dotcom', 'ghec', 'ghes']

export function getCSECopilotSource(version: (typeof CSE_COPILOT_DOCS_VERSIONS)[number]) {
  if (!version) {
    throw new Error(`Missing required key 'version' in request body`)
  }

  let mappedVersion = versionToIndexVersionMap[version]
  // cse-copilot expects dotcom for free-pro-team.
  if (mappedVersion === 'fpt') {
    mappedVersion = 'dotcom'
  }

  if (!CSE_COPILOT_DOCS_VERSIONS.includes(mappedVersion) && !mappedVersion?.startsWith('ghes-')) {
    throw new Error(
      `Invalid 'version' in request body: '${version}'. Must be one of: ${CSE_COPILOT_DOCS_VERSIONS.join(', ')}`,
    )
  }
  // cse-copilot docs sources use docs_ plus the mapped index version, such as docs_ghes-X.
  return `docs_${mappedVersion}`
}
