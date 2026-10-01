import { program } from 'commander'

import { fetchWithRetry } from '@/frame/lib/fetch-utils'
import { languageKeys } from '@/languages/lib/languages-server'
import { makeLanguageSurrogateKey } from '@/frame/middleware/set-fastly-surrogate-key'

// Purges Fastly by mode: entire cache, one surrogate key, or no-language plus
// every language key. --hard forces hard purges for targeted modes, and
// --everything always hard-purges.

const { FASTLY_TOKEN, FASTLY_SERVICE_ID } = process.env

const DELAY_BETWEEN_KEYS = 10 * 1000
const DELAY_BEFORE_SECOND_PURGE = 20 * 1000

// The pipelining in purgeKeys only lines up if the second-purge delay is a whole
// number of key slots; otherwise second purges would drift off the cadence.
// Enforce it so a future tweak to either constant can't silently break it.
if (DELAY_BEFORE_SECOND_PURGE % DELAY_BETWEEN_KEYS !== 0) {
  throw new Error(
    `DELAY_BEFORE_SECOND_PURGE (${DELAY_BEFORE_SECOND_PURGE}ms) must be a multiple of ` +
      `DELAY_BETWEEN_KEYS (${DELAY_BETWEEN_KEYS}ms) to keep second purges ` +
      `aligned with later first-purge slots`,
  )
}

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms))

program
  .description(
    'Purges Fastly after a deploy and on demand. Soft purge by default; can hard ' +
      'purge specific languages, or hard purge the entire cache.',
  )
  .option(
    '--languages <languages>',
    "Comma separated languages to purge, e.g. 'en,es,ja'. Blank/omitted = all languages.",
  )
  .option('--surrogate-key <key>', 'Purge a single explicit surrogate key. e.g. api-search:en')
  .option('--hard', 'Evict immediately instead of the default soft purge')
  .option('--everything', 'Hard purge the ENTIRE cache: every key. Ignores --languages/--hard.')
  .parse(process.argv)

type Options = {
  languages?: string
  surrogateKey?: string
  hard?: boolean
  everything?: boolean
}

// The --everything branch calls purge_all, which ignores soft purge, evicts every
// object, and can spike origin traffic.
// It clears content, no-language, manual-purge assets, search, and every other
// surrogate key. Use targeted purges unless they cannot reach the stale content.
// https://www.fastly.com/documentation/reference/api/purging/
await main(program.opts<Options>())

async function main(options: Options) {
  if (!FASTLY_TOKEN) {
    throw new Error('FASTLY_TOKEN not detected; refusing to purge')
  }
  if (!FASTLY_SERVICE_ID) {
    throw new Error('FASTLY_SERVICE_ID not detected; refusing to purge')
  }
  if (options.everything) {
    console.log('Attempting hard purge of the entire cache...')
    const result = await fastlyPurge('purge_all')
    console.log('Fastly purge_all result:', result.status)
    return
  }

  const soft = !options.hard
  const surrogateKeys = options.surrogateKey
    ? [options.surrogateKey]
    : languageSurrogateKeys(options.languages)
  await purgeKeys(surrogateKeys, soft)
}

function languageSurrogateKeys(languagesInput?: string): string[] {
  // Put en first without mutating shared languageKeys, because contributors often wait on English.
  const trimmed = languagesInput?.trim()
  const languages = trimmed
    ? languagesFromString(trimmed)
    : ['en', ...languageKeys.filter((lang) => lang !== 'en')]

  // The empty no-language key covers routes such as /api/webhooks that are not language-specific.
  return [
    makeLanguageSurrogateKey(),
    ...languages.map((language) => makeLanguageSurrogateKey(language)),
  ]
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

type PurgePhase = 'first' | 'second'
type PurgeOutcome = { key: string; phase: PurgePhase; error?: unknown }

// purgeKeys double-purges surrogate keys to clear Fastly edge nodes first and the
// origin shield after stale content can be re-fetched. DELAY_BETWEEN_KEYS spaces
// first purges to avoid a backend traffic spike. DELAY_BEFORE_SECOND_PURGE must
// remain a multiple of that delay so second purges share later first-purge slots.
// A single-key purge runs at 0s and 20s. Fastly's 30s figure applies to
// purge_all, not these targeted purges.
// https://www.fastly.com/documentation/guides/concepts/cache/purging#race-conditions
async function purgeKeys(surrogateKeys: string[], soft: boolean) {
  // One wall-clock start time keeps network latency from drifting the purge cadence.
  const startTime = Date.now()
  const purges: Promise<PurgeOutcome>[] = []

  // Each call resolves to an outcome so later scheduled purges can still finish.
  async function runPurge(
    key: string,
    phase: PurgePhase,
    targetTime: number,
  ): Promise<PurgeOutcome> {
    await sleep(Math.max(0, targetTime - Date.now()))
    try {
      console.log(`Triggering ${phase}-phase ${soft ? 'soft' : 'hard'} purge for '${key}'...`)
      const result = await fastlyPurge(`purge/${encodeURIComponent(key)}`, { soft })
      console.log(`Fastly purge result for '${key}':`, result.status)
      return { key, phase }
    } catch (error) {
      return { key, phase, error }
    }
  }

  for (const [index, key] of surrogateKeys.entries()) {
    const slotStart = startTime + index * DELAY_BETWEEN_KEYS
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
}

// fastlyPurge appends endpoint to the service path, such as purge/<key> or
// purge_all. Non-2xx responses throw with the body best-effort because Fastly
// puts permission and feature details there. Soft purge marks the object stale
// and serves stale-while-revalidate; hard purge evicts it outright. Soft can
// fail to clear content whose origin returns 304 Not Modified on revalidation,
// since a 304 extends the stale object. purge_all ignores the soft header.
async function fastlyPurge(endpoint: string, { soft = false }: { soft?: boolean } = {}) {
  const headers: Record<string, string> = {
    'fastly-key': FASTLY_TOKEN as string,
    accept: 'application/json',
    'Content-Type': 'application/json',
  }
  if (soft) {
    headers['fastly-soft-purge'] = '1'
  }

  const url = `https://api.fastly.com/service/${encodeURIComponent(FASTLY_SERVICE_ID as string)}/${endpoint}`
  const response = await fetchWithRetry(
    url,
    { method: 'POST', headers },
    { retries: 0, timeout: 30_000, throwHttpErrors: false },
  )
  if (!response.ok) {
    let body = ''
    try {
      body = await response.text()
    } catch {
      body = ''
    }
    throw new Error(
      `Fastly purge failed: HTTP ${response.status} ${response.statusText}${body ? `: ${body}` : ''}`,
    )
  }
  return response
}
