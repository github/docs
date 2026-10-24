import { languages } from '@/languages/lib/languages'
import versionSatisfiesRange from '@/versions/lib/version-satisfies-range'

export function isLanguageInArchivedVersion(language: string, version: string): boolean {
  const firstArchivedVersion = languages[language]?.firstArchivedVersion
  return !firstArchivedVersion || versionSatisfiesRange(version, `>=${firstArchivedVersion}`)
}
