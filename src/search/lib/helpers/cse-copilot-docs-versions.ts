// Versions used by cse-copilot
import { versionToIndexVersionMap } from '../elasticsearch-versions'
const CSE_COPILOT_DOCS_VERSIONS = ['dotcom', 'ghec', 'ghes']

// Languages supported by cse-copilot
const DOCS_LANGUAGES = ['en']
export function supportedCSECopilotLanguages() {
  return DOCS_LANGUAGES
}

export function getCSECopilotSource(version: (typeof CSE_COPILOT_DOCS_VERSIONS)[number]) {
  if (!version) {
    throw new Error(`Missing required key 'version' in request body`)
  }

  let mappedVersion = versionToIndexVersionMap[version]
  // CSE-Copilot uses 'dotcom' as the version name for free-pro-team
  if (mappedVersion === 'fpt') {
    mappedVersion = 'dotcom'
  }

  if (!CSE_COPILOT_DOCS_VERSIONS.includes(mappedVersion) && !mappedVersion?.startsWith('ghes-')) {
    throw new Error(
      `Invalid 'version' in request body: '${version}'. Must be one of: ${CSE_COPILOT_DOCS_VERSIONS.join(', ')}`,
    )
  }
  // cse-copilot uses version names in the form `docs_<version-shortName>`, e.g. `docs_ghes-3.16`
  return `docs_${mappedVersion}`
}
