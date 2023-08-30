#!/usr/bin/env node
import { SURROGATE_ENUMS } from '../../middleware/set-fastly-surrogate-key.js'
import purgeEdgeCache from '../../script/deployment/purge-edge-cache.js'

// This will purge every response that *contains*
// `process.env.FASTLY_SURROGATE_KEY || SURROGATE_ENUMS.DEFAULT`.
// We normally send Surrogate-Key values like:
//
//    every-deployment language:en
//    every-deployment language:fr
//    every-deployment language:ja
// or
//    every-deployment no-language
//
// But if you send a purge request for just:
//
//    every-deployment
//
// It will cover all surrogate keys that contain that.
// So this the nuclear option for all keys with this prefix.
await purgeEdgeCache(process.env.FASTLY_SURROGATE_KEY || SURROGATE_ENUMS.DEFAULT)
