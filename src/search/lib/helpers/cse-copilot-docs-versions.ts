// Versions used by cse-copilot
import { allVersions } from '@/versions/lib/all-versions'
const CSE_COPILOT_DOCS_VERSIONS = ['dotcom', 'ghec', 'ghes']

// Languages supported by cse-copilot
const DOCS_LANGUAGES = ['en']
export function supportedCSECopilotLanguages() {
  return DOCS_LANGUAGES
}

export function getCSECopilotSource(
  version: (typeof CSE_COPILOT_DOCS_VERSIONS)[number],
  language: (typeof DOCS_LANGUAGES)[number],
) {
  const cseCopilotDocsVersion = getMiscBaseNameFromVersion(version)
  if (!CSE_COPILOT_DOCS_VERSIONS.includes(cseCopilotDocsVersion)) {
    throw new Error(
      `Invalid 'version' in request body: '${version}'. Must be one of: ${CSE_COPILOT_DOCS_VERSIONS.join(', ')}`,
    )
  }
  if (!DOCS_LANGUAGES.includes(language)) {
    throw new Error(
      `Invalid 'language' in request body '${language}'. Must be one of: ${DOCS_LANGUAGES.join(', ')}`,
    )
  }
  return `docs_${version}_${language}`
}

function getMiscBaseNameFromVersion(Version: string): string {
  const miscBaseName =
    Object.values(allVersions).find(
      (info) =>
        info.shortName === Version ||
        info.plan === Version ||
        info.miscVersionName === Version ||
        info.currentRelease === Version,
    )?.miscBaseName || ''

  if (!miscBaseName) {
    return ''
  }

  return miscBaseName
}
