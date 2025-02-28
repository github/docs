// Versions used by cse-copilot
import { allVersions } from '@/versions/lib/all-versions'
import { versionToIndexVersionMap } from '../elasticsearch-versions'
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
  const mappedVersion = versionToIndexVersionMap[version]
  const { cseCopilotDocsVersion, ghesButNotLatest } = getVersionInfo(mappedVersion)

  if (ghesButNotLatest) {
    throw new Error(
      `Only the latest version of GHES is supported for cse-copilot queries. Please use 'ghes@latest'`,
    )
  }

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
  // cse-copilot uses version names in the form `docs_<shortName>_<language>`, e.g. `docs_ghes_en`
  return `docs_${cseCopilotDocsVersion}_${language}`
}

function getVersionInfo(Version: string): {
  cseCopilotDocsVersion: string
  ghesButNotLatest: boolean
} {
  const versionObject = Object.values(allVersions).find(
    (info) =>
      info.shortName === Version ||
      info.plan === Version ||
      info.miscVersionName === Version ||
      info.currentRelease === Version,
  )

  let cseCopilotDocsVersion = versionObject?.shortName || ''
  let ghesButNotLatest = false
  if (!versionObject || !cseCopilotDocsVersion) {
    return {
      cseCopilotDocsVersion,
      ghesButNotLatest,
    }
  }

  // CSE-Copilot uses 'dotcom' as the version name for free-pro-team
  if (cseCopilotDocsVersion === 'fpt') {
    cseCopilotDocsVersion = 'dotcom'
  }

  // If ghes, we only support the latest version for cse-copilot queries
  // Since that's the only version cse-copilot scrapes from our docs
  if (
    versionObject.shortName === 'ghes' &&
    versionObject.currentRelease !== versionObject.latestRelease
  ) {
    ghesButNotLatest = true
  }

  return {
    cseCopilotDocsVersion,
    ghesButNotLatest,
  }
}
