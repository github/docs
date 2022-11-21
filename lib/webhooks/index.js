import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import walk from 'walk-sync'
import { set } from 'lodash-es'

import { allVersions } from '../all-versions.js'
import { readCompressedJsonFileFallback } from '../read-json-file.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const staticDir = path.join(__dirname, 'static')
const schemasPath = path.join(__dirname, 'static/decorated')

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
    const filename = `${openApiVersion}.json`

    // The `readCompressedJsonFileFallback()` function
    // will check for both a .br and .json extension.
    webhooksCache.set(
      openApiVersion,
      readCompressedJsonFileFallback(path.join(schemasPath, filename))
    )
  }

  return webhooksCache.get(openApiVersion)
}

function getOpenApiVersion(version) {
  if (!(version in allVersions)) {
    throw new Error(`Unrecognized version '${version}'. Not found in ${Object.keys(allVersions)}`)
  }
  return allVersions[version].openApiVersionName
}

// TODO: docs-eng#1937: delete this function
export default function getWebhookPayloads() {
  // Compile contents of individual .payload.json files into a single
  // object, with versions as top-level keys.
  const payloads = {}

  // array of versions based on subdirectory names: lib/webhooks/static/<version>
  const versions = fs.readdirSync(staticDir)

  versions.forEach((version) => {
    const payloadsPerVersion = {}
    const versionSubdir = path.join(staticDir, version)

    walk(versionSubdir, { includeBasePath: true }).forEach((payloadFile) => {
      // payload file: /path/to/check_run.completed.payload.json
      // payload path: check_run.completed
      let payloadPath = path.basename(payloadFile).replace('.payload.json', '')
      if (!payloadPath.includes('.') && payloadsPerVersion[payloadPath]) {
        // append the key `default` to the payload path to
        // prevent overwriting existing object
        payloadPath = `${payloadPath}.default`
      }
      set(
        payloadsPerVersion,
        payloadPath,
        formatAsJsonCodeBlock(JSON.parse(fs.readFileSync(payloadFile)))
      )
    })

    payloads[version] = payloadsPerVersion
  })

  return payloads
}

// TODO: docs-eng#1937: delete this function
function formatAsJsonCodeBlock(payloadObj) {
  // Note the use of `data-highlight="json"`. This is important because
  // done like this, it tells the rehype processor to NOT bother syntax
  // highlight the code snippets on the server. And instead on the client,
  // it uses `document.querySelectorAll('[data-highlight]')` to
  // A) wake up the client-side highlight.js and, B) know what the language
  // should be.
  return (
    '<div class="height-constrained-code-block" data-highlight="json">\n\n```\n' +
    JSON.stringify(payloadObj, null, 2) +
    '\n```\n\n</div>'
  )
}
