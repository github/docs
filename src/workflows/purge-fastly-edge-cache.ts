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
await purgeEdgeCache(process.env.FASTLY_SURROGATE_KEY)
