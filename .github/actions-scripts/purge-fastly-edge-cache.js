#!/usr/bin/env node

import purgeEdgeCache from '../../script/deployment/purge-edge-cache.js'

try {
  await purgeEdgeCache()
} catch (error) {
  console.error(`Failed to purge the edge cache: ${error.message}`)
  console.error(error)
  throw error
}
