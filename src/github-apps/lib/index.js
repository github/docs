import path from 'path'

import { readCompressedJsonFileFallback } from '../../../lib/read-json-file.js'
import { getOpenApiVersion } from '../../../lib/all-versions.js'

export const ENABLED_APPS_DIR = 'src/github-apps/data'
export const ENABLED_APPS_FILENAME = 'server-to-server-rest.json'

const enabledForApps = new Map()

export async function getEnabledForApps(docsVersion, apiVersion) {
  const openApiVersion = getOpenApiVersion(docsVersion) + (apiVersion ? `-${apiVersion}` : '')
  if (!enabledForApps.has(openApiVersion)) {
    // The `readCompressedJsonFileFallback()` function
    // will check for both a .br and .json extension.
    const appDataPath = path.join(ENABLED_APPS_DIR, openApiVersion, ENABLED_APPS_FILENAME)
    const data = readCompressedJsonFileFallback(appDataPath)
    enabledForApps.set(openApiVersion, data)
  }

  return enabledForApps.get(openApiVersion)
}
