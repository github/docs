import { languages } from '@/languages/lib/languages'

const languageCodes = Object.keys(languages).join('|')

// Example: /es/ja/enterprise-server@3.17/get-started captures /ja/enterprise-server@3.17/get-started.
const doubledLanguagePrefixRegex = new RegExp(
  `^/(?:${languageCodes})(/(?:${languageCodes})/enterprise(?:-server@|/).*)$`,
)

// Archived GHES scrapes lack the Next build manifest, so their client-side language
// picker falls back to a hard navigation that keeps the current locale prefix.
export function getDoubledLanguagePrefixRedirect(reqPath: string): string | null {
  return reqPath.match(doubledLanguagePrefixRegex)?.[1] ?? null
}
