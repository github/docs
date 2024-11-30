#!/usr/bin/env node

import { languageKeys } from '../../lib/languages.js'

import { makeLanguageSurrogateKey } from '../../middleware/set-fastly-surrogate-key.js'
import purgeEdgeCache from '../../script/deployment/purge-edge-cache.js'

// This covers things like `/api/webhooks` which isn't language specific.
await purgeEdgeCache(makeLanguageSurrogateKey())

const languages = process.env.LANGUAGES
  ? languagesFromString(process.env.LANGUAGES)
  : // Make sure `en` is first because contributors write mostly in English
    // and they're most likely wanting to see their landed changes appear
    // in production as soon as possible.
    languageKeys.sort((a) => (a === 'en' ? -1 : 1))

for (const language of languages) {
  await purgeEdgeCache(makeLanguageSurrogateKey(language))
}

function languagesFromString(str) {
  const languages = str
    .split(/,/)
    .map((x) => x.trim())
    .filter(Boolean)
  if (!languages.every((lang) => languageKeys.includes(lang))) {
    throw new Error(
      `Unrecognized language code (${languages.find((lang) => !languageKeys.includes(lang))})`
    )
  }
  return languages
}
