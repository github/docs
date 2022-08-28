import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import walk from 'walk-sync'
import { set } from 'lodash-es'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const staticDir = path.join(__dirname, 'static')

// compile contents of individual .payload.json files into a single object, with versions as top-level keys
const payloads = {}

// array of versions based on subdirectory names: lib/webhooks/static/<version>
const versions = fs.readdirSync(staticDir)

versions.forEach((version) => {
  const payloadsPerVersion = {}
  const versionSubdir = path.join(staticDir, version)

  walk(versionSubdir, { includeBasePath: true }).forEach((payloadFile) => {
    // payload file: /path/to/check_run.completed.payload.json
    // payload path: check_run.completed
    const payloadPath = path.basename(payloadFile).replace('.payload.json', '')
    set(
      payloadsPerVersion,
      payloadPath,
      formatAsJsonCodeBlock(JSON.parse(fs.readFileSync(payloadFile)))
    )
  })

  payloads[version] = payloadsPerVersion
})

function formatAsJsonCodeBlock(payloadObj) {
  return (
    '<div class="height-constrained-code-block">\n\n```json\n' +
    JSON.stringify(payloadObj, null, 2) +
    '\n```\n\n</div>'
  )
}

export default payloads
