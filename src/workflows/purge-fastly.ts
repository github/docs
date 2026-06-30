import { execFileSync } from 'node:child_process'

import { program } from 'commander'

import { fetchWithRetry } from '@/frame/lib/fetch-utils'
import { languageKeys } from '@/languages/lib/languages-server'
import { makeLanguageSurrogateKey } from '@/frame/middleware/set-fastly-surrogate-key'

// Single entry point for purging Fastly. It runs in one of three modes:
//
// - --everything            -> hard purge the ENTIRE cache via `purge_all`.
// - --surrogate-key <key>   -> double-purge that one surrogate key. Search uses
//                              this for `api-search:<lang>`.
// - otherwise               -> double-purge `no-language` + each `language:<code>`
//                              key, the routine post-deploy / manual purge.
//
// --wait-for-build polls production until it serves this commit before purging,
// so an automatic post-deploy purge doesn't revalidate against a still-rolling-
// out instance. --hard forces a hard purge; --everything ignores it and is
// always hard.

const { FASTLY_TOKEN, FASTLY_SERVICE_ID } = process.env

const DELAY_BETWEEN_KEYS = 10 * 1000
const DELAY_BEFORE_SECOND_PURGE = 20 * 1000

const BUILD_WAIT_REQUIRED_MATCHES = 5
const BUILD_WAIT_INTERVAL = 15 * 1000
const BUILD_WAIT_TIMEOUT = 1200 * 1000

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
  .option('--wait-for-build', 'Wait until production serves the current commit before purging')
  .option(
    '--languages <languages>',
    "Comma separated languages to purge, e.g. 'en,es,ja'. Blank/omitted = all languages.",
  )
  .option('--surrogate-key <key>', 'Purge a single explicit surrogate key. e.g. api-search:en')
  .option('--hard', 'Evict immediately instead of the default soft purge')
  .option('--everything', 'Hard purge the ENTIRE cache: every key. Ignores --languages/--hard.')
  .parse(process.argv)

type Options = {
  waitForBuild?: boolean
  languages?: string
  surrogateKey?: string
  hard?: boolean
  everything?: boolean
}

await main(program.opts<Options>())

async function main(options: Options) {
  if (!FASTLY_TOKEN) {
    throw new Error('FASTLY_TOKEN not detected; refusing to purge')
  }
  if (!FASTLY_SERVICE_ID) {
    throw new Error('FASTLY_SERVICE_ID not detected; refusing to purge')
  }

  if (options.waitForBuild) {
    await waitForBuild()
  }

  if (options.everything) {
    // NOTE: Fastly's purge_all is always a HARD purge. The `fastly-soft-purge`
    // header has no effect here, so every object is evicted immediately and
    // origin sees a traffic spike while the cache refills. It clears every
    // surrogate key: content, no-language, manual-purge assets, search, and so
    // on. A targeted surrogate-key purge cannot reach those, so only reach for
    // this when a targeted purge will not do.
    // https://www.fastly.com/documentation/reference/api/purging/
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

// Poll production until it serves the build commit. A single /_build match only
// proves one Moda instance has the new build; others may still be mid-rollout,
// and a soft purge could then revalidate against a lagging instance and re-cache
// old content for a full TTL. So require several consecutive matches first.
async function waitForBuild() {
  const needs = execFileSync('git', ['rev-parse', 'HEAD']).toString().trim()
  const startTime = Date.now()
  let consecutive = 0

  while (consecutive < BUILD_WAIT_REQUIRED_MATCHES) {
    if (Date.now() - startTime > BUILD_WAIT_TIMEOUT) {
      throw new Error(
        `Production did not reach ${BUILD_WAIT_REQUIRED_MATCHES} consecutive build matches within ${BUILD_WAIT_TIMEOUT / 1000} seconds`,
      )
    }

    let current = ''
    try {
      const response = await fetchWithRetry(
        'https://docs.github.com/_build',
        {},
        { retries: 5, timeout: 30_000, throwHttpErrors: false },
      )
      if (response.ok) {
        current = (await response.text()).trim()
      }
    } catch {
      // Treat a fetch failure like a non-match: reset and keep polling.
      current = ''
    }

    if (current && current === needs) {
      consecutive += 1
      console.log(
        `Production matches the build commit (${consecutive}/${BUILD_WAIT_REQUIRED_MATCHES})`,
      )
    } else {
      if (consecutive > 0) {
        console.log('Production stopped matching the build commit; resetting consecutive count')
      } else {
        console.log('Production is not up to date with the build commit')
      }
      consecutive = 0
    }

    if (consecutive < BUILD_WAIT_REQUIRED_MATCHES) {
      await sleep(BUILD_WAIT_INTERVAL)
    }
  }
  console.log(
    `Production is up to date with the build commit.`,
    `${BUILD_WAIT_REQUIRED_MATCHES} consecutive matches.`,
  )
}

function languageSurrogateKeys(languagesInput?: string): string[] {
  // Put `en` first because contributors write mostly in English and are most
  // likely waiting to see their landed changes appear in production. Build a
  // new array rather than sorting `languageKeys` in place, which is shared
  // state.
  const trimmed = languagesInput?.trim()
  const languages = trimmed
    ? languagesFromString(trimmed)
    : ['en', ...languageKeys.filter((lang) => lang !== 'en')]

  // The leading no-language key, an empty `makeLanguageSurrogateKey()`, covers
  // things like `/api/webhooks` which aren't language specific.
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

/**
 * Double-purge a set of surrogate keys. Per-deploy / manual purges pass
 * `no-language` plus each `language:<code>` key; the search reindex passes a
 * single `api-search:<lang>` key.
 *
 * Each key is purged twice because of Fastly shielding: the first purge clears
 * the edge nodes, the second clears the origin shield. Two delays shape the run.
 * DELAY_BETWEEN_KEYS spaces out each key's first purge to avoid a stampeding
 * herd on the backend. DELAY_BEFORE_SECOND_PURGE waits long enough for the now-
 * stale content to be re-fetched and re-shielded before the second purge clears
 * it. Fastly suggests ~2s between surrogate-key purges, but that's been too short
 * in practice, so we use a larger margin. See the "Race conditions" section of
 * https://www.fastly.com/documentation/guides/concepts/cache/purging#race-conditions
 * Its 30s figure is for purge-all, which we don't use.
 *
 * To avoid serializing the run, we schedule every purge against one wall-clock
 * timeline up front instead of blocking on each second purge. Because the second-
 * purge delay is a multiple of the between-keys delay, a key's second purge
 * shares a slot with a later key's first purge:
 *
 *    t=0   no-language (1st)
 *    t=10  en          (1st)
 *    t=20  es          (1st) + no-language (2nd)
 *    t=30  ja          (1st) + en          (2nd)
 *    t=40  pt          (1st) + es          (2nd)
 *    ...
 *
 * A single-key purge is the degenerate case: first at t=0, second at t=20s.
 */
async function purgeKeys(surrogateKeys: string[], soft: boolean) {
  // One wall-clock start time so the cadence doesn't drift with per-purge network
  // latency and each second purge aligns with a later first purge, as above.
  const startTime = Date.now()
  const purges: Promise<PurgeOutcome>[] = []

  // Each call resolves to an outcome and never rejects: the try/catch keeps a
  // failed purge from becoming an unhandled rejection while later scheduled
  // purges are still pending. Failures are surfaced after all purges settle.
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

// Low-level Fastly purge. `endpoint` is appended to the service path, e.g.
// `purge/<key>` or `purge_all`. Returns the response; on a non-2xx throws with
// the body best-effort, since Fastly puts permission/feature details there.
//
// Soft purge marks the object stale and serves stale-while-revalidate; hard
// purge evicts it outright. Soft can fail to clear content whose origin returns
// `304 Not Modified` on revalidation, since a 304 just extends the stale object,
// so use hard then. `purge_all` ignores the soft header and is always hard.
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
