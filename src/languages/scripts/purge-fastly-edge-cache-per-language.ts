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
 *
 * Each surrogate key is purged twice because of Fastly shielding: the first
 * purge clears the edge nodes and the second clears the origin shield. See
 * `purge-edge-cache.ts` for the details.
 *
 * Two delays shape the schedule:
 *
 * - To avoid a stampeding herd after each purge, and to avoid unnecessary load
 *   on the backend, there's a slight delay between each language's FIRST purge.
 *   This gives the backend a chance to finish processing all the now stale URLs,
 *   for that language, before tackling the next.
 * - The SECOND purge of a key happens a while after its first purge, long enough
 *   for the now-stale content to be re-fetched and re-shielded before we clear
 *   the shield again. Fastly's docs recommend ~2s for surrogate-key purges, but
 *   in practice that's been too short and stale content survives the shielding
 *   race, so we use a larger margin. See the "Race conditions" subsection of
 *   https://www.fastly.com/documentation/guides/concepts/cache/purging#race-conditions
 *   (the 30s figure there is for purge-all, which we don't use). The value must
 *   stay a multiple of DELAY_BETWEEN_LANGUAGES to keep the slot alignment below.
 *
 * Rather than block on the second purge (which would serialize everything and
 * make the whole run take `DELAY_BEFORE_SECOND_PURGE` per key), we schedule all
 * purges against a wall-clock timeline up front. Because the second-purge delay
 * is a multiple of the between-languages delay, a key's second purge lands on
 * the same slot as a later key's first purge. For example, with a 10s cadence
 * and a 20s second-purge delay:
 *
 *    t=0   no-language (1st)
 *    t=10  en          (1st)
 *    t=20  es          (1st) + no-language (2nd)
 *    t=30  ja          (1st) + en          (2nd)
 *    t=40  pt          (1st) + es          (2nd)
 *    ...
 */
const DELAY_BETWEEN_LANGUAGES = 10 * 1000
const DELAY_BEFORE_SECOND_PURGE = 20 * 1000

// The pipelining only lines up if the second-purge delay is a whole number of
// language slots; otherwise second purges would drift off the cadence. Enforce
// it so a future tweak to either constant can't silently break the schedule.
if (DELAY_BEFORE_SECOND_PURGE % DELAY_BETWEEN_LANGUAGES !== 0) {
  throw new Error(
    `DELAY_BEFORE_SECOND_PURGE (${DELAY_BEFORE_SECOND_PURGE}ms) must be a multiple of ` +
      `DELAY_BETWEEN_LANGUAGES (${DELAY_BETWEEN_LANGUAGES}ms) to keep second purges ` +
      `aligned with later first-purge slots`,
  )
}

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms))

type PurgePhase = 'first' | 'second'
type PurgeOutcome = { key: string; phase: PurgePhase; error?: unknown }

const languages = process.env.LANGUAGES
  ? languagesFromString(process.env.LANGUAGES)
  : // Make sure `en` is first because contributors write mostly in English
    // and they're most likely wanting to see their landed changes appear
    // in production as soon as possible.
    languageKeys.sort((a) => (a === 'en' ? -1 : 1))

// This covers things like `/api/webhooks` which isn't language specific, hence
// the no-language key (an empty `makeLanguageSurrogateKey()`) leading the list.
const surrogateKeys = [
  makeLanguageSurrogateKey(),
  ...languages.map((language) => makeLanguageSurrogateKey(language)),
]

// Schedule every purge against a single wall-clock start time so the cadence
// doesn't drift with per-purge network latency, and so each second purge aligns
// with a later first purge as described above.
const startTime = Date.now()
const purges: Promise<PurgeOutcome>[] = []

// Each call returns a promise that resolves (never rejects) to an outcome: the
// internal try/catch means a failed purge can't become an unhandled rejection
// while we wait for the rest of the schedule, which can outlast an early second
// purge. Failures are surfaced after all purges settle, below.
async function runPurge(key: string, phase: PurgePhase, targetTime: number): Promise<PurgeOutcome> {
  await sleep(Math.max(0, targetTime - Date.now()))
  try {
    // `purgeEdgeCache` logs its own "first Fastly purge" line; word this as the
    // scheduled phase trigger so the two purges of a key are distinguishable.
    console.log(`Triggering ${phase}-phase purge for '${key}'...`)
    await purgeEdgeCache(key, { purgeTwice: false })
    return { key, phase }
  } catch (error) {
    return { key, phase, error }
  }
}

for (const [index, key] of surrogateKeys.entries()) {
  const slotStart = startTime + index * DELAY_BETWEEN_LANGUAGES
  purges.push(runPurge(key, 'first', slotStart))
  purges.push(runPurge(key, 'second', slotStart + DELAY_BEFORE_SECOND_PURGE))
}

const outcomes = await Promise.all(purges)
const failures = outcomes.filter((outcome) => outcome.error)
if (failures.length) {
  for (const failure of failures) {
    console.error(`Fastly ${failure.phase} purge failed for '${failure.key}':`, failure.error)
  }
  throw new Error(`${failures.length} Fastly purge(s) failed`)
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
