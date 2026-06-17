import purgeEdgeCache from './purge-edge-cache'

// This will purge every response that *contains*
// `process.env.FASTLY_SURROGATE_KEY`.
// We send Surrogate-Key values like:
//
//    language:en
//    language:fr
//    language:ja
// or
//    no-language
//
// `purgeEdgeCache` throws if no key is set, so a `FASTLY_SURROGATE_KEY` must be
// provided. This is the manual/targeted purge entry point; routine per-deploy
// purging is handled by `purge-fastly-edge-cache-per-language.ts`.
//
// Because we use Fastly shielding, a single surrogate-key purge can lose a race
// with the shield re-fetching stale content, so we purge twice: the first purge
// clears the edge nodes and the second clears the origin shield. Fastly
// recommends ~2s between surrogate-key purges. See
// https://developer.fastly.com/learning/concepts/purging/#shielding
const DELAY_BETWEEN_PURGES = 2 * 1000
const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms))

const surrogateKey = process.env.FASTLY_SURROGATE_KEY
await purgeEdgeCache(surrogateKey)
await sleep(DELAY_BETWEEN_PURGES)
await purgeEdgeCache(surrogateKey)
