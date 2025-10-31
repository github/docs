import { languageKeys } from '@/languages/lib/languages-server'

import { makeLanguageSurrogateKey } from '@/frame/middleware/set-fastly-surrogate-key'
import purgeEdgeCache from '@/workflows/purge-edge-cache'

/**
 * In simple terms, this script sends purge commands for...
 *
 * 1. no-language
 * 2. 'en'
 * 3. 'ja'
 * 4. 'pt'
 * ...
 *
 * ...and so on for all languages.
 * But to avoid a stampeding herd after each purge, and to avoid unnecessary
 * load on the backend, put a slight delay between each language.
 * This gives the backend a chance to finish processing all the now stale
 * URLs, for that language, before tackling the next.
 */
const DELAY_BETWEEN_LANGUAGES = 10 * 1000

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms))

// This covers things like `/api/webhooks` which isn't language specific.
await purgeEdgeCache(makeLanguageSurrogateKey())

const languages = process.env.LANGUAGES
  ? languagesFromString(process.env.LANGUAGES)
  : // Make sure `en` is first because contributors write mostly in English
    // and they're most likely wanting to see their landed changes appear
    // in production as soon as possible.
    languageKeys.sort((a) => (a === 'en' ? -1 : 1))

for (const language of languages) {
  console.log(
    `Sleeping ${DELAY_BETWEEN_LANGUAGES / 1000} seconds before purging for '${language}'...`,
  )
  await sleep(DELAY_BETWEEN_LANGUAGES)
  await purgeEdgeCache(makeLanguageSurrogateKey(language))
}

function languagesFromString(str: string): string[] {
  const parsedLanguages = str
    .split(/,/)
    .map((x) => x.trim())
    .filter(Boolean)
  if (!parsedLanguages.every((lang) => languageKeys.includes(lang))) {
    throw new Error(
      `Unrecognized language code (${parsedLanguages.find((lang) => !languageKeys.includes(lang))})`,
    )
  }
  return parsedLanguages
}
