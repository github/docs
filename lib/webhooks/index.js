import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import walk from 'walk-sync'
import { set } from 'lodash-es'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const staticDir = path.join(__dirname, 'static')

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
