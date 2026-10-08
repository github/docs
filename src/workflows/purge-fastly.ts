import { program } from 'commander'

import { fetchWithRetry } from '@/frame/lib/fetch-utils'
import { languageKeys } from '@/languages/lib/languages-server'
import { makeLanguageSurrogateKey } from '@/frame/middleware/set-fastly-surrogate-key'
import { purgeSurrogateKeys } from '@/workflows/purge-fastly-changed-content'

// Purge hard by default, because a soft purge keeps serving the old copy during refetch.

const { FASTLY_TOKEN, FASTLY_SERVICE_ID } = process.env

// Fastly suggests two purge_all calls about 30 seconds apart,
// so the second clears edge copies refilled from a not-yet-purged shield.
// https://www.fastly.com/documentation/guides/full-site-delivery/purging/purging-all-content/#dealing-with-race-conditions
const DELAY_BEFORE_SECOND_PURGE_ALL = 30 * 1000

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms))

program
  .description(
    'Purges Fastly on demand. Hard purge by default; can soft purge specific ' +
      'languages, or hard purge the entire cache.',
  )
  .option(
    '--languages <languages>',
    "Comma separated languages to purge, e.g. 'en,es,ja'. Blank/omitted = all languages.",
  )
  .option('--surrogate-key <key>', 'Purge a single explicit surrogate key. e.g. api-search:en')
  .option('--soft', 'Mark stale instead of the default hard purge, which evicts immediately')
  .option('--everything', 'Hard purge the ENTIRE cache: every key. Ignores --languages/--soft.')
  .parse(process.argv)

type Options = {
  languages?: string
  surrogateKey?: string
  soft?: boolean
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
    // Run the second call even if the first fails, because Fastly may have applied the first.
    const errors: unknown[] = []
    for (let pass = 1; pass <= 2; pass++) {
      if (pass > 1) {
        console.log(`Waiting ${DELAY_BEFORE_SECOND_PURGE_ALL}ms before the second purge_all...`)
        await sleep(DELAY_BEFORE_SECOND_PURGE_ALL)
      }
      try {
        console.log(`Hard-purging the entire cache, pass ${pass}/2...`)
        const result = await purgeAll()
        console.log(`Fastly purge_all pass ${pass}/2 result:`, result.status)
      } catch (error) {
        console.error(error)
        errors.push(error)
      }
    }
    if (errors.length) {
      throw new Error(`${errors.length} of 2 purge_all call(s) failed`)
    }
    return
  }

  const surrogateKeys = options.surrogateKey
    ? [options.surrogateKey]
    : languageSurrogateKeys(options.languages)
  await purgeSurrogateKeys(surrogateKeys, FASTLY_TOKEN, FASTLY_SERVICE_ID, {
    soft: Boolean(options.soft),
  })
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

// purge_all ignores the soft-purge header, so this always hard-purges.
// Errors include the response body, because Fastly puts permission and feature details there.
async function purgeAll() {
  const headers: Record<string, string> = {
    'fastly-key': FASTLY_TOKEN as string,
    accept: 'application/json',
    'Content-Type': 'application/json',
  }

  const url = `https://api.fastly.com/service/${encodeURIComponent(FASTLY_SERVICE_ID as string)}/purge_all`
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
