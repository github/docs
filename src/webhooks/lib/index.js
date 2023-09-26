import path from 'path'

import { getOpenApiVersion } from '#src/versions/lib/all-versions.js'
import { readCompressedJsonFileFallback } from '../../../lib/read-json-file.js'

export const WEBHOOK_DATA_DIR = 'src/webhooks/data'
export const WEBHOOK_SCHEMA_FILENAME = 'schema.json'

// cache for webhook data per version
const webhooksCache = new Map()
// cache for webhook data for when you first visit the webhooks page where we
// show all webhooks for the current version but only 1 action type per webhook
// and also no nested parameters
const initialWebhooksCache = new Map()

// return the webhoook data as described for `initialWebhooksCache` for the given
// version
export async function getInitialPageWebhooks(version) {
  if (initialWebhooksCache.has(version)) {
    return initialWebhooksCache.get(version)
  }
  const allWebhooks = await getWebhooks(version)
  const initialWebhooks = []

  // The webhooks page shows all webhooks but for each webhook only a single
  // webhook action type at a time.  We pick the first webhook type from each
  // webhook's set of action types to show.
  for (const [key, webhook] of Object.entries(allWebhooks)) {
    const actionTypes = Object.keys(webhook)
    const defaultAction = actionTypes ? actionTypes[0] : null

    const initialWebhook = {
      name: key,
      actionTypes,
      data: webhook[defaultAction],
    }

    // remove all nested params for the initial webhooks page, we'll load
    // them by request
    if (initialWebhook.data.bodyParameters) {
      initialWebhook.data.bodyParameters.forEach((bodyParam) => {
        if (bodyParam.childParamsGroups) {
          bodyParam.childParamsGroups = []
        }
      })
    }

    initialWebhooks.push({ ...initialWebhook })
  }
  initialWebhooksCache.set(version, initialWebhooks)
  return initialWebhooks
}

// returns the webhook data for the given version and webhook category (e.g.
// `check_run`) -- this includes all the data per webhook action type and all
// nested parameters
export async function getWebhook(version, webhookCategory) {
  const webhooks = await getWebhooks(version)
  return webhooks[webhookCategory]
}

// returns all the webhook data for the given version
export async function getWebhooks(version) {
  const openApiVersion = getOpenApiVersion(version)
  if (!webhooksCache.has(openApiVersion)) {
    // The `readCompressedJsonFileFallback()` function
    // will check for both a .br and .json extension.
    webhooksCache.set(
      openApiVersion,
      readCompressedJsonFileFallback(
        path.join(WEBHOOK_DATA_DIR, openApiVersion, WEBHOOK_SCHEMA_FILENAME),
      ),
    )
  }

  return webhooksCache.get(openApiVersion)
}
